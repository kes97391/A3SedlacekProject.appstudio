
let cities = []
let finishedYet = false 
let moreCities = ""

while(finishedYet == false) {
  moreCities = prompt("Are you finished yet with adding cities? Yes or No?)
  if(moreCities == "No") {
  finishedYet = false 
  newCity = prompt("Add a new city please!")
  cities.push(newCity) 
} else {
  finishedYet = true 
  }
}
  
let i = 0 

while(i < cities.length) {

