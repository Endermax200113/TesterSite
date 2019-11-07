// -> Переменные
//ОСНОВА
var docWidth = screen.width;
var docHeight = screen.height;
var mobVersion = false;

//ШАПКА
//Верхнее меню
var topMenuTextWord = document.querySelector("#topMenuTextWord");
var topMenuTextWordArrow = document.querySelector("#topMenuTextWordArrow");
var topMenuMobMaximized = true;
var topMenuTextOne = document.querySelector("#topMenuTextOne");
var topMenuTextTwo = document.querySelector("#topMenuTextTwo");
var topMenuTextThree = document.querySelector("#topMenuTextThree");
var topMenuTextFour = document.querySelector("#topMenuTextFour");

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
	docWidth = screen.width;
	docHeight = screen.height;

	if (docWidth >= 768) {
		topMenuMobMaximized = true;
		topMenuTextWordArrow.style = "transform: rotate(90deg)";

		mobVersion = false;
	} else {


		mobVersion = true;
	}
}

// -> Функции
//ШАПКА
//Верхнее меню
function topMenuMobMaximize() {
	topMenuTextOne.style = "display:initial; margin-top: 30px";
	topMenuTextTwo.style = "display:initial; margin-top: calc(30px + 20px)";
	topMenuTextThree.style = "display:initial; margin-top: calc(30px + 20px + 20px)";
	topMenuTextFour.style = "display:initial; margin-top: calc(30px + 20px + 20px + 20px)";
	topMenuTextWordArrow.style = "transform: rotate(-90deg)";
}

function topMenuMobMinimize() {
	topMenuTextOne.style = "display:none; margin-top: 0px";
	topMenuTextTwo.style = "display:none; margin-top: 0px";
	topMenuTextThree.style = "display:none; margin-top: 0px";
	topMenuTextFour.style = "display:none; margin-top: 0px";
	topMenuTextWordArrow.style = "transform: rotate(90deg)";
}