
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
// turn each word into an array
// use split to take the first letter off each new array
// hold the letter in a variable
// push the variable to the end of the new arrays

// var pigLatin = function(words) {
//   var newWords = words.split(" ");
//   var sentence = "";
//   for(i = 0; i < newWords.length; i++){
//	   newWords[i] += newWords[i][0];  
//     newWords[i] = newWords[i].slice(1);
//     newWords[i] += "ay";
//     sentence += " " + newWords[i];
//   }
//   return sentence.trim();
// }
// console.log(pigLatin("The quick brown fox"));

//6
// var compare = function(array1, array2){
// 	for(var j = 0; j < array1.length; j++){
// 		for(var i = 0; i < array2.length; i++) {
// 			if(array1.length !== array2.length){
// 			return false;
// 			}
// 			else if (array1[j] === array2[i]) {
// 			//else if(array1.includes(array2[i])) {
// 				return true;
// 			}
// 			else {
// 				return false;
// 			}
// 		}
// 	} 
// }
// console.log(compare([2, 3, 4], [1, 2, 3]))


//7
// var cutOff = function(array, value) {

// 	for(var i = 0; i < array.length; i++) {
// 		if(array[i] === value)
// 			return array[i];
// 	}
// 	var newArr = array.splice(value, 3, value)
// 	return newArr;
// 	var num = array.length - value;
// 	var newArr = array.slice(0,value);
// 	newArr.push(value)
// 	return newArr;
// }

// console.log(cutOff([1,2,3,4,5,6,7,8] , 4));

//8
//while loop
// var random = function() {
// 	var arr =[];
// 	while (arr.length < 10) {
// 		var num = (Math.floor(Math.random()*101));
// 		if(arr.indexOf(num) === -1) {
// 			arr.push(num);
// 		}
// 	}
// 	return arr;
// }
// console.log(random());

//9
// var sortedList = function(array1, array2) {
// 	var newArr = array1.concat(array2);
// 	newArr.sort(function(a,b){
// 		return a-b;
// 	})
// 	return newArr;
// }

//10

// var combine = function(array1, array2) {
// 	if (array1.length > array2.length){
// 		var newArr = array1.concat(array2)
// 	}
// 	else {
// 		var newArr = array2.concat(array1);
// 	}
// 	return newArr;
// }
// console.log(combine(['four', 'eleven'], ['cat', 'bat', 'dolphin']));

//11
//create random number under 1
//turn number into a string
//loop through string to find 3s, and 7s
//replace the 3s and 7s with 8s and 1s
//turn string back into number
// var random = function() {
// 	var number = Math.random();
// 	var string = number.toString();
// 	var replaceThree = string.replace(/[3]/g,8);
// 	var replaceSeven = replaceThree.replace(/[7]/g, 1);
// 	return replaceSeven;
// }
// console.log(random());

//12
// var findLongest = function(string) {
// 	var longest = string.split(' ').sort(function(a,b){
// 		return b.length - a.length;
// 	});
// 	return longest[0];
// }
// 	console.log(findLongest("I ate toast for breakfast"));

//13

// var capitalize = function(sentence) {
// 	var temp = sentence.toLowerCase().split(' ').map(function(word) {
// 		 return word.replace(word[0], word[0].toUpperCase());
// 	})
// 	return temp.join(' ');
// }
// console.log(capitalize("I ate toast for breakfast"));

//14 
// create 3 variables to hold the days, months and years and compare the two dates

// var daysBetween = function(date1, date2) {
// 	var years = d
// 	var months = 
// 	var days =
// }
var compareDates = function(date1, date2) {

	var newDate1 = new Date(date1);
	var newDate2 = new Date(date2);
	var diffInTime = Math.abs(newDate2.getTime() - newDate1.getTime());
	var dayDiff = Math.ceil(diffInTime / (1000 * 3600 * 24));
	return dayDiff;


	// // var newDate1 = date1.split('/');
	// // var newDate2 = date2.split('/');
	// var x = date1.getTime();
	// return x;
	// var oneDay = 24*60*60*1000
	// // var firstDate = new Date(2008, 01, 12);
	// // var secondDate = new Date(2008, 01, 22);

	// var compare = Math.round(Math.abs((newDate1.getTime() - newDate2.getTime())/(oneDay)));

	// return compare;
// var newDate1 = date1.split('/');
	// var newDate2 = date2.split('/');
	// 

	// newDate1 = new Date(date1[0], date1[1], date1[2]);
	// newDate2 = new Date(date2[0], date2[1], date2[2]);

	// newDate1InSeconds = parseInt(newDate1.getTime() / 1000);
	// newDate2InSeconds = parseInt(newDate2.getTime() / 1000);

	// var secondsDiff = newDate2InSeconds - newDate1InSeconds;
	// var hourDiff = secondsDiff / 60 / 60;
	// var dayDiff = hourDiff / 24;

	// return dayDiff;
}

console.log(compareDates("1998/01/26", "1999/01/25"));
//15
// var addTogether = function() {

// }
//16

// var wholeNum = function(num) {
// 	if(Math.sign(num) === -1) {
// 		return false;
// 	}
// 	else {
// 	var answer = Number.isInteger(num);
// 	return answer;
// 	}
// }
// console.log(wholeNum(.005));

// 17

// var randomNum = function() {
// 	return Math.floor(Math.random() * 10);
// }
// console.log(randomNum());
