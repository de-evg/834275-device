if (document.querySelector(".site-navigation-item__submenu") !== null) {
  var submenu = document.querySelector(".site-navigation-item__submenu");
  var submenu_link = document.querySelector(".submenu-link");
  submenu_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    submenu.classList.toggle("submenu-show");
  })
}

if (document.querySelector(".modal-map") !== null) {
  var modal_map = document.querySelector(".modal-map");
  var map_link = document.querySelector(".contacts__map-link");
  var close_map = document.querySelector(".button-close-map");

  map_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_map.classList.add("modal-show");
  })

  close_map.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_map.classList.remove("modal-show");
  })
}

if (document.querySelector(".modal-map") && document.querySelector(".modal-map__big-map") !== null) {
  var modal_map = document.querySelector(".modal-map");
  var google_link = document.querySelector(".google-map__link");
  var close_map = document.querySelector(".button-close-google-map");
  var show_google_map = document.querySelector(".google-map")

  google_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_map.classList.remove("modal-show");
    show_google_map.classList.add("modal-show");
  })

  close_map.addEventListener("click", function(evt) {
    evt.preventDefault();
    show_google_map.classList.remove("modal-show");
  })
}


if (document.querySelector(".modal-message") !== null) {
  var modal_message  = document.querySelector(".modal-message");
  var link_message = document.querySelector(".contacts__link")
  var close_button = document.querySelector(".button-close-message");

  link_message.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_message.classList.add("modal-show");
  })

  close_button.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_message.classList.remove("modal-show");
  })
}

if (document.querySelector(".user-menu") !== null) {
  var menu__list_not_login  = document.querySelector(".user-menu__account_not-logged");
  var menu__list_login  = document.querySelector(".user-menu__in-account");
  var signin__link = document.querySelector(".user-menu__signin")
  var logout__link = document.querySelector(".user-menu__logout");

  signin__link.addEventListener("click", function(evt) {
    evt.preventDefault();
    menu__list_not_login.classList.remove("user-menu_show");
    menu__list_login.classList.add("user-menu_show");
  })

  logout__link.addEventListener("click", function(evt) {
    evt.preventDefault();
    menu__list_login.classList.remove("user-menu_show");
    menu__list_not_login.classList.add("user-menu_show");
  })
}



