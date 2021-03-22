/*

*/

/**

*/
class ModelShading {

	/**

	*/
	static setColor(model, c) {
		if(model.colorList.length == 0) {
			for(const v of model.vertexList) {
				model.colorList.push(c);
			}
		}
		else {
			for(let i = 0; i < model.colorList.length; ++i) {
				model.colorList[i] = c;
			}
		}
	}


	/**

	*/
	static setRandomColor(model) {
		ModelShading.setColor( model, ModelShading.randomColor() );
	}


	/**

	*/
	static setRandomColors(model) {
		if(model.colorList.length == 0) {
			setRandomVertexColors();
		}
		else {
			for(let i = 0; i < model.colorList.length; ++i) {
				model.colorList[i] = ModelShading.randomColor();
			}
		}
	}


	/**

	*/
	static setRandomVertexColors(model) {
		model.colorList = [];

		for(const v of model.vertexList) {
			model.colorList.push( ModelShading.randomColor() );
		}

		for(const ls of model.lineSegmentList) {
			ls.cIndex[0] = ls.vIndex[0];
			ls.cIndex[1] = ls.vIndex[1];
		}
	}


	/**

	*/
	static setRandomLineSegmentColors(model) {
		model.colorList = [];
		let index = 0;
		for(const ls of model.lineSegmentList) {
			model.colorList.push( ModelShading.randomColor() );
			ls.cIndex[0] = index;
			ls.cIndex[1] = index;
			++index;
		}
	}


	/**

	*/
	static setRainbowLineSegmentColors(model) {
		model.colorList = [];
		let index = 0;
		for(const ls of model.lineSegmentList) {
			model.colorList.push( ModelShading.randomColor() );
			model.colorList.push( ModelShading.randomColor() );
			ls.cIndex[0] = index;
			ls.cIndex[1] = index + 1;
			index += 2;
		}
	}


	/**

	*/
	static randomColor() {
		let color = '#';
		const letters = '0123456789ABCDEF';
		for (let h = 0; h < 6; ++h) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
}
