/*

2. Show examples of use of splice method to add and remove elements from array.

*/


// splice is basically used to replace a range of indecies with something else.


// remove 1 element after a index
let arr2 = ["a", "b", "c", "d"];
console.log(arr2);

arr2.splice(2, 1);  // removes "c"
console.log(arr2);


// remove element from a particular indes ie removes all elements after that.

let arr3 = [1, 2, 3, 4, 5, 6];
console.log(arr3);

arr3.splice(3);  // removes 4,5,6
console.log(arr3);


// add elements at a index
let arr4 = [1, 2, 5, 6];
console.log(arr4);

arr4.splice(2, 0, 3, 4); // add 3,4 at index 2
console.log(arr4);


// Replacing elements in a range of indexes

let arr6 = ["x", "y", "z", "w"];
console.log(arr6);

arr6.splice(1, 2, "A", "B", "C");
console.log(arr6);
