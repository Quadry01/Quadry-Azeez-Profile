document.querySelector(".project-link").addEventListener("click", function () {
  document.querySelector(".overlay-box").classList.add("overlay");
  document.querySelector(".project-div").classList.remove("display");
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.querySelector(".overlay-box").classList.remove("overlay");
  document.querySelector(".project-div").classList.add("display");
});
