import(chrome.runtime.getURL("/lib/monkey-script.js")).then((Monkey) => {
  const LIMIT = 3;
  const load = async (url, formId) => {
    const map = await Monkey.get(`membah-${url}`, {});
    return map[formId] ?? [];
  };
  const save = async (url, formId, ts, data) => {
    const map = await Monkey.get(`membah-${url}`, {});
    map[formId] = (map[formId] ?? []).filter((entry) => entry.ts !== ts);
    map[formId].push({
      ts,
      data,
    });
    map[formId] = map[formId].slice(-LIMIT);
    await Monkey.set(`membah-${url}`, map);
  };

  let lastTs = 0;
  const timestamps = {};
  const logForm = (ev) => {
    const now = Date.now();
    if (ev.type === "input" && now - lastTs < 2500) return;
    lastTs = now;
    const target = ev.target;
    const form = target.closest("form,.slds-form");
    console.log(form);
    if (!form) return;
    const formId = [...document.querySelectorAll("form,.slds-form")].indexOf(
      form
    );
    const url = window.location.href.split(/[?#]/)[0];

    const key = `${formId};${url}`;
    if (!timestamps.hasOwnProperty(key)) {
      timestamps[key] = now;
    }
    const ts = timestamps[key];

    const formEntries =
      form instanceof HTMLFormElement
        ? [...new FormData(form).entries()]
        : [...form.querySelectorAll("input,textarea,select")]
            .filter(
              (input) =>
                !["checkbox", "radio"].includes(input.type) || input.checked
            )
            .map((input) => [
              input.id,
              input.contentEditable ? input.innerHTML : input.value,
            ]);
    console.log(url, formId, ts, formEntries);
    save(url, formId, ts, formEntries);
  };
  document.addEventListener("input", logForm);
  document.addEventListener("change", logForm);
  document.addEventListener("submit", logForm);
});
