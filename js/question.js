$(document).ready(function(){
    console.log(111);
    
    $("#result").click(function(){
           var result=new Map();
           $(":radio:checked").each(function(num, obj){
            result.set(num+1, $(this).val());
           })
        if(result.size<11){
            alert("please answer all questions")
        }else{
            var sensitive = 0;
            if(result.get(2) == 'C' || result.get(2) == 'D'){
                sensitive++;
            }
            if(result.get(3) == 'B' || result.get(3) == 'D' || result.get(3) == 'C' ){
                sensitive++;
            }
            if(result.get(10) == 'A'){
                sensitive++;
            }
            if(result.get(11) == 'A'){
                sensitive++;
            }
            if(result.get(5) == 'A'){
                sensitive++;
            }
            if(result.get(8) == 'A'){
                sensitive++;
            }
            if(result.get(4) == 'A'){
                sensitive++;
            }
            
            console.log(sensitive);
            res = "您是";
            if(sensitive >=3){
                 res += "敏感"
                if(result.get(6)=='A'){
                    res += "痤疮"
                }
                if(result.get(7)=='A'){
                    res += "脂溢性皮炎"
                }
                if(result.get(10)=='B'){
                    res += "光敏性皮炎"
                }
                if(result.get(11)=='B'){
                    res += "接触性皮炎"
                }
                if(result.get(9)!='E'){
                    res += "接触性皮炎"
                }
            }else{
                 res += "非敏感"
            }
            
            if(result.get(1) === 'A' || result.get(1)==='B'){
                 res += "干性"
            }else{
                 res += "油性"
            }
            
            var rose = 0;
            if(result.get(2) == 'C' || result.get(2) == 'D' ||
              result.get(3) == 'B' || result.get(3) == 'D' || result.get(3) == 'C' ){
                if(result.get(4) == 'A' || result.get(5) == 'A' || result.get(8) == 'A'|| result.get(6) == 'A'){
                    rose = 1;
                }
            }
            if(rose === 1){
                 res += "玫瑰痤疮倾向"
            }        
        res+="肌肤"
        console.log(res);
            alert(res);
        }})
});

