var Name = 'MAX';
var age = 21;
let hasHobbies = true ;

const summarizeUser = (userName , userAge , user_has_hobbies) => {
    return (
        "Name is " + userName + ", age is " + userAge + " and the user has hobbies : " + user_has_hobbies
    );
}
const add = (a , b) => a + b;
// console.log(add(1,2))
// console.log(summarizeUser(Name , age , hasHobbies))
// ---------------

const person = {
    name : "Max" , 
    age : 29,
    greet : function() {
        console.log("Hi , I am " + this.name)
    }
}
// person.greet()
const hobbies = ['Cooking' , 'Swimming']
hobbies.push('Football')
// var copiedArray = hobbies.slice()
const copiedArray = [...hobbies]
console.log(copiedArray)
const copiedPerson = {...person}
console.log(copiedPerson)
const to_array = (...args) => {
    return args ;
}
console.log(to_array(1 , 2 , 3 , 4))