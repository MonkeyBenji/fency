if (
  [5400, 9000].includes(parseInt(url.port)) ||
  window.location.host === "walhalla.inwork.nl"
) {
  import(chrome.runtime.getURL("/lib/monkey-script.js")).then(
    async (Monkey) => {
      Monkey.js(() => {
        setInterval = () => {};
      });
    }
  );
}
