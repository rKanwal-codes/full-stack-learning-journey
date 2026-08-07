const apiKey = "YOUR_API_KEY";
const cityInput = document.getElementById("city");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const icon = document.getElementById("icon");
const error = document.getElementById("error");
async function getWeather(city) {
    if (city === "") {
        error.innerHTML = "Please enter a city name.";
        return;
    }
    error.innerHTML = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        cityName.innerHTML = `${data.name}, ${data.sys.country}`;
        temperature.innerHTML = `${Math.round(data.main.temp)}°C`;
        description.innerHTML = data.weather[0].description;
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${data.wind.speed} km/h`;
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        icon.style.display = "block";
    }
    catch (err) {
        error.innerHTML = "❌ City not found.";
        cityName.innerHTML = "Search a City";
        temperature.innerHTML = "--";
        description.innerHTML = "Weather information will appear here.";
        humidity.innerHTML = "--";
        wind.innerHTML = "--";
        icon.src = "";
    }
}
searchBtn.addEventListener("click", () => {
    getWeather(cityInput.value.trim());
});
cityInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        getWeather(cityInput.value.trim());
    }

});
