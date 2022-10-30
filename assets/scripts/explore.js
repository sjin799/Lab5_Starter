// explore.js
var voiceList = document.querySelector('select');
var txtInput = document.querySelector('textarea');
var buttom = document.querySelector('button');
const synth = window.speechSynthesis;
let image = document.querySelector('img[alt = "Smiling face"]');
window.addEventListener('DOMContentLoaded', init);
function populateVoiceList() {

  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}
function change_back(){
  image.src = "assets/images/smiling.png";
}
function speak() {
  if (synth.speaking) {
    console.error("speechSynthesis.speaking");
    return;
  }
  if (txtInput.value !== "") {
    const utterThis = new SpeechSynthesisUtterance(txtInput.value);
    /** 
    utterThis.onend = function (event) {
      console.log("SpeechSynthesisUtterance.onend");
    };

    utterThis.onerror = function (event) {
      console.error("SpeechSynthesisUtterance.onerror");
    };
    */
    const voices = speechSynthesis.getVoices();
    const selectedOption = voiceList.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        break;
      }
    }
     //*/
   // utterThis.pitch = 50;
  //  utterThis.rate = 50;
    
    synth.speak(utterThis);
    image.src = "assets/images/smiling-open.png";
    txtInput.blur();
    utterThis.addEventListener('end', change_back);
  }
}
function init() {
  // TODO
  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
     speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  buttom.addEventListener('click', speak);

}