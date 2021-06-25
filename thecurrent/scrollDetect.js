let scrollpos = window.scrollY;
const header = document.querySelector("body > header");
const header_height = header.offsetHeight;

const add_class_on_scroll = () => header.classList.add("is-scrolled");
const remove_class_on_scroll = () => header.classList.remove("is-scrolled");

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    add_class_on_scroll();
  } else if (scrollpos < 1) {
    remove_class_on_scroll();
  }
});
