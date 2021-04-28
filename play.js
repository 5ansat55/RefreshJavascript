let namee = "Max";
var age = 29;
 hasHobbies = true;

namee=" Şaban ";

//const is never change.
// hasHobbies = false;
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