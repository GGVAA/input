console.log('1')
let firstHyper = document.getElementById('1');
let secondHyper = document.getElementById('2');
let thirdHyper = document.getElementById('3');
let fourthHyper = document.getElementById('4');
let fifthHyper = document.getElementById('5');
let sixthHyper = document.getElementById('6');
firstHyper.addEventListener('click',()=>{
  let allhypers =   document.querySelectorAll(".menu__list .header__text");
 for(i=0;i<allhypers.length;i++){
     allhypers[i].classList.remove('active')
 }

    firstHyper.classList.add('active');
})
secondHyper.addEventListener('click',()=>{
    let allhypers =   document.querySelectorAll(".menu__list .header__text");
   for(i=0;i<allhypers.length;i++){
       allhypers[i].classList.remove('active')
   }
  
   secondHyper.classList.add('active');
  })
thirdHyper.addEventListener('click',()=>{
    let allhypers =   document.querySelectorAll(".menu__list .header__text");
   for(i=0;i<allhypers.length;i++){
       allhypers[i].classList.remove('active')
   }
  
   thirdHyper.classList.add('active');
  })
fourthHyper.addEventListener('click',()=>{
    let allhypers =   document.querySelectorAll(".menu__list .header__text");
   for(i=0;i<allhypers.length;i++){
       allhypers[i].classList.remove('active')
   }
  
   fourthHyper.classList.add('active');
  })
fifthHyper.addEventListener('click',()=>{
    let allhypers =   document.querySelectorAll(".menu__list .header__text");
   for(i=0;i<allhypers.length;i++){
       allhypers[i].classList.remove('active')
   }
  
   fifthHyper.classList.add('active');
  })
  sixthHyper.addEventListener('click',()=>{
    let allhypers =   document.querySelectorAll(".menu__list .header__text");
   for(i=0;i<allhypers.length;i++){
       allhypers[i].classList.remove('active')
   }
  
   sixthHyper.classList.add('active');
  })

  function getVals(){
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
      let slide1 = parseFloat( slides[0].value );
      let slide2 = parseFloat( slides[1].value );
    if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
    
  }
  
  window.onload = function(){
    let sliderSections = document.getElementsByClassName("range-slider");
        for( let x = 0; x < sliderSections.length; x++ ){
          let sliders = sliderSections[x].getElementsByTagName("input");
          for( let y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
              sliders[y].oninput = getVals;
              sliders[y].oninput();
            }
          }
        }
  }