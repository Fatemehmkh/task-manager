
  const carousel = document.getElementById("carousel");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  let index = 0;

  function getSlideWidth() {
    const slide = carousel.children[0];
    const gap = parseInt(getComputedStyle(carousel).gap) || 0;
    return slide.offsetWidth + gap;
  }

  function updateCarousel() {
    // دسکتاپ: هیچ کاری نکن
    if (window.innerWidth >= 1024) {
      carousel.style.transform = "translateX(0)";
      index = 0;
      return;
    }

    const slideWidth = getSlideWidth();
    carousel.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    const maxIndex = carousel.children.length - 1;
    if (index < maxIndex) {
      index++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  window.addEventListener("resize", updateCarousel);

  // اجرای اولیه
  updateCarousel();

