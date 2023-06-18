const MenuToggler = document.querySelector("#MenuToggler");
MenuToggler.addEventListener("click", () => {
  const hambuger = document.querySelector("#Hambuger");
  if (hambuger.classList.contains("animateinout")) {
    hambuger.classList.toggle("hidden");
    hambuger.classList.toggle("flex");
    hambuger.classList.toggle("animate__fadeInLeft");
    hambuger.classList.toggle("animate__faster");
  } else {
    hambuger.classList.toggle("animate__fadeOutRight");
    hambuger.classList.toggle("animateinout");
    setTimeout(() => {
      hambuger.classList.toggle("hidden");
      hambuger.classList.toggle("flex");
    }, 300);
  }
  hambuger.classList.toggle("animateinout");
});
