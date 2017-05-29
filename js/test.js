/**
 * Created by zkl on 2017/5/11.
 */

function ClickMe (){
    alert(window.location.href);
    alert(window.location.toString());
    window.location.replace("https://www.baidu.com");
    window.location.assign("https://www.google.com");
    window.location.reload();
    // window.open("https:www.baidu.com");
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

function getValue() {
   var firstText = document.getElementById("firstText").ge
}

function moveWindow(){
    // window.moveTo(200,200);
    window.r;
}

function apiTest(){
    alert(document.getElementById("firstText").value);
}

// window.setInterval(changeCss,2000);

//模拟鼠标点击
function simuClick() {
    var but =document.getElementById("changCSS");
    but.click();
}
window.setInterval(simuClick,3000);





