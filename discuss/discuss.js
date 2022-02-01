let movie = JSON.parse(sessionStorage.getItem('movie')).data;
let img = document.querySelector('.card img');
img.src = movie.URL;
// 提交
let submit = document.querySelector('.submit');
let texts = document.querySelectorAll('textarea');
let mytoken = sessionStorage.getItem('token');
let num=sessionStorage.getItem('num');
submit.addEventListener('click', () => {
    let formdata = new FormData();
    formdata.append('context', texts[0].value + "," + texts[1].value)
    fetch('http://42.192.155.29:8080/topic/'+num, {
        method: 'POST',
        headers: {
            token: mytoken
        },
        body: formdata,
    }).then(res => res.json()).then(res => {
        alert(res.info);
        window.location.replace('file:///E:/%E7%B3%BB%E7%BB%9F%E9%BB%98%E8%AE%A4/%E6%A1%8C%E9%9D%A2/%E8%B1%86%E7%93%A3/movie-details/build01/detail.html')
    })
})