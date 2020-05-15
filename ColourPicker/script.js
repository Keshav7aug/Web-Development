var colors = [];

var sqr = document.querySelectorAll(".square");
var pickdCol = pckcolors();
var coldisp = document.getElementById("disp");
var msgDsp = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var rst = document.querySelector("#rst");
var num=6;
var modes = document.querySelectorAll(".mode");
init();
function init()
{
	givCols(num);
	for(var i =0; i<modes.length;++i)
	{
		console.log(i);
		modes[i].addEventListener("click",function(){
			for(var j =0;j<modes.length;++j){
				modes[j].classList.remove("selected");
			}
			
			if(this.textContent==="EASY"){
			num=3;}
			else{
				num=6;
			}
			this.classList.add("selected");
			givCols(num);
		});
	};
}
	

function givCols(num)
{
	//console.log(num);
	rst.textContent = "NEW COLORS";
	msgDsp.textContent = "";
	colors = genRanCol(num);
	pickdCol = pckcolors();
	coldisp.textContent = pickdCol;
	h1.style.backgroundColor = "steelblue";
	for(var i=0;i<num;++i)
	{
		sqr[i].style.backgroundColor=colors[i];
		
		sqr[i].addEventListener("click",function(){
			var clkcol = this.style.backgroundColor;
			if(clkcol ===pickdCol){
				rst.textContent = "Play Again?";
				chngCol(pickdCol);
				h1.style.backgroundColor = pickdCol;
				msgDsp.textContent = "Correct!";
			}
			else{
				this.style.backgroundColor="#232323";
				msgDsp.textContent = "Try again";
			}
		});
	}
	for(;i<6;++i)
	{
		sqr[i].style.backgroundColor="#232323";
	}
}
//givCols(num);
rst.addEventListener("click",function(){
	
	givCols(num);
});


function chngCol(color){
	for(var i=0;i<num;++i)
	{
		sqr[i].style.backgroundColor = color;
	}
}

function pckcolors(){
	var rN = Math.floor(Math.random()*colors.length);
	return colors[rN];
}

function genRanCol(num){
	val = [];
	for(var i=0;i<num;++i)
	{
		val.push(randomColor());
	}
	return val;
}

function randomColor(){
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		var ans = "rgb(" + r + ", " + g + ", " + b +")";
		return ans;
}