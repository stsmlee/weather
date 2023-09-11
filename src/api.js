/* eslint-disable prefer-destructuring */
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const weekdaysShort = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
let data;
const unitSwitch = document.getElementById('unit-switch');
const locationDiv = document.getElementById('location-div');
const currentTimeDiv = document.getElementById('current-time-div');
const currentCondition = document.getElementById('current-condition');
const currentIcon = document.getElementById('current-icon');
const currentTemp = document.getElementById('current-temp');
const currentHumidity = document.getElementById('current-humidity');
const uvLabel = document.getElementById('uv-label');
const uvIndex = document.getElementById('uv-index');
const uvCode = {
  1: ['#acd162', 'Low'],
  2: ['#acd162', 'Low'],
  3: ['#f7d45f', 'Moderate'],
  4: ['#f7d45f', 'Moderate'],
  5: ['#f7d45f', 'Moderate'],
  6: ['#fc9956', 'High'],
  7: ['#fc9956', 'High'],
  8: ['#f5676b', 'Very High'],
  9: ['#f5676b', 'Very High'],
  10: ['#f5676b', 'Very High'],
  11: ['#a17584', 'Extreme'],
};
const currentWind = document.getElementById('current-wind');
const currentCloud = document.getElementById('current-cloud');
const visibility = document.getElementById('visibility');
const aqiLabel = document.getElementById('aqi-label');
const aqiRating = document.getElementById('aqi-rating');
const aqiCode = {
  1: ['#acd162', 'Good'],
  2: ['#f7d45f', 'Moderate'],
  3: ['#fc9956', 'Unhealthy for Sensitive Groups'],
  4: ['#f5676b', 'Unhealthy for All'],
  5: ['#a37eb8', 'Very Unhealthy'],
  6: ['#a17584', 'Hazardous'],
};
const next24Hours = document.getElementById('next-24-hours-div');
const day0date = document.getElementById('day-0-date');
const day0Lo = document.getElementById('day-0-lo');
const day0Hi = document.getElementById('day-0-hi');
const day1date = document.getElementById('day-1-date');
const day1Lo = document.getElementById('day-1-lo');
const day1Hi = document.getElementById('day-1-hi');
const day2date = document.getElementById('day-2-date');
const day2Lo = document.getElementById('day-2-lo');
const day2Hi = document.getElementById('day-2-hi');

function updateUnits() {
  if (unitSwitch.checked) {
    currentTemp.textContent = `Current Temp: ${data.current.temp_c}°C, but feels like: ${data.current.feelslike_c}°C`;
    currentWind.textContent = `Wind/Gust/Direction: ${data.current.wind_kph}kph / ${data.current.gust_kph}kph / ${data.current.wind_dir}`;
    visibility.textContent = `Visibility: ${data.current.vis_km}km`;
    day0Lo.textContent = `Lo: ${data.forecast.forecastday[0].day.mintemp_c}°C`;
    day0Hi.textContent = `Hi: ${data.forecast.forecastday[0].day.maxtemp_c}°C`;
    day1Lo.textContent = `Lo: ${data.forecast.forecastday[1].day.mintemp_c}°C`;
    day1Hi.textContent = `Hi: ${data.forecast.forecastday[1].day.maxtemp_c}°C`;
    day2Lo.textContent = `Lo: ${data.forecast.forecastday[2].day.mintemp_c}°C`;
    day2Hi.textContent = `Hi: ${data.forecast.forecastday[2].day.maxtemp_c}°C`;
  } else {
    currentTemp.textContent = `Current Temp: ${data.current.temp_f}°F, but feels like: ${data.current.feelslike_f}°F`;
    currentWind.textContent = `Wind/Gust/Direction: ${data.current.wind_mph}mph / ${data.current.gust_mph}mph / ${data.current.wind_dir}`;
    visibility.textContent = `Visibility: ${data.current.vis_miles}mi`;
    day0Lo.textContent = `Lo: ${data.forecast.forecastday[0].day.mintemp_f}°F`;
    day0Hi.textContent = `Hi: ${data.forecast.forecastday[0].day.maxtemp_f}°F`;
    day1Lo.textContent = `Lo: ${data.forecast.forecastday[1].day.mintemp_f}°F`;
    day1Hi.textContent = `Hi: ${data.forecast.forecastday[1].day.maxtemp_f}°F`;
    day2Lo.textContent = `Lo: ${data.forecast.forecastday[2].day.mintemp_f}°F`;
    day2Hi.textContent = `Hi: ${data.forecast.forecastday[2].day.maxtemp_f}°F`;
  }
}

unitSwitch.addEventListener('click', () => {
  if (data) updateUnits();
});

