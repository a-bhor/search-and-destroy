'use strict';

// Complete this algo
const binarySearch = (array, target, startIdx=-1, endIdx=-1) => {

	console.log(array, target)
	let len;
	 if( startIdx === -1 && endIdx=== -1) {
		startIdx = 0;
		endIdx = array.length - 1;
		len = array.length;
	 } else {
		 len = endIdx-startIdx + 1;
	 }
	
	console.log("startIdx : ", startIdx, " endIdx: ", endIdx)
	
	if(!len) {
		return false;
	}

	if (len === 1){
		return (array[startIdx] === target);
	}

	let midPoint = startIdx + Math.floor(len/2);
	let midPointValue = array[midPoint]
	console.log("midPoint : ", midPoint)

	if( midPointValue === target) {
		return true;
	}

	if (midPointValue < target) {
		return binarySearch (array, target, midPoint+1, endIdx )

	} else {
		return binarySearch(array, target, startIdx, midPoint-1)
	}

	return false;
};
// const binarySearch = (array, target) => {

// 	// console.log(array, target)
// 	let len = array.length;
	
// 	if(!len) {
// 		return false;
// 	}

// 	if (len === 1){
// 		return (array[0] === target);
// 	}

// 	let midPoint = Math.floor(len/2);
// 	let midPointValue = array[midPoint]

// 	if( midPointValue === target) {
// 		return true;
// 	}

// 	if (midPointValue < target) {
// 		return binarySearch (array.slice(midPoint+1 ), target)

// 	} else {
// 		return binarySearch(array.slice(0, midPoint), target)
// 	}

// 	return false;
// };

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch