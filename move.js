console.log("javascript started");
$(document).ready(function(){
        $('#movable-div').css({'top': '200px', 'left' : '300px'})
        .keydown(function(event){
            console.log("key down event");
            var div = $('#movable-div').get(0);
            if(event.keyCode == 37){
                div.offset().left = (div.offset().left - 20) ? (div.offset().left - 20) : 0;
            }
            if(event.keyCode == 39){
                div.offset().right = (div.offset().right - 20) ? (div.offset().right - 20) : 0;
            if(event.keyCode == 38){
                div.offset().top = (div.offset().top - 20) ? (div.offset().top - 20) : 0;
            }
            if(event.keyCode == 40){
                div.offset().left = (div.offset().left - 20) ? (div.offset().left - 20) : 0;
            }
        }
});
