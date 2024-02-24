"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const weatherForm = document.getElementById("weatherForm");
const card = document.getElementById("card");
const errorDisplay = document.querySelector("#errorDisplay");
let apiKey = "2232101b7a4c133da51de8620fc86462";
// TODO This part allows me to create all the cards elements.
// TODO Must be refactored !
//?All Arrays for css classes
let cityDisplayCssClasses = ["font-bold", "text-2xl"];
let tempIconCssClasses = ["h-3", "w-4"];
let flexCssClasses = ["flex", "items-center", "justify-center", "flex-row"];
let humidityIconCssClasses = ["size-8", "relative"];
let feelsIconCssClasses = ["h-7", "w-12"];
let windSpeedIconCssClasses = ["size-7", "relative"];
let windSpeedSpanCssClasses = ["relative", "bottom-1"];
let descriptionDisplayCssClasses = ["flex", "max-h-10", "font-bold"];
// *CityDisplay
const cityDisplay = document.createElement("div");
const marker = document.createElement("img");
marker.src = "../../projects/fetch-weather-app/icons/cardIcons/marker.png";
marker.classList.add("h-5");
cityDisplay.classList.add(...cityDisplayCssClasses);
// *tempIcon
const tempIcon = document.createElement("img");
tempIcon.src = "./icons/cardIcons/thermometer.svg";
tempIcon.classList.add(...tempIconCssClasses);
// *Standard temperature
const tempDisplay = document.createElement("p");
tempDisplay.classList.add(...flexCssClasses);
// *Humidity
const humidityIcon = document.createElement("img");
humidityIcon.src = "./icons/cardIcons/humidity.svg";
humidityIcon.classList.add(...humidityIconCssClasses);
// *Humidity display
const humidityDisplay = document.createElement("p");
humidityDisplay.classList.add(...flexCssClasses);
// *Feels Like
const feelsIcon = document.createElement("img");
feelsIcon.src = "./icons/cardIcons/thermometer.svg";
feelsIcon.classList.add(...feelsIconCssClasses);
const feelsLikeDisplay = document.createElement("p");
feelsLikeDisplay.classList.add(...flexCssClasses);
//*Wind and speed icons
const windIcon = document.createElement("img");
windIcon.src = "./icons/cardIcons/wind.svg";
windIcon.classList.add(...windSpeedIconCssClasses);
const speedIcon = document.createElement("img");
speedIcon.src = "./icons/cardIcons/windsock.svg";
speedIcon.classList.add(...windSpeedIconCssClasses);
const windDisplay = document.createElement("div");
const windSpan = document.createElement("span");
const speedSpan = document.createElement("span");
windSpan.classList.add(...windSpeedSpanCssClasses);
speedSpan.classList.add(...windSpeedSpanCssClasses);
// *Description display
const descriptionDisplay = document.createElement("p");
descriptionDisplay.classList.add(...descriptionDisplayCssClasses);
// *country display
const countryDisplay = document.createElement("p");
weatherForm.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    card.textContent = "";
    event.preventDefault();
    const cityEntered = document.getElementById("cityEntered").value;
    if (cityEntered === "") {
        displayError("Please enter a city 🏙️ !");
        return;
    }
    try {
        const response = yield fetchData(cityEntered);
        card.classList.add("flex");
        displayData(response);
        errorDisplay.style.display = "none";
    }
    catch (error) {
        displayError(error);
    }
}));
function fetchData(city) {
    return __awaiter(this, void 0, void 0, function* () {
        let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        let response = yield fetch(ApiUrl);
        if (!response.ok) {
            throw new Error("Couldn't fetch data ❌, try again !");
        }
        else {
            return yield response.json();
        }
    });
}
function displayError(error) {
    errorDisplay.textContent = String(error);
    errorDisplay.classList.add("flex");
    {
        // errorDisplay.style.flexWrap = "wrap";
        // errorDisplay.style.flexDirection = "column";
        // errorDisplay.style.alignItems = "center";
        // errorDisplay.style.gap = "1rem";
        // errorDisplay.style.justifyContent = "center";
        // errorDisplay.style.textAlign = "center";
        // errorDisplay.style.fontFamily = "MV Boli";
        // errorDisplay.style.fontSize = "1.25rem";
        // errorDisplay.style.color = "red";
    }
    if (error === "TypeError: Failed to fetch") {
        errorDisplay.textContent =
            "It seems that you're not connected to internet 🌐. Please check you connexion";
    }
}
function displayData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name: city, main: { temp, humidity, feels_like }, weather: [{ description, id, icon }], sys: { country }, timezone: timezone, wind: { deg, speed }, } = data;
        cityDisplay.textContent = `\u0009 ${city}`;
        card.appendChild(cityDisplay);
        tempDisplay.textContent = ` ${(temp - 273.15).toFixed()}°C`;
        tempDisplay.prepend(tempIcon);
        card.appendChild(tempDisplay);
        humidityDisplay.textContent = ` Humidity : ${humidity} %`;
        humidityDisplay.prepend(humidityIcon);
        card.appendChild(humidityDisplay);
        feelsLikeDisplay.textContent = ` Feels like : ${(feels_like - 273.15).toFixed()}°C`;
        feelsLikeDisplay.prepend(feelsIcon);
        card.appendChild(feelsLikeDisplay);
        windSpan.textContent = `  ${deg} degrees \t||\u0009`;
        speedSpan.textContent = `${speed} meters/s`;
        windDisplay.prepend(windIcon);
        windDisplay.append(windSpan);
        windDisplay.append(speedSpan);
        windDisplay.append(speedIcon);
        card.appendChild(windDisplay);
        descriptionDisplay.textContent = description;
        card.appendChild(descriptionDisplay);
        let countryCode = country;
        // Fetch the country from ISO3166-1.alpha2.json
        let actualCountry = yield fetchCountry(countryCode);
        cityDisplay.textContent += `, ${actualCountry}`;
        cityDisplay.prepend(marker);
        //Get the date of the location
        let locationDateDisplay = document.createElement("p");
        locationDateDisplay.id = "locationDateDisplay";
        card.appendChild(locationDateDisplay);
        function setting() {
            let locationDate = getLocationDate(timezone);
            let day = locationDate.getDate();
            let month = locationDate.getMonth();
            let year = locationDate.getFullYear();
            let weekDay = locationDate.getDay();
            month = stringMonths(month);
            weekDay = stringWeekDay(weekDay);
            let locationHour = pad(locationDate.getHours());
            let locationMins = pad(locationDate.getMinutes());
            let locationsecs = pad(locationDate.getSeconds());
            let timeIcon = document.createElement("img");
            timeIcon.src = "./icons/cardIcons/date.gif";
            timeIcon.id = "timeIcon";
            locationDateDisplay.textContent = ` ${weekDay} ${day} ${month} ${year}, ${locationHour}:${locationMins}:${locationsecs}`;
            locationDateDisplay.prepend(timeIcon);
        }
        setInterval(setting, 1000);
        displayEmoji(icon, descriptionDisplay);
    });
}
function fetchCountry(countryCode) {
    return __awaiter(this, void 0, void 0, function* () {
        let countriesCode = yield fetch("ISO3166-1.alpha2.json");
        countriesCode = yield countriesCode.json();
        const countryName = yield countriesCode[countryCode];
        return yield countryName;
    });
}
function getLocationDate(timezone) {
    let locationDate;
    let actualDate = new Date().toString();
    let firstSlice;
    let minus;
    if (actualDate.indexOf("+") == -1) {
        firstSlice = actualDate.slice(actualDate.indexOf("-") + 1);
        minus = true;
    }
    else {
        firstSlice = actualDate.slice(actualDate.indexOf("+") + 1);
    }
    let gmt = firstSlice.slice(0, firstSlice.indexOf(" "));
    gmt = Number(gmt);
    gmt = gmt / 100;
    /* The previous part get the user current gmt+value or gmt-value, I get this 'value'
      So if somebody hasn't the same timezone than me, it still works.*/
    if (minus) {
        locationDate = new Date(Date.now() + timezone * 1000 + 3600000 * gmt);
    }
    else {
        locationDate = new Date(Date.now() + timezone * 1000 - 3600000 * gmt);
    }
    return locationDate;
}
function pad(unit) {
    return unit < 10 ? "0" + unit : unit;
}
function stringMonths(month) {
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return months[month];
}
function stringWeekDay(day) {
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    return days[day];
}
function padDate(day) {
    return day <= 9 ? "0" + day : day;
}
function displayEmoji(icon, descriptionDisplay) {
    let weatherIcon = document.createElement("img");
    weatherIcon.style.height = "50px";
    weatherIcon.style.width = "50px";
    weatherIcon.src = `./icons/Openweathermap/${icon}.svg`;
    weatherIcon.id = "weatherIcon";
    descriptionDisplay.appendChild(weatherIcon);
    let string = String(icon);
    let body = document.body;
    let sunOrMoon = document.querySelector("#sunOrMoon");
    let submitButtons = document.querySelectorAll(".submitButtons");
    if (string.indexOf("n") != -1) {
        body.classList.remove("dayBodyClass");
        body.classList.add("nightBodyClass");
        descriptionDisplay.style.color = "whitesmoke";
        marker.src = "./icons/cardIcons/markerNight.png";
        marker.style.height = "20px";
        sunOrMoon.src = "./icons/titleIcons/clear-night.svg";
        submitButtons.forEach((submitButton) => {
            submitButton.classList.add("submitNight");
        });
    }
    else {
        body.classList.remove("nightBodyClass");
        body.classList.add("dayBodyClass");
        sunOrMoon.src = "./icons/titleIcons/clear-day.svg";
        submitButtons.forEach((submitButton) => {
            submitButton.classList.remove("submitNight");
        });
    }
}
