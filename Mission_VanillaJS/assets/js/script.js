const refreshRate = 100 / 60;
const moon = document.getElementById("planet1");
const earth = document.getElementById("planet2");
const satelit = document.getElementById("satelit");
const maxTranslate = 170;
let constantRotating = 0;
let translate = 0.05;
let position = 150;

window.onload = () => {
	animation();
};

function animation() {
	window.setInterval(() => {
		constantRotating++;
		position = position + translate;
		if (position > maxTranslate || position < 120) {
			translate = translate * -1;
		}
		moon.style.top = position + "px";
		satelit.style.top = position + "px";
		moon.style.transform = "rotate(" + constantRotating / 25 + "deg)";
		earth.style.transform = "rotate(" + constantRotating / 50 + "deg)";
	}, refreshRate);
}
