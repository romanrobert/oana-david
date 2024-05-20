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

const openNavigation = function () {
  navButtonImage.src = "./assets/close.svg";
  nav.style.transform = "translate(0%)";
};

const closeNavigation = function () {
  navButtonImage.src = "./assets/menu.svg";
  nav.style.transform = "translate(100%)";
};

const resetNavStyles = function (arr) {
  arr.forEach((item) => {
    item.style.transform = "";
    item.style.opacity = "";
  });
};

window.addEventListener("resize", () => {
  let windowWidth = window.innerWidth;

  if (windowWidth > 900) {
    resetNavStyles(navItems);
    nav.style.transform = "";
    navButtonImage.src = "./assets/menu.svg";
  }
});

const handleNavigationMenu = function () {
  navButton.addEventListener("click", () => {
    if (nav.style.transform != "translate(0%)") {
      openNavigation();
      setTimeout(() => {
        staggerItemsIn(navItems);
      }, 300);
    } else {
      staggerItemsOut(navItems);
      setTimeout(() => {
        closeNavigation();
      }, 175 * navItems.length);
    }
  });
};

handleNavigationMenu();
