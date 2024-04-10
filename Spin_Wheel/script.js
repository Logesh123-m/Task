var randomIndex=0
var i=360*3
function wheel() {
    var spinner = document.getElementById('circle');
    var colors = spinner.getElementsByClassName('part');
    console.log(colors)
    randomIndex = (randomIndex+Math.floor(Math.random() * colors.length))%colors.length;
    var degrees = - (360 / colors.length)*randomIndex;
    var transition = 'transform 2s ease-in-out'; 
    spinner.style.transition = transition;
    degrees=degrees+15+i 
    spinner.style.transform = 'rotate(' + degrees + 'deg)';
    console.log(degrees,randomIndex);
    i=i+360*3
  }
const meanings = {
  RED: "Red symbolizes energy, passion, and action.",
  BLUE: "Blue represents trust, peace, and stability.",
  GREEN: "Green signifies growth, harmony, and freshness.",
  YELLOW: "Yellow evokes positivity, happiness, and optimism.",
  PURPLE: "Purple suggests creativity, luxury, and spirituality.",
  ORANGE: "Orange represents enthusiasm, excitement, and warmth.",
  PINK: "Pink symbolizes love, affection, and kindness.",
  BROWN: "Brown signifies stability, reliability, and support.",
  BLACK: "Black represents power, elegance, and mystery.",
  WHITE: "White symbolizes purity, innocence, and peace.",
  GRAY: "Neutral, practicality, balance, calmness, and sophistication.",
  MAGENTA: "Originality, creativity, innovation, passion, and individuality."
};
  function handleTransitionEnd() {
    spinning = false;
    var spinner = document.getElementById('circle');
    var colors = spinner.getElementsByClassName('part');
    var color = colors[randomIndex].textContent;
    message='The wheel stopped at: '+color +'  meaning :' + meanings[color];
    console.log(randomIndex,message);
    document.getElementById("message").innerHTML=message;
  }