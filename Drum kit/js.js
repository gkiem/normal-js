const soundArr = ['bass','floor-tomdark','floor-tommid','floor-tom','snaredark','snaremid','snare','tom-tom','tom-tommid','tom-tomlight','hihat','crash','ride','china','guy'];
soundingArr=[];
for(let i=0; i<soundArr.length; i++){
    document.querySelector('#' + soundArr[i]).addEventListener('click', (e) => {
        soundingArr[i] = new Audio ('music/' + soundArr[i] + '.mp3'); 
        soundingArr[i].play();
    });  
};

