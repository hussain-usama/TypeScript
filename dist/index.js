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
//********** Object **********
const user = { id: 2, name: 'usama' };
const user2 = { id: 23, name: 'jhone doe' };
console.log(user2);
const interfaceUser = { id: 23, name: 'jhone doe' };
const add = (x, y) => {
    return x + y;
};
const sub = (x, y) => {
    return x - y;
};
console.log(sub(12, 9));
// ********** Classes ***********
// classes are used to create objects
// class ka object jb call kry gy to class k andr mojood constructor chaly ga 
// data modifiers in Classes
// 1)public ==> a variable can be accessed through every where
// 2)private ==> a variable can be accessed within the class
// 2)private ==> a variable can be accessed within the class or that other class which is extended to it
class Message {
    constructor() {
        console.log('classes ');
    }
}
const text = new Message();
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is note register`;
    }
}
const bioData = new Person(23, 'Usama');
console.log(bioData);
console.log(bioData.register());
class Employees {
    constructor(role, designation, years) {
        this.role = role;
        this.designation = designation;
        this.years = years;
    }
    register() {
        // return this.years <=== error
        return this.role;
    }
}
const emp = new Employees('Engineer', 'AM', 3);
console.log(emp);
console.log(emp.register());
//  classes with extend classes
class Teacher {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
class Faculty extends Teacher {
    constructor(name, id, timing) {
        super(name, id);
        this.timing = timing;
    }
}
const result = new Faculty('MF', 1, 'morning');
console.log(result);
