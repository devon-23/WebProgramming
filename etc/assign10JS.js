$("#draggable").draggable();
$("#droppable").droppable({
    drop: function(event, ui) {
    $(this)
    .addClass("ui-state-highlight") //Adding and Removing classes
    .find("p")
    .html("Dropped!"); //change text
    }
});

$('.hide-button').click(()=> {
    console.log('clilcked');
    $('.content-form').css('display','none'); // Changing a CSS style
});

$('.show-button').click(()=> {
    console.log('button');
    $('.content-form').css('display','block');
});

$('.hide-button').click(()=> {
    $('.contact-form').fadeOut('slow'); // Using fadeIn and fadeOut methods
    $('.hide-button').css('display','none'); // Hiding and Displaying context
});

$('.show-button').click(function() {
    console.log('button');
    $('.contact-form').fadeIn();
    $('.hide-button').css('display','block');
});

$(".questions").accordion(); //jQuery UI components 

$('#change').click(()=> { //Changing an attribute of an Element (Img, Href, etc.)
    var shuffle = [
        './etc/gold.png',
        './etc/coal1.jpeg',
        './etc/coal2.jpeg',
        './etc/coal3.jpeg',
        './etc/coal4.jpeg',
        './etc/coal1.jpeg',
        './etc/coal2.jpeg',
        './etc/coal3.jpeg',
        './etc/coal4.jpeg',
        './etc/coal1.jpeg',
    ];
    var item = shuffle[Math.floor(Math.random()*shuffle.length)];
    if (item == './etc/gold.png') {
        $('#change').toggle(); //toggle method
        $('.image').attr('src', item).animate({ // animate method,  Image animation
            marginLeft: '300px'
        }, 800, () => { //Callback functions
            alert("found!");
        });
    } else {
        $('.image').attr('src', item)
    }
});

$( "#sortable" ).sortable(); //jQuery UI components 

$("#date" ).datepicker(); //jQuery UI components 