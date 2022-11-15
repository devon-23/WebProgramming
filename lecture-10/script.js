$('button').click( () => {
    // .animate({ css params }, speed )
    $('.circle-div').animate({
        marginLeft: '400px',
        marginTop: '120px',
        height: '150px',
        width: '150px',
    }, 800, function() {
        console.log("call back")
    })
})

$('.city-image').hover (()=>{
    $('.city-image').animate({
        width: '600px',
        height: '600px',
        opacity: '0.75'
    }, 200, ()=> {
        // $('.city-image').css({
        //     width: '100px',
        //     height: ''
        // })
        $('.city-image').animate({
            width: '400px',
            height: '300px',
            opacity: '1.00'
        }, 1600)
    })
})