function setIcon(currentData, image) {
  const isDay = currentData.is_day;
  const iconNum = currentData.condition.icon.slice(-7);
  const iconEl = image;
  if (isDay) {
    iconEl.src = `../weather_icons/day/${iconNum}`;
  } else iconEl.src = `../weather_icons/night/${iconNum}`;
}

function update3DayForecast(idx) {
  const condition = document.getElementById(`day-${idx}-condition`);
  const precip = document.getElementById(`day-${idx}-chance-of-precip`);
  const icon = document.getElementById(`day-${idx}-icon`);
  const currentData = data.forecast.forecastday[idx].day;
  condition.textContent = currentData.condition.text;
  icon.src = `../weather_icons/day/${data.forecast.forecastday[
    idx
  ].day.condition.icon.slice(-7)}`;
  const rainChance = currentData.daily_chance_of_rain;
  const snowChance = currentData.daily_chance_of_snow;
  let percent;
  if (rainChance > snowChance) percent = rainChance;
  else percent = snowChance;
  if (percent > 0) precip.textContent = `${percent}%`;
}

function update24HourForecast(start) {
  next24Hours.replaceChildren();
  next24Hours.textContent = 'Looking ahead at your next 24 hours:';
  let currentHour = start;
  let currentDay = 0;
  for (let i = 0; i < 25; i += 1) {
    const newHourDiv = document.createElement('div');
    if (currentHour === 24) {
      currentHour = 0;
      currentDay += 1;
    }
    let formattedHour = currentHour;
    const hourData = data.forecast.forecastday[currentDay].hour[currentHour];
    if (currentHour < 10) formattedHour = `0${currentHour}`;
    newHourDiv.textContent = formattedHour;
    const condition = document.createElement('div');
    condition.textContent = hourData.condition.text;
    next24Hours.appendChild(newHourDiv);
    currentHour += 1;
  }
}

function updateDisplay() {
  const currentEpoch = data.current.last_updated_epoch;
  const currentDate = new Date(currentEpoch * 1000);
  const currentHour = currentDate.getHours();
  let formattedHour = currentHour;
  if (currentHour < 10) formattedHour = `0${currentHour}`;
  let currentMinutes = currentDate.getMinutes();
  if (currentMinutes < 10) currentMinutes = `0${currentMinutes}`;
  const currentTime = `${weekdays[currentDate.getDay()]}, ${
    months[currentDate.getMonth()]
  } ${currentDate.getDate()}, ${currentDate.getFullYear()} at ${formattedHour}:${currentMinutes}`;
  locationDiv.textContent = `${data.location.name}, ${data.location.region} (${data.location.country})`;
  currentTimeDiv.textContent = `last updated ${currentTime}`;
  currentCondition.textContent = `Current Conditions: ${data.current.condition.text}`;
  setIcon(data.current, currentIcon);
  currentHumidity.textContent = `Humidity: ${data.current.humidity}%`;
  uvLabel.textContent = 'UV index:';
  let currentUV = data.current.uv;
  if (currentUV > 8) currentUV = 8;
  uvIndex.textContent = `${data.current.uv} (${uvCode[currentUV][1]})`;
  uvIndex.style.backgroundColor = uvCode[currentUV][0];
  currentCloud.textContent = `Cloud coverage: ${data.current.cloud}%`;
  const usAQI = data.current.air_quality['us-epa-index'];
  const currentAQI = aqiCode[usAQI];
  aqiLabel.textContent = 'Air quality:';
  aqiRating.style.backgroundColor = currentAQI[0];
  aqiRating.textContent = currentAQI[1];

  update24HourForecast(currentHour);

  day0date.textContent = 'Today';
  update3DayForecast(0);

  if (currentDate.getDay() + 1 < 7) {
    day1date.textContent = weekdaysShort[currentDate.getDay() + 1];
  } else day1date.textContent = weekdaysShort[0];
  update3DayForecast(1);

  const day2day = currentDate.getDay() + 2;
  if (day2day < 7) {
    day2date.textContent = weekdaysShort[day2day];
  } else if (day2day === 7) {
    day2date.textContent = weekdaysShort[0];
  } else day2date.textContent = weekdaysShort[1];
  update3DayForecast(2);

  updateUnits();
}

export default async function callAPI(input) {
  const location = input.value;
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=2000ac3edfaa40c689f152811232808&q=${location}&days=3&aqi=yes&alerts=yes`,
      { mode: 'cors' },
    );
    const responseJSON = await response.json();
    if (response.status !== 200) {
      console.log('oops: ', response.status, responseJSON.error.message);
      input.setCustomValidity(
        `Status ${response.status}: ${responseJSON.error.message}.`,
      );
      input.reportValidity();
      input.classList.add('err');
    } else {
      if (input.classList.contains('err')) input.classList.remove('err');
      console.log(responseJSON);
      data = responseJSON;
      updateDisplay();
    }
  } catch (error) {
    console.log(error);
  }
}
