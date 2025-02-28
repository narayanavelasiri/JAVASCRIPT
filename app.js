// prompt method?

// the prompt method in a js is a built in method that allows the user to interact with the webpage by inputiing data
var userName;
function askForUserName(){
    userName = prompt("please enter the name")
    
}
askForUserName();
console.log(userName)

// alert method
//set timeout it is a function that is used in a case where we need to delay the execution of the program
//setTimeout(function,delay);
//the delay will be in milliseconds
//ex = otp
// set interval 
setTimeout(function(){
    console.log("helloo yaar")
}, 3000)

function greet(){
    console.log("hello naini")
}
setInterval(greet,3000);
var type;

setTimeout((type)=>{
    console.log(`this is the advance way of writing the setTimeout using ${type}`)
},3000);
alert("the timer is stopped")
//settimeout with clearTimeout
function timerstopped(){
    alert("the timer is stopped")
    clearTimeout(type)
    
}
// timerstopped()
// setInterval
// to perform the actions multiple times based upon the delay






