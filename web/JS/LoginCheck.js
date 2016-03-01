/**
 * Created by mliu3 on 2016/2/26.
 */
function checkUserName(userName){
    if(userName.length === 0){
        document.getElementById("username").focus();
        document.getElementById("UserNameErrMSG").innerHTML="<font color='red' size='2'>User Name not empty!</font>";
        return false;
    }else{
        document.getElementById("UserNameErrMSG").innerHTML="";
    }
    if(userName.length<3||userName.length>10){
        document.getElementById("username").focus();
        document.getElementById("UserNameErrMSG").innerHTML="<font color='red' size='2'>User name between 3-10 byte!</font>";
        return false;
    }else{
        document.getElementById("UserNameErrMSG").innerHTML="";
    }
    if(inSpace(userName)){
        document.getElementById("username").focus();
        document.getElementById("UserNameErrMSG").innerHTML="<font color='red' size='2'>No space in user name!</font>";
        return false;
    }else{
        document.getElementById("UserNameErrMSG").innerHTML="";
    }
    if(!isNumOrChar(userName)){
        document.getElementById("username").focus();
        document.getElementById("UserNameErrMSG").innerHTML="<font color='red' size='2'>User name must use number or char!</font>";
        return false;
    }else{
        document.getElementById("UserNameErrMSG").innerHTML="";
    }
}

function checkPSW(PSW){
    if(PSW.length === 0){
        document.getElementById("psw").focus();
        document.getElementById("UserPSWErrMSG").innerHTML="<font color='red' size='2'>Password not empty!</font>";
        return false;
    }else{
        document.getElementById("UserPSWErrMSG").innerHTML="";
    }
    if(PSW.length<3||PSW.length>10){
        document.getElementById("psw").focus();
        document.getElementById("UserPSWErrMSG").innerHTML="<font color='red' size='2'>Password between 3-10 byte!</font>";
        return false;
    }else{
        document.getElementById("UserPSWErrMSG").innerHTML="";
    }
    if(inSpace(PSW)){
        document.getElementById("psw").focus();
        document.getElementById("UserPSWErrMSG").innerHTML="<font color='red' size='2'>No space in Password!</font>";
        return false;
    }else{
        document.getElementById("UserPSWErrMSG").innerHTML="";
    }
    if(!isNumOrChar(PSW)){
        document.getElementById("psw").focus();
        document.getElementById("UserPSWErrMSG").innerHTML="<font color='red' size='2'>Password must use number or char!</font>";
        return false;
    }else{
        document.getElementById("UserPSWErrMSG").innerHTML="";
    }
}

function inSpace(string){
    var spacechar=' \t\n\r';
    var i,c;
    for(i=0;i< string.length;i++){
        c = string.charAt(i);
        if(spacechar.indexOf(c)>=0){
            return true;
        }
    }
    return false;
}

function isNumOrChar(str){
    var re=/^[0-9a-z][\w-.]*[0-9a-z]$/i;
    if(re.test(str)){
        return true;
    }else{
        return false;
    }
}

function submitCheck(){
    /*if((document.getElementById("UserNameErrMSG").innerHTML.length === 0)&&(document.getElementById("UserPSWErrMSG").innerHTML.length === 0)){
        alert("all go!");
    }else{
        alert("error!");
    }*/
}