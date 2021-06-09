const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const player1Score = document.querySelector(".player-1-score");
const player2Score = document.querySelector(".player-2-score");
const arrBoxes = Array.from(document.querySelectorAll(".box"));

var controller = (function () {
	var counter1 = 0,
		counter2 = 0;

	document
		.querySelector(".box-container")
		.addEventListener("mousedown", function (e) {
			const item = e.target;

			if (item.innerHTML === "X" || item.innerHTML === "O") {
				return false;
			}

			player1.classList.toggle("active");
			player2.classList.toggle("active");

			if (item.classList[0] === "box" && player1.classList[1] !== "active") {
				item.innerHTML = "X";
			} else {
				item.innerHTML = "O";
			}

			if (
				(arrBoxes[0].innerHTML === "X" && arrBoxes[1].innerHTML === "X" && arrBoxes[2].innerHTML === "X") || 
                		(arrBoxes[3].innerHTML === "X" && arrBoxes[4].innerHTML === "X" && arrBoxes[5].innerHTML === "X") ||
				(arrBoxes[6].innerHTML === "X" && arrBoxes[7].innerHTML === "X" && arrBoxes[8].innerHTML === "X") || 
                		(arrBoxes[0].innerHTML === "X" && arrBoxes[3].innerHTML === "X" && arrBoxes[6].innerHTML === "X") ||
				(arrBoxes[1].innerHTML === "X" && arrBoxes[4].innerHTML === "X" && arrBoxes[7].innerHTML === "X") || 
                		(arrBoxes[2].innerHTML === "X" && arrBoxes[5].innerHTML === "X" && arrBoxes[8].innerHTML === "X") ||
				(arrBoxes[0].innerHTML === "X" && arrBoxes[4].innerHTML === "X" && arrBoxes[8].innerHTML === "X") || 
                		(arrBoxes[2].innerHTML === "X" && arrBoxes[4].innerHTML === "X" && arrBoxes[6].innerHTML === "X")
			) {
				counter1 += 1;
				player1Score.innerHTML = counter1;
				arrBoxes.forEach((cur) => (cur.innerHTML = ""));
				player1.classList.add("active");
				player2.classList.remove("active");
			} else if (
				(arrBoxes[0].innerHTML === "O" && arrBoxes[1].innerHTML === "O" && arrBoxes[2].innerHTML === "O") ||
				(arrBoxes[3].innerHTML === "O" && arrBoxes[4].innerHTML === "O" && arrBoxes[5].innerHTML === "O") ||
				(arrBoxes[6].innerHTML === "O" && arrBoxes[7].innerHTML === "O" && arrBoxes[8].innerHTML === "O") ||
				(arrBoxes[0].innerHTML === "O" && arrBoxes[3].innerHTML === "O" && arrBoxes[6].innerHTML === "O") ||
				(arrBoxes[1].innerHTML === "O" && arrBoxes[4].innerHTML === "O" && arrBoxes[7].innerHTML === "O") ||
				(arrBoxes[2].innerHTML === "O" && arrBoxes[5].innerHTML === "O" && arrBoxes[8].innerHTML === "O") ||
				(arrBoxes[0].innerHTML === "O" && arrBoxes[4].innerHTML === "O" && arrBoxes[8].innerHTML === "O") ||
				(arrBoxes[2].innerHTML === "O" && arrBoxes[4].innerHTML === "O" && arrBoxes[6].innerHTML === "O")
			) {
				counter2 += 1;
				player2Score.innerHTML = counter2;
				arrBoxes.forEach((cur) => (cur.innerHTML = ""));
				player2.classList.add("active");
				player1.classList.remove("active");
			}
		});

	document.querySelector(".retry-game").addEventListener("click", function () {
		arrBoxes.forEach((cur) => (cur.innerHTML = ""));
	});

	document.querySelector(".reset-game").addEventListener("click", function () {
		controller.init();
	});

	return {
		init: function () {
			console.log("Application has started.");
			player1Score.innerHTML = 0;
			player2Score.innerHTML = 0;
			arrBoxes.forEach((cur) => (cur.innerHTML = ""));
			player1.classList.add("active");
			player2.classList.remove("active");
			counter1 = 0;
			counter2 = 0;
		},
	};
})();

controller.init();
