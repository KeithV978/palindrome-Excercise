const palindrome = textCase =>{
	if(typeof(textCase) !== "string") return console.log("Please enter a string");
	const caseObject = {};

	// First remove all punctuations from the string.
	const textCasePuncRemoved = textCase.replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g,"");

	// Then remove all white space.
	const textCaseTrimmed = textCasePuncRemoved.split(' ').join('').toLowerCase();

	//A palindrome should not have more than one odd number of any given character.
	// So we set a counter to check how many odd number of characters are present.
	var numberOfOdds = 0;

	for(letter of textCaseTrimmed){
		// Now we count each letter to know how many times it occurs. And store it in an object
		if(letter in caseObject){
			caseObject[`${letter}`] = caseObject[`${letter}`]+1;
		}else{
			caseObject[`${letter}`] = 1
		}
	}
	
	// Now we search through the counting on each letter we perfomed above to see how many odd occurence per letter we have
	for(key in caseObject) {
		if(caseObject[key]%2 !== 0){
			numberOfOdds++
		}
	}

	// If there are more than one odd letters then its not a palindrome
	if(numberOfOdds > 1) return console.log("Not a Palindrome");
	return console.log("String is a Palindrome");
}

// console.log(palindrome("level"));
// console.log(palindrome("on melon, no lemon"));
 //console.log(palindrome("Hannah"));
// console.log(palindrome("rotator"));
// console.log(palindrome("my gym"));
// console.log(palindrome("Was it a cat i saw?"));
//console.log(palindrome("Was it a cat i saw?"));