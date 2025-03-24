const bells = new Audio('./bell.wav'); 
const startBtn = document.querySelector('.btn-start'); 
const stopBtn = document.querySelector('.btn-stop');
const resetBtn = document.querySelector('.btn-reset');
const session = document.querySelector('.minutes'); 
let initialSession = document.querySelector('.minutes').textContent;
let myInterval; 
let state = true;

const appTimer = () => {
    const sessionAmount = Number.parseInt(session.textContent)
  
    if(state) {
      state = false;
      let totalSeconds = sessionAmount * 60;

      const updateSeconds = () =>{
        const minuteDiv = document.querySelector('.minutes');
        const secondDiv = document.querySelector('.seconds');

        let minutesLeft = Math.floor(totalSeconds / 60);
        let secondsLeft = totalSeconds % 60;


        if(minutesLeft == 0 && secondsLeft == 0) {
            bells.play();
            clearInterval(myInterval);
            state = true;
        }

        totalSeconds--;

        
        if(secondsLeft < 10) {
            secondDiv.textContent = '0' + secondsLeft;
        } else{
            secondDiv.textContent = secondsLeft;
        }

        minuteDiv.textContent = `${minutesLeft}`;

        
      }

      myInterval = setInterval(updateSeconds, 1000);
    } else {
        alert('Timer is running');
    }
}

startBtn.addEventListener('click', appTimer);
stopBtn.addEventListener('click', () => {
    clearInterval(myInterval);
    state = true;
})

resetBtn.addEventListener('click', () => {
    clearInterval(myInterval)
    const minuteDiv = document.querySelector('.minutes');
    const secondDiv = document.querySelector('.seconds');

    minuteDiv.textContent = initialSession;
    secondDiv.textContent = '00';
    
    state = true
})