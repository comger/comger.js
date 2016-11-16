/**
 * author comger@mgail.com
 * @module module 
 * manage modules 
 */

App = {};

App.init = function(path){
	this.modules = {};
	this.loadDefault();
	if(path){
		this.extendPath(path);	
	}
		
}

App.loadDefault = function(){

}

App.loader = function(object){
		
}

App.regist = function(json){
	 //regist json  as a new custom object type
}

App.extendPath = function(path){

}


module.exports = App;