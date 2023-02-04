const quote = document.querySelector(".quate");

const diplayQuate = (response) => {
	quote.innerHTML = `"${response["content"]}"`;
};
ret = fetch("https://api.quotable.io/random")
	.then((response) => response.json())
	.then((data) => diplayQuate(data));
