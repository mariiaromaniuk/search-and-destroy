'use strict';

const isLoop = (linkedlist) => {
    if (linkedlist.head === null) 
       return false;

    const visited = {};
    let p = linkedlist.head;

    while (p !== null) {
        if (visited[p.value]) {
            return true
        } else {
            visited[p.value] = true;
            p = p.next;
        }
    }
    return false;
};

/*
Function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!
*/
const findLoop = (linkedlist) => {
    if (linkedlist.head === null) 
       return false;

    const visited = {};
    let p = linkedlist.head;

    while (p !== null) {
        if (visited[p.value]) {
            return p.value
        } else {
            visited[p.value] = true;
            p = p.next;
        }
    }
    return 'there is not a loop';
}

module.exports = { isLoop, findLoop };
