/**
    author comger@mgail.com
**/

var Comger = require('../../src/comger.js');


describe('load', function(){

    it('is version ok?', function(){
        expect(Comger.version).toEqual('0.0.1');
    })
    
});

