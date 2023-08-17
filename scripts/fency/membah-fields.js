import(chrome.runtime.getURL("/lib/monkey-script.js")).then((Monkey) => {
  const MODAL_ID = "fency-modal-membah-fields";
  /** Monkey.set / get key */
  const KEY = "MembahFields";
  /** Maximum number of entries that will be membah'd */
  const MAX_SIZE = 100;
  /** Time until another entry is made for certain element to prevent data loss by deleting textarea content */
  const FORGET_FIELD_AFTER = 5 * 60 * 1000;
  /** Selector to search for things that may be labelicious */
  const LABEL_SELECTOR = 'label,.label,[class*="label"],[id*="label"]';

  const formTs = Date.now();

  const getElementsWithMyName = (node) => {
    if (!node.name) return [node];
    const form = node.closest("form");
    if (!form) return [node];
    const elements = form.elements[node.name];
    if (elements instanceof NodeList) return elements;
    return [node];
  };

  /**
   * @param {HTMLElement} node
   * @returns string
   */
  const getLabel = (node) => {
    const getTextNodesIn = (node) => {
      let textNodes = [];
      for (const child of node.childNodes) {
        if (child instanceof Text) textNodes.push(child);
        else textNodes = textNodes.concat(getTextNodesIn(child));
      }
      return textNodes;
    };
    const getTextFromLabels = (node, labels) => {
      for (const label of labels) {
        for (const textNode of getTextNodesIn(label)) {
          const text = textNode.textContent.trim();
          if (text) return text;
        }
      }
    };

    // Check if the website was made with accessibility in mind and supplies a related label
    if (node.labels && node.labels.length) {
      let labelText = getTextFromLabels(node, node.labels);
      if (node.textContent) labelText = labelText.replaceAll(node.textContent, ""); // TODO or just take the first non-empty textNode or something, which may fix * and (?) as well
      if (labelText) return labelText.trim();
    }

    // Find something that looks like a label in an ancestor element
    const ignoredLabels = [...node.querySelectorAll(LABEL_SELECTOR)];
    let parent = node.parentElement;
    while (parent && !(parent instanceof HTMLBodyElement)) {
      let labelChildren = parent.querySelectorAll(LABEL_SELECTOR);
      if (labelChildren.length > ignoredLabels.length) {
        labelChildren = [...labelChildren].filter(
          (label) => !ignoredLabels.includes(label) && (!label.htmlFor || document.getElementById(label.htmlFor) === null) // TODO or htmlFor is for me-ish
        );
        const text = getTextFromLabels(node, labelChildren);
        if (text) return text;
      }
      parent = parent.parentElement;
    }
  };

  /**
   * @param {HTMLElement} node
   * @returns string
   */
  const getValue = (node) => {
    node = getInputElement(node);
    if (node?.type === "checkbox" || node?.type === "radio") {
      return [...getElementsWithMyName(node)].filter(({ checked }) => checked).map(({ value }) => value);
    } else if (node?.type === "select-multiple") {
      return [...node.querySelectorAll("option:checked")].map(({ value }) => value);
    }
    if (node.value) return node.value;
    if (node.isContentEditable) {
      return node.innerText;
    }
  };

  const getInputElement = (node) => {
    if (!node.value && node.isContentEditable && !node.hasAttribute("contenteditable")) {
      return node.closest("[contenteditable]");
    }
    if (node?.type === "checkbox" || node?.type === "radio") {
      return getElementsWithMyName(node)[0];
    }
    return node;
  };

  const debounceTarget = (func, timeout = 300) => {
    let timer;
    let prevElement = null;
    return (...args) => {
      if (args[0].target === prevElement) clearTimeout(timer);
      prevElement = args[0].target;
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  // Store timestamp element was first logged this session as key for the stored array
  const elementsToTimestamp = new Map();

  const storeData = async (obj) => {
    const all = await Monkey.get(KEY, {});
    all[obj.ts] = obj;
    const keys = Object.keys(all);
    if (keys.length > MAX_SIZE) {
      delete all[keys.sort()[0]];
    }
    await Monkey.set(KEY, all);
  };

  const onInput = debounceTarget((ev) => {
    const element = getInputElement(ev.target);
    if (element.type === "password") return;
    if (element.closest(`#${MODAL_ID}`)) return;
    let ts = elementsToTimestamp.get(element);
    if (!ts) {
      ts = Date.now();
    }
    // If more than 5 minutes elapsed, create new entry, so history of big text elements is kept
    if (Date.now() - ts > FORGET_FIELD_AFTER) {
      ts = Date.now();
    }
    elementsToTimestamp.set(element, ts);

    const data = {
      url: window.location.href,
      ts,
      name: element.name,
      label: getLabel(element),
      value: getValue(element),
      formTs,
      formId: [...document.querySelectorAll("form")].indexOf(element.closest("form")),
    };
    if (element.isContentEditable) data.html = element.innerHTML;
    if (data.value) storeData(data);
  }, 500);

  document.addEventListener("input", onInput, { capture: true, passive: true });
});
