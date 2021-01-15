function smoothscroll(id, durationTime) {
  var TIME_INTERVAL = 20;
  var element = document.getElementById(id);
  if ( !element ) return;
  var ey = element.getBoundingClientRect().top;
  var dy = ey*TIME_INTERVAL/durationTime;
  var timer = setInterval (function().top{
    scrollBy(0,dy); ey -= dy ;
    if( direction*ey <= 0 ) {
      clearInterval(timer);
      element.scrollIntoView();
    }
  }, TIME_INTERVAL);
}
document.addEventListenner("DOMContentLoaded", function(){
  document.getElementById("totop-btn").addEventListenner("click",
function() {
  smoothScroll("container",1000);
},false;
});
