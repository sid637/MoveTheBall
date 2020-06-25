var ball=document.getElementById("ball");
// to make top distance of ball equal
//  to top distance including top and margin of element
ball.style.top=ball.offsetTop + "px";
ball.style.left=ball.offsetLeft+"px";

var ballHeight=ball.offsetHeight;
var ballWidth=ball.offsetWidth;

function setValue(value){
    return value+"px";
}

function key(keyPress){
    var top=parseInt(ball.style.top);
    var left=parseInt(ball.style.left);

    if(keyPress==="w" || keyPress==="W"){
        if(top>5){
            ball.style.top=setValue(top-5);
        }
    }
    else if(keyPress==="a" || keyPress==="A"){
        if(left>5){
            ball.style.left=setValue(left-5);
        }
    }

   else if(keyPress==="s" || keyPress==="S"){
        if(top<(window.innerHeight-ballHeight)-5){
            ball.style.top=setValue(top+5);
        }
    }

   else if(keyPress==="d" || keyPress==="D"){
        if(left<(window.innerWidth-ballWidth)-5){
            ball.style.left=setValue(left+5);
        }
    }


}

 window.addEventListener("keypress",function(event){
    key(event.key);
 });