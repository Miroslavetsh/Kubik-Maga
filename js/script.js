// Active

function isActivated(element) {
    if (element.classList.contains('_active')) {
        return true;
    } else {
        return false;
    }
}

function activate(element) {
    element.classList.add('_active');
}

function disactivate(element) {
    element.classList.remove('_active');
}


// Fixed

function isfixed(element) {
    if (element.classList.contains('_fixed')) {
        return true;
    } else {
        return false;
    }
}

function fixate(element) {
    element.classList.add('_fixed');
}

function unfix(element) {
    element.classList.remove('_fixed');
};


// WEBP format 

function testWebP(callback) {

	var webP = new Image()
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2)
	}
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}


// Burger

const burger = document.querySelector('.header__burger'),
	navigation = document.querySelector('.nav'),
	body = document.querySelector('body');


burger.addEventListener('click', () => {
	if (isActivated(burger) && isfixed(body)) {
		disactivate(burger);
		disactivate(navigation);
		unfix(body);

	} else {
		activate(burger);
		activate(navigation);
		fixate(body)
	}
})