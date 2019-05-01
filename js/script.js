
var store = [];
const ballNum = 56;  // Numbers of balls to be generated

var selectedNum;
for (let x =0; x < ballNum; x++){

 var div = document.createElement('Div');
      
	  div.onclick = function(){ 
	  
	  selectedNum = x + 1;
	  
	  if (store.length <= 5){
	  selectBall(selectedNum); 
	  document.getElementsByTagName("div")[x].style.backgroundColor="blue";
	  } else{
	    alert("you have selected the maximum amount of balls");
	  }
	  };
  
	  var me = document.getElementById('ballSection').appendChild(div);

	  
	  me.innerHTML= x + 1;
	  //console.log(div);
}

// function reseting  random sellect and her background 
function resetBallbg() {
  var c = document.getElementById('ballSection').children;
  var i;
  for (i = 0; i < c.length; i++) {
    c[i].style.backgroundColor = "red";
  }
  	randPick = [];
	store = [];
}

// Random Ball Select
var randPick = []
function generateNum(x){

	resetBallbg();
	var loopCount = (x)? x : 6;
	for (i=0; i<loopCount; i++){
	
	var divC = document.getElementById('ballSection').querySelectorAll("div");
    var sellect = Math.floor((Math.random() * parseInt(divC.length)) + 0);
	var pick = document.getElementById('ballSection').children[sellect].innerHTML;
	
	if (randPick.includes(pick)){
	console.log(pick + " Exist in the array to be replaced by new pick number");
	var sellect = Math.floor((Math.random() * parseInt(divC.length)) + 0);
	var pick = document.getElementById('ballSection').children[sellect].innerHTML;
	console.log(pick +" is the new picked number");
	}
	randPick.push(pick);
	store.push(pick);
	document.getElementById('ballSection').children[sellect].style.backgroundColor="blue";
	
	//console.log(randPick);
	

}



}

  function selectBall(x){
   store.push(x);
   console.log("You pressed number #" + x);
   console.log("Total Ball Selected #" + store);
   localStorage.setItem("gameNum", store);
   
  
  }
  