const quezonCity = {
  lat: 14.6488,
  long: 121.0509,
};

function environmentVariables() {
  // TODO: fetch appId env here in supabase edge functions
  return {
    appId: null,
  };
}

const env = environmentVariables();

async function fetchWeatherData(city) {
  const currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${quezonCity.lat}&lon=${quezonCity.long}&appid=${env.appId}`;
  const currentWeatherResult = await fetch(currentWeatherApi);
}

async function fetchFiveDayForecast(city) {
  const fiveDayForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${quezonCity.lat}&lon=${quezonCity.long}&appid=${env.appId}`;
  const currentFiveDayForecastResult = await fetch(fiveDayForecast);
}

window.addEventListener('load', () => {
    // TODO: add the fetch functions here
});
