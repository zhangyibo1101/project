let img1 = document.querySelectorAll('#container img');
let name1 = document.querySelectorAll('.name a');
let img2 = document.querySelectorAll('#container2orgin img');
let name2 = document.querySelectorAll('#container2orgin .clone-span1');
let img3 = document.querySelectorAll('#container3orgin img');
let name3 = document.querySelectorAll('#container3orgin .clone-span1');
let reviewarea = document.querySelector('.reviews-bd');
// let galleryarea = document.getElementById('gallery');

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
    })

  fetch('http://42.192.155.29:8080/mostpopular', {
      method: 'GET',
    }).then(res => res.json())
    .then(res => {
      res.data.map(item => {
        reviewarea.innerHTML +=
          `<div class="review">
  <img src="${item.URL}" alt="">
  <div class="review-bd">
      <div>
          <a href="">${item.Context.split('，')[0]}</a>
      </div>
      <div class="review-meta">
          <a href="">${item.Name}</a>
          <span>评论</span>
          <a href="">《${item.MovieName}》</a>
          <div class="star"></div>
      </div>
      <div class="review-content">
      <div class="commentcontext">${item.Context}</div>
          <a href="">(全文)</a>
      </div>
  </div>
</div>`
      })
    })

}

for (let num = 0; num < 20; num++) {
  let url = 'http://42.192.155.29:8080/movie/' + (num + 1);
  img1[num].addEventListener('click', () => {
    sessionStorage.setItem('num', num + 1);
    fetch(url, {
        method: 'GET',
      }).then(res => res.json())
      .then(res => {
        sessionStorage.setItem('movie', JSON.stringify(res));
      })
    fetch('http://42.192.155.29:8080/topic/movie/' + (num + 1), {
        method: 'GET',
      }).then(res => res.json())
      .then(res => {
        sessionStorage.setItem('discuss', JSON.stringify(res));
      })
    fetch('http://42.192.155.29:8080/shortcomment/movie/' + (num + 1), {
        method: 'GET',
      }).then(res => res.json())
      .then(res => {
        sessionStorage.setItem('short', JSON.stringify(res));
      })
    fetch('http://42.192.155.29:8080/filmcomment/movie/' + (num + 1), {
        method: 'GET',
      }).then(res => res.json())
      .then(res => {
        sessionStorage.setItem('filecomment', JSON.stringify(res));
      })
    setTimeout(() => {
      // window.location.replace('../movie-details/build01/detail.html')
      window.open('../movie-details/build01/detail.html')
    }, 500);
  })
}