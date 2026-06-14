/*//lecture 1
console.log("Welcome to JS!")
//Variables
FullName="Samruddhi Nadgouda";
age=24;
price=150.32;
x=null;
y=undefined;
console.log(FullName, age, price);
console.log(x, y);  

//let, const and var
let name="Samruddhi";
name="Vedantika";
const pi =3.14; // const need to initialize always
console.log(name);
console.log(pi);
let a; // does not need to initialize
console.log(a);
//Block space 
{
    let a=5;
    console.log(a);
}
{
    let a=10;
    console.log(a);
}

//Data types which are primitives
//Number 
//String
//Boolean
//Undefined
//Null
//BigInt
//Symbol
let p=BigInt(12432);
console.log(p);

//Collection of values are objects.
const student = {
    age: 24,
    name: "Samu",
    cgpa: 8.2
};
console.log(student.age);
console.log(student["cgpa"]);
//You can change the object value even though const
student["age"] += 1;
console.log(student.age);

student["name"]="Veda";
console.log(student.name);

//Practice question
const Product ={
    title:"Ball pen",
    rating: 4.3,
    offer: 5,
    price: 270
}
console.log(Product);

const profile={
    username: "Samruddhi Nadgouda",
    followers: 576,
    following: 23,
    isfollow: true
}
console.log(profile);
console.log(typeof(profile["followers"]));

//lecture 2
let s = 5;
let t = 2;

//Arithmetic operator
console.log("s + t =",s+t);
console.log("s - t =",s-t);
console.log("s * t =",s*t);
console.log("s / t =",s/t);
console.log("s % t =",s%t);
console.log("s ^ t =",s**t);
s++; //post-increment
console.log("s++ =",s);
//++s pre-increment
console.log("++s =",++s);
//t-- post-decrement
//--t pre-decrement
console.log("t-- =",t--);
console.log("t =",t); 

//Assignment operator
s += 2;
console.log("s =", s);
t %= 2;
console.log("t =", t);

Comparison operator
==,===, !=, !==, <, <=, >, >==
let w = 3;
let u ="3";
console.log("w==u", w == u);
console.log("w === u", w === u);
console.log("2!=2", 2 != 2);

console.log(w==u && s>t);
console.log(w!=u || s<t);

//Conditional statement
let c=8;
if(c%2==0){
    console.log("even");
}else{
    console.log("odd");
}

//Ternary Operator
age = 21;
let res = age > 18 ? "adult" : "Not adult";
console.log(res);

alert("How is going your study of JavaScript?");
let t = prompt("Enter your name: ");
console.log(t);

//Practice question
let num = prompt("Enter the number: ");

if(num % 5 == 0){
    console.log(num, "is multiple of 5");
}else{
    console.log(num, "is not multiple of 5")
}

//lecture 3
//FOR loop
for(let i=0; i<5; i++){
    console.log("Hello everyone!");
}
let sum = 0;
for(let i = 1; i <= 10; i++){
    sum = sum + i;
}
console.log("sum = ", sum);

//WHILE loop
let i = 1;
while(i <= 10){
    console.log("Samu", i); 
    i++;
}
//favorite movie
let fav = "jab we met";
let guess = prompt("Guess the movie or quit");
while((guess != fav) && (guess != "quit")){
    console.log("Wrong.. guess again!");
    guess = prompt("Guess again..");
}
console.log("good guess!")
//DO-WHILE loop
let j=1;
do{
    console.log("j = ", j*2);
    j++;
}while(j<=10);

//FOR-OF loop
let str = "SamruddhiNadgouda";
for(let i of str) {
    console.log("i = ", i);
}

//FOR_IN loop
let mystudent ={
    name: "Samruddhi",
    age: 21,
    cgpa: 8.66
}
for(let key in mystudent){
    console.log(key, mystudent[key]);
}

//odd numbers between 0 to 100
for(let i=0; i<=100; i++){
    if(i%2!=0){
        console.log(i);
    }
}
//Match the game
let gameNum=25;
let userNum=prompt("Guess the Game Number: ");
while(userNum != gameNum){
    userNum=prompt("You guess wrong number.. Guess again: ");
}
console.log("Congratulations! you guessed right number..");

//strings
let str="ApnaCollege";
console.log(str);
console.log(str.length);
console.log(str[6]);

//Template liteals
let specialStr=`This is a template literal`;
console.log(specialStr);

let obj ={
    item: "pen",
    price: 10
}
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

console.log("Apna\nCollege");
console.log("Apna\tCollege");
let s ="Anpa\tCollege";
console.log(s.length);

//string methods
let str = "Samruddhi Nadgouda";
console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
let s = "        apna college     ";
console.log(s.trim());

let str1 = "Apna";
let str2 = "College";

console.log(str.slice(3,8));
console.log(str1.concat(str2));
console.log(str1.replace("A", "Your"));
str1=str1.replace("na", "arana");
console.log(str1);
console.log(str.charAt(3))

let s = prompt("enter user full name: ");
console.log(`@${s}${s.length}`);

//lecture 4
let marks = [77, 89, 92, 45, 63];
console.log(marks);
console.log(marks[3]);
console.log(marks.length);
marks[2] = 34;
console.log(marks);

let names = ["samu", "veda", "siddhi"];
console.log(names);
console.log(names[2]);

for(let idx=0; idx<marks.length; idx++){
    console.log(marks[idx]);
}

for (let m of names){
    console.log(m);
}

let sum = 0;
let arr=[85, 97, 44, 37, 76, 60];
for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
}
let avg = sum /(arr.length);
console.log("Average marks: ",avg);

let names = ["samu", "veda", "siddhi"];
console.log(names);
console.log(names.push("shri")); //add to end
let deleteElement = names.pop(); //delete from end
console.log(deleteElement);
console.log(arr.toString()); //convert array to string

let s = names.unshift("vaishali"); // add to start
console.log(s);

let arr=[85, 97, 44, 37, 76, 60];
//add element
console.log(arr.splice(2, 2, 102, 104)); //(startpoint, count, newelements)

//delete element
console.log(arr.splice(3, 1)); //(position, count)

//replace element
console.log(arr.splice(3, 1, 101)); //(position, count, newelement)

console.log(arr.splice(2)); //startpoint


//lecture 5
function myfunction(){
    console.log("Welcome to JS!");
}
myfunction();
myfunction();

function message(msg){
    console.log(msg);
}

message("I love JS!");

//Function -> Sum of 2 numbers
function sum(x, y){
    s=x+y;
    return(s);
}
let val=sum(3,8);
console.log("Sum is ", val);

function multi(a, b){
    return a*b;
}

const multiple=(a, b)=>{
    return a*b;
};

function vowels(str){
    let count=0;
    for(let i=0; i<str.length; i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
            count++;
        }
    }
    console.log(count);
}

function BMI(wgt, hgt){
    let res = wgt/Math.pow(hgt, 2);  //(hgt*hgt)
    return Math.round(res);
}
let bmi = BMI(55, 1.52);
console.log("Your BMI is "+ bmi);

//Math operations
Math.random // it give the random input from user, it is between range of 0 and 1
Math.floor //to make it integer 

forEach arrays:- it is function execute for each element in array
let arr = [1, 2, 3, 4, 5];
arr.forEach( (val)=>{
    console.log(val*val);
});

arr.forEach( function sum(x){
    console.log(x);
})

let arr = [
    {
        name: "Samu",
        age: 21,
    },
    {
        name: "Veda",
        age: 20,
    },
];

arr.forEach((student) =>{
    console.log(student.age);
});

//map arrays:- creates new array with result of some operations
let nums = [32, 65, 87];

let newArr = nums.map((val)=>{
    return val*3;
});
console.log(newArr);

filter arrays:- creates new array of elements that give true for given condition
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let newArr = arr.filter((val)=>{
    return(val%2!==0);
});

console.log(newArr);

//Every function
[1, 2, 3, 4].every((el) =>(el % 2  == 0)); ==> false

//reduce array:- performs some operations and reduce array to single value.
const arr =[1, 2, 3, 4];
const i=0;
const newArr = arr.reduce(
    (a, b)=> a+b, i,
);
console.log(newArr);

const output = arr.reduce((prev, curr)=>{
    return prev >  curr? prev : curr;
});

console.log(output);
let d = prompt("Enter the number");
let arr=[];

for(let i=1; i<=d; i++){
    arr[i-1]=i;
}
console.log(arr);

let newArr=arr.reduce((res, curr)=>{
    return res+curr;
})
console.log(newArr);

let newArr1=arr.reduce((res, curr)=>{
    return res*curr;
});
console.log(newArr1);

//lecture 6
alert("Hello everyone!")
window.console.log("Hello");

console.log(document.body);
console.dir(document.body);  

Spread:
let arr = [1, 2, 3, 4,5 ];
//undefined
let newArr = [...arr];
//undefined
newArr
//(5) [1, 2, 3, 4, 5]
let chars = [..."Hello"];
//undefined
chars
//(5) ['H', 'e', 'l', 'l', 'o']
let odd =[1, 3, 5, 7];
//undefined
let even =[2, 4, 6, 8];
//undefined
let nums = [...odd, ...even];
//undefined
nums
//(8) [1, 3, 5, 7, 2, 4, 6, 8]

const data = {
    email: "samruddhinadgouda29@gmail.com",
    password: "abcd@29",
};
data
//{email: 'samruddhinadgouda29@gmail.com', password: 'abcd@29'}
const datacopy = {...data};
//undefined
datacopy
//{email: 'samruddhinadgouda29@gmail.com', password: 'abcd@29'}
datacopy.name = "Samruddhi"
datacopy.age = 21;
datacopy
//{email: 'samruddhinadgouda29@gmail.com', password: 'abcd@29', name: 'Samruddhi', age: 21}age: 21email: "samruddhinadgouda29@gmail.com"name: "Samruddhi"password: "abcd@29"[[Prototype]]: Object


function sum(...args){
    for(let i=0; i<args.length; i++){
        console.log("you gave us: ", args[i]);
    }
}
sum(1, 3);
//you gave us:  1
//you gave us:  3

function add(...args){
    return args.reduce((res, el) => res+el);
}
function min(msg, ...args){
    console.log(msg);
    return args.reduce((res, el) =>{
        if(res < el){
            return res;
        }else{
            return el;
        }
    });
}

//DOM:
let heading = document.getElementById("head1");
console.log(heading);
console.dir(heading);

heading.innerText
//"DOM demo by SAMU\n\nHello, I am Samruddhi Nadgouda..\n\nLet's learn DOM concepts in details\nSubmit"
heading.innerHTML
//`\n        <h1>DOM demo by SAMU</h1>\n        <p>Hello, I am Samruddhi Nadgouda..</p>\n        <h3>Let's learn DOM concepts in details</h3>\n        <button class="button">Submit</button>\n    `
heading.textContent
//"\n        DOM demo by SAMU\n        Hello, I am Samruddhi Nadgouda..\n        Let's learn DOM concepts in details\n        Submit\n    "

let button = document.getElementsByClassName("button");
console.log(button);
console.dir(button);

let paras = document.getElementsByTagName("p");
console.log(paras);
console.dir(paras);

let node = document.querySelector("p");
console.dir(node);

let nodeall = document.querySelectorAll("p");
console.dir(nodeall);

document.querySelector("div"); 
document.querySelector("div").children
//HTMLCollection(4) [h1, p, h3, button.button]
document.querySelector("div").firstChild
//#text
document.querySelector("div").lastChild
//#text

let append = document.querySelector("h2");
console.dir(append);
console.dir(append.innerText);

append.innerText = append.innerText + " from Apna College";

let div = document.querySelectorAll(".box");
console.log(div);
console.log(div[0]);

let i = 1;
for(let d of div){
    console.log(d);
    d.innerText = `new unique value of ${i}`;
    i++;
}

//alternate method
div[0].innerHTML = "new unique value 1";
div[1].innerHTML = "new unique value 2";
div[2].innerHTML = "new unique value 3";
let div = document.querySelector("div");
console.log(div);


//lecture 7
// let div = document.querySelectorAll(".box");
// let valId = div.getAttribute("class");
// console.log(valId);

// let name = div.getAttribute("name");
// console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("id")); //to get the attribute value
console.log(para.setAttribute("id", "123")); // to set the attribute value

let div = document.querySelector("div");

div.style.backgroundColor = "green";
div.style.fontSize = "40px"
div.innerText = "Hello Everyone!"; 

// let newBtn = document.createElement("button");
// newBtn.innerText = "Submit me";
// console.log(newBtn);

// let div = document.querySelector("div");
// // div.append(newBtn);
// div.prepend(newBtn);
// // div.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am new!</i>";

// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("p");
// para.remove();

//practice question
let button = document.createElement("button");
button.innerText = "Submit!";
console.log(button);
button.style.backgroundColor = "red";
button.style.color = "white";

document.body.appendChild(button);

// let btn = document.querySelector("body").prepend(button);

//extra information
let para = document.querySelector("p");
console.log(para.getAttribute("class"));
para.setAttribute("class", "newClass");
console.log(para.getAttribute("class"));

console.log(para.classList.add("content"));
para.classList.toggle("active");
para.classList.toggle("active");
console.log(para.classList.contains("content"));

let newELe = document.createElement("div");
newELe.innerText = "New div creation!";
document.body.appendChild(newELe);

//lecture 8
// let button = document.querySelector("#btn");
// button.onclick = function(){
//     alert("Button is clicked");
// }
// button.onclick = ()=>{
//     console.log("btn was clicked");
//     let a = 25;
//     a++;
//     console.log(a); //26
// }

let div = document.querySelector("div");
div.onmouseover=()=>{
    console.log('you are inside div');
}

let button = document.querySelector("#btn");
// button.onclick = (e)=>{
//    console.log(e);
//    console.log(e.type);
//    console.log(e.target);
//    console.log(e.clientX);
//    console.log(e.clientY);
// }

button.addEventListener("click", (e)=>{
    console.log("button was clicked");
    console.log(e);
    // console.log(e.innerHTML);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);
});

let list = document.querySelector("#list");

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(`You clicked on ${event.target.innerText}`);
    }
});

const handler = ()=>{
    console.log("button was clicked -- handler");
};
btn.addEventListener("click", handler);

btn.removeEventListener("click", handler);

let div = document.querySelector("div");
div.onmouseover = (e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);
}

let mode = document.querySelector("#btn");
let body = document.querySelector("body");
let currMode = "light";

mode.addEventListener("click", () =>{
    if(currMode ==="light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("white");
        document.querySelector("body").style.backgroundColor = "black";
    } else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
});

//lecture 11
//objects
const student ={
    fullName: "Samruddhi",
    marks: 94.53,
    printMarks: function(){
        console.log("marks= ", this.marks);
    },
};

const employee = {
    calTax(){
        console.log("tax rate is 10%");
    },
    calTax1: function() {
        console.log("tax rate is 10%");
    }
};

const karan = {
    salary: 50000,
};
karan.__proto__ = employee;
//karan
//{salary: 50000}salary: 50000[[Prototype]]: ObjectcalTax: ƒ calTax()calTax1: ƒ ()[[Prototype]]: Object
//karan.calTax();
//script.js:574 tax rate is 10%

//classes
class Car{
    constructor(brand){
        console.log("Creating new object");
        this.brand = brand;
    }
    start(){
        console.log("Start");
    }

    stop(){
        console.log("stop");
    }
}

let toyota = new Car("Nano");
console.log(toyota);
//toyota.setBrand("Car");
let fortuner = new Car();
//fortuner.setBrand("Nano");

//Inheritance
class parent{
    hello(){
        console.log("hello");
    }
}
class child extends parent{}

let obj = new child();

class person{
    constructor(species){
        this.species="homo sapiens";
    }
    eat(){
        console.log("you can eat");
    }
    walk(){
        console.log("you can walk");
    }
    work(){
        console.log("Do nothing!");
    }
}

class engineer extends person{
    work(){
        console.log("you can work");
    }
}
let p = new person();
let p1 = new engineer();

//super keyword
class person{
    constructor(branch){
        console.log("enter parent constructor");
        this.species="homo sapiens";
        this.branch=branch;
    }
    eat(){
        console.log("you can eat");
    }
}

class engineer extends person{
    constructor(branch){
        console.log("enter child constructor");
        super(); //to invoke parent class constructor
        //super(branch);
        this.branch = branch;
        console.log("exit child constructor");
    }
    work(){
        super.eat();
        //eat(); //error
        console.log("you can work");
    }
}
let p1 = new engineer("computer");

//practice question
let DATA = "secret information";
class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    getData(){
        console.log("website data =", DATA);
    }
}

class admin extends user{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        DATA = "some new value";
    }
}
let student1 = new user("Samruddhi", "abc@gmail.com");
let student2 = new user("Veda", "vedawagh@gmail.com");

let admin1 = new admin("admin", "admin@gamil.com");

let a = 5;
let b = 10;
console.log("a =", a);
console.log("b =", b);
console.log("a+b =", a+b);
try{
    console.log("a+b = ", a+c);
}catch(err){
    console.log(err);
}
console.log("a+b =", a+b);
console.log("a+b =", a+b);
console.log("a+b =", a+b);
console.log("a+b =", a+b);

//lecture 12
//synchronous programming 
console.log("one");
console.log("two");
console.log("three");

//Asynchronous programming 
console.log("one");
console.log("two");
console.log("three");
//function hello(){
//   console.log("hello");
//}
setTimeout(()=>{
    console.log("hello");
}, 2000); //timeout
console.log("four");
console.log("five");

//callback
//function sum(a, b){
//    console.log(a+b);
//}
function calculator(a, b, sumCallback){
    sumCallback(a, b);
}
//calculator(1, 2, sum);
calculator(1, 2, (a, b)=>{
    console.log(a+b);
});

function getData(id, getNextData){
    setTimeout(()=>{
        console.log("data", id);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}
//callback hell
getData(1 ,()=>{
    console.log("getting data 2..");
    getData(2, ()=>{
    console.log("getting data 3..");
        getData(3, ()=>{
        console.log("getting data 4..");
            getData(4);
        });
    });
});
//getData(2);
//getData(3);

// function fetchData(callback) {
//     console.log("Fetching data...");
//     setTimeout(() => {
//         callback("Data received!");
//     }, 2000);
// }

// function handleData(response) {
//     console.log(response);
// }

// fetchData(handleData);


//promises
let promise = new Promise((resolve, reject)=>{
    console.log("i am promise");
    reject("some error ocurred") //Uncaught (in promise) some error ocurred
})
//i am promise
//>promise
//Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined

function getData(id, getNextData){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", id);
            resolve("sucess");
            if(getNextData){
                getNextData();
            }
        }, 2000);
    });
}
//>let a = getData(123);
//undefined
//>a
//Promise {<pending>}
//data 123
//>a
//Promise {<fulfilled>: 'sucess'}

function getData(id, getNextData){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //console.log("data", id);
            reject("error");
            if(getNextData){
                getNextData();
            }
        }, 2000);
    });
}
//>let a = getData(123);
//undefined
//>a
//Promise {<pending>}
//Uncaught (in promise) error
//>a
//Promise {<rejected>: 'error'}

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         console.log("Fetching data...");
//         setTimeout(() => {
//             const success = true;
//             if (success) {
//                 resolve("Data received!");
//             } else {
//                 reject("Error fetching data!");
//             }
//         }, 2000);
//     });
// }

// fetchData()
//     .then((response) => {
//         console.log(response); // Logs "Data received!" if successful
//     })
//     .catch((error) => {
//         console.error(error); // Logs "Error fetching data!" if there's an error
//     })
//     .finally(() => {
//         console.log("Fetch attempt completed.");
//     });


const getPromise = ()=>{
    return new Promise((resolve, reject)=>{
        console.log("i am a promise");
        resolve("sucess");
        reject("network error");
    });
};

let promise = getPromise();
promise.then(()=>{
    console.log("promise fulfilled");
});

promise.catch(()=>{
    console.log("rejeted");
});

function asyncfunc1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("sucess");
        }, 4000);
    });
}

function asyncfunc2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("sucess");
        }, 4000);
    });
}

console.log("fetching data1");
asyncfunc1().then((res)=>{
    console.log("fetching data2");
    asyncfunc2().then((res)=>{});
});

function getData(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", id);
            resolve("sucess");
        }, 2000);
    });
}
//getData(1).then((res)=>{
//    console.log(res);
//    getData(2).then((res)=>{
//        console.log(res);
//    });
//});

//alternate way which is chain of promises 
getData(1)
    .then((res)=>{
        return getData(2);
    })
    .then((res)=>{
        return getData(3);
    })
    .then((res)=>{
        console.log("sucess");
    });
*/

