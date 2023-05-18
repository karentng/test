const fetch = require('node-fetch');
const swapi = require('./script2');

describe('swapi', () => {
  
  it('getPeople pulls properly data', () => {
    expect.assertions(2);
    return swapi.getPeople(fetch).then(data => {
      expect(data.count).toEqual(87);
      expect(data.results.length).toEqual(10);
    })
  });

  it('getPeoplePromise pulls properly data', () => {
    expect.assertions(2);
    return swapi.getPeoplePromise(fetch).then(data => {
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
    })
  });

  const mockFetch = jest.fn()
    .mockReturnValue(Promise.resolve({
      json: () => Promise.resolve({
        count: 89,
        results: [1, 2, 3, 4, 5, 6]
      })
    }))

  it('getPeople returns proper data with mock', () => {
    expect.assertions(4);
    return swapi.getPeople(mockFetch).then(data => {
      expect(data.count).toEqual(89);
      expect(data.results.length).toBeGreaterThan(5);
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith('http://swapi.py4e.com/api/people');
    })
  })

});