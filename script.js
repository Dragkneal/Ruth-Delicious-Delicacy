const openNavMenu = document.querySelector("#openNavMenu");
const closeNavMenu = document.querySelector("#closeNavMenu");
const navList = document.querySelector(".navList");

openNavMenu.addEventListener("click", function () {
  if (navList.style.left != "0px") {
    navList.style.left = "0px";
  } else {
    navList.style.left = "-9999px";
  }
});

closeNavMenu.addEventListener("click", function () {
  navList.style.left = "-9999px";
});
