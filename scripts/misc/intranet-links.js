import(chrome.runtime.getURL("/lib/monkey-script.js")).then((Monkey) => {
  Monkey.css(`
.menu-applications li {
  opacity: 0.6;
  transition: opacity 0.5s ease-out;
}
.menu-applications li:hover {
  opacity: 1;
}
.menu-applications img {
  margin-top: -6px;
}
.menu-applications li a {
  color: #fff !important;
  text-decoration: none !important;
  line-height: 18px;
  font-weight: normal;
  font-size: 14px;
}
`);

  document.querySelectorAll(".menu-applications li").forEach((li) => {
    const img = li.querySelector("img");
    const title = img.title;
    li.querySelector("a").insertAdjacentHTML(
      "beforeend",
      `<br><span>${title}</span>`
    );
  });

  Monkey.waitForSelector("p.post-meta").then(() => {
    document.querySelectorAll("p.post-meta").forEach((p) => {
      const url = p.parentElement.querySelector("a").href;
      const reactionsText = p.lastChild.textContent.split("| ")[1];
      p.lastChild.textContent = "";
      p.innerHTML += ` | <a href="${url}#comments">${reactionsText}</a>`;
    });
  });
});
