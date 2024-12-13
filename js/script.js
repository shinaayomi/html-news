window.onload = function () {
  const path = window.location.pathname.split("/");
  switch (path[1]) {
    case "home": {
      loadPage("home");
      break;
    }
    case "news": {
      loadPage("news");
      break;
    }
    default: {
      loadPage("404");
      break;
    }
  }

  document.querySelectorAll(".menu_item").forEach((item) => {
    item.addEventListener("click", function () {
      const path = item.getAttribute("value");
      loadPage(path);
      if (path == "home") {
        window.history.pushState("", "", "/");
        return;
      }
      window.history.pushState("", "", path);
    });
  });

  function loadPage($path) {
    const main = document.querySelector(".main");

    const request = new XMLHttpRequest();
    request.open("GET", "pages" + $path + ".html");
    request.send();
    request.onload = function () {
      if (request.status === 200) {
        main.innerHTML = request.responseText;
      }
    };
  }
};
