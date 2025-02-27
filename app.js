// Document object model = > it is a tree like structure where all the elements are arranged in a hierarcal fashion
// Dom enables to access the js to access the elements from the document so that we can easily manupulate them 


// DOM - selectors:

// getElementByTagName
// getElementByClassName
// getElementById
// .queryselector
// .qureyselectorall

// var heading = window.document.getElementsByTagName("li");
// console.log(heading)
// var ex = document.getElementsByTagName("p")
// console.log(ex)
// var listofmobiles = document.getElementsByClassName("mobilelist")
// console.log(listofmobiles

// )

// var specificbrand = document.getElementById("mobileBrands")
// console.log(specificbrand)
// var randomelement = document.querySelector("h1")
// console.log(randomelement)
// var randomelements = document.querySelectorAll("h1")
// console.log(randomelements)

//adding the element for the existing dom tree
var container = document.getElementById("container");
container.innerText = "helloo"
console.log(container)

var htwo = document.getElementById("h2tag")
htwo.appendChild(container)


var newlistItem = document.createElement("li")
newlistItem.textContent = "oneplus 10 prooo"
newlistItem.setAttribute("id","oneplus")
var mobileList = document.getElementById("mobileBrands")
mobileList.prepend(newlistItem)
//
