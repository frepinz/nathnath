const photos = [
  "WhatsApp Image 2023-04-03 at 1.57.07 AM.jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.08 AM (1).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.08 AM (2).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.08 AM.jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.09 AM (1).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.09 AM (2).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.09 AM (3).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.09 AM.jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.10 AM (1).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.10 AM (2).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.10 AM.jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.11 AM (1).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.11 AM (2).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.11 AM (3).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.11 AM.jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.12 AM (1).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.12 AM (2).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.12 AM (3).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.12 AM.jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.13 AM (1).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.13 AM (2).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.13 AM.jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.14 AM (1).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.14 AM (2).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.14 AM (3).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.14 AM.jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.15 AM (1).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.15 AM (2).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.15 AM (3).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.15 AM.jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.16 AM (1).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.16 AM (2).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.16 AM (3).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.16 AM.jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.17 AM (1).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.17 AM (2).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.17 AM.jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.18 AM (1).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.18 AM (2).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.18 AM (3).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.18 AM.jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.19 AM (1).jpeg",
  "WhatsApp Image 2023-04-03 at 1.57.19 AM.jpeg",
  "WhatsApp Image 2023-04-03 at 2.13.27 AM (1).jpeg",
  "WhatsApp Image 2023-04-03 at 2.13.27 AM.jpeg",
];

const music = [
  "ICEDMOB - Verde.mp3",
  "Slipknot - Vermilion Pt. 2.mp3",
  "Crawling - Linkin Park.mp3",
  "System Of A Down - Lonely Day.mp3",
  "Gwyn, Lord of Cinder - Dark Souls Soundtrack.mp3"
];

const photoEl = document.getElementById("photo");
const nextBtn = document.getElementById("next-btn");
const musicBtn = document.getElementById("music-btn");
const bgMusic = document.getElementById("background-music");

let currentPhotoIndex = 0;
let currentMusicIndex = 0;

nextBtn.addEventListener("click", () => {
  currentPhotoIndex++;
  
  if (currentPhotoIndex >= photos.length) {
    currentPhotoIndex = 0;
  }
  
  photoEl.src = photos[currentPhotoIndex];
  
  bgMusic.play();
});

musicBtn.addEventListener("click", () => {
  currentMusicIndex++;
  
  if (currentMusicIndex >= music.length) {
    currentMusicIndex = 0;
  }
  
  bgMusic.src = music[currentMusicIndex];
  bgMusic.play();
});
