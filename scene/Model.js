/*

*/

/**

*/
class Model {

	/**

	*/
	constructor(name = "",
				vertexList = [],
				lineSegmentList = [],
				colorList = [],
				visible = true,
				debug = false)
	{
		this.name = name;
		this.vertexList = vertexList;
		this.lineSegmentList = lineSegmentList;
		this.colorList = colorList;
		this.visible = visible;
		this.debug = debug;
	}


	/**

	*/
	addVertex() {
		for(const v of arguments) {
			this.vertexList.push(v);
		}
	}


	/**

	*/
	addLineSegment() {
		for(const ls of arguments) {
			this.lineSegmentList.push(ls);
		}
	}


	/**

	*/
	addColor() {
		for(const c of arguments) {
			this.colorList.push(c);
		}
	}
}
