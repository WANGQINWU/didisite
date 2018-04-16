var linkadd=new Map();
linkadd.set("spencer","ABOUTME.html");
linkadd.set("experience","Experience.html");
linkadd.set("portfolio","#");
linkadd.set("skills","skills.html");

var color=new Map();
color.set("spencer","rgb(255,198,0)");
color.set("experience","rgb(241,196,219)");
color.set("portfolio","#2272d4");
color.set("skills","white");

var bodyElement = document.querySelector("body");
bodyElement.addEventListener("mousemove", getMouseDirection, false);
 
var xDirection = "";
var yDirection = "";
 
var oldX = 0;
var oldY = 0;


$(document).ready(function(){

    
    /* $("img").click(function(){
        $(this).animate({
            top:'-=120px',
        });
        //console.log(1);
    });
    */
        
    $("ul#button > li").click(function(){
        var hide=$(".black").prop("id");
        $(".black").toggleClass('black');
        $(hide).hide();
        $(this).toggleClass('black');
        var show=$(this).prop("id");
        $(show).show();
        $("a#load").attr({
            'href':linkadd.get($(show).prop('id')),
        });
        $("body").css({
            'background-color':color.get($(show).prop('id')),
        })

    });
    
    var z=new s_text(0,true,$("img#z-01"));
    
    $( "div.tsing > img" ).not(".aaa").on( "mouseenter", function( event ) {
        
        // alert( "This will be displayed only once." );
        var stat =$(this).prop('title');
        if(stat=='0'){
        console.log("from 0 to move");
        if(event.pageY<330 || event.pageY >380){
            move($(this),yDirection,false);
            //console.log(yDirection);
           }
        else{
            move($(this),xDirection,false);
            console.log(xDirection);
            //console.log(event.pageY);
        }
        $( this ).off( event );
        timemove($(this));}

    });
});

function timemove(target){
    var time =Math.floor(Math.random() * 4)+2;
    console.log("time:"+time*1000);
    setInterval(function(){moveback(target)}, time*1000);    
}

function moveback(target){
    var stat =target.prop('title');
    console.log("back 0");
    switch(stat){
        case '1':
            move(target,'down',true);
            break;
        case '2':
            move(target,'up',true);
            
            break;
        case '3':
            move(target,'right',true);
            break;
        case '4':
            move(target,'left',true);
            break;  
        case '0':
            //console.log("start again");
            var way =Math.floor(Math.random() * 4)+1;
            console.log("random way");
            switch(way){
                case 1:
                    move(target,'up',false);
                    break;
                case 2:
                    move(target,'down',false);
                    break;
                case 3:
                    move(target,'left',false);
                    break;
                case 4:
                    move(target,'right',false);
                    break;
            }
            return 0;
    }
    //console.log("time out!!!!!")
    target.on( "mouseenter", function( event ) {
        // alert( "This will be displayed only once." );
        var stat =$(this).prop('title');
        if(stat=='0'){
        console.log("from 0 to move");
        if(event.pageY<330 || event.pageY >380){
            move($(this),yDirection,false);
            //console.log(yDirection);
           }
        else{
            move($(this),xDirection,false);
            console.log(xDirection);
            //console.log(event.pageY);
        }
        $( this ).off( event );}})
};

function move(target,direction,back){
    target.off();
    switch(direction){
        case 'left':
            
            if(back==false){
            target.prop('title', '3');
            }else{
            target.prop('title', '0');
            };
            target.animate({
                left:'-=80px',
            });
            break;
        case 'right':
            
            if(back==false){
            target.prop('title', '4');
            }else{
            target.prop('title', '0');
            };  
            target.animate({
                left:'+=80px',
            });
            break;
        case 'up':
            
            if(back==false){
            target.prop('title', '1');
            }else{
            target.prop('title', '0');
            };
            target.animate({
                top:'+=105px',
            });
            break;
        case 'down':
            
            if(back==false){
            target.prop('title', '2');
            }else{
            target.prop('title', '0');
            };   
            target.animate({
                top:'-=105px',
            });
            break;
    }           

}
//showing top 1, down 2, left 3, right 4
class s_text{
    constructor(status, is_center, self){
        this.status=status;
        this.is_center=is_center;
        this.self=self;
 }
    //methond
    move_top(is_center){
        if(this.is_center==true){
            this.self.animate({
                top:'+=115px',
            });
            this.is_center=false;
            this.status=1;
        }
    }
    move_down(){
        if(this.is_center==true){
            this.self.animate({
                top:'-=115px',
            });
            this.is_center=false;
            this.status=2;

        }
    }
    move_left(){
        if(this.is_center==true){
            this.self.animate({
                left:'-=104px',
            });
            this.is_center=false;
            this.status=4;

        }
    }
    move_right(){
        if(this.is_center==true){
            this.self.animate({
                left:'+=104px',
            });
            this.is_center=false;
            this.status=3;
        }
    }
}

function getMouseDirection(e) {
    //deal with the horizontal case
    if (oldX < e.pageX) {
        xDirection = "right";
    } else {
        xDirection = "left";
    }
 
    //deal with the vertical case
    if (oldY < e.pageY) {
        yDirection = "down";
    } else {
        yDirection = "up";
    }
 
    oldX = e.pageX;
    oldY = e.pageY;
 
   //onsole.log(xDirection + " " + yDirection);
}


