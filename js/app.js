const iconMenu = document.querySelector('.icon-menu')
const menuBody = document.querySelector('.menu__body')
const head = document.querySelector('.header')

iconMenu.addEventListener('click', () => {
    iconMenu.classList.toggle('_active')
    menuBody.classList.toggle('_active')
    if(iconMenu.classList.contains('_active')) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
})

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY
    if (scrollDistance > 0 && !head.classList.contains('fixed')) {
        head.classList.toggle('fixed')
    } else if (scrollDistance <= 0) {
        head.classList.toggle('fixed')
    }
})

setTimeout(() => {
   setTimeout(() => {
    document.querySelectorAll('.animation-second').forEach(item => {
        item.classList.add('animation')
    })
   }, 500)
   document.querySelectorAll('.animation-first').forEach(item => {
    item.classList.add('animation')
})
}, 300)


let lastScrollTop = 0;

window.addEventListener("scroll", function() {
   let st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop){
      console.log('down')
   } else {
    console.log('up')
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


function onEntry(entry) {
    let scrollDistance = window.scrollY
    entry.forEach(change => {
      if (change.isIntersecting && scrollDistance >= 0) {
        change.target.classList.add('animation');
      } else if (change.isIntersecting && scrollDistance < window.clientHeight) {
        change.target.classList.remove('animation');
      }
    });
  }
  let options = { threshold: [0.2] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.item-animation');
  for (let elm of elements) {
    observer.observe(elm);
}



// window.addEventListener('scroll', () => {
//     let scrollDistance = window.scrollY

//     document.querySelectorAll('section').forEach(el => {
//         if(el.offsetTop - document.querySelector('.header').clientHeight <= scrollDistance) {
//             console.log(el.offsetTop)
//         }
//     })
// })


// const header = document.querySelector('.get-started__container')
// console.log(header.clientHeight)

// window.addEventListener('click', () => {
//     head.classList.add('_animate')
// })

// window.addEventListener('scroll', () => {
//     let scrollDistance = window.scrollY
//     if (scrollDistance++) {
//         console.log('hero')
//     }
// })

// $(document).on('wheel', function(e){
// 	if (e.originalEvent.wheelDelta >= 0) {
// 		console.log('Вверх');
// 	} else {
// 		console.log('Вниз');
// 	}
// });

