const login_form = document.querySelector("#login-form");
const name_input = document.querySelector("#login-form input");

const beforeLogin = document.querySelector("#before-login");
const AfterLogin = document.querySelector("#after-login");

if (localStorage.getItem("userName")) {
	beforeLogin.classList.add("hide");
	beforeLogin.classList.remove("inline-block");
	AfterLogin.classList.remove("hide");
	AfterLogin.classList.add("inline-block");
}

const onSubmitName = (event) => {
	event.preventDefault();
	user_name = name_input.value;
	console.log(user_name);

	if (user_name) {
		localStorage.setItem("userName", user_name);
		debug.innerHTML = `${user_name}`;
		beforeLogin.classList.add("hide");
		beforeLogin.classList.remove("inline-block");

		AfterLogin.classList.remove("hide");
		AfterLogin.classList.add("inline-block");
	}
};

login_form.addEventListener("submit", onSubmitName);
