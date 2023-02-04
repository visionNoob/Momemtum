bg_list = [
	"http://wallpaperswide.com/download/seoul-wallpaper-1920x1080.jpg",
	"http://wallpaperswide.com/download/cat_63-wallpaper-1920x1080.jpg",
	"http://wallpaperswide.com/download/vintage_bike-wallpaper-1920x1080.jpg",
	"http://wallpaperswide.com/download/journey_painting-wallpaper-1920x1080.jpg",
	"http://wallpaperswide.com/download/kate_upton_summertime-wallpaper-1920x1080.jpg",
	"http://wallpaperswide.com/download/city_reflection_night-wallpaper-1920x1080.jpg",
	"http://wallpaperswide.com/download/maldive_islands_resort-wallpaper-1920x1080.jpg",
	"http://wallpaperswide.com/download/tokyo_tower_night_city-wallpaper-1920x1080.jpg",
	"http://wallpaperswide.com/download/new_york_city_buildings-wallpaper-1920x1080.jpg",
	"http://wallpaperswide.com/download/beautiful_singapore_reflection-wallpaper-1920x1080.jpg",
];

random_index = Math.floor(Math.random() * bg_list.length);
const bgImage = document.createElement("img");
bgImage.style.backgroundImage = `url(${bg_list[random_index]})`;
// document.body.appendChild(bgImage);
document.body.style.backgroundImage = `url(${bg_list[random_index]})`;
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