//Promise: .then() and .catch() & result n error
// function savetoDb(data){
//     return new Promise((resolve, reject) =>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4){
//             resolve(data);
//         }else{
//             reject(data);
//         }
//     });
// }
// savetoDb("Samruddhi Nadgouda")
//     .then((result) =>{
//         console.log("Data1 was resolved");
//         console.log(result);
//         return savetoDb("I'm a developer");
//     })
//     .then((result) =>{
//         console.log("Data2 was resolved");
//         console.log(result);
//         return savetoDb("Thank you!");
//     })
//     .then((result)=>{
//         console.log("Data3 was resolved");
//         console.log(result);
//     })
//     .catch((error) =>{
//         console.log("Promise was rejected");
//         console.log(error);
//     });

    /*
h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            h1.style.color = color;
            resolve("Color changed!");
        }, delay);
    });

}
async function show(){
    await changeColor("red", 1000);
    await changeColor("yellow", 1000);
    await changeColor("blue", 1000);
    await changeColor("green", 1000);
    await changeColor("pink", 1000);

    return "done";
}

changeColor("red", 1000)
    .then(() =>{
        console.log("red color was completed");
        return changeColor("orange", 1000);
    })
    .then(() =>{
        console.log("orange color was completed");
        return changeColor("blue", 1000);
    })
    .then(() =>{
        console.log("blue color was completed");
        return changeColor("green", 1000);
    })
    .then(() =>{
        console.log("green color was completed");
    });


//async function
function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}
async function getWeatherData(){
    await api();
    await api();
}

function getData(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", id);
            resolve("sucess");
        }, 2000);
    });
}
async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
}

//fetch api
const url = "https://catfact.ninja/fact";

fetch(url)
    .then((res) =>{
        return res.json();
    })
    .then((data) =>{
        console.log("data1: ", data.fact);
        return fetch(url);
    })
    .then((res) =>{
        return res.json();
    })
    .then((data2) =>{
        console.log("data2: ", data2.fact);
    })
    .catch((err) =>{
        console.log("ERROR -", err);
    });



// let promise = fetch(URL);
// console.log(promise);

const getFacts = async () =>{
    console.log("getting data....");
    let response = await fetch(url);
    console.log(response); //json format
    console.log(response.status);
    let data = await response.json();
    console.log(data.fact);
    // factP.innerText = data[1].text;
};
//>getFacts()
//getting data....
//Promise {<pending>}
//Response {type: 'cors', url: 'https://catfact.ninja/fact', redirected: false, status: 200, ok: true, …}
//200

//Accessing Data from JSON
let jsonRes = 
'{"fact":"Cats have been domesticated for half as long as dogs have been.","length":63}';

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

let student = {
    name: "Samruddhi Nadhouda",
    age: 21
};
JSON.stringify(student)
//'{"name":"Samruddhi Nadhouda","age":21}'
*/

