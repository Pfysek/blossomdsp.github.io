// Fade-in on scroll using IntersectionObserver
(function () {
  "use strict";

  var els = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    els.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  els.forEach(function (el) {
    observer.observe(el);
  });

  // Lightweight "Add to Cart" feedback (no backend, static site)
  document.querySelectorAll(".card .btn--outline").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var original = btn.textContent;
      btn.textContent = "Added";
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = original;
        btn.disabled = false;
      }, 1400);
    });
  });

  // Newsletter form feedback (no backend, static site)
  var form = document.querySelector(".newsletter__form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector(".newsletter__input");
      var btn = form.querySelector(".btn");
      if (!input.value || input.validity.typeMismatch || !input.checkValidity()) {
        input.focus();
        return;
      }
      btn.textContent = "Subscribed";
      btn.disabled = true;
      input.value = "";
      input.disabled = true;
    });
  }
})();
