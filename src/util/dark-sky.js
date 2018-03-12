const {first, assign} = require('lodash');
const moment = require('moment-timezone');
const DarkSky = require('dark-sky')
//NOTE: remove api key from the code
//key: "e84b01f67aaae645838ea67fbe54dc9b"
//make key a in capital letters
const { DARKSKY_API_KEY } = process.env;
if ( !DARKSKY_API_KEY ) {
  throw new Error('`DARKSKY_API_KEY` env variable must be set with valid dark sky api key')  ;
}
const darksky = new DarkSky(DARKSKY_API_KEY);


module.exports = {
  getWeather,
  extractWeatherInfoFromDarkSkyTimeMachineResponse
};

function getWeather( latitude, longitude, date ) {
  return darksky
    .latitude(latitude)
    .longitude(longitude)
    .time(date)
    .exclude('hourly')
    .get();
}

function extractWeatherInfoFromDarkSkyTimeMachineResponse( response ) {
  let data = first(response.daily.data);
  return assign({}, data, {
    time: moment((new Date(data.time * 1000))).format('dddd MMMM DD YYYY')
  });

  return response;
}
