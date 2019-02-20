
function draw() {
	let width = 320; // COMMON
	scale = 1;
	height = 320; //before scale
	offsetX = 12; //after scale
	offsetY = 11; //after scale
	sizeX = 320;  //after scale
	sizeY = 320;  //after scale

	
	let grph = d3.select("#viz").append("svg")
		.attr("viewBox", "0 0 " + sizeX + " " + sizeY)
		.attr("preserveAspectRatio", "none");

	grph.append("rect")
		.attr("x", 3).attr("y", 2)
		.attr("width", 234).attr("height", 232)
		.attr("rx", 21).attr("ry", 21)
		.style("fill", "#f7f4b4");

	grph.append("rect")
		.attr("x", 3).attr("y", 2)
		.attr("width", 234).attr("height", 93)
		.attr("rx", 21).attr("ry", 21)
		.style("fill", "#6b4d3e");

	grph.append("rect")
		.attr("x", 3).attr("y", 72)
		.attr("width", 234).attr("height", 30)
		.style("fill", "#f7f4b4");

	grph.append("line")
		.attr("x1", 34).attr("y1", 72)
		.attr("x2", 34).attr("y2", 234)
		.attr("stroke-width", 2)
		.attr("stroke", "#e96323");

	grph.append("line")
		.attr("x1", 43).attr("y1", 72)
		.attr("x2", 43).attr("y2", 234)
		.attr("stroke-width", 2)
		.attr("stroke", "#f0a963");

	grph.append("line")
		.attr("x1", 3).attr("y1", 100)
		.attr("x2", 237).attr("y2", 100)
		.attr("stroke-width", 2)
		.attr("stroke", "#80b49c");

	grph.append("line")
		.attr("x1", 3).attr("y1", 128)
		.attr("x2", 237).attr("y2", 128)
		.attr("stroke-width", 2)
		.attr("stroke", "#80b49c");

	grph.append("line")
		.attr("x1", 3).attr("y1", 156)
		.attr("x2", 237).attr("y2", 156)
		.attr("stroke-width", 2)
		.attr("stroke", "#80b49c");

	grph.append("line")
		.attr("x1", 3).attr("y1", 184)
		.attr("x2", 237).attr("y2", 184)
		.attr("stroke-width", 2)
		.attr("stroke", "#80b49c");

	grph.append("line")
		.attr("x1", 3).attr("y1", 212)
		.attr("x2", 237).attr("y2", 212)
		.attr("stroke-width", 2)
		.attr("stroke", "#80b49c");

	grph.append("text").text("Secret")
		.attr("x", 37).attr("y", 125)
		.style("fill", "black")
		.style("font-size", "49px")
		.style("font-family", "Comic Sans MS")
		.style("font-weight", "bold");

	grph.append("text").text("Pad")
		.attr("x", 37).attr("y", 179)
		.style("fill", "black")
		.style("font-size", "49px")
		.style("font-family", "Comic Sans MS")
		.style("font-weight", "bold");

}