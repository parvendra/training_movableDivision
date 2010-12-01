console.log("javascript started");
$(document).ready(function(){
    console.log("ready");
    var division =  $('#movable-div');
        division.css({"position":"absolute", "top" : ((($(window).height() - division.height() ) / 2) + "px"), "left": ((( $(window).width() - division.width() ) / 2) + "px")});
  //  $('#left').html(Math.floor(((( $(window).width() - division.width() ) / 2) + "px"));
    //       $('#top').html(Math.floor(((($(window).height() - division.height() ) / 2) + "px")));
        $(document).bind('keydown', function(event){
            console.log("key down event");
            var position = division.position();
            if(event.keyCode == 37){
                $('#event').html("Left Arrow Key pressed !");
                division.animate(
                    {
                      left : ((position.left-20 >= 10) ? (position.left-20) : 10) 
                    },
                    'fast'
                );
            }
            if(event.keyCode == 39){
                $('#event').html("Right Arrow Key pressed !");
                division.animate(
                    {
                      left : ((position.left + division.width() + 20 <= ($('#container').width() - 10) ) ? (position.left + 20) : position.left) 
                    },
                    'fast'
                );
            }
            if(event.keyCode == 38){
                $('#event').html("Up Arrow Key pressed !");
                division.animate(
                    {
                      top : ((position.top-20 >= 10) ? (position.top-20) : 10) 
                    },
                    'fast'
                );
            }
            if(event.keyCode == 40){
                $('#event').html("Down Arrow Key pressed !");
                division.animate(
                    {
                      top : ((position.top + division.height() + 20 <= ($('#container').height() - 10) ) ? (position.top + 20) : position.top)  
                    },
                    'fast'
                );
            }
                $('#left').html(Math.floor(position.left));
                $('#top').html(Math.floor(position.top));

        });
});
