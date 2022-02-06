//轮播图01
let container = document.getElementById('container')

for (let i = 0; i < 35; i++) {
    container.innerHTML += `
    <li>
    <a href="#"><img src="" alt=""></a>
    <div class="name"><a href="#"></a></div>
    <span>暂无评分</span>
    <a href="" class="buy">选座购票</a>
</li>`
}
let lis = document.querySelectorAll('#container li')

let count = document.querySelectorAll('.numberchange');

container.style.width = 700 * (lis.length / 5 + 1) + 'px';
let left = document.querySelectorAll('.control-left');
let right = document.querySelectorAll('.control-right');
let max1 = Math.trunc(lis.length / 5);
// alert(max1);
function slider(container, right, left, max, distance, time, count, arr) {
    let index = 0;
    if (count) {
        compute();
    }
    if (arr) {
        dotslide();
    }

    function sliderright() {
        index++;
        container.style.transition = "1s ease";
        container.style.left = index * distance + 'px'
        if (index == max) {
            index = 0;
            setTimeout(() => {
                container.style.left = 0;
                container.style.transition = "none";
            }, 1001);
        }
        if (count) {
            compute();
        }
        if (arr) {
            dotslide();
        }
    }

    function sliderleft() {
        index--;
        if (index == -1) {
            container.style.transition = 'none';
            container.style.left = max * distance + 'px';
            setTimeout(() => {
                index = max - 1;
                container.style.left = index * distance + 'px'
                container.style.transition = "1s ease";
                if (count) {
                    compute();
                }
                if (arr) {
                    dotslide();
                }
            }, 0);
        } else {
            container.style.left = index * distance + 'px'
            if (count) {
                compute();
            }
            if (arr) {
                dotslide();
            }
        }
    }
    left.addEventListener('click', sliderleft);
    right.addEventListener('click', sliderright);
    //设置定时器
    if (time) {
        setInterval(sliderright, time);
    }
    //设置计数器
    function compute() {
        if (index >= 0 && index < max) {
            count.innerHTML = `${index+1}`
        }
    }
    //设置点滚动
    function dotslide() {
        for (let i = 0; i < max; i++) {
            if (index == i) {
                arr[i].classList.add('dotchange');
            } else {
                arr[i].classList.remove('dotchange');
            }
        }
    }
}
slider(container, right[0], left[0], max1, -700, 10000, count[0], null);
//轮播图02
let container2 = document.getElementById('container2');
let container2orgin = document.getElementById('container2orgin');
let container2clone = document.getElementById('container2clone');
function create(container) {
    for (let i = 0; i < 50; i++) {


        container.innerHTML += `
        <a href="#" class="clone-a">
        <img src="" alt="" class="clone-img">
        <div class="clone-div">
            <span class="clone-span1"></span>
            <span class="clone-span2"></span>
        </div>`
    }
}
create(container2orgin);
let as2 = document.querySelectorAll('#container2orgin a');
let dot = document.querySelectorAll('.dot');
let dotarr = [...dot];

slider(container2, right[1], left[1], 5, -700, null, null, dotarr.slice(0, 5))
//轮播图03
let container3 = document.getElementById('container3');
let container3orgin = document.getElementById('container3orgin');
let container3clone = document.getElementById('container3clone');
create(container3orgin);
let as3 = document.querySelectorAll('#container3orgin a');
slider(container3, right[2], left[2], 5, -700, null, null, dotarr.slice(5, 10));
//轮播图04
let gallery = document.getElementById('gallery');
slider(gallery, right[3], left[3], 9, -675, 5000, count[1]);

//整页超链接特效
let alla = document.getElementsByTagName('a');
//  alert(alla.length)
for (let k = 0; k < alla.length; k++) {
    let a_style = getComputedStyle(alla[k], null);
    if ((a_style.color == 'rgb(51, 119, 170)' || a_style.color == 'rgb(34, 119, 170)') ) {
        alla[k].addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = '#37a';
            e.target.style.color = '#ffffff';
        })
        alla[k].addEventListener('mouseout', (e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#37a';
        })
    }
}
