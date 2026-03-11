import "../src/style.css"
import { API_KEY } from "../API"
import { switchState } from "./utility";


const options = document.querySelector(".options");
options.addEventListener("click", switchState);

const searchBar = document.querySelector(".searchbar");
searchBar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getWeather(searchBar.value);
    }
})

const baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
export const unitGroup = {
    us: "?unitGroup=us",
    metric: "?unitGroup=metric"
}

unitGroup.current = unitGroup.metric;

async function getWeather(location) {
    const responce = await fetch(baseURL + location + unitGroup.current + "&key=" + API_KEY +
        "&include=current&elements=temp,feelslike,humidity,icon,precip,precipprob,snow,winddir,windspeed"
    );
    const weatherData = await responce.json();
    console.log(weatherData);
}

getWeather();