/**
 * Created by zkl on 2017/5/9.
 */
function check() {
    var userName = document.getElementsByName("username")[0].value;
    var passWd = document.getElementsByName("password")[0].value;
    if(userName==""||passWd=="")
    {
        alert("Please input User Name!");
    }
}