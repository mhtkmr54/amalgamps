var count = 2;
var togglePlayState = function(id){
	var s="";	
	s = document.getElementsByClassName(id)[0].style.WebkitAnimationPlayState;	
	console.log("inside TPS");
	// console.log(s=="");
	if(s=="" || s=="paused"){
		s = "running";
	}
	else if(s=="running"){
		s="paused";
	}
	for (var i=0;i<count;i++){
		document.getElementsByClassName(id)[i].style.WebkitAnimationPlayState=s;		
	}
	// console.log(s);
}
var resetAnimation = function(id){
	// for(var i=0;i<count;i++){
	// 	document.getElementsByClassName(id)[i].style.WebkitAnimationPlayState="initial";
	// }
	location.reload(false);
}
var clearRovers = function(){
	$(".rovers").hide();
	location.reload(false);
}
var test = function(a){
	var x=0,y=0;
	x = a.clientX;
	y = a.clientY;
	alert('('+x+', '+y+')');
}
var createRover = function(a){
	var x=0,y=0;
	x = a.clientX;
	y = a.clientY;
	var n = $("<img>").attr("src","img/rover2.png");
	// n.style.top = y+"px";
	console.log(x+", "+y);
	console.log(y+"px");
	var sy = y+"px";	
	$("#rovers_div").append(n);
}
var animateRover = function(){
	
	// var x = document.getElementById("r1");
	// console.log(r.style.top);
	r = document.getElementById("r2");
	console.log(r);
	for(var x=370;x<=930;x++){
		setTimeout(function(){
			r.style.top = 200+"px"
		},10);
		// console.log(r.style.top);
	}
}
animateRover();