/* Check a provided list of URL pairs for redirection.
 * redirects.txt should have one line per redirect, with the url to
 * be requested and the URL to be redirected to seperated by a space.
 */

var url = "http://myotest-qa.gaiam.com",
    testPair = [],
    http = require('http'),
    fs = require('fs');

describe('The URL at', function() {
  fs.readFileSync('./redirects.txt').toString().split('\n').forEach(function (line) {
    testPair = line.split(' ');
    it(testPair[0] + ' should redirect to ' + testPair[1], function(done){
      var response = http.get(url + testPair[0]);
      expect(response.statusCode).toEqual(301);
      expect(response.headers.location).toEqual(testPair[1]);
      done();
    });
  });
});
