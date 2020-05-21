//Нужный скрипт

var docWidth = window.innerWidth;
var docHeight = window.innerHeight;
var deviceMobile = docWidth <= 480 && docWidth >= 320;
var deviceTablet = docWidth <= 768 && docWidth > 480;
var deviceLaptop = docWidth <= 1200 && docWidth > 768;
var deviceComp = docWidth <= 1440 && docWidth > 1200;
var device2K = docWidth <= 2560 && docWidth > 1440;
var device4K = docWidth <= 4096 && docWidth > 2560;
var deviceBig = docWidth > 4096;

$(document).ready(() => {
	$(window).bind("resize", () => {
		docWidth = window.innerWidth;
		docHeight = window.innerHeight;
		
		deviceMobile = docWidth <= 480 && docWidth >= 320;
		deviceTablet = docWidth <= 768 && docWidth > 480;
		deviceLaptop = docWidth <= 1200 && docWidth > 768;
		deviceComp = docWidth <= 1440 && docWidth > 1200;
		device2K = docWidth <= 2560 && docWidth > 1440;
		device4K = docWidth <= 4096 && docWidth > 2560;
		deviceBig = docWidth > 4096;
	});
});

function testFunction() {
	alert("Функция успешно работает!");
}


//Главный скрипт

var version = "0.0.17";
var copyrite = "© PskovPages";

$(document).ready(() => {
	console.log("Версия сайта: " + version);
	console.log(copyrite);
});


//Меню

var icon = $(".header-main-mob-menu");
var menu = $(".header-menu");
var btn = $(".header-main-mob-menu-image");
var logo = $(".header-main-logo-image");
var panel = $(".header-main-mob");
var design = $(".header-main-design-text");
var animate = $(".header-main-mob-menu-animate");
var link1 = $(".link-one");
var link2 = $(".link-two");
var link3 = $(".link-three");
var links = $(".header-links");
var cloneLinks = links.clone();
var header = $(".header");
var cloneHeader = $(".header-empty");
var actived = false;

icon.on("click", (e) => {
	if (!actived) {
		btn.addClass('header-main-mob-menu-image-active');
		btn.removeClass("header-main-mob-menu-image");
		btn.css("position", "fixed");
		menu.css("opacity", "1");
		menu.css("z-index", "22");
		logo.css("fill", "#fff");
		design.css("color", "#fff");
		animate.css("transform", "scale(1)");
		link1.css('opacity', '1');
		link2.css('opacity', '1');
		link3.css('opacity', '1');

		actived = true;
	} else {
		btn.addClass("header-main-mob-menu-image");
		btn.removeClass('header-main-mob-menu-image-active');
		btn.css("position", "relative");
		menu.css("opacity", "0");
		logo.css("fill", "#000");
		design.css("color", "#000")
		animate.css("transform", "scale(0)");
		link1.css('opacity', '0');
		link2.css('opacity', '0');
		link3.css('opacity', '0');
		setTimeout(zIndex, 300);
		
		actived = false;
	}
});

links.before(cloneLinks);
links.addClass('fixed');

$(window).ready((e) => {
	if (deviceMobile) {
		header.css('position', 'fixed');
		header.css('z-index', '40');
		cloneHeader.css('height', '' + header.height());
	} else {
		if (deviceLaptop) links.css('padding', '20px 0px');
		else if (device2K) links.css('padding', '25px 0px');
		else if (device4K || deviceBig) links.css('padding', '75px 0px');
	}
});

$(window).resize((e) => {
	if (deviceMobile) {
		header.css('position', 'fixed');
		header.css('z-index', '40');
		cloneHeader.css('height', '' + header.height());
	} else {
		header.css('position', 'relative');
		cloneHeader.css('height', '0');
		$(".fixed-show").css('z-index', '50');

		if (deviceLaptop) links.css('padding', '20px 0px');
		else if (device2K) links.css('padding', '25px 0px');
		else if (device4K || deviceBig) links.css('padding', '75px 0px');
	}
});

$(window).scroll((e) => {
	if ($(window).scrollTop() > getScrollPx()) {
		links.addClass('fixed-show');
		links.removeClass('fixed');
	} else {
		links.removeClass('fixed-show');
		links.addClass('fixed');
	}
});

function zIndex() {
	if (!actived) menu.css("z-index", "-1");
}

function getScrollPx() {
	if (deviceMobile) return 0;
	else if (deviceTablet) return 115;
	else if (deviceLaptop) return 160;
	else if (deviceComp) return 200;
	else if (device2K) return 290;
	else return 470;
}