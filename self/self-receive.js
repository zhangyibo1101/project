let login=document.querySelector('.header_right1 a');
let myself=document.querySelector('.myself');
let quit=document.getElementById('quit');
    if(username){
        login.innerHTML=username+'你好！';
        login.href='#';
        login.addEventListener('click',(e)=> {
            myself.style.display='block';
            e.cancelBubble=true;
        })
        document.addEventListener('click',()=>{
            myself.style.display='none';
        })
        quit.addEventListener('click',()=> {
            sessionStorage.removeItem('username');
            window.location.reload();
        })
    }