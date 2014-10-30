/* Check a provided list of URL pairs for redirection.
 * redirects.txt should have one line per redirect, with the url to
 * be requested and the URL to be redirected to seperated by a space.
 */

// Some systems seem to require that url includes the site protocol (http://)
// and some complain if it is present.  For example, Ubuntu seems to need it
// but ArchLinux does not.  If you get errors retriving a site, try adding
// or removing that first.
var url = "http://storefront:monday1@www.spri.com",
    http = require('http'),
    fs = require('fs');

describe('The URL at', function() {
  fs.readFileSync('./redirects.txt').toString().split('\n').forEach(function (line) {
    if (line.length > 0){
      var testPair = line.split(' ');
      it(testPair[0] + ' should redirect to ' + testPair[1], function(done){
        http.get(url + testPair[0], function(response) {
          expect(response.statusCode).toEqual(301);
          expect(response.headers.location).toEqual(testPair[1]);
          done();
        });
      });
    }
  });
});
