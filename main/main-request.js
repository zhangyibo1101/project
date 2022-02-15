import {
  Star
} from '../mymodule/stars.js'
let img1 = document.querySelectorAll('#container img');
let name1 = document.querySelectorAll('.name a');
let img2 = document.querySelectorAll('#container2orgin img');
let name2 = document.querySelectorAll('#container2orgin .clone-span1');
let img3 = document.querySelectorAll('#container3orgin img');
let name3 = document.querySelectorAll('#container3orgin .clone-span1');
let reviewarea = document.querySelector('.reviews-bd');
let basicURL = 'http://127.0.0.1:5500';

function clone(container, begin, end, arr) {
  for (let i = begin; i < end; i++) {
    let clonelis = arr[i].cloneNode(true);
    container.appendChild(clonelis);
  }
}

window.onload = function () {
  fetch('http://42.192.155.29:8080/brief1', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(res => {
      for (let i = 0; i < res.data.length; i++) {
        img1[i].src = res.data[i].URL;
        name1[i].innerHTML = res.data[i].Name;
      }
      clone(container, 0, 5, lis);
    })
  fetch('http://42.192.155.29:8080/brief2', {
      method: 'GET',
    }).then(res => res.json())
    .then(res => {
      for (let i = 0; i < res.data.length; i++) {
        img2[i].src = res.data[i].URL;
        name2[i].innerHTML = res.data[i].Name;
      }
      clone(container2clone, 0, 5, as2);
      clone(container2clone, 25, 30, as2);
    })
  fetch('http://42.192.155.29:8080/brief3', {
      method: 'GET',
    }).then(res => res.json())
    .then(res => {
      for (let i = 0; i < res.data.length; i++) {
        img3[i].src = res.data[i].URL;
        name3[i].innerHTML = res.data[i].Name;
      }
      clone(container3clone, 0, 5, as3);
      clone(container3clone, 25, 30, as3);
    })
  //热门影评
  fetch('http://42.192.155.29:8080/recommend', {
      method: 'GET',
    }).then(res => res.json())
    .then(res => {
      console.log(res.data)
      res.data.map(item => gallery.innerHTML += `<li>
      <img src="${item.Context}" alt="">
      <ul class="gallery-detail">
          <h3>${item.Title}</h3>
          <p>${item.URL}</p>
      </ul>
  </li>`)
      let galleryitem = document.querySelectorAll('#gallery li');
      gallery.style.width = (galleryitem.length + 1) * 675 + 'px';
      clone(gallery, 0, 1, galleryitem);

      [...galleryitem].map((item,index) => item.addEventListener('click', () => {
        fetch('http://42.192.155.29:8080/recommend/' +(index+1), {
            method: 'GET'
          }).then(res => res.json())
          .then(res => {
            sessionStorage.setItem('galleryitem', JSON.stringify(res))
            window.open(basicURL + '/recommend/build/recommend.html')
          })
      }))
    })
  //最受欢迎的影评
  fetch('http://42.192.155.29:8080/mostpopular', {
      method: 'GET',
    }).then(res => res.json())
    .then(res => {
      res.data.map(item => {
        reviewarea.innerHTML +=
          `<div class="review">
  <img src="${item.URL}" alt="">
  <div class="review-bd">
      <div class="bigtitle">
          <a href="#">${item.Context.split('，')[0]}</a>
      </div>
      <div class="review-meta">
          <a href="#">${item.Name}</a>
          <span>评论</span>
          <a href="#">《${item.MovieName}》</a>
          <div class="star" id="stars${item.Id}"></div>
      </div>
      <div class="review-content">
      <div class="commentcontext">${item.Context}</div>
          <a href="#" class="allessay">(全文)</a>
      </div>
  </div>
</div>`
        let stars = new Star(`stars${item.Id}`, item.StarNum, 0.5);
        stars.create();

      })
    })

}
//电影详情
function newfetch2(url) {
  return new Promise((resolve, reject) => {
    fetch(url, {
        method: 'GET',
      }).then(res => res.json())
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}
for (let num = 1; num < 20; num++) {
  img1[num - 1].addEventListener('click', () => {
    sessionStorage.setItem('num', num);
    async function sendbyfetch2() {
      let res1 = await newfetch2('http://42.192.155.29:8080/movie/' + num);
      sessionStorage.setItem('movie', JSON.stringify(res1));
      let res2 = await newfetch2('http://42.192.155.29:8080/topic/movie/' + num);
      sessionStorage.setItem('discuss', JSON.stringify(res2));
      let res3 = await newfetch2('http://42.192.155.29:8080/shortcomment/movie/' + num);
      sessionStorage.setItem('short', JSON.stringify(res3));
      let res4 = await newfetch2('http://42.192.155.29:8080/filmcomment/movie/' + num);
      sessionStorage.setItem('filecomment', JSON.stringify(res4));
      window.open(basicURL + '/movie-details/build01/detail.html')
    }
    sendbyfetch2();
  })
}
//排行榜
let movielist = document.getElementById('movielist');
movielist.addEventListener('click', () => {
  async function sendbyfetch3() {
    let res1 = await newfetch2('http://42.192.155.29:8080/rank1')
    sessionStorage.setItem('list1', JSON.stringify(res1))
    let res2 = await newfetch2('http://42.192.155.29:8080/rank2')
    sessionStorage.setItem('list2', JSON.stringify(res2))
    let res3 = await newfetch2('http://42.192.155.29:8080/rank3')
    sessionStorage.setItem('list3', JSON.stringify(res3))
    let res4 = await newfetch2('http://42.192.155.29:8080/rank4')
    sessionStorage.setItem('list4', JSON.stringify(res4))
    window.open(basicURL + '/list/build/list.html')
  }
  sendbyfetch3();
})
//搜索
let submit = document.querySelector('.submit');
submit.addEventListener('click', () => {
  let formdata = new FormData();
  formdata.append('context', document.querySelector('.search').value);
  sessionStorage.setItem('searchthing', document.querySelector('.search').value)
  fetch('http://42.192.155.29:8080/search', {
      method: 'POST',
      body: formdata
    }).then(res => res.json())
    .then(res => {
      sessionStorage.setItem('searchresult', JSON.stringify(res))
      window.open(basicURL + '/search/build/search.html')
    })

})
//分类
let classifyarea = document.getElementById('classifyarea');
classifyarea.addEventListener('click', () => {
  window.location.replace(basicURL + '/classify/build/classify.html')
})