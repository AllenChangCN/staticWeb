/**
 * Created by zkl on 2017/5/11.
 */

function ClickMe (){
    alert("Click Successfully");
}

function changeCss() {
    var sheet = document.styleSheets[0];
    sheet.addRule("#changCss {background-color:red}", 0 );
}
