let gridNum = 16;
const gridSetter = document.querySelector("#gridsetter");

const container = document.querySelector("#container");

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

gridSetter.addEventListener("clicked", () => {
	console.log(`New gridNum = ${gridNum}`);
	resetGrid();
	gridNum = prompt("How many squares do you want? (Default 16)");
});

initializeGrid(gridNum);
