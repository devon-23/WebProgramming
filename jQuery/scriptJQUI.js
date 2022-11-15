/*
PART 1
$( function() {
    $( "#draggable" ).draggable();
  } );
  */

/*
PART 2
  $( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );
  */

/* PART 3
  $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );
*/

//PART 4
  $( function() {
    $( "#accordion" ).accordion();
  } );