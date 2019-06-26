var unirest = require('unirest');
var searchFood= "pizza";
var resultCalories = "";


var nutritionix = function() {unirest.get("https://nutritionix-api.p.rapidapi.com/v1_1/search/" + searchFood + "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat%2Cnf_total_carbohydrate%2Cnf_protein")
.header("X-RapidAPI-Host", "nutritionix-api.p.rapidapi.com")
.header("X-RapidAPI-Key", "9aa87aedcbmsh547e179979dfd3cp155077jsn703e45a2e9c9")
.end(function (result) {
  // console.log(result.status, result.headers, result.body);
  console.log(result.body.hits[0].fields);
  resultCalories=result.body.hits[0].fields.nf_calories;
  // console.log(result.body.hits[1].fields);
  // console.log(result.body.hits[2].fields);
  // console.log(result.body.hits[3].fields);
  // console.log(result.body.hits[4].fields);
  console.log("the food you selected: " + result.body.hits[0].fields.item_name + "\nHas nutrition of: \n Calories: " + result.body.hits[0].fields.nf_calories + "\n Fat: "+ result.body.hits[0].fields.nf_total_fat + "\n Carbs: " + result.body.hits[0].fields.nf_total_carbohydrate + "\n Protein: " + result.body.hits[0].fields.nf_protein)
});}
nutritionix();
module.exports = nutritionix;

