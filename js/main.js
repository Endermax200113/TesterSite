var test = 1;

var page = 1;
var page1 = fromElement("#page1");
var page2 = fromElement("#page2");
var page3 = fromElement("#page3");
var blocks = fromElement(".contentBasicMainBlocks");
var leftArrow = fromElement(".contentBasicLeft");
var rightArrow = fromElement(".contentBasicRight");
var pageHere = fromClasses(".contentPagesHere");

window.addEventListener("load", function(e) {
	console.log("Тест №" + test);
});

document.addEventListener("click", function(e) {
	let element = e.target;

	if (equalsElements(element, page1)) {
		if (page == 1) return;

		setStyleEl(blocks, "margin-left", "0px");
		if (page == 2) renameClassEl(page2, "contentPagesHere", "contentPagesNot");
		else if (page == 3) renameClassEl(page3, "contentPagesHere", "contentPagesNot");
		renameClassEl(page1, "contentPagesNot", "contentPagesHere");
		setStyleEl(leftArrow, "opacity", "0");
		setStyleEl(rightArrow, "opacity", "1");

		page = 1;
	} else if (equalsElements(element, page2)) {
		if (page == 2) return;

		setStyleEl(blocks, "margin-left", "-700px");
		if (page == 1) renameClassEl(page1, "contentPagesHere", "contentPagesNot");
		else if (page == 3) renameClassEl(page3, "contentPagesHere", "contentPagesNot");
		renameClassEl(page2, "contentPagesNot", "contentPagesHere");
		setStyleEl(leftArrow, "opacity", "1");
		setStyleEl(rightArrow, "opacity", "1");

		page = 2;
	} else if (equalsElements(element, page3)) {
		if (page == 3) return;

		setStyleEl(blocks, "margin-left", "-1400px");
		if (page == 1) renameClassEl(page1, "contentPagesHere", "contentPagesNot");
		else if (page == 2) renameClassEl(page2, "contentPagesHere", "contentPagesNot");
		renameClassEl(page3, "contentPagesNot", "contentPagesHere");
		setStyleEl(leftArrow, "opacity", "1");
		setStyleEl(rightArrow, "opacity", "0");

		page = 3;
	} else if (equalsElements(element, leftArrow)) {
		if (page == 1) return;

		if (page == 3) {
			setStyleEl(blocks, "margin-left", "-700px");
			renameClassEl(page3, "contentPagesHere", "contentPagesNot");
			renameClassEl(page2, "contentPagesNot", "contentPagesHere");
			setStyleEl(rightArrow, "opacity", "1");
		} else if (page == 2) {
			setStyleEl(blocks, "margin-left", "0px");
			renameClassEl(page2, "contentPagesHere", "contentPagesNot");
			renameClassEl(page1, "contentPagesNot", "contentPagesHere");
			setStyleEl(leftArrow, "opacity", "0");
		}

		page--;
	} else if (equalsElements(element, rightArrow)) {
		if (page == 3) return;

		if (page == 1) {
			setStyleEl(blocks, "margin-left", "-700px");
			renameClassEl(page1, "contentPagesHere", "contentPagesNot");
			renameClassEl(page2, "contentPagesNot", "contentPagesHere");
			setStyleEl(leftArrow, "opacity", "1");
		} else if (page == 2) {
			setStyleEl(blocks, "margin-left", "-1400px");
			renameClassEl(page2, "contentPagesHere", "contentPagesNot");
			renameClassEl(page3, "contentPagesNot", "contentPagesHere");
			setStyleEl(rightArrow, "opacity", "0");
		}

		page++;
	}
});