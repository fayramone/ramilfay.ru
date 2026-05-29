// no frameworks && no dependencies
(function () {
  var btn = document.getElementById("themeToggle");
  var html = document.documentElement;

  var stored = localStorage.getItem("theme") || "auto";
  html.setAttribute("data-theme", stored);
  updateIcon(stored);

  btn.addEventListener("click", function () {
    var current = html.getAttribute("data-theme");
    var next = current === "auto" ? "auto" : current === "dark" ? "dark" : "light";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateIcon(next);
  });

  function updateIcon(theme) {
    btn.textContent = theme === "dark" ? "dark" : theme === "light" ? "light" : "auto";
  }
})();

(function () {
  var btn = document.getElementById("themeToggle");
  var html = document.documentElement;

  var stored = localStorage.getItem("theme") || "auto";
  html.setAttribute("data-theme", stored);
  updateIcon(stored);
  updateSyntax(stored);

  btn.addEventListener("click", function () {
    var current = html.getAttribute("data-theme");
    var next = current === "auto" ? "dark" : current === "dark" ? "light" : "auto";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateIcon(next);
    updateSyntax(next);
  });

  function updateIcon(theme) {
    btn.textContent = theme;
  }

  function updateSyntax(theme) {
    var dark  = document.getElementById("syntax-dark");
    var light = document.getElementById("syntax-light");
    if (!dark || !light) return;

    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var isDark = theme === "dark" || (theme === "auto" && prefersDark);

    dark.media  = isDark ? "all" : "not all";
    light.media = isDark ? "not all" : "all";
  }
})();