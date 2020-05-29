'use strict';

const minJumps = ar => {

    let start = 0,
        jumps = 0,
        len = ar.length-1,
        maxIdx,
        max = 0;

    if (ar.length <= 2 || start+ar[start] >= len)
        return ++jumps;

    while (start < len) {
        max = 0;
        for (let i = start+1; i <= start+ar[start]; i++) {
            if (max <= ar[i]) {
                max = ar[i];
                maxIdx = i
            }
        }
        start = maxIdx;
        jumps++;

        if (start+max >= len)
            return ++jumps;
    }
    return jumps;
};


const test1 = [1, 1];
const test2 = [6, 3, 2, 1];
const test3 = [2, 8, 4, 3, 2, 9, 6, 8];
const test4 = [4, 4, 2, 7, 1, 1, 1, 1, 3, 7, 2];
const test5 = [2, 4, 1, 1, 2, 3, 7, 1, 1, 3];

console.log(minJumps(test1));
console.log(minJumps(test2));
console.log(minJumps(test3));
console.log(minJumps(test4));
console.log(minJumps(test5));

module.exports = minJumps