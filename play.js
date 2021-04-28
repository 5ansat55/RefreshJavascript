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
        ", age is" +
        userAge +
        "and the user has hobbies" +
        userHasHobby
    );
};

console.log(summarizeUser(namee,age,hasHobbies));
console.log(add(1,2));