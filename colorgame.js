var numofsq=6;
var colors=generateColor(numofsq);
var squares=document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorD=document.getElementById("colorDisplay");
var messageD=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetG=document.querySelector("#reset");
var modes=document.querySelectorAll(".mode");

init();

function init()
{
	// mode buttons
	for(var i=0; i<modes.length; i++)
	{
	modes[i].addEventListener("click", function(){
		modes[0].classList.remove("selected");
		modes[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="Easy" ? numofsq =3:numofsq =6;
		reset();
		// how many squares to show
		// pick new colors
		// pick a new pickedColor
		// update page to reflect changes
	});
	}
}



function reset()
{
	// generate all new colors
	colors=generateColor(numofsq);
	// pick a new random color from array
	pickedColor= pickColor();
	// change colorD to match pickedColor
	colorD.textContent = pickedColor;
	resetG.textContent="New Colors";
	messageD.textContent="";
	for(var i=0; i<squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.display="block";
			// add initial colors to squares
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}

	}
	h1.style.backgroundColor="steelblue";
}

// reset all game
resetG.addEventListener("click", function(){
	reset();
});

colorD.textContent = pickedColor;

for(var i=0; i<squares.length; i++)
{
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click listeners to square
	squares[i].addEventListener("click", function(){
	// grab color of clicked square
	var clickedColor= this.style.backgroundColor;
	// compare color to pickedColor
	if(clickedColor===pickedColor)
	{
		messageD.textContent="Correct!";
		resetG.textContent="Play Again?"
		changeColor(clickedColor);
		h1.style.backgroundColor=clickedColor;
		
	}
	else
	{
		this.style.backgroundColor="#232323";
		messageD.textContent="Try Again";
	}
	});
}

// when the answer is correct, change all
function changeColor(color)
{
	// loop through all squares
	for(var i=0; i<colors.length; i++)
	{
	// change each color to match one
	squares[i].style.backgroundColor=color;
	}
}

// pick random color from the generated color arrays
function pickColor()
{
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

// generate color
function generateColor(num)
{
	// make an array
	var arr = [];
	// add num random colors to array
	for(var i=0; i< num; i++)
	{
		// get random color and push it to array
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

// related  to generate function to generate nums
function randomColor()
{
	// pick a "red" from 0 to 255
	var r = Math.floor(Math.random() *256);
	// pick a "green" from 0 to 255
	var g = Math.floor(Math.random() *256);
	// pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() *256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

// alternative of modes
// var easyB=document.querySelector("#easybtn");
// var hardB=document.querySelector("#hardbtn");


// // easy button clicked
// easyB.addEventListener("click", function(){
// 	easyB.classList.add("selected");
// 	hardB.classList.remove("selected");
// 	h1.style.backgroundColor="steelblue";
// 	numofsq =3;
// 	colors=generateColor(numofsq);
// 	pickedColor= pickColor();
// 	colorD.textContent = pickedColor;
// 	for(var i=0; i<squares.length; i++)
// 	{
// 		if(colors[i]){
// 		// add initial colors to squares
// 		squares[i].style.backgroundColor = colors[i];
// 		}
// 		else
// 		{
// 		squares[i].style.display = "none";	
// 		}
// 	}
// });

// // hard button clicked
// hardB.addEventListener("click",function(){
// 	hardB.classList.add("selected");
// 	easyB.classList.remove("selected");
// 	h1.style.backgroundColor="steelblue";	
// 	numofsq =6;
// 	colors=generateColor(numofsq);
// 	pickedColor= pickColor();
// 	colorD.textContent = pickedColor;
// 	for(var i=0; i<squares.length; i++)
// 	{
// 		// add initial colors to squares
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}	
// });