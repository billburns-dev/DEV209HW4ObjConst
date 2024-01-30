// code for immediate execution ... does NOT wait for DOM to completely load (START)
// create Food object constructor
let Food = function(paraName, paraCalories) {
  this.name = paraName;
  this.calories = parseInt(paraCalories);
};
// define an array to store the Food objects
FoodArray =[]; 
// code for immediate execution ... does NOT wait for DOM to completely load (END)

// code that waits for DOM to be completely loaded before executing (START)
// wait until DOM loads to clear user input fields
document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("updateTotalCal").addEventListener("click", function () {
    // clear user input fields
    document.getElementById("foodName").value = "";
    document.getElementById("numCal").value = "";
  });
});
// code that waits for DOM to be completely loaded before executing (END)

// code that executes upon form submission (START)
function formSubmit() {
  // retrieve user input
  let tempName = document.getElementById("foodName").value;
  let tempCalories = document.getElementById("numCal").value;
  
  // store current Food object in the array
  FoodArray.push( new Food(tempName, tempCalories));

  // calculate the current sum of all calories in FoodArray
  let calcTotalCal = 0;
  for (i = 0; i < FoodArray.length; i++) {
    calcTotalCal += FoodArray[i].calories;
  }
  
  // write the total calories to the textarea
  document.getElementById("totalCal").value = calcTotalCal; 

  console.log(FoodArray);
}
// code that executes upon form submission  (END)
