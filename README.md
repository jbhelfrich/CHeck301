# README #
This is an automated script to test 301 redirects in bulk.  There are both pure node and jasmine-node implementations.  This script only accesses the original URL and checks that the location header returns the expected result.  It DOES NOT check the page redirected to.  It can be easily modified to check for other response codes.

## USAGE ##

### redirectTest.js ###
1. Install node
2. Clone this repository
3. npm install
4. Create a redirects.txt file as listed below.
5. Edit redirectTest.js to specify the base URL and enable/disable reporting comments.
6. node redirectTest.js

The script will check each line in redirects.txt, requesting the first page, checking that the response code is 301, and checking that the location header matches the second parameter.  It prints 'DONE' when all checks have been run, but any errors on those last few requests may come back after that point.

### redirectSpec.js ###
1. Install node
2. Clone this repository
3. npm install jasmine-node -g
4. Create a redirects.txt file as listed below.
5. Edit redirectsSpec.js to specufy the base URL
6. jasmine-node redirectSpec.js

This script performs the same checks as the previous, but it uses jasmine-node's structure for reporting.  It can also be easily extended with jasmine-node's matchers

### redirects.txt ###
This file should have the pairs to be tested, one pair per line, in the following format.

```
/path/to/old/resource/1 http://www.example.com/new/path/to/resource/1
/path/to/old/resource/2 http://www.example.com/new/path/to/resource/2
/path/to/old/resource/3 http://www.example.com/new/path/to/resource/3
```