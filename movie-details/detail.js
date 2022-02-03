//接受电影数据
let movie = JSON.parse(sessionStorage.getItem('movie')).data;
//电影图、电影名
let mv = document.getElementById('mv');
let h1 = document.getElementsByTagName('h1')[0];
mv.src = movie.URL;
h1.innerHTML = movie.Name;
//演员
let performers = document.querySelectorAll('.performer img');
movie.PeopleURL.split(',').map((item,index)=> {
    performers[index].src=item
})
let performername=document.querySelectorAll('.performername');

movie.NameInfo.split(',').map((item,index)=> {
    performername[index].innerHTML=item
})
let performerjob=document.querySelectorAll('.performerjob');
movie.CoverInfo.split(',').map((item,index)=>{
    performerjob[index].innerHTML=item;
})
//剧照
let still=document.querySelectorAll('.still img');
movie.MovieURL.split(',').map((item,index)=>{
    still[index].src=item;
})
//详细介绍
let messages = document.querySelectorAll('.message li');
Object.values(movie).slice(3,11).map((item,index)=>{
    messages[index].innerHTML+=item;
})
let more = document.querySelector('.message a');
more.addEventListener('click', () => {
    for (let i = 0; i < 8; i++) {
        messages[i].classList.remove('hide')
    }
    more.style.display = 'none';
})
//剧情介绍
let introduce = document.getElementById('introduce');
introduce.innerHTML = movie.Synopsis;
//评分、评分
let h2 = document.querySelector('h2');
h2.innerHTML = movie.Score;
let marks = document.querySelectorAll('.commend span');
for (let i = 0; i < 5; i++) {
    marks[i].innerHTML = movie.Star.split(",")[i];
}
let commonfonts=document.getElementsByClassName('commonfont');
commonfonts[0].innerHTML=movie.Name+'的剧情介绍 · · · · · ·';
commonfonts[1].innerHTML=movie.Name+'的演职员 · · · · · ·';
commonfonts[2].innerHTML=movie.Name+'的剧照 · · · · · ·';
commonfonts[3].innerHTML=movie.Name+'的短评 · · · · · ·';
commonfonts[4].innerHTML=movie.Name+'的影评 · · · · · ·';
//接受讨论数据
let discuss = JSON.parse(sessionStorage.getItem('discuss')).data;
let disarea = document.querySelector('.discuss');
discuss.forEach(item => {
    disarea.innerHTML +=
        `<ul>
    <li><a href='#'>${item.context.split('&')[0]}</a></li>
    <li>${item.comment_num}回应</li>
    <li>来自<a href='#'>${item.name}</a></li>
    <li>${item.post_time}</li>
</ul>`
})

//接受短评数据
let shortarea=document.getElementsByClassName('short')[0];
let shorts=JSON.parse(sessionStorage.getItem('short')).data;
shorts.forEach(item=> {
    shortarea.innerHTML+=
    `<ul>
    <li>
        <a href="#">${item.Name}</a>
        <div class="xing"></div>
        <span class="clock">${item.CommentTime}</span>
        <a href="#" class="usea">有用</a>
        <span class="usenum">${item.Likes}</span>
    </li>
    <li>${item.Context}</li>
</ul>`
})
//接受影评数据
let filecomments=JSON.parse(sessionStorage.getItem('filecomment')).data;
let filecommentarea=document.querySelector('.movie');
filecomments.forEach(item=> {
    filecommentarea.innerHTML+=
    `<ul>
    <li>
        <img src="./tiger1.png" alt="">
        <a href="#">${item.name}</a>
        <div class="xing"></div>
        <span class="clock">${item.post_time}</span>
    <li><a href="#">${item.context.split('，')[0]}</a></li>
    <li>${item.context}</li>
    <li>
        <a href="#">up:${item.likes}</a>
        <a href="#">down:${item.star_num}</a>
        <a href="#">${item.comment_num}回应</a>
    </li>
</ul>`
})