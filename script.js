const textElement = document.getElementById("glitchtest-site");

const typingSound = new Audio("assets/key.wav");
typingSound.preload = "auto";

const typeText = (text, delay) => {
  let i = 0;
  if (!textElement) return;
  const interval = setInterval(() => {
    if (i === text.length) {
      clearInterval(interval);
    }
    const subText = text.substring(0, i + 1);
    textElement.textContent = subText;
    try {
      typingSound.currentTime = 0;
      typingSound.play();
    } catch (e) {
      console.error('Error playing typing sound:', e);
    }
    i++;
  }, delay);
};

typeText("Glitchtest", 100);
