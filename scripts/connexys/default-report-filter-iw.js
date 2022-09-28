import(chrome.runtime.getURL("/lib/monkey-script.js")).then(async (Monkey) => {
  console.log(1);
  Monkey.waitForSelector(".report-type-picker li:nth-of-type(2) a").then(
    (a) => {
      console.log(2, a);
      a.innerHTML =
        'Alle&nbsp;<span style="color: #9bcb41;font-weight: bold;">InWork</span>&nbsp;rapporten';
      a.addEventListener(
        "click",
        () =>
          setTimeout(() => {
            const input = document.querySelector("#modal-search-input");
            input.focus();
            input.value = "[iw]";
            Monkey.type(" ");
          }),
        123
      );
    }
  );
});
