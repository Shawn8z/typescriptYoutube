"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
    // return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("shawn");
signUpUser("shawn", "shawn@gmail", false);
loginUser("h", "h@h.com");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
var val = heros.map(function (hero) {
    return "hero is ".concat(hero);
});
console.log(val);
