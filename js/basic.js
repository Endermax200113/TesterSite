var docWidth = window.innerWidth;
var docHeight = window.innerHeight;
var mobVersion = spotMobVersion();

window.addEventListener("resize", function(e) {
	docWidth = window.innerWidth;
	docHeight = window.innerHeight;
	mobVersion = spotMobVersion();
});

function spotMobVersion() {
	return docWidth > 768 ? false : true;
}

function existsElement(el) {
	return !isEmpty(document.querySelector(el)) ? true : false;
}

function existsClasses(cl) {
	return !isEmpty(document.querySelectorAll(cl)) ? true : false;
}

function fromElement(el) {
	return existsElement(el) ? document.querySelector(el) : null;
}

function fromClasses(cl) {
	return existsClasses(cl) ? document.querySelectorAll(cl) : null;
}

function getValueStyle(el, type) {
	return existsElement(el) ? window.getComputedStyle(fromElement(el)).getPropertyValue(type) : null;
}

function equalsElements(el1, el2) {
	return el1 == el2 ? true : false;
}

function setStyle(el, type, value) {
	if (existsElement(el)) fromElement(el).style = type + ": " + value + ";";
}

function setStyleEl(el, type, value) {
	if (!isEmpty(el)) el.style = type + ": " + value + ";";
}

function setStyleCl(cl, type, value) {
	if (!isEmpty(cl)) for (let el of cl) el.style = type + ": " + value + ";";
}

function renameClass(el, from, to) {
	if (existsElement(el)) {
		fromElement(el).classList.remove(from);
		fromElement(el).classList.add(to);
	}
}

function renameClassEl(el, from, to) {
	if (!isEmpty(el)) {
		el.classList.remove(from);
		el.classList.add(to);
	}
}

function renameClassCl(cl, from, to) {
	if (!isEmpty(cl)) for (let el of cl) renameClassEl(el, from, to);
}

function isEmpty(v) {
	return v == null ? true : false;
}

function getClassName(el) {
	return existsElement(el) ? fromElement(el).className : null;
}

function getClassNameEl(el) {
	return !isEmpty(el) ? el.className : null;
}

function getIdName(el) {
	return existsElement(el) ? fromElement(el).id : null;
}

function getIdNameEl(el) {
	return !isEmpty(el) ? el.className : null;
}

function startStr(str, value) {
	return !isEmpty(str) ? str.startsWith(value) : null;
}

function endStr(str, value) {
	return !isEmpty(str) ? str.endsWith(value) : null;
}

function renameText(el, value) {
	if (existsElement(el)) fromElement(el).innerText = value;
}

function renameTextEl(el, value) {
	if (!isEmpty(el)) el.innerText = value;
}

function renameTextCl(cl, value) {
	if (!isEmpty(cl)) for (let el of cl) el.innerText = value;
}

function tester() {
	alert("Функция успешно работает!");
}