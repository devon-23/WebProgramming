//jQuery code
/*
    id = #name
    class = .name
    element type
*/

$('.my-button').click(function() {
    console.log('button clicked');
});


//part 2 by ID
$('#my-button').click( ()=> { 
    console.log('button clicked');
});


//by element name
$('button').click( ()=> { 
    console.log('button clicked');
});


//PART 3 
$('.the-button').click(() => {
    console.log('button-clicked');
    //lets grab paragraph using the P select
    //this will grab every paragraph on the page
    $('p').text('Rowan Univesity is the #1 Univesrity in America!');
});

//PART 4 
/*
    1) selecting elmenets using jQuery
    2) text more with "text" method
*/
$('darth-vader-button').click( ()=> { //anonyomous arrow, no name
    $('.darth-vader-text').text('The Emperor!');
} );

$('#luke-skywalker-button').click( ()=> {
    $('#luke-skywalker-text').text('Hans Solo!');
});


//PART 5 
/*
    Changing colors of elements
*/
$('.the-button').click( ()=> {
    console.log('button clicked');
    //get a reference to the paragraph
    //.css(property,value)
    $('.the-text').css('color','blue');

});

//PART 6 - changing multiple styles
$('button').click(()=> {
    $('p').css('color','orange');
    $('p').css('fontSize','22px');
    $('p').css('fontWeight','bold');
});

//Can pass in an object with CSS changes we want to make
//key value pair
$('button').click(()=> {
    $('p').css({
        'color':'blue',
        'fontSize':'22px',
        'fontWeight':'bold'
    });
});

//PART 7 - Hide and Display content using jQuery
$('.hide-button').click(()=> {
    console.log('clilcked');
    $('.content-form').css('display','none');
});

$('.show-button').click(()=> {
    console.log('button');
    $('.content-form').css('display','block');
});

//PART 8 - FadeIn & FadeOut
$('.hide-button').click(()=> {
    console.log('clilcked');

//    $('.contact-form').fadeOut(); 
    $('.contact-form').fadeOut('slow'); //notice SLOW

});
$('.show-button').click(function() {
    console.log('button');
    $('.contact-form').fadeIn(); //can pass in SLOW
});

//PART 9 - how to manually Toggle so that form appears if it is not display,
//   or disppear if it is displaying
let isFormShowing = true;

$('.toggle-button').click( ()=> {
    console.log('clicked...');
    if(isFormShowing) {
        //Hide the Form
        //$('.contact-form').fadeOut('slow');
        $('.contact-form').fadeOut(2300); //can also pass in MILLISECONDS for duration
        isFormShowing = false;
    } else {
        //Show the form
        $('.contact-form').fadeIn('slow');
        isFormShowing = true;
    }
});

//PART 10 - ToggleClass build in method
$('#toggle-button').click( ()=> {
    //get a reference to contact form
    //then toggle a class on and off
    $('#contact-form').toggleClass('hide');
});



//PART 11 - add/remove class
$('#add-class').click( ()=> {
    console.log('clicked...');
    $('p').addClass('blue-class');
});


$('#remove-class').click( ()=> {
    console.log('clicked...');
    $('p').removeClass('blue-class');
});


//PART 12 - changing an attribute of an element
//we are going to change the SRC attribute
$('#change-button').click(()=>{
    $('.city-image').attr('src','rio.jpg')
});


//PART 13 - jQuery Animations 
//  1) api.jQuery.com 
//      notice the .animate() method
//  2) w3schools.com/jquery/jquery_animate.asp
//      param = what we want to effect
//      speed
$('button').click( ()=> {
    console.log('clicked');

    //.animate({css params}, speed)
    $('.circle-div').animate({
        marginLeft: '600px'
    }, 800);

});


//PART 14 - animate with multiple CSS properties
/*
    1) the animate method allows us to create our custom effects and animation
        -works on "numeric" CSS values (marigin top, left, right)

    2) w3schools.com/jquery/jquery_animate.asp
        -notice that we can also have a "callback parameter"
        -in .animate
*/
$('button').click( ()=> {
    console.log('clicked');

    //.animate({css params}, speed, CALLBACK function)
    $('.circle-div').animate({
        marginLeft: '600px',
        marginTop: '120px',
        height: '300px',
        width:'300px',
        backgroundColor: 'purple'
    }, 1300, function() { //anonymous function no name
            console.log('Callback function fired!') //calls AFTER animation completed

            $('.circle-div').css('background-color','purple');
    });

});


//PART 15 - hover method 
$('#city-image').hover(()=>{
    console.log("you hovered over me!");

    $('#city-image').animate({
        width: '800px',
        height:'800px',
        opacity:'0.75'
    },2000,()=>{
        //this code execute after animation has compelted
        //PART 1
        /*
        $('#city-image').css({
                width:'600px',
                height:'600px',
                opacity:'1.0'
        });
        */

        //PART 2 - Lets reverse the animate during Callback
        $('#city-image').animate({
            width:'600px',
            height:'600px',
            opacity:'1.0'
        },1600);    

    });
});




