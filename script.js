document.addEventListener('DOMContentLoaded', function(e) {

window.addEventListener('keydown', playSound);


function playSound(event) {
  // console.log(event);
  // console.log(event.keyCode);

// use attribute selector [] and the, use es6 template strings ${}
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  // console.log(audio);
  if(!audio) return; // if audio value = null (not a key we expect), stop the function from running all together
  audio.currentTime = 0; // rewinds to the start
  audio.play();

  key.classList.add('playing');
  // console.log(key);
  // there is also .remove and .toggle for classList same as jquery key.addClass('playing')
};
  function removeTransition(e) {
    // console.log(e);
    if(e.propertyName !== 'transform')return; //skip it if it's not a transform
    console.log(e.propertyName);
    this.classList.remove('playing')
  }
  const keys = document.querySelectorAll('.key'); // gives an array like object of all the matching classes
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));



}, false);
