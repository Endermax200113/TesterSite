var numberTest = 49;
var test = "[Тест №" + numberTest + "] Это тестовый сайт!";
var update;

var headerBgMainHeight = getValueStyle(".headerBgMain", "height");
var headerTopHeight = getValueStyle(".headerTop", "height");
var headerBasicHeight = getValueStyle(".headerBasic", "height");
var headerEmpty = fromElement("#headerEmpty");
var headerTopImage = fromElement(".headerTopImage");
var showMainMenu = false;
var headerBg = fromElement(".headerBg");
var headerTop = fromElement(".headerTop");
var headerBasic = fromElement(".headerBasic");
var headerButtons = fromElement(".headerButtons");
var headerMenu = fromElement(".headerMenu");
var headerMenuCrossImage = fromElement(".headerMenuCrossImage");

var content1Blocks = fromElement(".content1Blocks");
var content1Block = fromClasses(".content1Block");
var content1PagesHere = fromClasses(".content1PagesHere");
var content1Pages = fromClasses(".content1Pages");
var content1Page1 = fromElement("#content1Page1");
var content1Page2 = fromElement("#content1Page2");
var content1Page3 = fromElement("#content1Page3");
var content1Block1 = fromElement("#content1Block1");
var content1Block2 = fromElement("#content1Block2");
var content1Block3 = fromElement("#content1Block3");
var content1Page = 1;

var content2 = fromElement(".content2");
var content2BlockMinimized = fromClasses(".content2BlockMinimized");
var content2BlockMaximized = fromClasses(".content2BlockMaximized");
var content2Block1 = fromElement("#content2Block1");
var content2Block2 = fromElement("#content2Block2");
var content2Block3 = fromElement("#content2Block3");
var content2Block4 = fromElement("#content2Block4");
var content2Block5 = fromElement("#content2Block5");

var listBgHeight = getValueStyle(".listBg", "height");
var list = fromElement(".list");

var contacts = fromElement(".contacts");
var contactsFormLastCheckBox = fromElement(".contactsFormLastCheckBox");
var contactsFormLastCheckLabel = fromElement(".contactsFormLastCheckLabel");
var contactsFormLastCheckMark = false;

window.addEventListener("resize", function(e) {
	if (!isEmpty(headerEmpty)) {
		headerBgMainHeight = getValueStyle(".headerBgMain", "height");
		headerTopHeight = getValueStyle(".headerTop", "height");
		headerBasicHeight = getValueStyle(".headerBasic", "height");

		setStyleEl(headerEmpty, "height", "calc(" + 
			headerBgMainHeight + " - " +
			headerTopHeight + " - " +
			headerBasicHeight + " - 75px);"
		);
	}

	if (!isEmpty(list)) {
		if (!mobVersion) {
			listBgHeight = getValueStyle(".listBg", "height");
			setStyleEl(list, "height", listBgHeight);
		} else setStyleEl(list, "height", "230px");
	}

	if (!mobVersion) {
		if (!isEmpty(content1Blocks)) {
			content1PagesHere = fromClasses(".content1PagesHere");

			content1Page = 1;
			renameClassCl(content1PagesHere, "content1PagesHere", "content1PagesNo");
			renameClassEl(content1Page1, "content1PagesNo", "content1PagesHere");
			setStyleEl(content1Blocks, "margin-left", "0%");

			content1PagesHere = fromClasses(".content1PagesHere");
		}
	}

	if (mobVersion) {
		if (!isEmpty(content2BlockMaximized)) setStyleEl(content2, "height", "360px");
		else setStyleEl(content2, "height", "300px");
	} else {
		if (!isEmpty(content2BlockMaximized)) setStyleEl(content2, "height", "870px");
		else setStyleEl(content2, "height", "680px");
	}

	if (!mobVersion) {
		showMainMenu = false;
		setStyleEl(headerBg, "filter", "blur(0px)");
		setStyleEl(headerTop, "filter", "blur(0px)");
		setStyleEl(headerBasic, "filter", "blur(0px)");
		setStyleEl(headerButtons, "filter", "blur(0px)");
		setStyleEl(headerMenu, "display", "none");
	}
});

