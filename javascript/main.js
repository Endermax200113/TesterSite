// -> Переменные
//ОСНОВА
var docWidth = window.innerWidth;
var docHeight = window.innerHeight;
var mobVersion = false;
spotMobVersion();

//ШАПКА
//Верхнее меню
var topMenuTextWord = document.querySelector("#topMenuTextWord");
var topMenuTextWordArrow = document.querySelector("#topMenuTextWordArrow");
var topMenuMobMaximized = false;
var topMenuTextOne = document.querySelector("#topMenuTextOne");
var topMenuTextTwo = document.querySelector("#topMenuTextTwo");
var topMenuTextThree = document.querySelector("#topMenuTextThree");
var topMenuTextFour = document.querySelector("#topMenuTextFour");

//Верхние социальные иконки
var topSocialIcons = document.querySelector("#topSocialIcons");
var topSocialIcon = document.querySelector(".topSocialIcon");

// -! Выполнение скрипта при загрузки страницы !-
startScript();

// -> Слушатели
// -! Во время клика на "e" элемента !-
document.addEventListener("click", function(e) {
	var element = e.target;

	if (element == topMenuTextWord || element == topMenuTextWordArrow) {
		if (mobVersion) {
			if (topMenuMobMaximized) {
				topMenuMobMinimize();
				topMenuMobMaximized = false;
			} else {
				topMenuMobMaximize();
				topMenuMobMaximized = true;
			}
		}
	} else if (element == topSocialIcon) {
		topSocialIconClick();
	}
});

// -! Во время изменения окна !-
window.onresize = function(e) {
	docWidth = window.innerWidth;
	docHeight = window.innerHeight;

	if (docWidth >= 768) {
		mobVersion = false;
		topMenuMobMaximizeToPC();
	} else {
		mobVersion = true;
		if (!topMenuMobMaximized) topMenuMobMinimize();
	}
}

// -> Функции
//ОСНОВА
function startScript() {
	if (mobVersion) topMenuMobMinimize();
}

function spotMobVersion() {
	if (docWidth >= 768) mobVersion = false;
	else mobVersion = true;
}

//ШАПКА
//Верхнее меню
function topMenuMobMaximizeToPC() {
	topMenuMobMaximized = false;
	topMenuTextWordArrow.style = "transform: rotate(90deg)";
	topMenuTextOne.style = "opacity: 1; margin-top: 0px";
	topMenuTextTwo.style = "opacity: 1; margin-top: 0px";
	topMenuTextThree.style = "opacity: 1; margin-top: 0px";
	topMenuTextFour.style = "opacity: 1; margin-top: 0px";

	topSocialIcons.style = "margin-top: 30px";
}

function topMenuMobMaximize() {
	topMenuTextOne.style = "opacity: 1; margin-top: 30px";
	topMenuTextTwo.style = "opacity: 1; margin-top: calc(30px + 20px)";
	topMenuTextThree.style = "opacity: 1; margin-top: calc(30px + 20px + 20px)";
	topMenuTextFour.style = "opacity: 1; margin-top: calc(30px + 20px + 20px + 20px)";
	topMenuTextWordArrow.style = "transform: rotate(-90deg)";

	topSocialIcons.style = "margin-top: 140px";
}

function topMenuMobMinimize() {
	topMenuTextOne.style = "opacity: 0; margin-top: 0px";
	topMenuTextTwo.style = "opacity: 0; margin-top: 0px";
	topMenuTextThree.style = "opacity: 0; margin-top: 0px";
	topMenuTextFour.style = "opacity: 0; margin-top: 0px";
	topMenuTextWordArrow.style = "transform: rotate(90deg)";

	topSocialIcons.style = "margin-top: 60px";
}

//Верхние социальные иконки
function topSocialIconClick() {
	alert("Вы нажали на социальную иконку!");
}