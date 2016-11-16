
var vaild = require('../../lib/vaild.js');

var json = {
	 'camera':{},
	 'scene':{
	 		'object':[
	 			{'type':'Mesh'},
	 			{'type1':'Mesh'},
	 		]
	 }
};

describe('app', function(){

    it('is json format ok?', function(){
        
    		expect(vaild.appJson(json)).toEqual(true);

    })

    it('is json object ok?', function(){
        
    		expect(vaild.appJsonScene(json)).toEqual(true);

    })
    
});
