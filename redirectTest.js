/* Check a provided list of URL pairs for redirection.
 * redirects.txt should have one line per redirect, with the url to
 * be requested and the URL to be redirected to seperated by a space.
 */

var url = "http://myotest-qa.gaiam.com",
    testPair = [],
    http = require('http'),
    lineReader = require('line-reader');

function check301(source, destination){
  var options = {
    hostname: 'myotest-qa.gaiam.com',
    port: 80,
    path: source,
    method: 'GET',
}
  var request = http.request(options, function(response){
    if (response.statusCode != 301 || 
        response.headers.location != destination){
      console.log(source + ' does not redirect to ' + destination);
    } else {
      //console.log(source + ' passed!');
    }
  }).on('error', function(e){
    console.log(e.message);
    console.log(e.stack);
  });
  request.end();
}

/* 
//Unthrottled version. Use with caution.
lineReader.eachLine('redirects.txt', function(line){
  testPair = line.split(' ');
  check301(testPair[0], testPair[1]);
  console.log(line);
});

*/
//Throttled version. 
lineReader.open('redirects.txt', function(reader){
  var interval = setInterval(function(){
    if(reader.hasNextLine()){
      reader.nextLine(function(line){
        testPair = line.split(' ');
        check301(testPair[0], testPair[1]);
      });
    } else {
      clearInterval(interval);
      console.log('Done');
    }
  }, 200);
});
