// -> Переменные
//ОСНОВА
var numberTest = 12;
var test = "[Тест №" + numberTest + "] Это тестовый сайт!";

//ШАПКА
//Основы размеров
var headerBgMainHeight = window.getComputedStyle(document.querySelector(".headerBgMain")).getPropertyValue("height");
var headerMenuAllHeight = window.getComputedStyle(document.querySelector(".headerMenuAll")).getPropertyValue("height");
var headerBasicHeight = window.getComputedStyle(document.querySelector(".headerBasic")).getPropertyValue("height");

//Специальная пустота
var headerEmpty = document.querySelector("#headerEmpty");

//ВТОРОЙ КОНТЕНТ
var content2BlockMinimized = document.querySelectorAll(".content2BlockMinimized");
var content2BlockMaximized = document.querySelectorAll(".content2BlockMaximized");
var content2Block1 = document.querySelector("#content2Block1");
var content2Block2 = document.querySelector("#content2Block2");
var content2Block3 = document.querySelector("#content2Block3");
var content2Block4 = document.querySelector("#content2Block4");
var content2Block5 = document.querySelector("#content2Block5");

//Размеры для блоков
var styleForMinimized = "overflow: hidden; " +
						"opacity: 0; " +
						"padding: 0px; " +
						"height: 0px; "
var styleForMaximized = "overflow: unset; " +
						"opacity: 1; " +
						"padding-bottom: 25px; " +
						"height: auto; "

// -! Выполнение скрипта при загрузки страницы !-
startScript();

// -> Слушатели
// -! Во время изменения окна !-
window.onresize = function(e) {
	headerBgMainHeight = window.getComputedStyle(document.querySelector(".headerBgMain")).getPropertyValue("height");
	headerMenuAllHeight = window.getComputedStyle(document.querySelector(".headerMenuAll")).getPropertyValue("height");
	headerBasicHeight = window.getComputedStyle(document.querySelector(".headerBasic")).getPropertyValue("height");

	headerEmpty.style = "height: calc(" + 
						headerBgMainHeight + " - " + 
						headerMenuAllHeight + " - " + 
						headerBasicHeight + " - 75px);";
}

// -! Во время клика элемента !-
document.addEventListener("click", function(e) {
	let element = e.target;

	if (element == content2Block1 || 
		element == content2Block2 || 
		element == content2Block3 || 
		element == content2Block4 || 
		element == content2Block5) {
		if (element.className.endsWith("Maximized")) {
			element.classList.remove("content2BlockMaximized");
			element.classList.add("content2BlockMinimized");
		} else if (element.className.endsWith("Minimized")) {
			for (let el of content2BlockMaximized) {
				el.classList.remove("content2BlockMaximized");
				el.classList.add("content2BlockMinimized");
			}

			element.classList.remove("content2BlockMinimized");
			element.classList.add("content2BlockMaximized");
		}

		content2BlockMinimized = document.querySelectorAll(".content2BlockMinimized");
		content2BlockMaximized = document.querySelectorAll(".content2BlockMaximized");
	}
});

// -> Функции
//ОСНОВА
function startScript() {
	headerEmpty.style = "height: calc(" + 
						headerBgMainHeight + " - " + 
						headerMenuAllHeight + " - " + 
						headerBasicHeight + " - 75px);";
}

