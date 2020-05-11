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

var version = "0.0.10";
var copyrite = "© PskovPages";

$(document).ready(() => {
	console.log("Версия сайта: " + version);
	console.log(copyrite);
});