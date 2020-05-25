var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("randomBtn");
var discoBtn = document.getElementById("discoBtn");

color1.setAttribute("value", "#5e8ee8");
color2.setAttribute("value", "#20df85");

var cssGradientProperty = window.getComputedStyle(body).getPropertyValue("background-image");
css.textContent = cssGradientProperty;

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function randomColorValue() {
	var randomHex = "#000000".replace(/0/g, function () {
		return (~~(Math.random() * 16)).toString(16);
	});
	return randomHex;
}

function randomColor() {
	var random1 = randomColorValue();
	var random2 = randomColorValue();
	body.style.background = "linear-gradient(to right, " + random1 + ", " + random2 + ")";
	css.textContent = body.style.background;
	color1.setAttribute("value", random1);
	color2.setAttribute("value", random2);
}

function disco() {
	for (var i = 0; i < 10; i++) {
		task(i);
	}

	function task(i) {
		setTimeout(function () {
			randomColor();
		}, 120 * i);
	}
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", randomColor);
discoBtn.addEventListener("click", disco);