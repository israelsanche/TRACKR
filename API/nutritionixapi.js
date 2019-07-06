

//on click for food search
$("#foodsubmit").on("click", function () {
  event.preventDefault();
  nutritionixajax();
})
$(document).keyup(function (e) {
  if ($("#foodsearch").is(":focus") && (e.keyCode == 13)) {
      nutritionixajax();
  }
});


function nutritionixajax() {
  var searchFood = $("#food-search").val();
  var url = "https://nutritionix-api.p.rapidapi.com/v1_1/search/" + searchFood + "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat%2Cnf_total_carbohydrate%2Cnf_protein"
  $.ajax({
      url: url,
      method: "GET",
      beforeSend: function (xhr) {
          xhr.setRequestHeader('X-RapidAPI-Host', 'nutritionix-api.p.rapidapi.com');
          xhr.setRequestHeader('X-RapidAPI-Key', '9aa87aedcbmsh547e179979dfd3cp155077jsn703e45a2e9c9');

      },
  }).then(function (result) {
      console.log(result.hits)
      // Result 1:
      var nameOne = result.hits[0].fields.item_name;
      var caloriesOne = result.hits[0].fields.nf_calories;
      var fatOne = result.hits[0].fields.nf_total_fat;
      var carbsOne = result.hits[0].fields.nf_total_carbohydrate;
      var proteinOne = result.hits[0].fields.nf_protein

      // Result 2:
      var nameTwo = result.hits[1].fields.item_name;
      var caloriesTwo = result.hits[1].fields.nf_calories;
      var fatTwo = result.hits[1].fields.nf_total_fat;
      var carbsTwo = result.hits[1].fields.nf_total_carbohydrate;
      var proteinTwo = result.hits[1].fields.nf_protein
      // Result 3:
      var nameThree = result.hits[2].fields.item_name;
      var caloriesThree = result.hits[2].fields.nf_calories;
      var fatThree = result.hits[2].fields.nf_total_fat;
      var carbsThree = result.hits[2].fields.nf_total_carbohydrate;
      var proteinThree = result.hits[2].fields.nf_protein
      // Result 4:
      var nameFour = result.hits[3].fields.item_name;
      var caloriesFour = result.hits[3].fields.nf_calories;
      var fatFour = result.hits[3].fields.nf_total_fat;
      var carbsFour = result.hits[3].fields.nf_total_carbohydrate;
      var proteinFour = result.hits[3].fields.nf_protein
      // Result 5:
      var nameFive = result.hits[4].fields.item_name;
      var caloriesFive = result.hits[4].fields.nf_calories;
      var fatFive = result.hits[4].fields.nf_total_fat;
      var carbsFive = result.hits[4].fields.nf_total_carbohydrate;
      var proteinFive = result.hits[4].fields.nf_protein

      console.log("Result 1: " + nameOne + "\nHas nutrition of: \n Calories: " + caloriesOne + "\n Fat: " + fatOne + "\n Carbs: " + carbsOne + "\n Protein: " + proteinOne)
      console.log("Result 2: " + nameTwo + "\nHas nutrition of: \n Calories: " + caloriesTwo + "\n Fat: " + fatTwo + "\n Carbs: " + carbsTwo + "\n Protein: " + proteinTwo)
      console.log("Result 3: " + nameThree + "\nHas nutrition of: \n Calories: " + caloriesThree + "\n Fat: " + fatThree + "\n Carbs: " + carbsThree + "\n Protein: " + proteinThree)
      console.log("Result 4: " + nameFour + "\nHas nutrition of: \n Calories: " + caloriesFour + "\n Fat: " + fatFour + "\n Carbs: " + carbsFour + "\n Protein: " + proteinFour)
      console.log("Result 5: " + nameFive + "\nHas nutrition of: \n Calories: " + caloriesFive + "\n Fat: " + fatFive + "\n Carbs: " + carbsFive + "\n Protein: " + proteinFive)

      $("#food1").text(nameOne); $("#food2").text(nameTwo); $("#food3").text(nameThree); $("#food4").text(nameFour); $("#food5").text(nameFive);
      $("#calories1").text(caloriesOne); $("#calories2").text(caloriesTwo); $("#calories3").text(caloriesThree); $("#calories4").text(caloriesFour); $("#calories5").text(caloriesFive);
      $("#carbs1").text(carbsOne); $("#carbs2").text(carbsTwo); $("#carbs3").text(carbsThree); $("#carbs4").text(carbsFour); $("#carbs5").text(carbsFive);
      $("#fat1").text(fatOne); $("#fat2").text(fatTwo); $("#fat3").text(fatThree); $("#fat4").text(fatFour); $("#fat5").text(fatFive);
      $("#protein1").text(proteinOne); $("#protein2").text(proteinTwo); $("#protein3").text(proteinThree); $("#protein4").text(proteinFour); $("#protein5").text(proteinFive);

  });

}

$("#result1").on("click", function () {
  var chosenFood1 = $("#food1").text();
  var chosenCalories1 = $("#calories1").text();
  var chosenCarbs1 = $("#carbs1").text();
  var chosenFat1 = $("#fat1").text();
  var chosenProtein1 = $("#protein1").text();
  console.log(chosenFood1);
  alert("Successfully added " + chosenFood1 + " to your TRACKR!!");
})
$("#result2").on("click", function () {
  var chosenFood2 = $("#food2").text();
  var chosenCalories2 = $("#calories2").text();
  var chosenCarbs2 = $("#carbs2").text();
  var chosenFat2 = $("#fat2").text();
  var chosenProtein2 = $("#protein2").text();
  console.log(chosenFood2);
  alert("Successfully added " + chosenFood2 + " to your TRACKR!!");
})
$("#result3").on("click", function () {
  var chosenFood3 = $("#food3").text();
  var chosenCalories3 = $("#calories3").text();
  var chosenCarbs3 = $("#carbs3").text();
  var chosenFat3 = $("#fat3").text();
  var chosenProtein3 = $("#protein3").text();
  console.log(chosenFood3);
  alert("Successfully added " + chosenFood3 + " to your TRACKR!!");
})
module.exports = nutritionixajax;