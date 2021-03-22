
const scene = new Scene();
scene.camera.projPerspective();

scene.addModel(new   Cube());
scene.addModel(new  Cube2());
scene.addModel(new Circle());
scene.addModel(new CylinderSector());

for (const m of scene.modelList) {
	ModelShading.setColor(m, "#0000FF");
	m.visible = false;
	for(const vertex of m.vertexList) {
		vertex.z -= 3.0;
	}
}

const axes = new Axes2D(-10,10,-10,10,-8,11,11);
ModelShading.setColor(axes, "#FF0000");
scene.addModel(axes);
for(const vertex of axes.vertexList) {
	vertex.z -= 1.0;
}

// currentModel will cycle through all but
// the last mode, the axes
let currentModel = 0;
scene.modelList[currentModel].visible = true;

console.log(scene);
print_help_message();

const cn = document.getElementById("pixels");
const ctx = cn.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
//ctx.clearRect(0, 0, cn.width, cn.height);
//ctx.fillStyle = "black";
//ctx.fillRect(0, 0, cn.width, cn.height);
Pipeline.render(scene, cn);

document.addEventListener('keypress', keyPressed);

function keyPressed(event) {
	//console.log(event.code);
	//console.log(event.key);
	//console.log(event.keyCode);
	//console.log(event.charCode);
	const c = event.key;
	if ('h' == c) {
		print_help_message();
	}
	else if ('d' == c) {
		// nothing yet
	}
	else if ('p' == c) {
		scene.camera.perspective = ! scene.camera.perspective;
		let p = scene.camera.perspective ? "perspective" : "orthographic";
		console.log("Using " + p + " projection");
	}
	else if ('s' == c) {
		for(const v of scene.modelList[currentModel].vertexList) {
			v.x /= 1.1;
			v.y /= 1.1;
			v.z /= 1.1;
		}
	}
	else if ('S' == c) {
		for(const v of scene.modelList[currentModel].vertexList) {
			v.x *= 1.1;
			v.y *= 1.1;
			v.z *= 1.1;
		}
	}
	else if ('x' == c) {
		for(const v of scene.modelList[currentModel].vertexList) {
			v.x -= 0.1;
		}
	}
	else if ('y' == c) {
		for(const v of scene.modelList[currentModel].vertexList) {
			v.y -= 0.1;
		}
	}
	else if ('z' == c) {
		for(const v of scene.modelList[currentModel].vertexList) {
			v.z -= 0.1;
		}
	}
	else if ('X' == c) {
		for(const v of scene.modelList[currentModel].vertexList) {
			v.x += 0.1;
		}
	}
	else if ('Y' == c) {
		for(const v of scene.modelList[currentModel].vertexList) {
			v.y += 0.1;
		}
	}
	else if ('Z' == c) {
		for(const v of scene.modelList[currentModel].vertexList) {
			v.z += 0.1;
		}
	}
	else if ('c' == c) {
		ModelShading.setRandomColor( scene.modelList[currentModel] );
	}
	else if ('C' == c) {
		ModelShading.setRandomVertexColors( scene.modelList[currentModel] );
	}
	else if ('e' == c) {
		ModelShading.setRandomLineSegmentColors( scene.modelList[currentModel] );
	}
	else if ('E' == c) {
		ModelShading.setRainbowLineSegmentColors( scene.modelList[currentModel] );
	}
	else if ('/' == c) {
		scene.modelList[currentModel].visible = false;
		currentModel = (currentModel + 1) % (scene.modelList.length - 1);
		scene.modelList[currentModel].visible = true;
	}
	else if ('?' == c) {
		scene.modelList[currentModel].visible = false;
		--currentModel;
		if (currentModel < 0) currentModel = scene.modelList.length - 2;
		scene.modelList[currentModel].visible = true;
	}

	const cn = document.getElementById("pixels");
	const ctx = cn.getContext("2d");
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	//ctx.clearRect(0, 0, cn.width, cn.height);
	//ctx.fillStyle = "black";
	//ctx.fillRect(0, 0, cn.width, cn.height);
	Pipeline.render(scene, cn);
}


function print_help_message()
{
	console.log("Use the 'd/D' keys to toggle debugging information on and off for the current model.");
	console.log("Use the '/' key to cycle through the models.");
	console.log("Use the 'p' key to toggle between parallel and orthographic projection.");
	console.log("Use the x/X, y/Y, z/Z, keys to translate the model along the x, y, z axes.");
	console.log("Use the s/S keys to scale the size of the model.");
	console.log("Use the 'c' key to change the random solid model color.");
	console.log("Use the 'C' key to randomly change model's colors.");
	console.log("Use the 'e' key to change the random solid edge colors.");
	console.log("Use the 'E' key to change the random edge colors.");
	console.log("Use the 'h' key to redisplay this help message.");
}
