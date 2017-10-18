
// If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
// If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
// If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
// The year is a leap year (it has 366 days).
// The year is not a leap year (it has 365 days).

//2
function isALeapYear(year) {
	if (year % 4 === 0) {
		return true;
	}
	else if (year % 100 === 0) {
		return true;
	}
	else if (year % 400 === 0) {
		return true;
	}
	else {
		return false;
	}

}
console.log(isALeapYear(2000));

//3




//4
function duplicate(array) {
	var newArray = [];     					// create new array to hold one without duplicates
	for(var i = 0; i < array.length; i++) { //run through array 
		var checkForDup = newArray.indexOf(array[i]); //creat new variable that checks if the new array contains an [i] from original array
		if(checkForDup === -1) {.           //if there isn't an indexOf array[i] in newArray it will return a -1
			newArray.push(array[i]);        //if checkForDup returns a -1 then add the array[i] it last checked to the newArray
		}
	}
	return newArray;						//return the new array
}
console.log(duplicate([1,1,2,3,1,2,3]));

//5
