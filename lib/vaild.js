/**
   author comger@gmail.com
**/

Vaild = {};

Vaild.appJson = function(json){
		// vaild app input farmat and data
		console.log(json,json.scene.object.length);
		if(!json.camera || !json.scene){
			  return false;
		}

		if(json.scene.object.length<1){
				return false
		}

		return true
}

Vaild.appJsonScene = function(json){
		// vaild app input farmat and data
		for(var i in json.scene.object){
				if(!json.scene.object[i].type){
						return false;
				}
		}

		return true
}


module.exports = Vaild;