const {expect} = require('chai');
const {map} = require('lodash');
const weather = require('../../src/util/weather');
const moment = require('moment-timezone');
const {extractWeatherInfoFromDarkSkyTimeMachineResponse} = require('./dark-sky');
const Promise = require('bluebird');

describe('weather', () => {
  describe('.getFirstDateOfLastWeek', () => {
    it('should return the first date of the last week', () => {

      let expectedDateStr = '03/04/2018';
      let actualDate = weather.getFirstDateOfLastWeek(new Date('03/11/2018'));

      expect(moment(actualDate).format('MM/DD/YYYY')).to.equal(expectedDateStr);
    });
  });

  describe('.getDatesRange', () => {
    it('should return the first date of the last week', () => {

      let expectedDateStrList = [
        '03/04/2018',
        '03/05/2018',
        '03/06/2018',
        '03/07/2018',
        '03/08/2018',
        '03/09/2018',
        '03/10/2018'
      ];

      let actualdDateStrList = map(
        weather.getDatesRange(new Date('03/04/2018'), 7),
        ( date ) => moment(date).format('MM/DD/YYYY')
      );

      expect(actualdDateStrList).to.deep.equal(expectedDateStrList);
    });
  });

  describe('.getLastWeekWeather', () => {
    it('should fire catch cb and pass error if invalid coordinates', ( ) => {

      return weather.getLastWeekWeather(1000, 1000)
        .then(() => {
          expect(false, '`.then` callback should not get called if API call fails').to.be.true;
        })
        .catch( err => {
          expect(err.message).to.equal('invalid coordinates');
        });

    });
  });
});