document.addEventListener("click", function(e) {
	let element = e.target;

	if (!isEmpty(content2) && (
		isContent2BlockFrom(element, content2Block1) || 
		isContent2BlockFrom(element, content2Block2) || 
		isContent2BlockFrom(element, content2Block3) || 
		isContent2BlockFrom(element, content2Block4) || 
		isContent2BlockFrom(element, content2Block5))) {

		let block = getContent2Block(element);

		if (endStr(getClassNameEl(block), "Maximized")) {
			renameClassEl(block, "content2BlockMaximized", "content2BlockMinimized");
			!mobVersion ? setStyleEl(content2, "height", "680px") : setStyleEl(content2, "height", "300px");
		} else if (endStr(getClassNameEl(block), "Minimized")) {
			renameClassCl(content2BlockMaximized, "content2BlockMaximized", "content2BlockMinimized");
			renameClassEl(block, "content2BlockMinimized", "content2BlockMaximized");
			!mobVersion ? setStyleEl(content2, "height", "870px") : setStyleEl(content2, "height", "360px");
		}

		content2BlockMinimized = fromClasses(".content2BlockMinimized");
		content2BlockMaximized = fromClasses(".content2BlockMaximized");
	} else if (!isEmpty(contacts) && (
		equalsElements(element, contactsFormLastCheckBox) ||
		equalsElements(element, contactsFormLastCheckLabel))) {

		if (!contactsFormLastCheckMark) {
			renameTextEl(contactsFormLastCheckBox, "check_box");
			contactsFormLastCheckMark = true;
		} else {
			renameTextEl(contactsFormLastCheckBox, "check_box_outline_blank");
			contactsFormLastCheckMark = false;
		}
	} else if (!isEmpty(content1Blocks) && (
		equalsElements(element, content1Page1) ||
		equalsElements(element, content1Page2) ||
		equalsElements(element, content1Page3))) {

		content1PagesHere = fromClasses(".content1PagesHere");

		if (equalsElements(element, content1Page1)) {
			content1Page = 1;
			renameClassCl(content1PagesHere, "content1PagesHere", "content1PagesNo");
			renameClassEl(content1Page1, "content1PagesNo", "content1PagesHere");
			setStyleEl(content1Blocks, "margin-left", "0%");
		} else if (equalsElements(element, content1Page2)) {
			content1Page = 2;
			renameClassCl(content1PagesHere, "content1PagesHere", "content1PagesNo");
			renameClassEl(content1Page2, "content1PagesNo", "content1PagesHere");
			setStyleEl(content1Blocks, "margin-left", "-100%");
		} else if (equalsElements(element, content1Page3)) {
			content1Page = 3;
			renameClassCl(content1PagesHere, "content1PagesHere", "content1PagesNo");
			renameClassEl(content1Page3, "content1PagesNo", "content1PagesHere");
			setStyleEl(content1Blocks, "margin-left", "-200%");
		}

		content1PagesHere = fromClasses(".content1PagesHere");
	} else if (!isEmpty(headerTopImage) &&
		equalsElements(element, headerTopImage)) {

		if (mobVersion) {
			showMainMenu = true;
			setStyleEl(headerBg, "filter", "blur(10px)");
			setStyleEl(headerTop, "filter", "blur(10px)");
			setStyleEl(headerBasic, "filter", "blur(10px)");
			setStyleEl(headerButtons, "filter", "blur(10px)");
			setStyleEl(headerMenu, "display", "flex");
		}
	} else if (!isEmpty(headerMenuCrossImage) &&
		equalsElements(element, headerMenuCrossImage)) {

		if (mobVersion) {
			showMainMenu = false;
			setStyleEl(headerBg, "filter", "blur(0px)");
			setStyleEl(headerTop, "filter", "blur(0px)");
			setStyleEl(headerBasic, "filter", "blur(0px)");
			setStyleEl(headerButtons, "filter", "blur(0px)");
			setStyleEl(headerMenu, "display", "none");
		}
	}
});

