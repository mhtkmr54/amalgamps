//----------------	vertical and horizontal alignment-----------------
function verticalAlign(id,n,type){
	x = document.getElementById(id);
	x.style.position = type;
	x.style.top = (1-(x.clientHeight/window.innerHeight))*n+"%";
}
function verticalAlignC(cl,n,type){
	x = document.getElementsByClassName(cl);
	for (var i = x.length - 1; i >= 0; i--) {	
		x[i].style.position = type;
		x[i].style.top = (1-(x[i].clientHeight/window.innerHeight))*n+"%";
	};
}
function horizontalAlignC(cl,n,type){
	x = document.getElementsByClassName(cl);
	for (var i = x.length - 1; i >= 0; i--) {	
		x[i].style.position = type;
		x[i].style.left = (1-(x[i].clientWidth/window.innerWidth))*n+"%";
	};
}
function horizontalAlign(id,n,type){
	x = document.getElementById(id);
	x.style.position = type;
	x.style.left = (1-(x.clientWidth/window.innerWidth))*n+"%";
}