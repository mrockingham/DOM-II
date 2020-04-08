// Your code goes here

const content = {
    'nav':{
    "nav-item-1": "",
    "nav-item-2": "Hacked",
    "nav-item-3": "Scroll",
    "nav-item-4": "Down",
    }
}




//Main pic mouseover
let hoverCar = document.getElementById('hcar')
let navChange = document.querySelector('.main-navigation')
let headerHacked = document.querySelector('.logo-heading')

hoverCar.addEventListener('mouseover', function(){
//navChange.style ='backgroundColor:blue;'
//ev.style
headerHacked.textContent = 'hacked!!!,DBL Click Home'
navChange.style.backgroundColor = "red"
setTimeout(function() {
    navChange.style.backgroundColor = "";
  }, 500);
}, false);

            //Double click
let dbl = document.querySelectorAll('.nav-link')[0] ; 
let hackedNav = document.querySelectorAll('.nav-link')[1] ;
let scrollNav = document.querySelectorAll('.nav-link')[2];
let downNav = document.querySelectorAll('.nav-link')[3];
 let navItems = document.querySelectorAll('.nav a');

 //event
dbl.addEventListener('dblclick', function(e){
    e.preventDefault();
    dbl.textContent = '';
    hackedNav.textContent = 'Hacked!!!';
    scrollNav.textContent = 'Scroll';
    downNav.textContent = 'Down'
})


            //Scroll Down
let scrollDownNav = document.querySelector('.main-navigation')
let scrollBackRed = document.querySelector('body')
let hackedLetsGo = document.querySelectorAll('h2')[1]
let Hacked1stP = document.querySelectorAll('p')[1]

//event
scrollDownNav.addEventListener('wheel',function(){
hackedLetsGo.textContent = 'Hacked!!!!'
Hacked1stP.textContent = 'Press anywhere on the keyboard to continue,      Press anywhere on the keyboard to continue, Press anywhere on the keyboard to continue,Press anywhere on the keyboard to continue, Press anywhere on the keyboard to continue, Press anywhere on the keyboard to continue, Press anywhere on the keyboard to continue'
scrollBackRed.style.backgroundColor = 'red'
setTimeout(function() {
    scrollBackRed.style.backgroundColor = "blue";
  }, 700);
}, false);


            //Scroll down 2
let rHome =document.querySelector('.intro')
let oldPic = document.querySelectorAll('img')[1]
let robberImg = document.createElement('img')
robberImg.setAttribute('src','img/robber.jpg')
//event
oldPic.addEventListener('wheel',function(){
oldPic.setAttribute('src', 'img/hacked.jpg')
rHome.appendChild(robberImg)

})
gsap.to('img',{duration: 3, rotation: 360, scale: 0.5});
// for (let i = 0; i < navItems.length; i++){
//   let navContents = Object.values(siteContent .nav)
//   navItems[i].textContent = navContents[i]
    
 