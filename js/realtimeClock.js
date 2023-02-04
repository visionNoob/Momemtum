const clock1 = document.querySelector(".clock1");
const clock2 = document.querySelector(".clock2");
console.log("Hello World");

// console.log(cur_date.)
tmp_date = new Date();
const setTimer = () => {
	cur_date = new Date();
	// console.log(cur_date);
	const year = cur_date.getFullYear();
	const month = cur_date.getMonth();
	const day = cur_date.getDate();

	const hours = cur_date.getHours();
	const minutes = cur_date.getMinutes();
	const seconds = cur_date.getSeconds();
	clock1.innerHTML = `${String(year).padStart(2, "0")}.${String(month).padStart(
		2,
		"0"
	)}.${String(day).padStart(2, "0")}`;
	clock2.innerHTML = `${String(hours).padStart(2, "0")}:${String(
		minutes
	).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

setTimer();
setInterval(setTimer, 1000);
