describe('test1', function()  {
    it('should pass this test', function()  {
        expect(true).toEqual(true);
    });
});
 
describe('Testing some characters', function() {
    var chars = ['&', '\'', '"', '<', '>'];
    for(var i = 0; i < chars.length; i+=1) {
        currentChar = chars[i];
        it('should reject ' + currentChar, (function(currentChar) {
            expect(false).toEqual(false);
        })(currentChar));
    }
});
 
