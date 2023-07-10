window.onload = function () {
  let btnLeft = document.getElementById("btnLeft"),
    btnRight = document.getElementById("btnRight");

  let slider = document.getElementById("slider");
  let sliderInner = document.getElementById("sliderInner");
  let scalSection = document.querySelectorAll("#scalSection");

  let leftSlide = 0;


  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("icon-arrow-left")) {
      moveLeftSlide();
    }
  });

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("icon-arrow-right")) {
      moveRightSlide();
    }
  });

  function moveRightSlide() {
    if (leftSlide != -300) {
      leftSlide = leftSlide - 100;
      scalSection.forEach((el) => {
        el.classList.add("startScal");
      });
      setTimeout(() => {
        sliderInner.style.left = `${leftSlide}%`;
      }, 500);
      setTimeout(() => {
        scalSection.forEach((el) => {
          el.classList.remove("startScal");
        });
      }, 1500);
    }
  }
  function moveLeftSlide() {
    if (leftSlide != 0) {
      leftSlide = leftSlide + 100;
      scalSection.forEach((el) => {
        el.classList.add("startScal");
      });
      setTimeout(() => {
        sliderInner.style.left = `${leftSlide}%`;
      }, 500);
      setTimeout(() => {
        scalSection.forEach((el) => {
          el.classList.remove("startScal");
        });
      }, 1500);
    }
  }
};
