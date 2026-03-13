import { unitGroup } from ".";

const req = require.context("./assets/icons", false, /\.svg$/);
const icons = Object.fromEntries(
    req.keys().map(path => {
        const name = path.replace("./", "").replace(".svg", "");
        return [name, req(path)];
    })
);


export function switchState() {
    const slider = document.querySelector(".slider");
    slider.classList[1] === "left" ? slider.className = "slider right" : slider.className = "slider left";
    unitGroup.current === "?unitGroup=metric" ? unitGroup.current = "?unitGroup=us" : unitGroup.current = "?unitGroup=metric";
}

export function showCurrentConditions(conditions, address) {
    const parentDiv = document.querySelector(".current-weather");

    const location = document.createElement("div");
    location.textContent = `Weather in ${address} right now:`
    location.classList.add("location");

    const icon = document.createElement("img");
    icon.src = icons[conditions.icon];
    icon.width = 80;
    icon.height = 80;

    parentDiv.replaceChildren(location, icon);
} 