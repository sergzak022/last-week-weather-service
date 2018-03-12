const express = require('express');
const moment = require('moment-timezone');

const { getWeather, extractWeatherInfoFromDarkSkyTimeMachineResponse } = require('./src/util/dark-sky');

const app = express();

app.get('/', ( req, res ) => {
  getWeather( 34.0522, -118.2437, ( new Date() ) )
  .then( weatherResponse => {
      let weather =
        extractWeatherInfoFromDarkSkyTimeMachineResponse( weatherResponse );
        res.status(200).json(weather);
  })
  .catch( err => {
    console.log(err);
    res.status(500).json(err);
  });

});

app.listen(3000, () => console.log('listening to 3000'))
