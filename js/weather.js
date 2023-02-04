weather = document.querySelector("#weather");
weather_top = document.querySelector(".weather-top");
weather_bottom = document.querySelector(".weather-bottom");
API_KEY = "a03e15156207dcef25c3cc990a7fdeb5";

const displayWeather = (data) => {
	temp = Math.round(data.main.temp);

	weather_top.innerHTML = `${temp}°`;
	weather_bottom.innerHTML = `${data.name}`;
};
const onGeoOk = (position) => {
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
	URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=kr&units=metric`;
	fetch(URL)
		.then((response) => response.json())
		.then((data) => displayWeather(data));
};

navigator.geolocation.getCurrentPosition(onGeoOk);
