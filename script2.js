const fetch = require('node-fetch');

const getPeoplePromise = (fetch) => {
  return fetch('http://swapi.py4e.com/api/people')
    .then(response => response.json())
    .then(data => {
      return {
        count: data.count,
        results: data.results
      }
    })
}

const getPeople = async (fetch) => {
  const response = await fetch('http://swapi.py4e.com/api/people');
  const data = await response.json();
  return {
    count: data.count,
    results: data.results
  }

}

// getPeoplePromise();

module.exports = {
  getPeoplePromise,
  getPeople
}