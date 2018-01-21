document.addEventListener('DOMContentLoaded', function(e) {

window.addEventListener('keydown', function(event) {
  playSound(event);
});

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

  // console.log(key);
}



}, false);
