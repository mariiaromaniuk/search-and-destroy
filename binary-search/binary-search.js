'use strict';

/*
	Function runs in constant O(1) space - we're not edit/copy the original array!
	We use other piece of data, like pointers, to avoid slicing
*/
const binarySearch = (array, target) => {
	if (array.length === 0)
	   return false;
	else if (array.length === 1)
	   if (array[0] === (target))
		  return true;

	let start = 0;
	let end = array.length-1;

	while (start <= end) {
		let midPoint = Math.floor((start + end) / 2);
		if (array[midPoint] === target) {
			return true;
		} else {
			if (array[midPoint] < target) {
				start = midPoint + 1;
			} else {
				end = midPoint - 1;
			}
		}
	}
	return false;
};

module.exports = binarySearch
