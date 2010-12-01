$().ready{
        $(#movable-div).css().keypdown(function(event){
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
        });
}