window.addEventListener("load", function(e) {
	console.log(test);

	if (!isEmpty(headerEmpty)) {
		setStyleEl(headerEmpty, 
			"height", 
			"calc(" + 
			headerBgMainHeight + " - " + 
			headerTopHeight + " - " + 
			headerBasicHeight + " - 75px);"
		);
	}

	if (!isEmpty(list)) {
		if (!mobVersion) {
			listBgHeight = getValueStyle(".listBg", "height");
			setStyleEl(list, "height", listBgHeight);
		}
	}
});

var xDown = null;
var yDown = null;
document.addEventListener("touchstart", function(e) {
	if (mobVersion) {
		xDown = e.touches[0].clientX;
		yDown = e.touches[0].clientY;
	}
});

document.addEventListener("touchmove", function(e) {
	if (mobVersion) {
		if (!xDown || !yDown) return;
		let element = e.target;

		var xUp = e.touches[0].clientX;
		var yUp = e.touches[0].clientY;

		var xDiff = xDown - xUp;
		var yDiff = yDown - yUp;

		if (Math.abs(xDiff) > Math.abs(yDiff)) {
			if (xDiff > 0) {
				if (isContent1Blocks(element)) {
					if (xDiff > 8) {
						content1PagesHere = fromClasses(".content1PagesHere");

						if (content1Page == 1) {
							content1Page = 2;
							renameClassCl(content1PagesHere, "content1PagesHere", "content1PagesNo");
							renameClassEl(content1Page2, "content1PagesNo", "content1PagesHere");
							setStyleEl(content1Blocks, "margin-left", "-100%");
						} else if (content1Page == 2) {
							content1Page = 3;
							renameClassCl(content1PagesHere, "content1PagesHere", "content1PagesNo");
							renameClassEl(content1Page3, "content1PagesNo", "content1PagesHere");
							setStyleEl(content1Blocks, "margin-left", "-200%");
						} else if (content1Page == 3) return;

						content1PagesHere = fromClasses(".content1PagesHere");
					}
				}
			} else {
				if (isContent1Blocks(element)) {
					if (xDiff < -8) {
						content1PagesHere = fromClasses(".content1PagesHere");

						if (content1Page == 3) {
							content1Page = 2;
							renameClassCl(content1PagesHere, "content1PagesHere", "content1PagesNo");
							renameClassEl(content1Page2, "content1PagesNo", "content1PagesHere");
							setStyleEl(content1Blocks, "margin-left", "-100%");
						} else if (content1Page == 2) {
							content1Page = 1;
							renameClassCl(content1PagesHere, "content1PagesHere", "content1PagesNo");
							renameClassEl(content1Page1, "content1PagesNo", "content1PagesHere");
							setStyleEl(content1Blocks, "margin-left", "0%");
						} else if (content1Page == 1) return;

						content1PagesHere = fromClasses(".content1PagesHere");
					}
				}
			}
		}

		xDown = null;
		yDown = null;
	}
});

function isContent1Blocks(mainEl) {
	let blocks = fromElement(".content1Blocks");
	let block = null;
	let blockImage = null;
	let blockTitle = null;
	let blockDescription = null;

	for (let el of content1Block) {
		block = el;
		blockImage = el.querySelector(".content1BlockImage");
		blockTitle = el.querySelector(".content1BlockTitle");
		blockDescription = el.querySelector(".content1BlockDescription");

		if (equalsElements(mainEl, block)) return true;
		else if (equalsElements(mainEl, blockImage)) return true;
		else if (equalsElements(mainEl, blockTitle)) return true;
		else if (equalsElements(mainEl, blockDescription)) return true;
	}

	if (equalsElements(mainEl, blocks)) return true;
	else return false;
}

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

	if (equalsElements(mainEl, basic)) return true;
	else if (equalsElements(mainEl, basicLeft)) return true;
	else if (equalsElements(mainEl, basicLeftIcon)) return true;
	else if (equalsElements(mainEl, basicLeftTitle)) return true;
	else if (equalsElements(mainEl, basicRight)) return true;
	else if (equalsElements(mainEl, details)) return true;
	else if (equalsElements(mainEl, detailsImage)) return true;
	else if (equalsElements(mainEl, detailsDescription)) return true;
	else if (equalsElements(mainEl, self)) return true;
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