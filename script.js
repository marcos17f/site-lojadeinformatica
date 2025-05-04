document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  const menu = document.querySelector(".menu");

  mobileMenuIcon.addEventListener("click", function () {
    menu.classList.toggle("mobile-menu-open");
    mobileMenuIcon.classList.toggle("active"); // Se quiser animar o ícone depois
  });
});

//Filtro de Produtos*/

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".products-code-start");

  sections.forEach((section) => {
    const menuItems = section.querySelectorAll(".product-filter-brands ul li");
    const productCards = section.querySelectorAll(".card-new-products");

    const state = {
      activeBrand: "todos",
      activeType: "todos",
    };

    function updateCards() {
      productCards.forEach((card) => {
        const brand = card.getAttribute("data-brand");
        const type = card.getAttribute("data-products-type");

        const matchBrand =
          state.activeBrand === "todos" || state.activeBrand === brand;
        const matchType =
          state.activeType === "todos" || state.activeType === type;

        card.style.display = matchBrand && matchType ? "block" : "none";
      });
    }

    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Remove classe ativa de todos
        menuItems.forEach((i) => i.classList.remove("product-brand-active"));

        // Adiciona classe ativa ao item clicado
        item.classList.add("product-brand-active");

        // Atualiza o estado
        state.activeBrand = item.getAttribute("data-brand") || "todos";
        state.activeType = item.getAttribute("data-products-type") || "todos";

        // Atualiza os cards
        updateCards();
      });
    });

    updateCards(); // Exibe tudo inicialmente
  });
});

//slider de pratrocinadores

window.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slide-sponsors");
  const images = slider.querySelectorAll("img");

  images.forEach((image) => {
    const clone = image.cloneNode(true);
    slider.appendChild(clone);
  });

  const totalWidth = images.lenght * (images[0].offsetWidth + 20);

  slider.style.width = `${totalWidth}px`;

  let currentPosition = 0;

  const moveSlide = () => {
    currentPosition -= 1;
    if (currentPosition <= -totalWidth / 2) {
      currentPosition = 0;
    }

    slider.style.transform = `translateX(${currentPosition})`;
    requestAnimationFrame(moveSlide);
  };
  requestAnimationFrame(moveSlide);
});

/*Slider depoimento*/

window.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  const controls = document.querySelectorAll(".controls-testimonial span");
  const firstTestimonial = testimonials[0];
  const firstControl = controls[0];

  testimonials.forEach((testimonial) => (testimonial.style.display = "none"));
  firstTestimonial.style.display = "block";

  controls.forEach((control) => {
    control.addEventListener("click", () => {
      const targetSlide = control.getAttribute("data-slide");
      controls.forEach((c) => c.classList.remove("active-testimonial"));
      control.classList.add("active-testimonial");

      testimonials.forEach(
        (testimonial) => (testimonial.style.display = "none")
      );

      const testimonialShow = document.querySelector(
        `.testimonial[data-slide="${targetSlide}"]`
      );

      testimonialShow.style.display = "block";
    });
  });

  firstControl.classList.add("active-testimonial");
});
