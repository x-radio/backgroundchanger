let oldHexColor;
let hexColor;
const button = document.getElementById("btn");
const color = document.querySelector(".color");

const hexSymb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", ];
const colors = ["#ff5733", "#f9ff33", "#3371ff", "red", "green"];

button.addEventListener("click", ()=>{
	while((hexColor = generateHex()) == oldHexColor){
		continue;
	}
	oldHexColor = hexColor;
	document.body.style.backgroundColor = hexColor;
	color.textContent = hexColor;
});

function getRandomNumber(){
	return Math.floor(Math.random()*colors.length);
}

function generateHex(){
	let string = "#";
	for(let i = 0; i<6; i++)
	{
		string += hexSymb[Math.floor(Math.random()*hexSymb.length)];
	}
	return string;
}