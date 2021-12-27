"use strict";
let value = 3;
//********** Basic Types **********
let num = 3;
// num=4 ====>no error
// num='2'====> error b/c type is number
let str = 'hello';
let isPublished = true;
let x = 'world'; //====> can assign any data type
x = false;
x = 23;
// ********** Arrays **********
let arr = [1, 2, 3, 4, 5]; //only numbers can define in that array
// Array with multipe data types
let newArr = [2, 3, 'ubit', 0.433, true];
// ********** Tuples **********
let tupp = [1, 'ss', false]; //jitni types define ki ha utni hi values de skty ha 
// ********** Tupple Array **********
let tuppArray = [[1, 'jhon'], [2, 'doe'], [3, 'dummy'], [4, 'user']];
// ********** Union  **********===> if we want to hold a variable more than one type
let empId = 'XD';
empId = 22;
// ********** Enum ********** ===> enu allow us to define a set of name constants
var directions;
(function (directions) {
    directions[directions["Up"] = 0] = "Up";
    directions[directions["Down"] = 1] = "Down";
    directions[directions["Left"] = 2] = "Left";
    directions[directions["Right"] = 3] = "Right";
})(directions || (directions = {}));
var directions1;
(function (directions1) {
    directions1[directions1["Up"] = 0] = "Up";
    directions1[directions1["Down"] = 3] = "Down";
    directions1[directions1["Left"] = 4] = "Left";
    directions1[directions1["Right"] = 5] = "Right";
})(directions1 || (directions1 = {}));
console.log(directions1.Left);
// output ==> 0,3,4,5
// can also assign string to enum value
var directions2;
(function (directions2) {
    directions2["Up"] = "Up";
    directions2["Down"] = "Down";
    directions2["Left"] = "Left";
    directions2["Right"] = "Right";
})(directions2 || (directions2 = {}));
console.log(directions2.Down);
//********** Object **********
const user = { id: 2, name: 'usama' };
const user2 = { id: 23, name: 'jhone doe' };
console.log(user2);
//********** Type Assertion **********
// agr ksi variable ki type any ho or bad uski koi type fix krni ho
let cid = 'F';
let companyId = cid;
companyId = 3;
// second method
let eid = 2;
let employeeId = eid;
// employeeId='hello' ===> error
employeeId = 23;
//************Functions *************
function addNum(x, y) {
    return x + y;
}
console.log(addNum(3, 2));
// :number{} <===== ye return value ki type define krny k lye use krty h 
//agr koi value return nahi krani to void likhdngy 
function log(x) {
    console.log(x);
}
log('hello');
const interfaceUser = { id: 23, name: 'jhone doe' };
const add = (x, y) => {
    return x + y;
};
const sub = (x, y) => {
    return x + y;
};
console.log(sub(12, 9));
