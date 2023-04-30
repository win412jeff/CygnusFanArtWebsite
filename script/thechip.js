$('data-fancybox').fancybox({
    animationEffect: "slide",
    transitionEffect: "circular",
    loop: "ture",
    buttons:[
        "zoom",
        "slideShow",
        "thumbs",
        "close"
    ]
})

window.addEventListener('scroll', (e) => {
    let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    
    let $h1 = document.querySelector('h1')
    let $theChip = document.querySelector('#the-chip')
    let $A13 = document.querySelector('#A13')
    let $A13TextBg = document.querySelector('#the-chip .text-bg')
    
    $theChip.style.width = $theChip.style.height = document.documentElement.clientWidth * 20 * (scrolled * scrolled * scrolled) + 'px'
    
    if (0.5 <= scrolled ) {
      $h1.style.opacity = (0.6 - scrolled) / 0.6
    } else {
      $h1.style.opacity = 1
    }
  
    console.log(scrolled)
  })
