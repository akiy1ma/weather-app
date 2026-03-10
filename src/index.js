import "../src/style.css"
import { API_KEY } from "../API"

const currentLocation = document.querySelector(".current-location")
const searchBar = document.querySelector(".searchbar");
searchBar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getWeather(searchBar.value);
    }
})

const baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
//let location = "london";
const unitGroup = {
    us: "?unitGroup=us",
    metric: "?unitGroup=metric"
}

async function getWeather(location) {
    const responce = await fetch(baseURL + location + unitGroup.metric + "&key=" + API_KEY +
        "&include=current&elements=temp,feelslike,humidity,icon,precip,precipprob,snow,winddir,windspeed"
    );
    const weatherData = await responce.json();
    console.log(weatherData);
}

getWeather();