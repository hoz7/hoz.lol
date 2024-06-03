// Get the audio element
const audio = document.getElementById('background-music');

// Add an event listener to play the audio on click
document.body.addEventListener('click', playAudio);

// Define the playAudio function
function playAudio() {
  // Check if the audio is paused or not playing before playing it
  if (audio.paused) {
    audio.play();
  }
}