document.querySelector(".project-link").addEventListener("click", function () {
  document.querySelector(".overlay-box").classList.add("overlay");
  document.querySelector(".project-div").classList.remove("display");
  document.querySelector(".close-logic").classList.remove("close-logic");
});

document
  .querySelector(".fa-circle-xmark")
  .addEventListener("click", function () {
    document.querySelector(".overlay-box").classList.remove("overlay");
    document.querySelector(".project-div").classList.add("display");
    document.querySelector(".close-logic").classList.add("close-logic");
  });

document
  .querySelector(".project-link-mini")
  .addEventListener("click", function () {
    document.querySelector(".overlay-box").classList.add("overlay");
    document.querySelector(".project-div").classList.remove("display");
  });
