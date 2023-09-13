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
const currentTempF = document.getElementById('current-temp-f');
const currentTempC = document.getElementById('current-temp-c');
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
const day1date = document.getElementById('day-1-date');
const day2date = document.getElementById('day-2-date');

function updateUnits() {
  if (unitSwitch.checked) {
    currentWind.textContent = `Wind/Gust: ${data.current.wind_kph}kph/${data.current.gust_kph}kph`;
    const fDivs = document.querySelectorAll('.f');
    fDivs.forEach((el) => {
      // eslint-disable-next-line no-param-reassign
      el.style.display = 'none';
    });
    const cDivs = document.querySelectorAll('.c');
    cDivs.forEach((el) => {
      // eslint-disable-next-line no-param-reassign
      el.style.display = 'block';
    });
  } else {
    currentWind.textContent = `Wind/Gust: ${data.current.wind_mph}mph/${data.current.gust_mph}mph`;
    const fDivs = document.querySelectorAll('.f');
    fDivs.forEach((el) => {
      // eslint-disable-next-line no-param-reassign
      el.style.display = 'block';
    });
    const cDivs = document.querySelectorAll('.c');
    cDivs.forEach((el) => {
      // eslint-disable-next-line no-param-reassign
      el.style.display = 'none';
    });
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
  icon.src = `../weather_icons/day/${currentData.condition.icon.slice(-7)}`;
  const rainChance = currentData.daily_chance_of_rain;
  const snowChance = currentData.daily_chance_of_snow;
  let percent = rainChance;
  if (rainChance < snowChance) percent = snowChance;
  if (percent > 0) precip.textContent = `${percent}%`;
  const loC = document.getElementById(`day-${idx}-lo-c`);
  const hiC = document.getElementById(`day-${idx}-hi-c`);
  const loF = document.getElementById(`day-${idx}-lo-f`);
  const hiF = document.getElementById(`day-${idx}-hi-f`);
  loC.textContent = `Lo: ${Math.round(currentData.mintemp_c)}°C`;
  hiC.textContent = `Hi: ${Math.round(currentData.maxtemp_c)}°C`;
  loF.textContent = `Lo: ${Math.round(currentData.mintemp_f)}°F`;
  hiF.textContent = `Hi: ${Math.round(currentData.maxtemp_f)}°F`;
}

function update24HourForecast(start) {
  next24Hours.replaceChildren();
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
    const hour = document.createElement('div');
    hour.textContent = formattedHour;
    newHourDiv.appendChild(hour);

    const condition = document.createElement('div');
    condition.className = 'icon-container';
    const icon = document.createElement('img');
    icon.className = 'icon';
    setIcon(hourData, icon);
    condition.appendChild(icon);
    const precip = document.createElement('span');
    precip.className = 'chance';
    const rainChance = hourData.chance_of_rain;
    const snowChance = hourData.chance_of_snow;
    let percent = rainChance;
    if (rainChance < snowChance) percent = snowChance;
    if (percent > 0) precip.textContent = `${percent}%`;
    condition.appendChild(precip);
    newHourDiv.appendChild(condition);

    const tempF = document.createElement('div');
    tempF.className = 'f';
    tempF.textContent = `${Math.round(hourData.temp_f)}°F`;
    const tempC = document.createElement('div');
    tempC.className = 'c';
    tempC.textContent = `${Math.round(hourData.temp_c)}°C`;
    newHourDiv.appendChild(tempF);
    newHourDiv.appendChild(tempC);

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
  currentCondition.textContent = `${data.current.condition.text}`;
  setIcon(data.current, currentIcon);
  currentTempC.textContent = `${Math.round(
    data.current.temp_c,
  )}°C, but feels like ${Math.round(data.current.feelslike_c)}°C`;
  currentTempF.textContent = `${Math.round(
    data.current.temp_f,
  )}°F, but feels like ${Math.round(data.current.feelslike_f)}°F`;
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
  document.getElementById('looking-ahead').style.display = 'block';
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
