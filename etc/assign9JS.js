var user = prompt('enter name');
if (user == "") {
    user = 'user';
}
document.getElementById('name').innerHTML = 'Welcome, ' +  user; //get element by ID

const bandList = document.getElementById('band-list');
const addBand = document.getElementById('band-btn');
const newBand = document.getElementById('new-band');

addBand.addEventListener('click', function() { //event listener, adding new items
    let newListItem = document.createElement('li');
    console.log(newListItem);

    newListItem.innerHTML = newBand.value;

    bandList.appendChild(newListItem); //Creating an Element & using Append Child
})

const mode = document.getElementById('dark-light');
const body = document.getElementById('body');
var lightMode = true;

mode.addEventListener('click', function() { //Changing an Elements color based on a user click
    if (lightMode) {
        body.style.backgroundColor = '#424242'
        body.style.color = '#EEEEEE'
        lightMode = false;
    } else {
        body.style.backgroundColor = '#EEEEEE'
        body.style.color = '#424242'
        lightMode = true;
    }
    
})

document.querySelector("#my-button").addEventListener("click", function(e) { //wrong game
    if (e.target.tagName === 'LI') { //- [x] getElementsByTagName
        if (e.target.style.textDecoration == "underline") {
            e.target.style.textDecoration = "none";
        } else {
            e.target.style.textDecoration = "underline";
            // e.target.style.color = "#212121";
        }
      
    }
});

document.getElementById('clear').onclick = function() { // Button with OnClick 
    document.getElementById('name').innerHTML = 'Welcome, user'; //- [ ] Making content Appear & Disappear
}


const para = document.getElementById('hover');

para.addEventListener('mouseover', ()=> {  //arrow syntax
    var elem = document.querySelectorAll('body');

    for(var i=0;i<elem.length;i++) { //- [ ] Demonstrating Mouseover Events
        elem[i].parentElement.removeChild(elem[i]);  //- [ ] incorporating classList and apply Add, Remove, Toggle
    }

});

