
function textBoxKeyPress(e,form)
{
	var searchWord=document.getElementById("searchBox").value;
	d3.selectAll(".searched").classed("searched",false);
	if (searchWord.length<1) return;
	console.log("---------------");
	console.log(searchWord);
	
	console.log(meshwork_graphData);
	var re=new RegExp(searchWord,"i");
	d3.selectAll(".node").filter(function(d){
		return 	d.name.match(re) != null;
	}).classed("searched",true);
	console.log(d3.selectAll(".node.searched"));
	
}
