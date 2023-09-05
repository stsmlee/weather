// const locationDiv = document.getElementById('location-div');
const locationName = document.getElementById('location-name');
const locationCountry = document.getElementById('location-region');
const locationRegion = document.getElementById('location-region');
// const currentDiv = document.getElementById('current-div');
const currentCondition = document.getElementById('current-condition');
const currentIcon = document.getElementById('current-icon');
// const currentTemp = document.getElementById('current-temp');
// const currentFeels = document.getElementById('current-feels-temp');
// const alertDiv = document.getElementById('alert-div');
// const forecastDiv = document.getElementById('forecast-div');

function updateDisplay(data) {
  locationName.textContent = data.location.name;
  locationRegion.textContent = data.location.region;
  locationCountry.textContent = data.location.country;
  currentCondition.textContent = data.current.condition.text;
  const isDay = data.current.is_day;
  const iconNum = data.current.condition.icon.slice(-7);
  if (isDay) {
    currentIcon.src = `../weather_icons/day/${iconNum}`;
  } else currentIcon.src = `../weather_icons/night/${iconNum}`;
}

export default async function callAPI(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=2000ac3edfaa40c689f152811232808&q=${location}&days=3&aqi=yes&alerts=yes`,
      { mode: 'cors' },
    );
    const responseJSON = await response.json();
    if (response.status !== 200) {
      console.log('oops: ', response.status, responseJSON.error.message);
    } else {
      // console.log(response.status);
      // console.log(response.headers);
      console.log(responseJSON);
      updateDisplay(responseJSON);
    }
  } catch (error) {
    console.log(error);
  }
}
