const secondhand = document.querySelector('.second-hand');
const minhand = document.querySelector('.min-hand');
const hourhand = document.querySelector('.hour-hand');

function setTime() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondhand.style.transform = `rotate(${secondsDegree}deg)`;
    
    const mins = now.getMinutes();
    const minsDegree = ((mins / 60) * 360) + 90;
    minhand.style.transform = `rotate(${minsDegree}deg)`;
    
    const hour = now.getHours();
    const hourDegree = ((hour / 60) * 360) + 90;
    hourhand.style.transform = `rotate(${hourDegree}deg)`;

    // console.log(`seconds ` + seconds + ` ,minutes ` + mins + ` hour ` + hour);
}

setInterval(setTime, 1000);

