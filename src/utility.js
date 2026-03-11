import { unitGroup } from ".";

export function switchState() {
    const slider = document.querySelector(".slider");
    slider.classList[1] === "left" ? slider.className = "slider right" : slider.className = "slider left";
    unitGroup.current === "?unitGroup=metric" ? unitGroup.current = "?unitGroup=us" : unitGroup.current = "?unitGroup=metric";
}