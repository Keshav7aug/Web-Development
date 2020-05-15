var p1bt = document.querySelector("#p1");
var p2bt = document.getElementById("p2");
var rst = document.getElementById("rst");
var p1D = document.querySelector("#p1D");
var p2D = document.querySelector("#p2D");
var inp = document.querySelector("input[type=number]");
var winScD = document.querySelector("p span");
var plscore=0;
var p2score=0;
var gmOver=false;
var winScr=5;

p1bt.addEventListener("click",function(){
	if(!gmOver)
	{
		plscore++;
		p1D.textContent = plscore;
	}
	if(plscore>=winScr)
	{
		gmOver=true;
		p1D.classList.add("winner");
	}
	//console.log(plscore);
});
p2bt.addEventListener("click",function(){
	if(!gmOver)
	{
		p2score++;
		p2D.textContent = p2score;
	}
	if(p2score>=winScr)
	{
		gmOver=true;
		p2D.classList.add("winner");
	}
	//console.log(p2score);
});


rst.addEventListener("click",reset);
//});
function reset(){
	plscore=0;
	p2score=0;
	p1D.textContent = plscore;
	p2D.textContent = p2score;
	gmOver=false;
	p1D.classList.remove("winner");
p2D.classList.remove("winner");}
//console.log(plscore);}
inp.addEventListener("change",function(){
	reset();
	winScr = Number(inp.value);
winScD.textContent = winScr;});
//winScr = };
