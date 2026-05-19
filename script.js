let gridNum = 16;
const gridSetter = document.querySelector("#gridsetter");

const container = document.querySelector("#container");

const sheet = document.styleSheets[0];

function initializeGrid(gridNum) {
	for (let i = 1; i < gridNum**2 + 1; i++) {
		const div = document.createElement("div");
		div.addEventListener("mouseover", (event) => {
			event.target.classList.add("colored");
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
	gridNum = prompt("How many squares do you want? (Default 16)");
	console.log(`New gridNum = ${gridNum}x${gridNum} (${gridNum**2})`);
	sheet.deleteRule(5);
	sheet.insertRule(`#container > div {display: flex; width: calc(100%/${gridNum});}`, 5);
	initializeGrid(gridNum);
});

initializeGrid(gridNum);
