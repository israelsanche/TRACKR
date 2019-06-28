var unirest = require('unirest');
var searchFood= "pizza";



var nutritionix = function() {unirest.get("https://nutritionix-api.p.rapidapi.com/v1_1/search/" + searchFood + "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat%2Cnf_total_carbohydrate%2Cnf_protein")
.header("X-RapidAPI-Host", "nutritionix-api.p.rapidapi.com")
.header("X-RapidAPI-Key", "9aa87aedcbmsh547e179979dfd3cp155077jsn703e45a2e9c9")
.end(function (result) {
  // console.log(result.status, result.headers, result.body);
//   console.log(result.body.hits[0].fields);
  
// Result 1:
var nameOne= result.body.hits[0].fields.item_name;
var caloriesOne = result.body.hits[0].fields.nf_calories;
var fatOne = result.body.hits[0].fields.nf_total_fat;
var carbsOne = result.body.hits[0].fields.nf_total_carbohydrate;
var proteinOne = result.body.hits[0].fields.nf_protein

// Result 2:
var nameTwo= result.body.hits[1].fields.item_name;
var caloriesTwo = result.body.hits[1].fields.nf_calories;
var fatTwo = result.body.hits[1].fields.nf_total_fat;
var carbsTwo = result.body.hits[1].fields.nf_total_carbohydrate;
var proteinTwo = result.body.hits[1].fields.nf_protein
// Result 3:
var nameThree= result.body.hits[2].fields.item_name;
var caloriesThree = result.body.hits[2].fields.nf_calories;
var fatThree = result.body.hits[2].fields.nf_total_fat;
var carbsThree = result.body.hits[2].fields.nf_total_carbohydrate;
var proteinThree = result.body.hits[2].fields.nf_protein
// Result 4:
var nameFour= result.body.hits[3].fields.item_name;
var caloriesFour = result.body.hits[3].fields.nf_calories;
var fatFour = result.body.hits[3].fields.nf_total_fat;
var carbsFour = result.body.hits[3].fields.nf_total_carbohydrate;
var proteinFour = result.body.hits[3].fields.nf_protein
// Result 5:
var nameFive= result.body.hits[4].fields.item_name;
var caloriesFive = result.body.hits[4].fields.nf_calories;
var fatFive = result.body.hits[4].fields.nf_total_fat;
var carbsFive = result.body.hits[4].fields.nf_total_carbohydrate;
var proteinFive = result.body.hits[4].fields.nf_protein

  console.log("Result 1: " + nameOne + "\nHas nutrition of: \n Calories: " + caloriesOne + "\n Fat: "+ fatOne+ "\n Carbs: " + carbsOne + "\n Protein: " + proteinOne)
  console.log("Result 2: " + nameTwo + "\nHas nutrition of: \n Calories: " + caloriesTwo + "\n Fat: "+ fatTwo+ "\n Carbs: " + carbsTwo + "\n Protein: " + proteinTwo)
  console.log("Result 3: " + nameThree + "\nHas nutrition of: \n Calories: " + caloriesThree + "\n Fat: "+ fatThree+ "\n Carbs: " + carbsThree + "\n Protein: " + proteinThree)
  console.log("Result 4: " + nameFour + "\nHas nutrition of: \n Calories: " + caloriesFour + "\n Fat: "+ fatFour+ "\n Carbs: " + carbsFour + "\n Protein: " + proteinFour)
  console.log("Result 5: " + nameFive + "\nHas nutrition of: \n Calories: " + caloriesFive + "\n Fat: "+ fatFive+ "\n Carbs: " + carbsFive + "\n Protein: " + proteinFive)

});}
nutritionix();
module.exports = nutritionix;

