let clock = document.querySelector('div');
loop();
function loop(){
    setTimeout(function(){
        let time = new Date();
        clock.innerHTML = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });


        loop();   
    }, 1000);
};

