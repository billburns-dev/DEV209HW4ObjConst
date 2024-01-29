// code for immediate execution ... does NOT wait for DOM to completely load (START)

// create Constructor
let Food = function(paraName, paraCalories) {
  this.name = paraName;
  this.calories = parseInt(paraCalories);
};

// define an array to store the Food objects
FoodArray =[]; 

// pre-load with 2 Food objects
let newFood1 = new Food("Banana",  20);
FoodArray.push(newFood1);
let newFood2 = new Food("Hot Dog", 450);
FoodArray.push(newFood2);

// code for immediate execution ... does NOT wait for DOM to completely load (END)


// code that waits for DOM to be completely loaded before executing (START)

document.addEventListener("DOMContentLoaded", function (event) {
  
  console.log(FoodArray);
  
  food1Name = FoodArray[0].name;
  food1Calories = FoodArray[0].calories;

  food2Name = FoodArray[1].name;
  food2Calories = FoodArray[1].calories;

  console.log("food1Name = ", food1Name, "\r\n");
  console.log("food2Name = ", food2Name, "\r\n");
  console.log("food1Calories = ", food1Calories, "\r\n");
  console.log("food2Calories = ", food2Calories, "\r\n");
  
  let calcTotalCal = 0;
  for (i = 0; i < FoodArray.length; i++) {
    calcTotalCal += FoodArray[i].calories;
  }
  console.log(calcTotalCal);
  document.getElementById("totalCal").value = calcTotalCal;  // write the total calories to the textarea
 
  /*
  // code that executes when button with Id = "updateTotalCal" is clicked (START)
  document.getElementById("updateTotalCal").addEventListener("click", function () {
    console.log(FoodArray);
    let calcTotalCal = 0;
    for (i = 0; i < FoodArray.length; i++) {
      calcTotalCal += FoodArray[i].calories;
    }
    console.log(calcTotalCal);
    document.getElementById("totalCal").value = calcTotalCal;  // write the total calories to the textarea
  }); 
  // code that executes when button with Id = "updateTotalCal" is clicked (START) */
  
});
// code that waits for DOM to be completely loaded before executing (END)


// code that executes upon form submission  (START)
function formSubmit() {
  // retrieve user input
  let tempName = document.getElementById("foodName").value;
  let tempCalories = document.getElementById("numCal").value;
  
  // store current Food object in the array
  FoodArray.push( new Food(tempName, tempCalories));
  
  // clear text boxes
  //document.getElementById("foodName").value = "";
  //document.getElementById("numCal").value = "";
}
// code that executes upon form submission  (END)


