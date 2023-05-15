const shareBtnBefore = document.querySelector(".shareBefore");
const shareBtnAfter = document.querySelector(".shareAfter");
const shareFooter = document.querySelector(".shareMobile");

shareBtnBefore.addEventListener("click", function () {
  shareFooter.style.visibility = "visible";
});

shareBtnAfter.addEventListener("click", function () {
  shareFooter.style.visibility = "hidden";
});

// Desktop
const desktopBefore = document.querySelector(".desktopBefore");
const popUp = document.querySelector(".popUp");

desktopBefore.addEventListener("click", function () {
  popUp.classList.toggle("show");
});
