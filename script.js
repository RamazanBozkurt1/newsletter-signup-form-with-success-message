document.addEventListener('DOMContentLoaded', () => {
    const subscribeBtn = document.getElementById("sec1Btn");
    const input = document.getElementById("inputel");
    const section1 = document.getElementById("sec1");
    const section2 = document.getElementById("sec2");
    const span = document.getElementById("spanel");
    const dismissBtn = document.getElementById('dismiss')

    subscribeBtn.addEventListener('click', () => {
        event.preventDefault();
        if(input.value !== '' && input.value.includes('@')){
            section1.style.display = 'none';
            section2.style.display = 'inline';
        } else {
            span.style.display = 'inline';
            input.classList.add('invalidinput');
        }
    });
    dismissBtn.addEventListener('click', () => {
        section1.style.display = 'flex';
        section2.style.display = 'none';
        input.value= '';
        span.style.display = 'none';
        input.classList.remove('invalidinput');
    })
});

