let scrollPos = 0;
let slide = 0;
let slideWidth = document.body.scrollWidth;
let leftSlider = document.getElementsByClassName("left-arrow")[0];
let slider = document.getElementsByClassName("slide-content")[0];
let rightSlider = document.getElementsByClassName("right-arrow")[0];

window.addEventListener('scroll', function(){
  var header = document.getElementsByTagName('header')[0];
  let contentOffset = document.getElementsByClassName("content")[0].offsetTop;
  let headerPos = header.offsetTop + header.offsetHeight;
  let left = document.getElementsByClassName('line-left')[0];
  let right = document.getElementsByClassName('line-right')[0];

  if(headerPos > contentOffset){
      left.style.backgroundColor = '#001e50';
      right.style.backgroundColor = '#001e50';
  } else {
        left.style.backgroundColor = '#ffffff';
        right.style.backgroundColor = '#ffffff';
  }

  if ((document.body.getBoundingClientRect()).top > scrollPos){
      header.animate([
          { transform: 'translateY(0)'}
      ], {
          duration: 2500,
          delay: 200
      })
  }
	else {
        header.animate([
            { transform: 'translateY(-100px)'}
        ], {
            duration: 2500,
            delay: 200
        })
    }
    scrollPos = (document.body.getBoundingClientRect()).top;
});

rightSlider.addEventListener("click", function(e){
    if (slide <= -2 * slideWidth){
        return;
    }
    slide -= slideWidth;
    
    slider.style.transform = 'translateX(' + slide + 'px)';
})

leftSlider.addEventListener("click", function(e){
    if (slide >= 0){
        return;
    }
    slide += slideWidth;
    
    slider.style.transform = 'translateX(' + slide + 'px)';
})