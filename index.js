function dwarfRollCall(dwarves) {

 var dwarvesNames = "";
for (var i=0; i<dwarves.length; i++){
dwarvesNames += `${i+1}. ${dwarves[i]} `;
}
 return dwarvesNames;
 }
 

function summonCaptainPlanet(planeteerCalls){

var caps = []
for (var i=0; i<planeteerCalls.length; i++){
  caps.push(planeteerCalls[i].toUpperCase()+'!')
}
return caps 
}
  

function longPlaneteerCalls(words) {
  
var moreWords = false;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4){
      moreWords = true;
    }
  }
  return moreWords;
}

function findTheCheese (foods) {
	var cheeses = ["cheddar", "gouda", "camembert"];
	for (var i = 0; i < foods.length; i++) {
		for (var j = 0; j < cheeses.length; j++) {
			if ( cheeses[j]=== foods[i] ) {
				return foods[i]; 
			}
		}
	}
	return "no cheese!"; 
}