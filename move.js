console.log("javascript started");
$(document).ready(function(){
        $(#movable-div).css({'top': '200px', 'left' : '300px'})
        .keydown(function(event){
            console.log("key down event");
            if(event.keyCode == 37){
                this.offset().left -= 20;
            }
            if(event.keyCode == 39){
                this.offset().left += 20;
            }
            if(event.keyCode == 37){
                this.offset().left -= 20;
            }
            if(event.keyCode == 37){
                this.offset().left -= 20;
            }
        }
});
