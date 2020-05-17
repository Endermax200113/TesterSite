//Нужный скрипт

var docWidth = window.innerWidth;
var docHeight = window.innerHeight;
var deviceMobile = docWidth <= 425 && docWidth >= 320;
var deviceTablet = docWidth <= 768 && docWidth > 425;
var deviceLaptop = docWidth <= 1024 && docWidth > 768;
var deviceComp = docWidth > 1024;

$(document).ready(() => {
	$(window).bind("resize", () => {
		docWidth = window.innerWidth;
		docHeight = window.innerHeight;
		deviceMobile = docWidth <= 425 && docWidth >= 320;
		deviceTablet = docWidth <= 768 && docWidth > 425;
		deviceLaptop = docWidth <= 1024 && docWidth > 768;
		deviceComp = docWidth > 1024;
	});
});

function testFunction() {
	alert("Функция успешно работает!");
}


//Главный скрипт

var version = "0.0.16";
var copyrite = "© PskovPages";

$(document).ready(() => {
	console.log("Версия сайта: " + version);
	console.log(copyrite);
});


//Меню

var icon = $(".header-main-mob-menu");
var menu = $(".header-menu");
var btn = $(".header-main-mob-menu-image");
var actived = false;

icon.on("click", (e) => {
	if (!actived) {
		btn.addClass('header-main-mob-menu-image-active');
		btn.removeClass("header-main-mob-menu-image");
		btn.css("position", "fixed");
		menu.css("opacity", "1");
		menu.css("z-index", "20");

		actived = true;
	} else {
		btn.addClass("header-main-mob-menu-image");
		btn.removeClass('header-main-mob-menu-image-active');
		btn.css("position", "relative");
		menu.css("opacity", "0");
		setTimeout(zIndex, 300);
		
		actived = false;
	}
});

function zIndex() {
	menu.css("z-index", "-1");
}