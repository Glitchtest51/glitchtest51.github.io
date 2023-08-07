const textElement = document.getElementById("Glitchtest.dev");

const typeText = (text, delay) => {
  let i = 0;
  const interval = setInterval(() => {
    if (i === text.length) {
      clearInterval(interval);
    }
    const subText = text.substring(0, i + 1);
    textElement.textContent = subText;
    i++;
  }, delay);
};

typeText("Glitchtest.dev", 100);