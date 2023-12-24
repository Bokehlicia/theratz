const counterUp = window.counterUp.default;

const callback = (entries) => {
  entries.forEach((entry) => {
    const el = entry.target;
    if (entry.isIntersecting && !el.classList.contains("is-visible")) {
      counterUp(el, {
        duration: 1500,
        delay: 16,
      });
      el.classList.add("is-visible");
    }
  });
};

const IO = new IntersectionObserver(callback, { threshold: 1 });

const elements = document.querySelectorAll(".counter");
elements.forEach((el) => {
  IO.observe(el);
});
