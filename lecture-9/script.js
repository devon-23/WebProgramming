/*
    1- get the element we want to change 
    2 - Change something about it - in this case, the innerText
*/

//Select an element on HTML page change it using only JS

//Document Object Model (DOM)
document.getElementById('city-text').innerHTML = 'Tokyo';

//referenc to this paragraph
const cityParagraph = document.getElementById('city-text');
console.log(cityParagraph); //to display the reference
cityParagraph.innerHTML = "Sao Paulo";



/*

    2 - Chnage a style property, in this case a color
*/
const newYork = document.getElementById('new-york');
console.log(newYork);
newYork.style.color = "blue";

document.getElementById('sao-paulo').style.color = "red";


/*
    1 - introducing onclick
    //note in our prev lessions, JS run as soon as page run
    //really when using DOM, you want changes to occur during user actions
    //responding to events

    //Chagne an elements text, baed on a user click
    1 - get a reference to the button using the DOM
    2 - when clicked, run a function
    3 - this function will grab an element from the DOM
    4 - it will make a change 

*/
document.getElementById('my-button').onclick = function() {
    console.log('button clicked!');

    document.getElementById('new-york').innerHTML = 'Osaka';

    //part 2 
    document.getElementById('new-york').style.color = "blue";
}



/*
    Query Selector
    //not that HTML does not have IDs on the P tags
    //any element it that it finds FIRST is returned

*/

const firstParagraph = document.querySelector('p');
console.log(firstParagraph); 

document.getElementById('my-button').onclick = () => {
    firstParagraph.style.color = 'red';
    firstParagraph.style.fontSize = '22px';


}


/*
    query Selector All
    
*/
document.querySelector('button').onclick = () => {
    
    console.log('button clicked');

    const parsList = document.querySelectorAll('p');
    parsList.forEach( (para) => {

        console.log(para);
        para.style.color = "purple";
        para.style.fontSize = "33px";
    })
}


/*
    another way to gather elements from the DOM
    //getElementsByClassName

*/

let myButton = document.querySelector('button'); //grab first button it finds on page
console.log(myButton);

myButton.onclick = () => {
    console.log('button clicked');

    let southAmericanCities = document.getElementsByClassName('south-american-city');
    console.log(southAmericanCities); //Notices HTML collection

    //NOTE the use of the indexes
    //we can interate through this
    for(let i=0; i < southAmericanCities.length; i++) {
        console.log(southAmericanCities[i]);
        southAmericanCities[i].style.color = "blue";
        southAmericanCities[i].style.fontSize = "30px";
    }

}


/*
    getElementsByTagName
*/
let headings = document.getElementsByTagName('h2');
console.log(headings);
headings[0].style.color = "blue";

let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);
for(let i=0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "purple";
    paragraphs[i].style.fontWeight = "bold";
}


/*
    create a fucntion that will SHOW/HIDE cities
    //hide unordered list
    //make it reappear

*/
let theButton = document.getElementById('city-button');
let cityList = document.getElementById('city-list');
let isDisplaying = true;


console.log(theButton);
theButton.onclick = () => {

    console.log(cityList);

    if(isDisplaying) {
        
        cityList.style.display = "none";
        isDisplaying = false;
    }
    else {
        cityList.style.display = "block";
        isDisplaying = true;
    }

}


/*
    this tutorial we will learn out to add "event listenters"
    //recal manipulate DOM using onclick
    //but we can add event listenstesr and response to any key, etc.

*/
const cityList2 = document.getElementById('city-list');
const theButton7 = document.getElementById('city-button');
theButton7.onclick = function() {
    cityList2.style.color = "red";
}

//params: 1) what are we listening for and 2) the callack function
theButton7.addEventListener('click',function() {
    cityList2.style.color = "blue";
});

document.addEventListener('keydown', ()=> {

    cityList2.style.color = 'purple';
    cityList2.style.fontSize = '30px';

});


/*
    Using DOM manipulations
    Creating elemetns and appending 
    1 - document.createElement('')
    2 - something.appendChild('something');

*/
const cityList3 = document.getElementById('city-list');
const theButton2 = document.getElementById('city-button');

let newPara = document.createElement('p');
let newDiv = document.createElement('div');
console.log(newPara, newDiv);
//Notice that they are not actually on our Webpage body

document.body.appendChild(newPara);
document.body.appendChild(newDiv);


/*
    Adding cities to our cities list (PSEDUOCODE)
    1 - add an event listenter to our button -> thebutton.addEventListner()
    2 - inside our function, create an LI element
    3 - set the innerText of the LI element to user input
    4 - append our new hero to the hero list
*/
const cityList4 = document.getElementById('city-list');
const theButton3 = document.getElementById('city-button');
const newCity = document.getElementById('new-city');

theButton3.addEventListener('click', function() {
    console.log('button clickee');

    let newListItem = document.createElement('li');
    console.log(newListItem);

    newListItem.innerHTML = newCity.value;

    cityList4.appendChild(newListItem);
})


/*
    //SETTING ATTRIBUTES
    ///we saw in HTML that some elementst need more infromation like HREF with A tag
    //another example is IMG tag for the SRC attribute

    //setAttribute() method
    someElement.setAttribute(name, value); 
    //name what we trying to change SRC, href, etc.
    //vale what we want to cahge it to
*/
const cityList5 = document.getElementById('city-list');
const theButton4 = document.getElementById('city-button');

theButton4.addEventListener('click', ()=> {

    cityList5.setAttribute('class','newcities');

});

/*
    Class Lists
    using DOM manipulates we will upate, remove and toggle these class lists
    1 - add
    2 - remove
    3 - toggle

*/

const cityList6 = document.getElementById('city-list');
const theButton5 = document.getElementById('city-button');

console.log(cityList6.classList); //list of properties that are on our list of cities

cityList6.classList.add('red-class'); //we can pass in the class list we wan to add
console.log(cityList6.classList); //notice that our UL has both the BLUE and RED classes associated to it

cityList6.classList.remove('red-class');
console.log(cityList6.classList);

//we can also TOGGLE a class on and off 
theButton5.addEventListener('click',function() {

    cityList6.classList.toggle('blue-class');// will toggle on and off a class

});


/*
    mouseover event listenter
    //mouse pointer or curser over a element on a page
*/
const cityList7 = document.getElementById('city-list');
const para = document.getElementById('hover-paragraph');

para.addEventListener('mouseover', ()=> {  //arrow syntax

    console.log("You hovered over me!");

    cityList7.classList.toggle('blue-class');//on and off

});