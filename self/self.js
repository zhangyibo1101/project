let h1=document.getElementsByTagName('h1')[0];
let me=document.getElementById('me');
let username=sessionStorage.getItem('username');
if(username){
    h1.innerHTML+=username;
    me.innerHTML+=username;
}
let selfinfo1=JSON.parse(sessionStorage.getItem('selfinfo1')).data;
let selfinfo2=JSON.parse(sessionStorage.getItem('selfinfo2')).data;
// let selfinfo3=JSON.parse(sessionStorage.getItem('selfinfo3')).data;
// let selfinfo4=JSON.parse(sessionStorage.getItem('selfinfo4')).data;
//自我介绍
let selfarea1=document.querySelector('.dairy');
let registarea=document.querySelector('.registdate');
let random=document.querySelector('.random')
if(selfinfo1){
    selfarea1.innerHTML=selfinfo1[0].SelfIntroduction
    registarea.innerHTML=selfinfo1[0].RegisterTime
    random.innerHTML=Math.round(Math.random()*10E8)
}
//想看、看过
let wantoarea=document.querySelector('.wanto');
selfinfo2[0].WantToWatchURL.split(',').map(item=> {
    wantoarea.innerHTML+=`<img src="${item}" alt="">`
})
let havearea=document.querySelector('#havewatch');
selfinfo2[0].HaveWatchedURL.split(',').map(item=>{
    havearea.innerHTML+=`<img src="${item}" alt="">`
})