let value=3
//********** Basic Types **********
let num:number=3
// num=4 ====>no error
// num='2'====> error b/c type is number
let str:string='hello'
let isPublished:boolean=true
let x:any='world' //====> can assign any data type
x=false
x=23

// ********** Arrays **********
let arr:number[]=[1,2,3,4,5]   //only numbers can define in that array
// Array with multipe data types
let newArr:any[]=[2,3,'ubit',0.433,true]

// ********** Tuples **********
let tupp:[number,string,boolean]=[1,'ss',false]  //jitni types define ki ha utni hi values de skty ha 
// ********** Tupple Array **********
let tuppArray:[number,string][]=[[1,'jhon'],[2,'doe'],[3,'dummy'],[4,'user']]

// ********** Union  **********===> if we want to hold a variable more than one type
let empId: string | number ='XD'
empId=22

// ********** Enum ********** ===> enu allow us to define a set of name constants
enum directions{
    Up,
    Down,
    Left,      // by default value are set to 0 and onwards like first value =0 ,second =1 an so on
    Right
}
enum directions1{
    Up,
    Down=3,      // agr khud se koi set krdy to agy ki value us se aik greater hoti jaengi
    Left,       // like first value=3 second =4 and so on   
    Right   
}
console.log(directions1.Left)
// output ==> 0,3,4,5

// can also assign string to enum value
enum directions2{
    Up='Up',
    Down='Down',      
    Left='Left',        
    Right='Right'   
}
console.log(directions2.Down)


//********** Type Assertion **********
// agr ksi variable ki type any ho or bad uski koi type fix krni ho
let cid:any='F'
let companyId=<number>cid
companyId=3
// second method
let eid:any=2
let employeeId=eid as number
// employeeId='hello' ===> error
employeeId=23

//************Functions *************
function addNum( x : number , y : number) : number{
    return x+y
}
console.log(addNum(3,2))
// :number{} <===== ye return value ki type define krny k lye use krty h 

//agr koi value return nahi krani to void likhdngy 
function log(x: string | number) : void{
    console.log(x)
}
log('hello')

//********** Object **********
const user:{ id:number , name:string } ={ id:2 , name:'usama'}
// second way to define objects
type User={id:number | string, name:string}
const user2:User={ id:23 , name:'jhone doe'}
console.log(user2)
//************Interfaces *************
// interfaces are just like objects
// objects me union ki trh aik vaiable ki 2 types define kr skty h lekin interface me nhi
// interfaces ki kuch additional properties hoti ha ==> 
// readonly==> updaet nh krslty
//  , ?==> is value mojood na bh ho to error nh ayega
interface typeInterface {
    readonly id:number ,
    name:string ,
    age?:number
}
const interfaceUser:typeInterface={ id:23 , name:'jhone doe'}

// Interface With Function
// one interface can used with different functions
interface addFunct{
    (x: number , y:number) : number
}
const add:addFunct=(x:number,y:number):number=>{
    return x+y
}
const sub:addFunct=(x:number,y:number):number=>{
    return x-y
}
console.log(sub(12,9))

// ********** Classes ***********
// classes are used to create objects
// class ka object jb call kry gy to class k andr mojood constructor chaly ga 
// data modifiers in Classes
// 1)public ==> a variable can be accessed through every where
// 2)private ==> a variable can be accessed within the class
// 2)private ==> a variable can be accessed within the class or that other class which is extended to it

class Message{
    constructor(){
        console.log('classes ')
    }
}
const text=new Message()

class Person{
    id:number
    name : string
    constructor(id:number, name:string){
        this.id=id
        this.name=name
    }

    register(){
       return `${this.name} is note register`
    }
}
const bioData=new Person(23,'Usama')
console.log(bioData)
console.log(bioData.register())

//  classes with interface
interface PersonInterface {
    role:string
    designation:string
    years:number
    register(): string 
}
class Employees implements PersonInterface {
    role
    designation
    years
 
    constructor(role: string,designation:string,years:number){
        this.role=role
        this.designation=designation
        this.years=years
    }
    register(){
        // return this.years <=== error
        return this.role
    }
}
const emp=new Employees('Engineer','AM',3)
console.log(emp)
console.log(emp.register())

//  classes with extend classes
class Teacher{
    name:string
    id:number
    constructor(name:string,id:number){
        this.name=name
        this.id=id
    }
}
class Faculty extends Teacher{
    timing:string
    constructor(name:string,id:number,timing:string){
        super(name,id)
        this.timing=timing
    }
}
const result=new Faculty('MF',1,'morning')
console.log(result)
