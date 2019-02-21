
function draw() {
	let width = 480; // COMMON
	scale = 1;
	height = 480; //before scale
	offsetX = 12; //after scale
	offsetY = 11; //after scale
	sizeX = 480;  //after scale
	sizeY = 480;  //after scale

	
	let grph = d3.select("#viz").append("svg")
		.attr("viewBox", "0 0 " + sizeX + " " + sizeY)
		.attr("preserveAspectRatio", "none");

	grph.append("rect")
		.attr("x", 83).attr("y", 82)
		.attr("width", 234).attr("height", 232)
		.attr("rx", 21).attr("ry", 21)
		.style("fill", "#f7f4b4");

	grph.append("rect")
		.attr("x", 83).attr("y", 82)
		.attr("width", 234).attr("height", 93)
		.attr("rx", 21).attr("ry", 21)
		.style("fill", "#6b4d3e");

	grph.append("rect")
		.attr("x", 83).attr("y", 152)
		.attr("width", 234).attr("height", 30)
		.style("fill", "#f7f4b4");

	grph.append("line")
		.attr("x1", 114).attr("y1", 152)
		.attr("x2", 114).attr("y2", 314)
		.attr("stroke-width", 2)
		.attr("stroke", "#e96323");

	grph.append("line")
		.attr("x1", 123).attr("y1", 152)
		.attr("x2", 123).attr("y2", 314)
		.attr("stroke-width", 2)
		.attr("stroke", "#f0a963");

	grph.append("line")
		.attr("x1", 83).attr("y1", 180)
		.attr("x2", 317).attr("y2", 180)
		.attr("stroke-width", 2)
		.attr("stroke", "#80b49c");

	grph.append("line")
		.attr("x1", 83).attr("y1", 208)
		.attr("x2", 317).attr("y2", 208)
		.attr("stroke-width", 2)
		.attr("stroke", "#80b49c");

	grph.append("line")
		.attr("x1", 83).attr("y1", 236)
		.attr("x2", 317).attr("y2", 236)
		.attr("stroke-width", 2)
		.attr("stroke", "#80b49c");

	grph.append("line")
		.attr("x1", 83).attr("y1", 264)
		.attr("x2", 317).attr("y2", 264)
		.attr("stroke-width", 2)
		.attr("stroke", "#80b49c");

	grph.append("line")
		.attr("x1", 83).attr("y1", 292)
		.attr("x2", 317).attr("y2", 292)
		.attr("stroke-width", 2)
		.attr("stroke", "#80b49c");

	grph.append("text").text("Secret")
		.attr("x", 117).attr("y", 205)
		.style("fill", "black")
		.style("font-size", "49px")
		.style("font-family", "Comic Sans MS")
		.style("font-weight", "bold");

	grph.append("text").text("Pad")
		.attr("x", 117).attr("y", 259)
		.style("fill", "black")
		.style("font-size", "49px")
		.style("font-family", "Comic Sans MS")
		.style("font-weight", "bold");

	//

	grph.append("line")
		.attr("x1", 220).attr("y1", 260)
		.attr("x2", 220).attr("y2", 380)
		.attr("stroke-width", 1)
		.attr("stroke", "#646158");

	grph.append("line")
		.attr("x1", 218).attr("y1", 255)
		.attr("x2", 196).attr("y2", 240)
		.attr("stroke-width", 1)
		.attr("stroke", "#646158");

	grph.append("line")
		.attr("x1", 223).attr("y1", 256)
		.attr("x2", 385).attr("y2", 235)
		.attr("stroke-width", 1)
		.attr("stroke", "#646158");
}