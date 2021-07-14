
const iconDark = document.querySelector('.mode');
const change = document.querySelector('.far');
const nav = document.querySelector('.navbar');
const a1 = document.querySelector('#ul , a');




const es = document.querySelector('#h5');
const con1 = document.querySelector('.container1');
const con2 = document.querySelector('.container2');
const h1 = document.querySelector('h1');
let h5 = document.querySelector('div.container3 > div.container3con > #con3 > h5');
let h52 = document.querySelector('div.container3 > div.container3con > #con32 > h5');
let h53 = document.querySelector('div.container3 > div.container3con > #con33 > h5');


const con3=document.querySelector('#con3');
const con32=document.querySelector('#con32');
const con33=document.querySelector('#con33');  
const con4 = document.querySelector('.container4');
const imagenes4 = document.querySelector('#imag4 , .container4conimagenes');

const con5 = document.querySelector('.container5'); 

iconDark.addEventListener('click', () =>{
  document.body.classList.toggle('dark');
   
 
  if(document.body.classList.contains('dark')){
 
  change.classList.remove('fa-moon')
  change.classList.add('fa-sun')
  nav.style.backgroundColor = '#161C2D';
    a1.style.color = 'white';
  as.style.color = 'white';
   es.style.color = 'white';
      con1.style.backgroundColor = '#161C2D';
    con2.style.backgroundColor = '#161C2D';
      h1.style.color = 'white';
        h1.style.textShadow = 'none';
        h5.style.color = 'white';
        h52.style.color = 'white';
        h53.style.color = 'white';
 
    con3.style.backgroundColor = '#161C2D';
   con32.style.backgroundColor = '#161C2D';
   con33.style.backgroundColor = '#161C2D';
  
   con4.style.backgroundColor = '#161C2D';
    imagenes4.backgroundColor = '#161D2E';
   
   con5.style.backgroundColor = '#161C2D';


   
   
   
  
  


  }else{
   
    change.classList.remove('fa-sun')
    change.classList.add('fa-moon')
    nav.style.backgroundColor = 'white';
     es.style.color = '#0d369e';
     con1.style.backgroundColor = 'white';
     con2.style.backgroundColor = 'white';
     h1.style.color= '#060606';
      h1.style.textShadow = '2px 4px 0px #d5d5d5';
    con3.style.backgroundColor ='white';
   con32.style.backgroundColor = 'white';
   con33.style.backgroundColor = 'white';
     con4.style.backgroundColor = 'white';
   con5.style.backgroundColor = 'white';
 
  }

})





const box= document.querySelector('.container1convideo');
const card= document.querySelector('.container1convideo');

var n = 0;
var asd = document.getElementById("number1");
window.setInterval(function(){
  if(asd.innerHTML<6300){
  asd.innerHTML = n;
  n=n+9;
}
},10);
var z=0;
var aqw = document.getElementById("number2");
window.setInterval(function(){
  if(aqw.innerHTML<638){
  aqw.innerHTML = z;
  z=z+1;
}
},11);
var a=0;
var aqe = document.getElementById("number3");
window.setInterval(function(){
  if(aqe.innerHTML<7600){
  aqe.innerHTML = a;
  a=a+11;
}
},10);
var v=0;
var aqt = document.getElementById("number4");
window.setInterval(function(){
  if(aqt.innerHTML<36){
  aqt.innerHTML = v;
  v++;
}
},180);



window.onscroll = function() {scrollFunction()};


function scrollFunction() {


 if (document.documentElement.scrollTop >700 ) {
    document.getElementById("sonrisa").style.transform="scale(1.2)";

  }
  if(document.documentElement.scrollTop >1000 ){
    document.getElementById("sonrisa").style.transform="scale(1.0)"
  }

  
}

document.getElementById("con3").addEventListener("mouseover", function(o){
  
    document.getElementById("boton11").style.transform="scale(1.2) rotateY(180deg)";

});

document.getElementById("con3").addEventListener("mouseout", function(o){
  
    document.getElementById("boton11").style.transform="scale(1.0) ";

});
document.getElementById("con32").addEventListener("mouseover", function(o){
  
    document.getElementById("boton12").style.transform="scale(1.2) rotateY(180deg)";

});

document.getElementById("con32").addEventListener("mouseout", function(o){
  
    document.getElementById("boton12").style.transform="scale(1.0) ";

});
document.getElementById("con33").addEventListener("mouseover", function(o){
  
    document.getElementById("boton13").style.transform="scale(1.2) rotateY(180deg)";

});

document.getElementById("con33").addEventListener("mouseout", function(o){
  
    document.getElementById("boton13").style.transform="scale(1.0) ";

});
document.getElementById("ima1").addEventListener("mouseover", function(){
  document.getElementById("icon1").style.display = "block";
  document.getElementById("icon1").style.transform="translateY(-159px)";

});

document.getElementById("ima1").addEventListener("mouseout", function(){

   document.getElementById("icon1").style.transform="translateY(-80px)";
   document.getElementById("icon1").style.display = "";
});
document.getElementById("ima2").addEventListener("mouseover", function(){
  document.getElementById("icon2").style.display = "block";
  document.getElementById("icon2").style.transform="translateY(-159px)";

});

document.getElementById("ima2").addEventListener("mouseout", function(){

   document.getElementById("icon2").style.transform="translateY(-80px)";
   document.getElementById("icon2").style.display = "";
});
document.getElementById("ima3").addEventListener("mouseover", function(){
  document.getElementById("icon3").style.display = "block";
  document.getElementById("icon3").style.transform="translateY(-159px)";

});

document.getElementById("ima3").addEventListener("mouseout", function(){

   document.getElementById("icon3").style.transform="translateY(-80px)";
   document.getElementById("icon3").style.display = "";
});
document.getElementById("ima4").addEventListener("mouseover", function(){
  document.getElementById("icon4").style.display = "block";
  document.getElementById("icon4").style.transform="translateY(-159px)";

});

document.getElementById("ima4").addEventListener("mouseout", function(){

   document.getElementById("icon4").style.transform="translateY(-80px)";
   document.getElementById("icon4").style.display = "";
});
document.getElementById("ima5").addEventListener("mouseover", function(){
  document.getElementById("icon5").style.display = "block";
  document.getElementById("icon5").style.transform="translateY(-159px)";

});

document.getElementById("ima5").addEventListener("mouseout", function(){

   document.getElementById("icon5").style.transform="translateY(-80px)";
   document.getElementById("icon5").style.display = "";
});
document.getElementById("ima6").addEventListener("mouseover", function(){
  document.getElementById("icon6").style.display = "block";
  document.getElementById("icon6").style.transform="translateY(-159px)";

});

document.getElementById("ima6").addEventListener("mouseout", function(){

   document.getElementById("icon6").style.transform="translateY(-80px)";
   document.getElementById("icon6").style.display = "";
});
document.getElementById("ima7").addEventListener("mouseover", function(){
  document.getElementById("icon7").style.display = "block";
  document.getElementById("icon7").style.transform="translateY(-159px)";

});

document.getElementById("ima7").addEventListener("mouseout", function(){

   document.getElementById("icon7").style.transform="translateY(-80px)";
   document.getElementById("icon7").style.display = "";
});
document.getElementById("ima8").addEventListener("mouseover", function(){
  document.getElementById("icon8").style.display = "block";
  document.getElementById("icon8").style.transform="translateY(-159px)";

});

document.getElementById("ima8").addEventListener("mouseout", function(){

   document.getElementById("icon8").style.transform="translateY(-80px)";
   document.getElementById("icon8").style.display = "";
});
