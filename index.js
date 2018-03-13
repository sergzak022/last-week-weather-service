const express = require('express');
const moment = require('moment-timezone');
const {getLastWeekWeather} = require('./src/util/weather');

const { getWeather, extractWeatherInfoFromDarkSkyTimeMachineResponse } = require('./src/util/dark-sky');

const app = express();

app.get('/', ( req, res ) => {

  let {latitude, longitude} = req.query;

  if ( latitude == null || longitude == null ) {
    return res.status(400)
      .json({error: 'Must Provide Coordinates: please send latitude and longitude values as url query parameters'});
  }

  getLastWeekWeather(latitude, longitude)
    .then( weatherList => res.status(200).json(weatherList) )
    .catch( error =>  res.status(404).json({error}));

})

app.listen(3000, () => console.log('listening to 3000'))
