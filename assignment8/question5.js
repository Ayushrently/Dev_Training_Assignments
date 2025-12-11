/*

5. Write a function that takes object as input and prints all keys and values in a valid JSON format
6. Print all values of a nested obj"

*/

let obj = {
    name : "raj",
    Email : "Raj@yahoo.com",
    class : "Classless",
    game : "hockey",
    onemore : "onemore",
    age : 22
};


const json = JSON.stringify(obj);

console.log(json);