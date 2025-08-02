const string = ['a', 'b', 'c', 'd'];
// const string = ['a', 'b', 'c', 'd'];
//  Index of an item  1.    2.   3.   4.

// 4*4 = 16 bytes of storage

console.log(string[2]);

// push - add at end of the item

string.push('e'); // O(1)

console.log(string);

string.pop('e'); // O(1)

console.log(string);

// unshift

string.unshift('X'); // O(n)
console.log(string);

// splice
string.splice(2, 0, 'alien'); // O(n)
console.log(string);

/* 
Summary 

Big(1)

access
push

Big(n)
delete
insert 

*/
