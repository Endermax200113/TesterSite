// -> Переменные
//ОСНОВА
var numberTest = 21;
var test = "[Тест №" + numberTest + "] Это тестовый сайт!";

//ШАПКА
//Основы размеров
var headerBgMainHeight = getValueStyle(".headerBgMain", "height");
var headerMenuAllHeight = getValueStyle(".headerMenuAll", "height");
var headerBasicHeight = getValueStyle(".headerBasic", "height");

//Специальная пустота
var headerEmpty = fromElement("#headerEmpty");

//ВТОРОЙ КОНТЕНТ
var content2BlockMinimized = fromClasses(".content2BlockMinimized");
var content2BlockMaximized = fromClasses(".content2BlockMaximized");
var content2Block1 = fromElement("#content2Block1");
var content2Block2 = fromElement("#content2Block2");
var content2Block3 = fromElement("#content2Block3");
var content2Block4 = fromElement("#content2Block4");
var content2Block5 = fromElement("#content2Block5");

//ЛИСТ
var listBgHeight = getValueStyle(".listBg", "height");
var list = fromElement(".list");

//КОНТАКТЫ
var contactsFormLastCheckBox = fromElement(".contactsFormLastCheckBox");
var contactsFormLastCheckLabel = fromElement(".contactsFormLastCheckLabel");
var contactsFormLastCheckMark = false;

// -! Выполнение скрипта при загрузки страницы !-
startScript();

// -> Слушатели
// -! Во время изменения окна !-
window.onresize = function(e) {
	headerBgMainHeight = getValueStyle(".headerBgMain", "height");
	headerMenuAllHeight = getValueStyle(".headerMenuAll", "height");
	headerBasicHeight = getValueStyle(".headerBasic", "height");

	headerEmpty.style = "height: calc(" + 
						headerBgMainHeight + " - " + 
						headerMenuAllHeight + " - " + 
						headerBasicHeight + " - 75px);";

	listBgHeight = getValueStyle(".listBg", "height");
	list.style = "height: " + listBgHeight;
}

// -! Во время клика элемента !-
document.addEventListener("click", function(e) {
	let element = e.target;

	if (isContent2BlockFrom(element, content2Block1) || 
		isContent2BlockFrom(element, content2Block2) || 
		isContent2BlockFrom(element, content2Block3) || 
		isContent2BlockFrom(element, content2Block4) || 
		isContent2BlockFrom(element, content2Block5)) {
		let block = getContent2Block(element);

		if (block.className.endsWith("Maximized")) {
			block.classList.remove("content2BlockMaximized");
			block.classList.add("content2BlockMinimized");
			fromElement(".content2").style = "height: 680px";
		} else if (block.className.endsWith("Minimized")) {
			for (let el of content2BlockMaximized) {
				el.classList.remove("content2BlockMaximized");
				el.classList.add("content2BlockMinimized");
			}

			block.classList.remove("content2BlockMinimized");
			block.classList.add("content2BlockMaximized");
			fromElement(".content2").style = "height: 870px";
		}

		content2BlockMinimized = fromClasses(".content2BlockMinimized");
		content2BlockMaximized = fromClasses(".content2BlockMaximized");
	} else if (element == contactsFormLastCheckBox || element == contactsFormLastCheckLabel) {
		if (!contactsFormLastCheckMark) {
			contactsFormLastCheckBox.innerText = "check_box";
			contactsFormLastCheckMark = true;
		} else {
			contactsFormLastCheckBox.innerText = "check_box_outline_blank";
			contactsFormLastCheckMark = false;
		}
	}
});

// -> Функции
//ОСНОВА
function startScript() {
	headerEmpty.style = "height: calc(" + 
						headerBgMainHeight + " - " + 
						headerMenuAllHeight + " - " + 
						headerBasicHeight + " - 75px);";

	list.style = "height: " + listBgHeight;
}

function fromElement(el) {
	return document.querySelector(el);
}

function fromClasses(el) {
	return document.querySelectorAll(el);
}

function getValueStyle(el, type) {
	return window.getComputedStyle(fromElement(el)).getPropertyValue(type);
}

//ВТОРОЙ КОНТЕНТ
function isContent2BlockFrom(mainEl, forEl) {
	let basic = forEl.querySelector(".content2BlockBasic");
	let basicLeft = forEl.querySelector(".content2BlockBasic").
					querySelector(".content2BlockBasicLeft");
	let basicLeftIcon = forEl.querySelector(".content2BlockBasic").
						querySelector(".content2BlockBasicLeft").
						querySelector(".content2BlockBasicLeftIcon");
	let basicLeftTitle = forEl.querySelector(".content2BlockBasic").
						 querySelector(".content2BlockBasicLeft").
						 querySelector(".content2BlockBasicLeftTitle");
	let basicRight = forEl.querySelector(".content2BlockBasic").
					 querySelector(".content2BlockBasicRightArrow");
	let details = forEl.querySelector(".content2BlockDetails");
	let detailsImage = forEl.querySelector(".content2BlockDetails").
					   querySelector(".content2BlockDetailsImage");
	let detailsDescription = forEl.querySelector(".content2BlockDetails").
							 querySelector(".content2BlockDetailsDescription");
	let self = forEl;

	if (mainEl == basic) return true;
	else if (mainEl == basicLeft) return true;
	else if (mainEl == basicLeftIcon) return true;
	else if (mainEl == basicLeftTitle) return true;
	else if (mainEl == basicRight) return true;
	else if (mainEl == details) return true;
	else if (mainEl == detailsImage) return true;
	else if (mainEl == detailsDescription) return true;
	else if (mainEl == forEl) return true;
	else return false;
}

function getContent2Block(mainEl) {
	if (isContent2BlockFrom(mainEl, content2Block1)) return content2Block1; 
	else if (isContent2BlockFrom(mainEl, content2Block2)) return content2Block2; 
	else if (isContent2BlockFrom(mainEl, content2Block3)) return content2Block3; 
	else if (isContent2BlockFrom(mainEl, content2Block4)) return content2Block4; 
	else if (isContent2BlockFrom(mainEl, content2Block5)) return content2Block5; 
	else return null;
}

//КОНТАКТЫ
function test() {
	alert("Сработало!");
}