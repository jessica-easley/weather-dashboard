var searchHistory = [];
var openWeatherApi = 'https://api.openweathermap.org';
var openWeatherApiKey = '578ce7eb49d873b9da0cc3aace49f4b9';

var date = dayjs().format('M/D/YYYY');
// Day.js timezone plugins
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

// function getSavedCities() {
//     return JSON.parse(localStorage.getItem("savedCities"));
// }

// // function for input city
// function getWeather() {
//     var cityName = document.getElementById("cityInput").value;

// // retrieve saved cities out of local storage
// var savedCities = getSavedCities();
// // save to local storage
// localStorage.setItem("savedCities", JSON.stringify(savedCities));

// //  get data for specific city
// getApi(cityName);
// }
// // fetch function
// function getApi(city) {
//     var openWeatherApi = 'api.openweathermap.org/data/2.5/forecast?q=${city}&appid=578ce7eb49d873b9da0cc3aace49f4b9'
// }

// document.getElementById("searchBtn").addEventListener("click", getWeather);