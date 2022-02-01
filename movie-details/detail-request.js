let imgs = document.querySelectorAll('.performer img');
imgs[0].addEventListener('click', () => {
    fetch('http://42.192.155.29:8080/celebrity/1', {
            method: 'GET'
        }).then(res => res.json())
        .then(res => {
            sessionStorage.setItem('performer', JSON.stringify(res))
            window.location.replace('file:///E:/%E7%B3%BB%E7%BB%9F%E9%BB%98%E8%AE%A4/%E6%A1%8C%E9%9D%A2/%E8%B1%86%E7%93%A3/performer/build/performer.html')
            // window.open('../performer/build/performer.html')
        })
})
// 讨论区
let btns = document.getElementsByTagName('button');
btns[2].addEventListener('click', () => {
    if (username) {
        window.location.replace('file:///E:/%E7%B3%BB%E7%BB%9F%E9%BB%98%E8%AE%A4/%E6%A1%8C%E9%9D%A2/%E8%B1%86%E7%93%A3/discuss/discuss.html')
    } else {
        alert('请先登录豆瓣')
    }
})