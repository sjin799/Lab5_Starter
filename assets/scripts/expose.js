// expose.js
let new_pic = document.querySelector('select');
let actual = document.querySelector('img[alt = "No image selected"]');
let new_sound = document.querySelector('audio');
const buttons = document.querySelector('button');
let volume_level = document.querySelector('input');
let icon = document.querySelector('img[alt = "Volume level 2"]');


function jaDropDown(){
  var new_T = new_pic.value;
  if (new_T == "air-horn"){
    actual.src = 'assets/images/air-horn.svg';
    new_sound.src = "assets/audio/air-horn.mp3";
  }
  if (new_T == "car-horn"){
    actual.src = 'assets/images/car-horn.svg';
    new_sound.src = "assets/audio/car-horn.mp3";
  }
  if (new_T == "party-horn"){
    actual.src = 'assets/images/party-horn.svg';
    new_sound.src ="assets/audio/party-horn.mp3";
  }
  
} 

function play_sound(){
  new_sound.play();
}
function effect(){
  const confetti = new JSConfetti();
  var new_k = new_pic.value;
  if (new_k == "party-horn"){
    confetti.addConfetti();

  }
}

function v_level(){
  var level = volume_level.value;
  if (level == 0 ){
    icon.src = "assets/icons/volume-level-0.svg";
  }
  else if (level < 33){
    icon.src = "assets/icons/volume-level-1.svg";
  }
  else if (level < 67){
    icon.src = "assets/icons/volume-level-2.svg";
  }
  else {
    icon.src = "assets/icons/volume-level-3.svg";
  }
  new_sound.volume = level/100;

}
window.addEventListener('DOMContentLoaded', init);
function init() {
  // TODO
  // jaDropDown();
  new_pic.addEventListener('change', jaDropDown);
  volume_level.addEventListener('change', v_level);
  buttons.addEventListener('click', play_sound);
  buttons.addEventListener('click', effect);
  
  
}
//init();