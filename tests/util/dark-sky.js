const { expect } = require('chai');
const { extractWeatherInfoFromDarkSkyTimeMachineResponse } = require('../../src/util/dark-sky');

describe('dark-sky', () => {
  describe('.extractWeatherInfoFromDarkSkyTimeMachineResponse', () => {
      it('should extract weather info for a day', () => {

          const response = {
            daily: {
              data: [
                {
                  time: ( new Date('03/04/2018').getTime() / 1000 ),
                  foo: 'baz'
                }
              ]
            }
          };

          const expectedResult = {
            time: 'Sunday March 04 2018',
            foo: 'baz'
          };

          const actualResult =
            extractWeatherInfoFromDarkSkyTimeMachineResponse( response );

          expect(actualResult).to.deep.equal(expectedResult);
      });
  });
});
