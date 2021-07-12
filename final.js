
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
