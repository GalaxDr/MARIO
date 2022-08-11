
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const reset = document.querySelector('.perdeu')
const reset2 = document.querySelector('.points')
var speed = +pipe.style.animationDuration.replace("s","");
const jump = () => {
    document.getElementById('sound2').play()
    mario.classList.add('jump')
    setTimeout(function () {
        mario.classList.remove('jump')
        },500)
}

const loop = setInterval(function () {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        playaudio()
        document.removeEventListener("keydown", jump)
        document.removeEventListener("touchstart", jump)
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.bottom = `${marioPosition}px`
        mario.src = 'img/game-over.png'
        mario.style.width ='75px'
        mario.style.marginLeft = '50px'
        mario.style.animation = 'death 2s forwards linear'
        reset.style.visibility = 'visible'
        reset2.style.visibility = 'visible'
        document.querySelector(".points").innerText = points - 1;
        clearInterval(loop);
        clearInterval(loop2);

    }
    if (pipePosition < -60) {
        pipe.style.animationDuration = "2s"
        speed = Math.round(Math.random()*2)
        if (speed === 0) {
            speed = 1
        }
        pipe.style.animationDuration = speed + "s"

    }
    console.log(pipe.style.animationDuration)

    }, 10)

var points = 0

const loop2 = setInterval(function(){

    document.querySelector('.score').innerText = "Score: " + points ++;
    if (points === 1000) {
        document.getElementById('sound3').play()
    }
    }, 100);


document.body.onkeyup = function(e) {
    if (e.key === " " ||
        e.code === "Space"

    ) {
        window.location.reload()
    }
}
document.addEventListener('keydown', jump)
document.addEventListener('touchstart', jump)

function playaudio (){
    numero = Math.round(Math.random()*8)
    console.log(numero)
    switch (numero) {
        case 0:
            document.getElementById('sound').play()
            break
        case 1:
            document.getElementById('sound3').play()
            break
        case 2:
            document.getElementById('sound4').play()
            break
        case 3:
            document.getElementById('sound5').play()
            break
        case 4:
            document.getElementById('sound6').play()
            break
        case 5:
            document.getElementById('sound7').play()
            break
        case 6:
            document.getElementById('sound8').play()
            break
        case 7:
            document.getElementById('sound9').play()
            break
        case 8:
            document.getElementById('sound10').play()
            break
        default:
            document.getElementById('sound').play()
            break
    }
}
