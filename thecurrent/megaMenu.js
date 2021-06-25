(function () {
  var hamburger = {
    megaMenuOpen: document.querySelector(".nav-megamenu-open"),
    megaMenuClose: document.querySelector(".nav-megamenu-close"),
    megaMenuBackdrop: document.querySelector(".nav-megamenu-backdrop"),
    megaMenu: document.querySelector(".nav-megamenu"),

    doToggle: function (e) {
      e.preventDefault();
      this.megaMenu.classList.toggle("nav-megamenu-off");
    },
  };

  hamburger.megaMenuOpen.addEventListener("click", function (e) {
    hamburger.doToggle(e);
  });
  hamburger.megaMenuClose.addEventListener("click", function (e) {
    hamburger.doToggle(e);
  });
  hamburger.megaMenuBackdrop.addEventListener("click", function (e) {
    hamburger.doToggle(e);
  });
})();
