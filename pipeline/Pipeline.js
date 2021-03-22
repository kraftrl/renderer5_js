/*

*/

/**

*/
class Pipeline {

	/**

	*/
	static render(scene, cn) {

		// Render every Model in the Scene.
		for(const model of scene.modelList) {
			if( model.visible ) {
				// 1. Apply the projection transformation.
				const model2 = Projection.project(model, scene.camera);

				// 2. Rasterize each visible line segment into pixels.
				for(const ls of model2.lineSegmentList) {
					Rasterize.rasterize(model2, ls, cn);
				}
			}
		}
	}
}
