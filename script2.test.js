const fetch = require('node-fetch');
const swapi = require('./script2');

describe('swapi', () => {
  
  it('getPeople pulls properly data', ()=> {
    expect.assertions(2);
    return swapi.getPeople(fetch).then(data => {
      expect(data.count).toEqual(87);
      expect(data.results.length).toEqual(10);
    })
  });

  it('getPeoplePromise pulls properly data', ()=> {
    expect.assertions(2);
    return swapi.getPeoplePromise(fetch).then(data => {
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
    })
  });

});