is_sidebarshow=false;

var arr = new Map();
arr.set('Homepage.', 'index.html');
arr.set(' About Me.', 'ABOUTME.html');
arr.set('Portfolio.', '#');
arr.set('Experience.', 'Experience.html');
arr.set('Skills.', 'skills.html');



slogan='The Impressionist, giving people the impression<br> you’ve got some idea of what’s going on';

res=slogan.split("");

$(document).ready(function(){
    
//    $("#banner").mouseenter(function(){
//        for ( text in res){
//            $("#banner").append(text);
//        }
//    })
    
    $(function () {
    $('[data-toggle="tooltip"]').tooltip();
        console.log("try");
    })
    
    //console.log(res);
    $("#show").click(function(){
    $("div#con-sidebar").css({visibility: 'visible'});
    $("ul#sidebar").animate({left: '0px'});
    is_sidebarshow=true;
    event.stopPropagation();
    });
    
    $("span#close").click(function(){
    $("div#con-sidebar").css({visibility: 'hidden'});
    $("ul#sidebar").animate({left: '-150px'});
    });
    
    //myMap.get('key1'); // returns "value1"
    $("input").keypress(function(e){
       if (e.which == '13') {
           e.preventDefault();
           target=arr.get($('input').val());
           if(target!=undefined){
                window.location.href =target;
           }else{
               $('input').val("")
           }

       } 
    });
    
    //get li text then return to new page corrsponded to context
    $("ul#sidebar > li").click(function(){
        var add=$(this).text();
        console.log(add);
        window.location.href = arr.get(add);

    });
    
});