var searchHistory = [];
var openWeatherApi = "https://api.openweathermap.org";
var openWeatherApiKey = "578ce7eb49d873b9da0cc3aace49f4b9";

// var date = dayjs().format('M/D/YYYY');

// DOM element references
var searchForm = document.querySelector("#search-form");
var searchInput = document.querySelector("#search-input");
var todayContainer = document.querySelector("#today");
var forecastContainer = document.querySelector("#forecast");
var searchHistoryContainer = document.querySelector("#history");

// Day.js timezone plugins
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

// Display search history
function renderSearchHistory() {
  searchHistoryContainer.innerHTML = "";
}

// Add/Update search History to local storage; retrieve from local Storage
function appendToHistory() {
  if (searchHistory.indexOf(search) !== -1) {
    return;
  }
  searchHistory.push(search);

  localStorage.setItem("search-history", JSON.stringify(searchHistory));
  renderSearchHistory();
}

function initSearchHistory() {
  var storedHistory = localStorage.getItem("search-history");
  if (storedHistory) {
    searchHistory = JSON.parse(storedHistory);
  }
  renderSearchHistory();
}

// Current Weather

function renderCurrentWeather(city, weather) {
  var date = dayjs().format("M/D/YYYY");
  var tempF = weather.main.temp;
  var windMph = weather.wind.speed;
  var humidity = weather.main.humidity;
}


initSearchHistory();
searchForm.addEventListener('submit', handleSearchFormSubmit);
searchHistoryContainer.addEventListener('click', handleSearchHistoryClick);