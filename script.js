let typed = new Typed(".autotype", {
    strings: ['Habib Abulkareem', 'A Freelancer'],
    typingpeed : 100,
    backspeed : 100,
    loop : true
  });



//Scroll Animation
const animatedElement = document.getElementById('animated-element')

function isElementInlViewport(el){
    const rect = el.getBoundingClientRect();
    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)

        &&

        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    if(isElementInlViewport(animatedElement)){
        animatedElement.classList.add('visible');
        window.removeEventListener('scroll', handleScroll);
    }
}
window.addEventListener('scroll', handleScroll);