
// If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
// If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
// If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
// The year is a leap year (it has 366 days).
// The year is not a leap year (it has 365 days).

//2

// function isALeapYear(year) {
// 	if (year % 4 === 0) {
// 		return true;
// 	}
// 	else if (year % 100 === 0) {
// 		return true;
// 	}
// 	else if (year % 400 === 0) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}

// }
// console.log(isALeapYear(2000));

//3
// var check = function(array) {
// 	var master =[1,2,3,4,5,6,7,8,9,10];
// 	var missing;
// 	for(var i = 0; i < array.length + 1; i++) {
// 		if(array[i] !== master[i]) {
// 			return master[i];
// 		}
// 	}
// };
// 	var n = array.length+1, 
//   	sum = 0,
//   	expectedSum = n* (n+1)/2;
  
//   	for(var i = 0, len = array.length; i < len; i++){
//     sum += array[i];
//   	}
  
//   	return expectedSum - sum;
// }
//console.log(check([1,2,5]));
//4
// function duplicate(array) {
// 	var newArray = [];     					// create new array to hold one without duplicates
// 	for(var i = 0; i < array.length; i++) { //run through array 
// 		var checkForDup = newArray.indexOf(array[i]); //create new variable that checks if the new array contains an [i] from original array
// 		if(checkForDup === -1) {           //if there isn't an indexOf array[i] in newArray it will return a -1
// 			newArray.push(array[i]);        //if checkForDup returns a -1 then add the array[i] it last checked to the newArray
// 		}
// 	}
// 	return newArray;						//return the new array
// }
// console.log(duplicate([1,1,2,3,1,2,3]));

//5
//split into individual letter
// turn into array
//put the letter onto the back of array
//add ay on back of array 
//turn back into string


var pigLatin = function(words) {
	var newWords = words.split(' ');
	var pig = '';
	for(var i = 0; i < newWords.length; i++){
		newWords[i] += newWords[i][0];
		newWords[i] = newWords[i].slice[1];
		words[i] += 'ay';
		pig += newWords[i];
		return pig;
	}


	// var newWords;     //variable to hold new sentence
	// var temp = words.split(''); //variable that holds original sentence split into an array of individual letters
	// newWords = temp.shift();
	// return newWords;


	// newWords.push(temp[0]);  // takes the first index and ads it to variable new words
	// return newWords + 'ay';  // puts ay on the end of new words and returns it
}
console.log(pigLatin("The quick brown fox"));

//6

var compare = function(){
	
}



