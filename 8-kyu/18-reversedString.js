/*
Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow'
*/

function solution(str) {
	let strToReturn = '';
	let last = str.length - 1;
	for (var i = 0; i < str.length; i++) {
		strToReturn += str[last];
		last--;
	}
	return strToReturn;
}

console.log(solution('world'));
