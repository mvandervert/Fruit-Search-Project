//Note: I'm trying to fully understand why certain elements are needed, hence my notes below and questions that I have.

//This input variable selects the form field with the ID of "fruit".
const input = document.querySelector('#fruit');

//This suggestions variable selects the div class container called "suggestions ul" which is where the suggested fruits will appear as a ul in the div.
const suggestions = document.querySelector('.suggestions ul');

//These are the form input options that will pop up when one searches.
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//This search function takes a string and searches for possible fruit matches. Question: Why is there no need to add a Prevent Default?

function search(str) {
	let results = []; //This creates a new array in which the fruit search results will appear.
	for (const fruitType of fruit) { //This loops through all fruit options
		const lowercasedFruitType = fruitType.toLowerCase(); //Create a new variable called lowercasedFruitType that stores the individual returned fruit words in lowercase.

		if (lowercasedFruitType.includes(str)) {//If what has been looped through includes one of the fruit options, then:
			results.push(fruitType); //push or add the fruit word to the new results array.
		}
	}
		return results;
}	 

//Question: Why do we need this searchHandler? Couldn't the eventlistener use the search function? By looping through the fruit above, didn't we already define the variable fruitType?

//This says when keyed up, we're going to perform a search on the inputVal, then call the showSuggestions function.
function searchHandler(e) {
	const inputVal = e.target.value;
	const results = search(inputVal);  
	showSuggestions(results, inputVal);
  }

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = ''; //this adds a new empty string and clears content inside the suggestions list before updating it with new suggestions. Question: didn't we do this already with "let Results?"
  
	results.forEach(result => { //We have to loop through again and create a list for each suggestion. For each suggestion we create an li.
	  const li = document.createElement('li');
	  li.textContent = result; //Gives the value of each li as the current result or fruitname.
	  suggestions.appendChild(li); //Appends the newly created li to the suggestions element.
	});
  }

  //this is the function to run when the user 'clicks' on an 'li'. It then selects and displays the clicked item in the search bar.
  function useSuggestion(e) {
	if (e.target.tagName === 'LI') {//if e.target has a tagname equal to one of the li's is true then a user clicked on a suggestion.
	  input.value = e.target.textContent; //this sets the value of the input field to what was clicked on.
	  suggestions.innerHTML = ''; // After the user has selected a suggestion, this clears the suggestions list
	}
  }

//Why do we need another function called searchHandler? Can't this be done with the search function? Add search instead of searchHandler?  
input.addEventListener('keyup', searchHandler);

suggestions.addEventListener('click', useSuggestion);