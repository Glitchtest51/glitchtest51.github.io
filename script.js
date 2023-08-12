const textElement = document.getElementById("Glitchtest.site");
const typingSound = document.getElementById("typingSound");

const baseURL = `${window.location.protocol}//${window.location.hostname}${window.location.port ? ':' + window.location.port : ''}`;
console.log(baseURL);

const typeText = (text, delay) => {
  let i = 0;
  const interval = setInterval(() => {
    if (i === text.length) {
      clearInterval(interval);
    }
    const subText = text.substring(0, i + 1);
    textElement.textContent = subText;
    
    const typingSound = new Audio("assets/key.wav");
    typingSound.play();
    
    i++;
  }, delay);
};

