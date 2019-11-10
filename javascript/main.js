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

//КОНТЕНТ
// _1 блок_
var contentOneTextTitle = document.querySelectorAll(".contentOneTextTitle");
var contentOneTextTitleWidthStd1;
var contentOneTextTitleWidthStd2;
var contentOneTextTitleWidthStd3;
var contentOneResize = true;

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
	}
});

// -! Во время изменения окна !-
window.onresize = function(e) {
	docWidth = window.innerWidth;
	docHeight = window.innerHeight;

	if (docWidth >= 768) {
		mobVersion = false;

		topMenuMobMaximizeToPC();
		contentSpotOneTextTitle();
	} else {
		mobVersion = true;

		if (!topMenuMobMaximized) topMenuMobMinimize();
		contentSpotOneTextTitle();
	}
}

// -> Функции
//ОСНОВА
function startScript() {
	if (mobVersion) {
		topMenuMobMinimize();
		topSocialIconsMoveToMob();
		contentSpotOneTextTitle();
	} else {
		contentSpotOneTextTitle();
	}
}

function spotMobVersion() {
	if (docWidth >= 768) mobVersion = false;
	else mobVersion = true;
}

//ШАПКА
//Верхнее меню
function topMenuMobMaximizeToPC() {
	topMenuMobMaximized = false;
	topMenuTextWord.style = "z-index: 0;"
	topMenuTextWordArrow.style = "transform: rotate(90deg)";
	topMenuTextOne.style = "opacity: 1; margin-top: 0px";
	topMenuTextTwo.style = "opacity: 1; margin-top: 0px";
	topMenuTextThree.style = "opacity: 1; margin-top: 0px";
	topMenuTextFour.style = "opacity: 1; margin-top: 0px";

	topSocialIconsMoveToPC();
}

function topMenuMobMaximize() {
	topMenuTextOne.style = "opacity: 1; margin-top: 30px";
	topMenuTextTwo.style = "opacity: 1; margin-top: calc(30px + 20px)";
	topMenuTextThree.style = "opacity: 1; margin-top: calc(30px + 20px + 20px)";
	topMenuTextFour.style = "opacity: 1; margin-top: calc(30px + 20px + 20px + 20px)";
	topMenuTextWord.style = "z-index: 5;"
	topMenuTextWordArrow.style = "transform: rotate(-90deg)";

	topSocialIcons.style = "margin-top: 140px";
}

function topMenuMobMinimize() {
	topMenuTextOne.style = "opacity: 0; margin-top: 0px";
	topMenuTextTwo.style = "opacity: 0; margin-top: 0px";
	topMenuTextThree.style = "opacity: 0; margin-top: 0px";
	topMenuTextFour.style = "opacity: 0; margin-top: 0px";
	topMenuTextWord.style = "z-index: 5;"
	topMenuTextWordArrow.style = "transform: rotate(90deg)";

	topSocialIconsMoveToMob();
}

//Верхние социальные иконки
function topSocialIconsMoveToMob() {
	topSocialIcons.style = "margin-top: 60px";
}

function topSocialIconsMoveToPC() {
	topSocialIcons.style = "margin-top: 30px";	
}

//КОНТЕНТ
// _1 блок_
function contentSpotOneTextTitle() {
	if (contentOneResize) {
		contentOneResize = false;
		let i = 1;

		for (let el of contentOneTextTitle) {
			if (i == 1) contentOneTextTitleWidthStd1 = window.getComputedStyle(el).getPropertyValue("width");
			else if (i == 2) contentOneTextTitleWidthStd2 = window.getComputedStyle(el).getPropertyValue("width");
			else if (i == 3) contentOneTextTitleWidthStd3 = window.getComputedStyle(el).getPropertyValue("width");

			i++;
		}		
	}

	let i = 1;
	for (let el of contentOneTextTitle) {
		if (mobVersion) {
			let style = "";

			style = "width: 100%; ";
			if (i == 2) style += "margin-top: 150px;";
			if (i == 3) style += "margin-top: 200px;";

			el.style = style;
		} else {
			let style = "";

			if (i == 1) style = "width: " + contentOneTextTitleWidthStd1 + "; ";
			else if (i == 2) style = "width: " + contentOneTextTitleWidthStd2 + "; ";
			else if (i == 3) style = "width: " + contentOneTextTitleWidthStd3 + "; ";

			if (i != 1) style += "margin-top: 0px";

			el.style = style;
		}

		i++;
	}
}