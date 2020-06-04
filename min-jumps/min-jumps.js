'use strict';

const minJumps = ar => {

    let start = 0,
        jumps = 0,
        len = ar.length-1,
        maxIdx, max;

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

module.exports = minJumps


// const minJumps = arr => {
//   let jumps = arr.map(el => Infinity)
//   jumps[0] = 0;

//   for (let i = 1; i < jumps.length; i++) {
//     for (let j = 0; j <= i; j++) {
//       if (j + arr[j] >= i) 
//         jumps[i] = Math.min(jumps[i], jumps[j] + 1)
//     }
//   }
//   return jumps[arr.length - 1];
// };
