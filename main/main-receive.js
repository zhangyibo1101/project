let username = sessionStorage.getItem('username');
let login = document.querySelector('.header_right1 a');
let myself = document.querySelector('.myself');
let quit = document.getElementById('quit');
let mine = document.getElementById('mine');
let token =sessionStorage.getItem('token');
console.log(token)
if (username) {
    login.innerHTML = username + '你好！';
    login.href = '#';
    login.addEventListener('click', (e) => {
        myself.style.display = 'block';
        e.cancelBubble = true;
    })
    document.addEventListener('click', () => {
        myself.style.display = 'none';
    })
    quit.addEventListener('click', () => {
        sessionStorage.removeItem('username');
        window.location.reload();
    })
    mine.addEventListener('click', () => {
        fetch('http://42.192.155.29:8080/user/user1',{
            method:'GET',
            headers:{
                token:token
            }
        }).then(res=>res.json())
        .then(res=>sessionStorage.setItem('selfinfo1',res))
        fetch('http://42.192.155.29:8080/user/user1',{
            method:'GET',
            headers:{
                token:token
            }
        }).then(res=>res.json())
        .then(res=>sessionStorage.setItem('selfinfo1',res))
        fetch('http://42.192.155.29:8080/user/user2',{
            method:'GET',
            headers:{
                token:token
            }
        }).then(res=>res.json())
        .then(res=>sessionStorage.setItem('selfinfo2',res))
        fetch('http://42.192.155.29:8080/user/user3',{
            method:'GET',
            headers:{
                token:token
            }
        }).then(res=>res.json())
        .then(res=>sessionStorage.setItem('selfinfo3',res))
        fetch('http://42.192.155.29:8080/user/user4',{
            method:'GET',
            headers:{
                token:token
            }
        }).then(res=>res.json())
        .then(res=>sessionStorage.setItem('selfinfo4',res))
        window.location.replace('../self/build/self.html')
    })

}