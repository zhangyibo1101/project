let per = JSON.parse(sessionStorage.getItem('performer')).data;
let h1 = document.querySelector('h1');
h1.innerHTML = per.Name;
let img = document.querySelector('.headline img');
img.src = per.URL;
let info = document.querySelectorAll('#info li');
per.Info.split(',').forEach((item, index) => {
    info[index].innerHTML += `<span>${item}</span>`;
})
let bd = document.querySelector('.bd');
let introduce=document.querySelector('.introduce');
bd.innerHTML += per.Synopsis;
let more = document.querySelector('.bd span');
more.addEventListener('click', () => {
    bd.style.overflow='visible';
    more.style.display='none';
    introduce.style.height='auto';
    bd.style.height='auto';
})