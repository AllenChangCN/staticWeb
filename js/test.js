/**
 * Created by zkl on 2017/5/11.
 */

function ClickMe (){
    alert("Click Successfully");
}

function changeCss() {
    var css = document.getElementById("changCSS");
    if(css.style.backgroundColor=="grey")
    {
        css.style.backgroundColor="red";
    }
    else
    {
        css.style.backgroundColor="grey";
    }
}