//Axios
// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try{
//         let res = await axios.get(url);
//         console.log(res);
//     } catch(e){
//         console.log("ERROR_ ", e);
//     }
// }

//Minor project: get random facts
// let url = "https://catfact.ninja/fact";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async ()=>{
//     let facts = await getFacts();
//     console.log(facts);
//     let p = document.querySelector("#fact");
//     p.innerText = facts;
// });

// const getFacts = async () =>{
//     try{
//         let response = await fetch(url);
//         let data = await response.json();
//         return data.fact;
//     }catch(e){
//         console.log("ERROR- ", e);
//         return "No found fact";
//     }
// };

//Minor project: get random images
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async ()=>{
//     let link = await getImage();
//     console.log(link);
//     let img = document.querySelector("#result");
//     img.setAttribute("src", link);
// });

// const getImage = async () =>{
//     try{
//         let response = await fetch(url2);
//         let data = await response.json();
//         return data.message;
//     }catch(e){
//         console.log("ERROR- ", e);
//         return "No found image";
//     }
// };

//Updating query strings
// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () =>{
//     let country = document.querySelector("input").value;
//     console.log(country);

//     let colleges = await getColleges(country);
//     show(colleges);
// });

// function show(colleges){
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for(col of colleges){
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges(country) {
//     try{
//         let res = await fetch(url + country);
//         let data = await res.json();
//         return data;
//     }catch(e){
//         console.log("ERROR- ", e);
//     }
// };

let res = null === undefined;
console.log(res);