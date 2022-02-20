let button = document.getElementById("lang__change")

button.onclick = function (event) {
    if (event) {
        document.getElementById("header__under-menu-lang").classList.toggle("show");
    }
};

let button_city = document.getElementById("city__change")

button_city.onclick = function (event) {
    if (event) {
        document.getElementById("sub-header__under-menu-city").classList.toggle("show-city");
    }
};

let button_about = document.getElementById("about__change")

button_about.onclick = function (event) {
    if (event) {
        document.getElementById("sub-header__under-menu-about").classList.toggle("show-about");
    }
};

let button_news = document.getElementById("news__change")

button_news.onclick = function (event) {
    if (event) {
        document.getElementById("sub-header__under-menu-news").classList.toggle("show-news");
    }
};

let button_programms = document.getElementById("programms__change")

button_programms.onclick = function (event) {
    if (event) {
        document.getElementById("sub-header__under-menu-programms").classList.toggle("show-programms");
    }
};

let button_contacts = document.getElementById("contacts__change")

button_contacts.onclick = function (event) {
    if (event) {
        document.getElementById("sub-header__under-menu-contacts").classList.toggle("show-contacts");
    }
};

let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 4000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger-menu_button", ".burger-menu_lines");
    let links = menu.find(".burger-menu_link");
    let overlay = menu.find(".burger-menu_overlay");

    button.on("click", (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on("click", () => toggleMenu());
    overlay.on("click", () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass("burger-menu_active");

        if (menu.hasClass("burger-menu_active")) {
            $("body").css("overlow", "hidden");
        } else {
            $("body").css("overlow", "visible");
        }
    }
}

burgerMenu(".burger-menu");