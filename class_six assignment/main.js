// object
var personDetails = { firstName: "Farheen",
    lastName: "Usman",
    age: 34,
    nationality: "Pakistani",
    isMarried: true,
};
// print object
console.log(personDetails);
// to access any specific detail in an object
console.log(personDetails.firstName);
console.log(personDetails.lastName);
console.log(personDetails.age);
console.log(personDetails.nationality);
console.log(personDetails.isMarried);
//array  and object in an object
var personInformation = { fullName: "Farheen Usman",
    age: 34,
    CNIC: 4230169703318,
    religion: "Islam",
    degrees: ["matric", "intermediate", "graduate", "masters"],
    contact: { phoneNumber: 3333666,
        emailAddress: "farheenusman2@gmail.com" }
};
console.log(personInformation);
console.log(personInformation.fullName);
console.log(personInformation.degrees);
console.log(personInformation.degrees[3]);
console.log(personInformation.contact);
console.log(personInformation.contact.emailAddress);
