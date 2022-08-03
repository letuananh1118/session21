var elMsg=document.getElementById('feedback');
var elUsername=document.getElementById('username');
function checkUsername(minlength) {
    if(elUsername.value.length<minlength) {
        elMsg.innerHTML = 'Username must be' + minlength + 'characters or more';
    }else{
        elMsg.innerHTML='';
    }
}