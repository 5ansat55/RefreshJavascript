let namee = "Max";
var age = 29;
hasHobbies = true;

namee=" Şaban ";

//const is never change, but let is can changed.
// hasHobbies = false;

//arrow functions
const add = (a,b) => a + b;
const addOne = a => a + 1;
const addRandom = () => 1 + 2;

function summarizeUser( userName, userAge, userHasHobby){
    return(
        "Name is"+
        userName + 
        " , age is " +
        userAge +
        "and the user has hobbies" +
        userHasHobby
    );
};

//Object: Properties and Methods
//this keyword in the arrow func is present global object. 
const person = {
    namee:"Max",
    age:29,
    greeet: function() {
        console.log("Hi , I am "+ this.namee)
    }
}

//Array
const hobbies = ["Sports","Cooking"];
// for (let hobby of hobbies){
//     console.log(hobby);
// }
//this gives array
console.log(hobbies.map(hobby => {
    return "Hobby: " + hobby;
} 
));
console.log(summarizeUser(namee,age,hasHobbies));
console.log(add(1,2));
person.greeet()
