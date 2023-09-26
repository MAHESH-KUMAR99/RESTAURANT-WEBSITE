// active NAVBAR

let nav= document.querySelector(".navigation-wrap");
window.onscroll=function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
  
}
}
 

//  NAV-HIDE() WHENEVER WE CLICK ON ANY LINK(ON MOBILE VIEW )THEN NAVBAR AUTO-CLOSE
let navbar=document.querySelectorAll(".nav-link");
let navcollapse =document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click" ,function(){
        navcollapse.classList.remove("show");
    })
})
 //counter design

document.addEventListener("DOMContentLoaded",()=>{
function counter(id,start,end,duration){
    let obj =document.getElementById(id),
    current=start,
    range=end-start,
    increment=end > start ? 1 : -1,
    step =Math.abs(Math.floor(duration/range)),
    timer=setInterval(()=>{
        current+=increment;
        obj.textContent =current;
        if(current==end){
            clearInterval(timer);
        }
    },step);
}
counter("count1",0,1235, 2000);
counter("count2",100,1598, 4000);
counter("count3",150,2089, 3000);
counter("count4",96,2250, 3000);
})