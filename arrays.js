var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, ele) {
	let finalArray = arr;
	finalArray.unshift(ele);
	return finalArray;
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
	arr.unshift(ele);
	return arr;
}

function addElementToEndOfArray(arr, ele) {
	let final = arr;
	final.push(ele);
	return final;
}

function destructivelyAddElementToEndOfArray(arr, ele) {
	arr.push(ele);
	return arr;
}

function accessElementInArray(arr, i) {
	return arr[i];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
	arr.shift();
	return arr;
}

function removeElementFromBeginningOfArray(arr) {
	return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
	arr.pop();
	return arr;
}

function removeElementFromEndOfArray(arr) {
	return arr.slice(0, arr.length - 1);
}