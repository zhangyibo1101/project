let s1='全部形式,电影,电视剧,综艺,动漫,纪录片,短片';
let s2='全部类型,剧情,喜剧,动作,爱情,科幻,动画,悬疑,惊悚,恐怖,犯罪,同性,音乐,歌舞,传记,历史,战争,西部,奇幻,冒险,灾难,武侠,情色'
let s3='全部地区,中国大陆,欧美,美国,中国香港,中国台湾,日本,韩国,英国,法国,德国,意大利,西班牙,印度,泰国,俄罗斯,伊朗,加拿大,澳大利亚,爱尔兰,瑞典,巴西,丹麦';
let s4='全部年代,2022,2021,2020,2019,2010年代,2000年代,90年代,80年代,70年代,60年代,更早';
let s5='全部特色,经典,青春,文艺,搞笑,励志,魔幻,感人';
let categorys=document.querySelectorAll('.category');
[s1,s2,s3,s4,s5].map((item,index)=>{
    item.split(',').map(son=>{
        categorys[index].innerHTML+=`<span>${son}</span>`
    })
})
let tags=document.querySelectorAll('.category span');
[...tags].filter(item=>item.innerHTML.indexOf('全部')==0).forEach(item=>{
    item.style.backgroundColor="#258DCD";
    item.style.color="#fff";
})