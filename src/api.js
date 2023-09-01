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
      console.log(response.headers);
      console.log(responseJSON);
    }
  } catch (error) {
    console.log(error);
  }
}
