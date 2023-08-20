let temp;
document.getElementById("submit").onclick=function(){
    temp=document.getElementById("input").value;

    if(document.getElementById("celsius").checked){
        temp=tocelsius(temp);
        document.getElementById("output").innerHTML=temp+"°C";
        
    }
    else if(document.getElementById("fah").checked){
        temp=tofahrenhiet(temp);
        document.getElementById("output").innerHTML=temp+"°F";
    }else{
        document.getElementById("output").innerHTML="Please Select One of the given option";
    }
}
function tocelsius(temp){
    temp=(temp-32)*5/9;
    return temp;
}
function tofahrenhiet(temp){
    temp=(temp*9/5)+32;
    return temp;
}