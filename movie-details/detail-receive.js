let username = sessionStorage.getItem('username');
let login = document.querySelector('.header_right1 a');
let myself = document.querySelector('.myself');
let quit = document.getElementById('quit');
let mine = document.getElementById('mine')
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
        window.location.replace('file:///E:/%E7%B3%BB%E7%BB%9F%E9%BB%98%E8%AE%A4/%E6%A1%8C%E9%9D%A2/%E8%B1%86%E7%93%A3/self/build/self.html')
    })
}
