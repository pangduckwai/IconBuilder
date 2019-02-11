let dataOutline = [
	{"x": 146, "y": 158},
	{"x": 266, "y": 146},
	{"x": 276, "y": 148},
	{"x": 294, "y": 156},
	{"x": 308, "y": 166},
	{"x": 323, "y": 181},
	{"x": 334, "y": 194},
	{"x": 348, "y": 206},
	{"x": 364, "y": 215},
	{"x": 389, "y": 226},
	{"x": 410, "y": 234},
	{"x": 430, "y": 243},
	{"x": 447, "y": 251},
	{"x": 458, "y": 271},
	{"x": 459, "y": 284},
	{"x": 457, "y": 301},
	{"x": 448, "y": 316},
	{"x": 441, "y": 323},
	{"x": 431, "y": 330},
	{"x": 422, "y": 333},
	{"x": 420, "y": 333},
	{"x": 421, "y": 329},
	{"x": 413, "y": 300},
	{"x": 404, "y": 289},
	{"x": 393, "y": 280},
	{"x": 364, "y": 272},
	{"x": 335, "y": 280},
	{"x": 323, "y": 289},
	{"x": 314, "y": 300},
	{"x": 307, "y": 333},
	{"x": 307, "y": 340},
	{"x": 198, "y": 340},
	{"x": 199, "y": 333},
	{"x": 191, "y": 300},
	{"x": 182, "y": 289},
	{"x": 171, "y": 280},
	{"x": 142, "y": 272},
	{"x": 113, "y": 280},
	{"x": 101, "y": 289},
	{"x":  92, "y": 300},
	{"x":  85, "y": 329},
	{"x":  84, "y": 331},
	{"x":  68, "y": 322},
	{"x":  59, "y": 310},
	{"x":  53, "y": 296},
	{"x":  52, "y": 287},
	{"x":  52, "y": 282},
	{"x":  53, "y": 273},
	{"x":  57, "y": 262},
	{"x":  62, "y": 254},
	{"x":  70, "y": 247},
	{"x":  70, "y": 246},
	{"x":  46, "y": 236},
	{"x":  41, "y": 231},
	{"x":  40, "y": 226},
	{"x":  42, "y": 222},
	{"x":  45, "y": 219},
	{"x":  54, "y": 219},
	{"x":  93, "y": 224},
	{"x": 110, "y": 201},
	{"x": 131, "y": 167},
	{"x": 137, "y": 162}
];
let dataWin1 = [
	{"x": 213, "y": 172},
	{"x": 259, "y": 168},
	{"x": 267, "y": 170},
	{"x": 285, "y": 178},
	{"x": 299, "y": 188},
	{"x": 314, "y": 203},
	{"x": 325, "y": 216},
	{"x": 337, "y": 228},
	{"x": 341, "y": 234},
	{"x": 307, "y": 250},
	{"x": 198, "y": 250}
];
let dataWin2 = [
	{"x": 152, "y": 178},
	{"x": 195, "y": 174},
	{"x": 181, "y": 250},
	{"x": 169, "y": 250},
	{"x": 116, "y": 233}
];
let w1 = {"x": 364, "y": 329, "r": 41};
let w2 = {"x": 142, "y": 329, "r": 41};
let w3 = {"x": 207, "y": 272, "r": 8};

function draw(flag) {
	let width = 512; // COMMON

	// LOGO
	let scale = 2.1875;
	let height = 255.9375;
	let offsetX = (437.5 - width) / 2 / scale; //437.5 is original width of the image
	let offsetY = (height - width) / 2 / scale; //original height is same as width
	let sizeX = 200;
	let sizeY = 117;

	if (flag === 0) { // Draw icon background
		let back = d3.select("#viz").append("svg")
			.attr("viewBox", "0 0 108 108")
			.attr("preserveAspectRatio", "none");

		back.append("rect")
			.attr("x", 0).attr("y", 0)
			.attr("width", 108).attr("height", 108)
			.style("fill", "white");
		return;
	} else if ((flag === 1) || (flag === 2)) { // Draw icon foreground
		scale = 16/2.6875;
		height = 512; //before scale
		offsetX = 12; //after scale
		offsetY = 11; //after scale
		sizeX = 108;  //after scale
		sizeY = 108;  //after scale
	}

	let grph = d3.select("#viz").append("svg")
		.attr("viewBox", "0 0 " + sizeX + " " + sizeY)
		.attr("preserveAspectRatio", "none");

	if (flag === 2) {
		//This RECT is not part of the output, it is to indicate the visible area of round adaptive icons
		grph.append("rect")
			.attr("x", 18).attr("y", 18)
			.attr("width", 72).attr("height", 72)
			.style("fill", "white");
	}

	// Otherwise, draw foreground
	let lineObj1 = d3.line()
		.x(d => Math.round(d.x/scale + offsetX))
		.y(d => Math.round(d.y/scale + offsetY))
		.curve(d3.curveBasisClosed); //.alpha(alpha)  d3.curveBasisClosed d3.curveCardinalClosed.tension(0.5)

	let lineObj2 = d3.line()
		.x(d => Math.round(d.x/scale + offsetX))
		.y(d => Math.round(d.y/scale + offsetY));

	grph.append("path")
		.attr("d", lineObj1(dataOutline))
		.attr("stroke", "red")
		.attr("stroke-width", 1)
		.attr("fill", "red");

	grph.append("path")
		.attr("d", lineObj2(dataWin1))
		.attr("stroke", "lightblue")
		.attr("stroke-width", 1)
		.attr("fill", "lightblue");

	grph.append("path")
		.attr("d", lineObj2(dataWin2))
		.attr("stroke", "lightblue")
		.attr("stroke-width", 1)
		.attr("fill", "lightblue");

	grph.append("circle").style("fill", "red")
		.attr("r", Math.round(w1.r / scale))
		.attr("cx", Math.round(w1.x/scale + offsetX))
		.attr("cy", Math.round(w1.y/scale + offsetY));

	grph.append("circle").style("fill", "red")
		.attr("r", Math.round(w2.r / scale))
		.attr("cx", Math.round(w2.x/scale + offsetX))
		.attr("cy", Math.round(w2.y/scale + offsetY));

	grph.append("circle").style("fill", "lightgrey")
		.attr("r", Math.round(w3.r / scale))
		.attr("cx", Math.round(w3.x/scale + offsetX))
		.attr("cy", Math.round(w3.y/scale + offsetY));
};
