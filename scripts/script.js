/////////////////////////////////
/// ....
///
/// .....
///

/////////////////////////////////
/// Function: init
///
/// Initializes the DOM after it is loaded
///
const init = () => {
	console.log("The DOM is loaded.");
};

document.addEventListener("DOMContentLoaded", () => init());

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/************************         HELPER FUNCTIONS            ****************************/
//
/// hide entire HTML collections, nodes, or single elements by adding class 'nodisplay'
function _hide(el) {
	const func = (element) => {
		if (!element.classList.contains("nodisplay")) {
			element.classList.add("nodisplay");
		}
	};

	if (el instanceof HTMLCollection || el instanceof NodeList) {
		Array.from(el).forEach(func);
	} else {
		func(el);
	}
}

/// show entire HTML collections, nodes, or single elements by adding class 'nodisplay'
function _show(el) {
	const func = (element) => {
		element.classList.remove("nodisplay");
	};
	if (el instanceof HTMLCollection || el instanceof NodeList) {
		Array.from(el).forEach(func);
	} else {
		func(el);
	}
}

/// add class 'string' to HTML collections, nodes, or single elements
function _addClass(el, string) {
	const func = (element) => {
		if (!element.classList.contains(string)) {
			element.classList.add(string);
		}
	};
	if (el instanceof HTMLCollection || el instanceof NodeList) {
		Array.from(el).forEach(func);
	} else {
		func(el);
	}
}

/// remove a class 'string' to HTML collections, nodes, or single elements
function _removeClass(el, string) {
	const func = (element) => {
		element.classList.remove(string);
	};
	if (el instanceof HTMLCollection || el instanceof NodeList) {
		Array.from(el).forEach(func);
	} else {
		func(el);
	}
}

/// toggle class 'string' of HTML collections, nodes, or single elements
function _toggleClass(el, string) {
	const func = (element) => {
		element.classList.toggle(string);
	};
	if (el instanceof HTMLCollection || el instanceof NodeList) {
		Array.from(el).forEach(func);
	} else {
		func(el);
	}
}
