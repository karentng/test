const googleSearch = require('./script.js');


dbMock = [
  'dogtest.com',
  'notarealsite.com',
  'fakesite.com',
  'mocksite.com',
  'mysite.com',
];
describe('googleSearch', () => {
  it('returns a matched site when the searchInput has cohincidences', ()=> {
    expect(googleSearch('dog', dbMock)).toEqual(["dogtest.com"]);
  });
  
  it('returns empty array if there is not cohincidences with the search input', ()=> {
    expect(googleSearch('nonexistingsite', dbMock)).toEqual([]);
  });
  
  it('returns only up to three matches even if there are more cohincidences', ()=> {
    expect(googleSearch('site', dbMock)).toEqual(['notarealsite.com', 'fakesite.com', 'mocksite.com']);
    expect(googleSearch('site', dbMock).length).toEqual(3);
  });
  
  it('returns an empty array when searchInput is null or undefined', ()=> {
    expect(googleSearch(null, dbMock)).toEqual([]);
    expect(googleSearch(undefined, dbMock)).toEqual([]);
  });
});