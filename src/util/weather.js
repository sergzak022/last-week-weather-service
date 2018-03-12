const moment = require('moment-timezone');

module.exports = {
  getFirstDateOfLastWeek
}

function getFirstDateOfLastWeek( currDateTime ) {
  return moment(currDateTime)
    .startOf('week')
    .subtract(1, 'week')
    .toDate();
}
