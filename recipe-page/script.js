let ingredientUlList = document.querySelector('#ingredientsList');
function addNewIngreidients(){
  let newIngredientElement = document.createElement('li');
  newIngredientElement.textContent = 'Jalapenos';
  ingredientUlList.appendChild(newIngredientElement);
}

// // Create checkbox
// let ulIngredients = document.getElementById("ingredientsList");
// let checkbox = document.createElement("input");
// checkbox.type = "checkbox";
// checkbox.name = "name";
// checkbox.value = "value";
// checkbox.id = "id";
// ulIngredients.appendChild(checkbox);

// // Create label for checkbox
// let label = document.createElement("label");
// label.htmlFor = "id";
// label.appendChild(document.createTextNode("Add this list to my cart"));
// label.classList = "ingredientListItems";
// ulIngredients.appendChild(label);

// // Add eventlistener to strikethrough checked text
// checkbox.addEventListener("click", function() {
//   if(checkbox.checked){
//     label.classList = "checked";
//   } else{
//     label.classList.remove("checked");
//   }
// });

// call the functions
addNewIngreidients();