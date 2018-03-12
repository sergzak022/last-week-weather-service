const moment = require('moment-timezone');
const {map, range} = require('lodash');

module.exports = {
  getFirstDateOfLastWeek,
  getDatesRange
};

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

