let gridNum = 16;

const container = document.querySelector("#container");

function initializeGrid(gridNum) {
	for (let i = 1; i < gridNum**2 + 1; i++) {
		const div = document.createElement("div");
		container.appendChild(div);
	}
}

initializeGrid(gridNum);
