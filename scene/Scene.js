/*

*/

/**

*/
class Scene {

	/**

	*/
	constructor(camera = new Camera()) {
		this.camera = camera;
		this.modelList = [];
	}


	/**

	*/
	setCamera(camera) {
		this.camera = camera;
	}


	/**

	*/
	addModel() {
		for(const m of arguments) {
	    	this.modelList.push(m);
	  	}
	}


	/**

	*/
	getModel(index) {
		return this.modelList[index];
	}


	/**

	*/
	getModelList() {
		return this.modelList;
	}
}
