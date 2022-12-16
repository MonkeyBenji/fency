console.log(1);
console.log(2);
console.log(3);
console.log(4);
import(chrome.runtime.getURL("/lib/monkey-script.js")).then(async (Monkey) => {
  Monkey.js(() => {
    !(function (open) {
      XMLHttpRequest.prototype.open = function (
        method,
        url,
        async,
        user,
        password
      ) {
        if (url.includes("/events/")) {
          this.addEventListener("load", () => {
            try {
              const data = JSON.parse(this.response);
              if (data?.items?.length) {
                data.items.forEach((item) => {
                  const headers = item.content.message.headers;
                  const messageId = headers["message-id"];
                  const subject = headers.subject;
                  console.log(messageId, subject, headers);
                });
              }
              console.log("data2", data);
            } catch (e) {}
          });
        }
        open.call(this, method, url, async, user, password);
      };
    })(XMLHttpRequest.prototype.open);
  });
});
