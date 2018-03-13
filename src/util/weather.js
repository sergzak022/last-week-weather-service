const moment = require('moment-timezone');
const {map, range} = require('lodash');
const tzLookup = require('tz-lookup');
const {getWeather, extractWeatherInfoFromDarkSkyTimeMachineResponse} = require('./dark-sky');
const Promise = require('bluebird');

module.exports = {
  getFirstDateOfLastWeek,
  getDatesRange,
  getLastWeekWeather
};

function getLastWeekWeather ( latitude, longitude ) {
  return Promise.try(() => {
    let lastWeekDates = getLastWeekDates( latitude, longitude );

    let requests = map(
      lastWeekDates,
      ( date ) =>
        getWeather( latitude, longitude, date )
    );

    return Promise.all(requests);
  })
  .then(
    weathers =>
      map( weathers, extractWeatherInfoFromDarkSkyTimeMachineResponse )
  );
}

//NOTE: don't test
function getLastWeekDates( latitude, longitude ) {
  let timezone = tzLookup( latitude, longitude );
  let lastWeekFirstDayDate = getLastWeekFirsDaytDateForTimezone( timezone );

  return getDatesRange(lastWeekFirstDayDate, 7);
}

//NOTE: don't test
function getLastWeekFirsDaytDateForTimezone( timezone ) {
  let currDateTime = getDateTimeFromTimezone( timezone )
  return getFirstDateOfLastWeek(currDateTime);
}

//NOTE: don't test
function getDateTimeFromTimezone( timezone ) {
  return moment.tz(timezone).toDate();
}

function getFirstDateOfLastWeek( currDateTime ) {
  return moment(currDateTime)
    .startOf('week')
    .subtract(1, 'week')
    .toDate();
}

function getDatesRange( startDate, numOfDays ) {
  return map(
    range(numOfDays),
    ( offset ) =>
      moment(startDate)
        .add(offset, 'day')
        .toDate()
  );
}

