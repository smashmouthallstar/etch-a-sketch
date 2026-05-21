let gridNum = 16;
const gridSetter = document.querySelector("#gridsetter");

const container = document.querySelector("#container");

const sheet = document.styleSheets[0];

function getGrids() {
	while (true) {
	answer = +prompt("How many squares do you want?", 16)
		if (answer > 100) {
			alert("Please enter a value <= 100");
			continue;
		} else if (isNaN(answer) || !Number.isInteger(answer) || !answer) {
			alert("Please enter a valid number");
			continue;
		} else return answer;
	}
}

function rainbowColor(event) {
	const R = Math.random() * 255
	const G = Math.random() * 255
	const B = Math.random() * 255
	event.target.style.backgroundColor = `rgb(${R} ${G} ${B})`;
}


function initializeGrid(gridNum) {
	for (let i = 1; i < gridNum**2 + 1; i++) {
		const div = document.createElement("div");
		div.addEventListener("mouseover", (event) => {
			rainbowColor(event);
		});
		container.appendChild(div);
	}
}

function resetGrid() {
	const divToRemove = container.querySelectorAll("div")
	divToRemove.forEach(element => {
		container.removeChild(element);
	});
}

gridSetter.addEventListener("click", () => {
	resetGrid();
	gridNum = getGrids();
	console.log(`New gridNum = ${gridNum}x${gridNum} (${gridNum**2})`);
	sheet.deleteRule(5);
	sheet.insertRule(`#container > div {display: flex; width: calc(100%/${gridNum});}`, 5);
	initializeGrid(gridNum);
});

initializeGrid(gridNum);
