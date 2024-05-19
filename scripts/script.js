// Nav

const navButton = document.querySelector(".nav-button");
const nav = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-item");
const navButtonImage = navButton.querySelector("img");

const staggerItemsIn = function (arr) {
  arr.forEach((item, index) => {
    setTimeout(() => {
      item.style.transform = "translateX(0rem)";
      item.style.opacity = "1";
    }, index * 100);
  });
};

const staggerItemsOut = function (arr) {
  arr.forEach((item, index) => {
    setTimeout(() => {
      item.style.transform = "translateX(2rem)";
      item.style.opacity = "0";
    }, index * 100);
  });
};

const handleNavigationMenu = function () {
  navButton.addEventListener("click", () => {
    if (nav.style.transform != "translate(0%)") {
      navButtonImage.src = "./assets/close.svg";
      nav.style.transform = "translate(0%)";

      setTimeout(() => {
        staggerItemsIn(navItems);
      }, 300);
    } else {
      staggerItemsOut(navItems);
      navButtonImage.src = "./assets/menu.svg";
      setTimeout(() => {
        nav.style.transform = "translate(100%)";
      }, 175 * navItems.length);
    }
  });
};

handleNavigationMenu();
