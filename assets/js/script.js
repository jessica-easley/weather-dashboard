function getSavedCities() {
    return JSON.parse(localStorage.getItem("savedCities"));
}

// function for input city
function getWeather() {
    var cityName = document.getElementById("cityInput").ariaValueMax;
}
// retrieve saved cities out of local storage
var savedCities = getSavedCities();
// save to local storage

//  get data for specific city

// fetch function

document.getElementById("searchBtn").addEventListener("click", getWeather);