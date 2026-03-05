import { API_KEY } from "../API"

const baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
let location = "london";
const unitGroup = {
    us: "?unitGroup=us",
    metric: "?unitGroup=metric"
}

async function getWeather() {
    const responce = await fetch(baseURL + location + unitGroup.metric + "&key=" + API_KEY +
        "&include=current&elements=temp,feelslike,humidity,icon,precip,precipprob,snow,winddir,windspeed"
    );
    const weatherData = await responce.json();
    console.log(weatherData);
}

getWeather();