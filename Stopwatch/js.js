const counter = document.querySelector('#counter');
const Start = document.querySelector('#start');
const Stop = document.querySelector('#stop');
const Reset = document.querySelector('#reset');
let boolean =undefined;
let intX=0;
let intY=0;
let visX;
let visY;

Start.addEventListener('click', (e) => {
    e.preventDefault();
    boolean=true;
    loop();
});

Stop.addEventListener('click', (e) => {
    e.preventDefault();
    boolean=false;
    loop();
});

Reset.addEventListener('click', (e) => {
    e.preventDefault();
    boolean=false;
    intY=0; visY=0+'0';
    intX=0; visX=0+'0';
    counter.innerHTML = visX + ':' + visY;
});

function loop(){
    setTimeout(function(){
        if(boolean==true){
            
            if(intY<10){
                visY='0'+intY;
            }
            else if(9<intY&&intY<100){
                visY=intY;
            }
            else{
                intY=0;
                intX++;
                console.log(intX);
            };
            if(intX==0){
                visX='0'+intX;
            }
            else if(intX>=1&&intX<10){
                visX='0'+intX;
            }
            else{
                visX=intX;
            }
                counter.innerHTML = visX + ':' + visY;
                intY++;
                loop();
        }
    }, 10);
};
