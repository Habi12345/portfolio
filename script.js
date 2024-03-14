let typed = new Typed(".autotype", {
    strings: ['Habib Abulkareem', 'A Freelancer'],
    typingpeed : 100,
    backspeed : 100,
    loop : true
  });

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));