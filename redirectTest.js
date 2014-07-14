/* Check a provided list of URL pairs for redirection.
 * redirects.txt should have one line per redirect, with the url to
 * be requested and the URL to be redirected to seperated by a space.
 */

var url = "http://myotest-qa.gaiam.com",
    testPair = [],
    http = require('http'),
    lineReader = require('line-reader');

describe('Placeholder', function() {
  it('should pass', function(done){
    expect(true).toBeTruthy;
  });
});

describe('The URL at', function() {
  console.log('Entering Describe');
  function check301(source, destination){
    console.log('Entering check');
    it(source + ' should redirect to ' + destination, function(done){
      var response = http.get(url + source);
      expect(response.statusCode).toEqual(301);
      expect(response.headers.location).toEqual(destination);
      done();
    });
  });
  
  lineReader.eachLine('redirects.txt', function(line){
    console.log('Processing ' + line);
    testPair = line.split(' ');
    check301(testPair[0], testPair[1]);
  });
});
