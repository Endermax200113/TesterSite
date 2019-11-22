// -> Переменные
//ОСНОВА
var numberTest = 10;
var test = "[Тест №" + numberTest + "] Это тестовый сайт!";

//ШАПКА
//Основы размеров
var headerBgMainHeight = window.getComputedStyle(document.querySelector(".headerBgMain")).getPropertyValue("height");
var headerMenuAllHeight = window.getComputedStyle(document.querySelector(".headerMenuAll")).getPropertyValue("height");
var headerBasicHeight = window.getComputedStyle(document.querySelector(".headerBasic")).getPropertyValue("height");

//Специальная пустота
var headerEmpty = document.querySelector("#headerEmpty");

// -! Выполнение скрипта при загрузки страницы !-
startScript();

// -> Слушатели
// -! Во время изменения окна !-
window.onresize = function(e) {
	headerBgMainHeight = window.getComputedStyle(document.querySelector(".headerBgMain")).getPropertyValue("height");
	headerMenuAllHeight = window.getComputedStyle(document.querySelector(".headerMenuAll")).getPropertyValue("height");
	headerBasicHeight = window.getComputedStyle(document.querySelector(".headerBasic")).getPropertyValue("height");

	headerEmpty.style = "height: calc(" + headerBgMainHeight + " - " + headerMenuAllHeight + " - " + headerBasicHeight + " - 75px);";
}

// -> Функции
//ОСНОВА
function startScript() {
	headerEmpty.style = "height: calc(" + headerBgMainHeight + " - " + headerMenuAllHeight + " - " + headerBasicHeight + " - 75px);";
}