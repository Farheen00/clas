// Functions
// #1
//requirements
//*prams=>aPple,gLaSs,BrEad
//*return=>APPLE,GLASS,BREAD
//Solution
// using return

function convertToUpperCase(data:string):string{
    const stringInUpperCase =data.toUpperCase();
    
 return stringInUpperCase;
 }
 let upperCaseData=convertToUpperCase("aPple");
let upperCaseData2=convertToUpperCase("gLaSs");
 let upperCaseData3=convertToUpperCase("BrEad");
 console.log(upperCaseData);
console.log(upperCaseData2);
console.log(upperCaseData3);
//convert data to lowercase and console the data
function convertToLowerCase(data:string):string{
    const stringInLowerCase =data.toLowerCase();
    return stringInLowerCase;
}
let lowerCaseData=convertToLowerCase(upperCaseData);
console.log(lowerCaseData);

// direct console inside function body
function convertToUpperCase2(data :string){
    const stringInUpperCase2 =data.toUpperCase();
    console.log(stringInUpperCase2);
}
convertToUpperCase2("cHair");
convertToUpperCase2("taBle");

// #2
// requirements
// create a function that takes amount as an argument and
//  returns any item
// Example : obj{100:"6 Eggs",
//200:"Bread",300:"Milk"}
//Solution
const items={100:"6 Eggs",
200:"Bread",300:"Milk"}
function buyItem(amount:number):string{
    const itemName = items[amount];
    return itemName;}
const item1=buyItem(100);
console.log(item1);
const item2=buyItem(200);
console.log(item2);
const item3=buyItem(300);
console.log(item3);
// #3
// requirements
// create a function that will take
// firstName,lastName and phoneNumber
//returns object{firstName,lastName ,email and phoneNumber}
//firstName,lastName ,email should be mandatory
// phoneNumber should be optional

//Solution
interface User{firstName :string,
    lastName :string,
    email: string,
phoneNumber? : string}
function makeObject(firstName :string,
    lastName :string,
    email: string,
phoneNumber? : string) :User{
    return{firstName,lastName,email,phoneNumber}
}
const obj1=makeObject("Farheen","Usman","abc@example.com");
const obj2=makeObject("Maaz","Usama","maaz@ex.com","123456");
console.log(obj1);
console.log(obj2);