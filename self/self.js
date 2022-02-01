let h1=document.getElementsByTagName('h1')[0];
let me=document.getElementById('me');
let username=sessionStorage.getItem('username');
if(username){
    h1.innerHTML+=username;
    me.innerHTML+=username;
}