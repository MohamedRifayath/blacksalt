window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
   document.getElementById("scale").style.display="none"
   document.getElementById("menu").style.display="block"
   document.getElementById("scale").style.zIndex="999"
  }
  else{
    document.getElementById("scale").style.display="block"
   document.getElementById("menu").style.display="none"
  }
}