var time=new Map();

time.set('usa','2015')
time.set('uk','2016-2017')
time.set('nepal','2013')
time.set('china','2012')

var address=new Map();
address.set('usa','US New Jersey')
address.set('uk','UK')
address.set('nepal','NEPAL')
address.set('china','CHINA')

var done=new Map();
done.set('usa','<br> Kean University <br> Participated in Exchange program English major')
done.set('uk','<br> MA Media Industries student at University of Leeds <br> MA Multimedia student Journalism University of Westminster<br> Assistant at Harkii Independent Music Studio')
done.set('nepal','<br> Journalistic Internship: Wrote stories, researched, pitched new ideas and interviewed locals')
done.set('china','<br> Wenzhou Kean University English Major and won the third-class University Scholarship. <br> Editor of University English Radio Station')

$(document).ready(function(){
    
    $(".popup").click(function(){
        var id=$(this).prop("title");
        if($(window).width()>=768){
        console.log("going to pop up");
       $("#popupcontainer").show();
       var target="#"+id;
       console.log($(target).prop("id"));
       var targetpop=target+'pop';
       var offset=$(target).offset();
        console.log(offset.left);
        
       $(targetpop).css({
           "left":offset.left,
           "top":offset.top-30,
       })
       $(targetpop).show();
        }else{
        $("#info").css({
           'left':30,
           'top':200,
       });
       $("#info").html("Time:" + time.get(id) +"<br> Address:"+address.get(id)+"<br> What I have done:"+done.get(id));
       $("#popupcontainer").show();
       $("#info").show();
        }
        
    });
    
    $("#popupcontainer").not(".popupinfo").click(function(){
        $("#info").html("");
        $("#info").hide();

       $(".popupinfo").hide(); 
        $(this).hide();
    });
    
    
    $(".pin").click(function(e){
        console.log("PIN");
       var id=$(this).prop("id"); 
       $("#info").css({
           'left':e.pageX,
           'top':e.pageY,
       });
       $("#info").html("Time:" + time.get(id) +"<br> Address:"+address.get(id)+"<br> What I have done:"+done.get(id));
       $("#popupcontainer").show();
       $("#info").show();
    });
});