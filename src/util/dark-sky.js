const DarkSky = require('dark-sky')
//NOTE: remove api key from the code
const darksky = new DarkSky("e84b01f67aaae645838ea67fbe54dc9b");

module.exports = {
  requestsWeatherInfo
};

function getWeather( latitude, longitude, date ) {
  return darksky
    .latitude(latitude)
    .longitude(longitude)
    .time(date)
    .exclude('hourly')
    .get();
}
