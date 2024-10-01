let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//when the  user clicks on the x_mark iquon asidebar disapear  
function hiddensidebar(){
     const hidden =document.querySelector("#sidebar");
     hidden.style.display="none";
     const showbar = document.querySelector("bar2");
     showbar.style.display="none";
}
//when the  user clicks on the bar iquon asidebar apear 
function showbar(){
    const hidden =document.querySelector("#sidebar");
    hidden.style.display="block";
    const showbar = document.querySelector("bar1");
    showbar.style.display="none";
}
// form validate when password number are less than 9 submit button disabled else submit abled 
document.addEventListener('DOMContentLoaded',function(){
  document.querySelector('#submit').disabled=true;
  document.querySelector("#exampleInputPassword1").onkeyup=function(){
  
    if(document.querySelector("#exampleInputPassword1").value.length >9){
      document.querySelector('#submit').disabled= false;
    }
    else{
      document.querySelector('#submit').disabled=true;
    }
  }
})
//form validate on email its disbabled when lenth is mor than 10 character or when email dosent contain @
function formvalidate(){
   const email =document.querySelector("exampleInputEmail1");
   if(email.indexof("@")==-1&&email.length<10){
    text="please enter valid email ";
    error.innerhtml= text;
    return false;
   }
}


