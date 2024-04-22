// Functions
// #1
//requirements
//*prams=>aPple,gLaSs,BrEad
//*return=>APPLE,GLASS,BREAD
//Solution
// using return
function convertToUpperCase(data) {
    var stringInUpperCase = data.toUpperCase();
    return stringInUpperCase;
}
var upperCaseData = convertToUpperCase("aPple");
var upperCaseData2 = convertToUpperCase("gLaSs");
var upperCaseData3 = convertToUpperCase("BrEad");
console.log(upperCaseData);
console.log(upperCaseData2);
console.log(upperCaseData3);
//convert data to lowercase and console the data
function convertToLowerCase(data) {
    var stringInLowerCase = data.toLowerCase();
    return stringInLowerCase;
}
var lowerCaseData = convertToLowerCase(upperCaseData);
console.log(lowerCaseData);
// direct console inside function body
function convertToUpperCase2(data) {
    var stringInUpperCase2 = data.toUpperCase();
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
var items = { 100: "6 Eggs",
    200: "Bread", 300: "Milk" };
function buyItem(amount) {
    var itemName = items[amount];
    return itemName;
}
var item1 = buyItem(100);
console.log(item1);
var item2 = buyItem(200);
console.log(item2);
var item3 = buyItem(300);
console.log(item3);
function makeObject(firstName, lastName, email, phoneNumber) {
    return { firstName: firstName, lastName: lastName, email: email, phoneNumber: phoneNumber };
}
var obj1 = makeObject("Farheen", "Usman", "abc@example.com");
var obj2 = makeObject("Maaz", "Usama", "maaz@ex.com", "123456");
console.log(obj1);
console.log(obj2);
