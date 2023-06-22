import(chrome.runtime.getURL("/lib/monkey-script.js")).then((Monkey) => {
  /** Monkey.set / get key */
  const KEY = "MembahFields";
  /** Maximum number of entries that will be membah'd */
  const MAX_SIZE = 100;
  /** Time until another entry is made for certain element to prevent data loss by deleting textarea content */
  const FORGET_FIELD_AFTER = 5 * 60 * 1000;
  /** Selector to search for things that may be labelicious */
  const LABEL_SELECTOR = 'label,.label,[class*="label"],[id*="label"]';

  /**
   * @param {HTMLElement} node
   * @returns string
   */
  const getLabel = (node) => {
    // TODO memoize
    const getTextFromLabels = (labels) => {
      for (const label of labels) {
        const text = label.textContent.trim(); // TODO ignore aria-hidden elements like * and (?)
        if (text) return text;
      }
    };

    // Check if the website was made with accessibility in mind and supplies a related label
    if (node.labels && node.labels.length) {
      let labelText = getTextFromLabels(node.labels);
      if (node.textContent)
        labelText = labelText.replaceAll(node.textContent, ""); // TODO or just take the first non-empty textNode or something, which may fix * and (?) as well
      if (labelText) return labelText.trim();
    }

    // Find something that looks like a label in an ancestor element
    const ignoredLabels = [...node.querySelectorAll(LABEL_SELECTOR)];
    let parent = node.parentElement;
    while (parent && !(parent instanceof HTMLBodyElement)) {
      let labelChildren = parent.querySelectorAll(LABEL_SELECTOR);
      if (labelChildren.length > ignoredLabels.length) {
        labelChildren = [...labelChildren].filter(
          (label) =>
            !ignoredLabels.includes(label) &&
            (!label.htmlFor || document.getElementById(label.htmlFor) === null) // TODO or htmlFor is for me-ish
        );
        const text = getTextFromLabels(labelChildren);
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
    if (node.value) return node.value;
    // TODO multiselect element, radio, checkbox
    if (node.isContentEditable) {
      return node.innerText;
    }
  };

  const getInputElement = (node) => {
    if (
      !node.value &&
      node.isContentEditable &&
      !node.hasAttribute("contenteditable")
    ) {
      return node.closest("[contenteditable]");
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

  const getData = async () => await Monkey.get(KEY, {});

  const deleteTs = async (ts) => {
    const all = await Monkey.get(KEY, {});
    delete all[ts];
    await Monkey.set(KEY, all);
  };

  const onInput = debounceTarget((ev) => {
    const element = getInputElement(ev.target);
    if (element.type === "password") return;
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
      label: getLabel(element),
      value: getValue(element),
    };
    if (element.isContentEditable) data.html = element.innerHTML;
    if (data.value) storeData(data);
  }, 500);

  document.addEventListener("input", onInput, { capture: true, passive: true });

  const showMembahFields = async () => {
    const dialog = Object.assign(document.createElement("dialog"), {
      style: `
      border-width: 2px;
      border-radius: 10px;
      width: 60%;
      height: 60%;
      overflow-y: scroll;
      font-size: 12pt;
      background: #eee;
    `,
    });

    dialog.addEventListener("click", (ev) => {
      if (ev.target === dialog) dialog.close();
    });

    const defaultFormatter = new Intl.DateTimeFormat();
    const formatter = new Intl.DateTimeFormat(
      "nl" || defaultFormatter.resolvedOptions().locale,
      { dateStyle: "medium", timeStyle: "medium" }
    );
    const data = await getData();
    Object.values(data).forEach(({ url, ts, label, value, html }) => {
      const div = Object.assign(document.createElement("div"), {
        style:
          "clear: both; background: #fff; padding: 8px 0; border-top: 1px solid #000",
      });

      const a = Object.assign(document.createElement("a"), {
        href: url,
        textContent: url,
        target: "_blank",
        style:
          "display:block; width: 100%; white-space: nowrap; overflow: hidden; font-size: 0.8em",
      });
      const spanLabel = Object.assign(document.createElement("span"), {
        textContent: label,
        style:
          "float: left; width: 50%; white-space: nowrap; overflow: hidden; font-size: 0.8em;",
      });
      const time = Object.assign(document.createElement("span"), {
        textContent: formatter.format(ts),
        style:
          "float: right; text-align: right; width: 50%; overflow: hidden; font-size: 0.8em;",
      });
      const textarea = Object.assign(document.createElement("textarea"), {
        value: value,
        readOnly: true,
        style: "clear: both; width: 100%;",
      });
      const fillButton = Object.assign(document.createElement("button"), {
        textContent: "✍️ Fill",
      });
      fillButton.addEventListener("click", () => {
        alert("TODO"); // TODO
      });
      const copyButton = Object.assign(document.createElement("button"), {
        textContent: "📋 Copy",
      });
      copyButton.addEventListener("click", () => {
        textarea.select();
        const blobs = {
          "text/plain": new Blob([value], { type: "text/plain" }),
        };
        if (html)
          blobs["text/html"] = new Blob([html], {
            type: "text/html",
          });
        navigator.clipboard.write([new ClipboardItem(blobs)]);
      });
      const deleteButton = Object.assign(document.createElement("button"), {
        textContent: "🗑️ Delete",
        style: "float:right",
      });
      deleteButton.addEventListener("click", () => {
        deleteTs(ts);
        div.style.transition = "opacity 0.4s";
        div.style.opacity = 0;
        div.addEventListener("transitionend", () => {
          div.parentElement.removeChild(div);
        });
      });

      div.appendChild(a);
      div.appendChild(spanLabel);
      div.appendChild(time);
      div.appendChild(textarea);
      // div.appendChild(fillButton);
      div.appendChild(copyButton);
      div.appendChild(deleteButton);

      dialog.appendChild(div);
    });

    document.body.appendChild(dialog);
    dialog.addEventListener("close", () =>
      dialog.parentElement.removeChild(dialog)
    );
    dialog.showModal();
    dialog.scrollTo(0, dialog.scrollHeight);
  };
  // showMembahFields();
  Monkey.menu("Membah Fields", showMembahFields); // TODO: Combine with berry
});
