"use strict"
function DayTrip( result,Destination,Trans,Entertainment) {
  if(i>=0) return(result[i]);
console.log(`Events ${result}, ${Destination},${Trans}, ${Entertainment}`);}

let result = ['Dennys', 'Mcdonalds', 'steak44' ,'Chickfila', 'Ocean77' , 'OliveGuarden']
   var random = Math.floor(Math.random() * 5) +1 ; 
   let i = random
  console.log("Resturant "+ result [i]);

{let Destination = ['Tempe', 'California', 'Las Vegas' ,'Phoenix', 'Mexico' , 'Buckeye' ]
var random = Math.floor(Math.random() * 5) +1 ;
let i = random
function DayTrip(){ return result[i];} 
//console.log(random)

{let Trans = ['Car', 'walking', 'air plane' ,'run', 'Dirt bike' , 'Truck' ]
let i = random
//console.log(Trans.length)
 console.log("Transportation "+ Trans[i])
var random = Math.floor(Math.random() * 5) +1 ; 
function DayTrip() { return(Trans[i]);}
//console.log(random)

{let Entertainment = ['Danceing', 'Music', 'Wine' ,'Beach', 'Fire' , 'Strippers' ]
let i = random
function DayTrip(){ return(Entertainment[i]);
}//console.log(Entertainment.length)
 console.log("Entertanment "+Entertainment[i])

 let yes= 1; prompt(`Are you satisfied with your trip? 
 Resturant ${result[i]} 
 Destination ${Destination[i]}
 Transportation ${Trans[i]}
 Entertainment ${Entertainment[i]}`);
  if (yes=yes)alert("Itinarary Ready!");
 else if (yes=no)prompt("what feature would you like to change")

 }
}
}

//Destination, Resturant, Transporttation, Entertainment,