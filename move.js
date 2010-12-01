$(document).ready(function(){
    var division =  $('#movable-div');
    var DISPLACEMENT = 20;
    var SPEED = 30;

    function  setBlockToCenter(){
         division.css(
             {
            "top" : ((($(window).height() - division.height() ) / 2) + "px"),
            "left": ((( $(window).width() - division.width() ) / 2) + "px")
             });
    }

    function setPositionLables(){
        $('#left').html(Math.floor(division.offset().left));
        $('#top').html(Math.floor(division.offset().top));
    }
    var hashToAnimate = {left : 0, top : 0}; 
    function moveBlock(leftValue, topValue, message){
        hashToAnimate.left = leftValue;
        hashToAnimate.top = topValue;
        division.animate(hashToAnimate, SPEED);
        $('#event').html(message);
        setPositionLables();
    }
    
    var masterHash = {
        v37 : {
            leftValueExpression : "((position.left-DISPLACEMENT >= 10) ? (position.left-DISPLACEMENT) : 10)",
            topValueExpression : "(position.top)",
            message : "Left Arrow key pressed!"
        },
        v39: {
            leftValueExpression : "((position.left + division.width() + DISPLACEMENT <= ($(window).width() - 30) ) ? (position.left + DISPLACEMENT) : position.left)",
            topValueExpression : "(position.top)",
            message : "Right Arrow key pressed!"
        },
        v38: {
            leftValueExpression : "(position.left)",
            topValueExpression : "((position.top-DISPLACEMENT >= 10) ? (position.top-DISPLACEMENT) : 10)",
            message : "Up Arrow key pressed!"
        },
        v40: {
            leftValueExpression : "(position.left)",
            topValueExpression : "((position.top + division.height() + DISPLACEMENT <= ($(window).height() - 30) ) ? (position.top + DISPLACEMENT) : position.top)",
            message : "Left Arrow key pressed!"
        }
    };

    setBlockToCenter();
    setPositionLables();
    $(document).bind('keydown', function(event){
        var position = division.offset();
        if(37 <= event.keyCode <= 40) {
            var leftValue = eval(eval("masterHash.v"+event.keyCode+".leftValueExpression"));
            var topValue = eval(eval("masterHash.v"+event.keyCode+".topValueExpression"));
            var message = eval("masterHash.v"+event.keyCode+".message");
            moveBlock(leftValue, topValue, message);
        }
        setPositionLables();
        });
    
    $(window).resize(function() {
        var height = $(window).height();
        var width = $(window).width();
        if(height < division.offset().top+division.height()+30){
              moveBlock(division.offset().left, (height - 40 - division.height()), "Window Resized!");
        }
        if(width < division.offset().left+division.width()+30){
              moveBlock((width - 40 - division.width()), division.offset().top, "Window Resized!");
        }
    });

});
