const {expect} = require('chai');
const weather = require('../../src/util/weather');
const moment = require('moment-timezone');

describe('weather', () => {
  describe('.getFirstDateOfLastWeek', () => {
    it('should return the first date of the last week', () => {
      let expectedDateStr = '03/04/2018';
      let actualDate = weather.getFirstDateOfLastWeek(new Date('03/11/2018'));
      expect(moment(actualDate).format('MM/DD/YYYY')).to.equal(expectedDateStr);
    });
  });
});
