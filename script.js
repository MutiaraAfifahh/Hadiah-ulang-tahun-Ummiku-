const audio = document.getElementById('birthdayAudio');
const playButton = document.getElementById('playMusic');
const seekBar = document.getElementById('seekBar');
const volume = document.getElementById('volume');
const currentTimeLabel = document.getElementById('currentTime');
const durationLabel = document.getElementById('duration');
const audioStatus = document.getElementById('audioStatus');
const fmt = (seconds) => {
  if (!Number.isFinite(seconds)) return '0:00';
  return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2,'0')}`;
};
playButton.addEventListener('click', async () => {
  if (audio.paused) {
    try {
      await audio.play();
      playButton.textContent = 'Ⅱ';
      playButton.setAttribute('aria-label','Jeda musik');
      audioStatus.textContent = 'Musik sedang diputar untuk Ummi 💙❤️';
    } catch (error) {
      audioStatus.textContent = 'Musik belum bisa diputar. Pastikan file audio ada di folder audio/.';
    }
  } else {
    audio.pause();
    playButton.textContent = '▶';
    playButton.setAttribute('aria-label','Putar musik');
    audioStatus.textContent = 'Musik dijeda.';
  }
});
audio.addEventListener('loadedmetadata', () => {
  durationLabel.textContent = fmt(audio.duration);
});
audio.addEventListener('timeupdate', () => {
  currentTimeLabel.textContent = fmt(audio.currentTime);
  if (Number.isFinite(audio.duration) && audio.duration > 0) seekBar.value = (audio.currentTime / audio.duration) * 100;
});
audio.addEventListener('ended', () => { playButton.textContent = '▶'; });
seekBar.addEventListener('input', () => {
  if (Number.isFinite(audio.duration) && audio.duration > 0) audio.currentTime = (Number(seekBar.value) / 100) * audio.duration;
});
volume.addEventListener('input', () => { audio.volume = Number(volume.value); });
audio.volume = Number(volume.value);

const envelope = document.getElementById('envelope');
const letterCard = document.getElementById('letterCard');
function openLetter() {
  envelope.classList.add('open');
  setTimeout(() => {
    letterCard.hidden = false;
    letterCard.scrollIntoView({behavior:'smooth',block:'center'});
    celebrate();
  }, 450);
}
document.getElementById('openLetter').addEventListener('click', openLetter);
document.getElementById('openLetterTop').addEventListener('click', () => {
  document.getElementById('surat').scrollIntoView({behavior:'smooth'});
  setTimeout(openLetter, 450);
});

document.getElementById('openPrayer').addEventListener('click', (event) => {
  const prayer = document.getElementById('prayerText');
  prayer.hidden = !prayer.hidden;
  event.currentTarget.textContent = prayer.hidden ? 'Buka Doa Spesial ✨' : 'Tutup Doa Spesial ✨';
  if (!prayer.hidden) prayer.scrollIntoView({behavior:'smooth',block:'nearest'});
  if (!prayer.hidden) celebrate();
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
document.querySelectorAll('.gallery-item').forEach((item) => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    if (!img || img.style.display === 'none' || !img.complete || !img.naturalWidth) return;
    lightboxImage.src = img.src;
    document.getElementById('lightboxCaption').textContent = item.dataset.caption || '';
    lightbox.hidden = false;
  });
});
function closeLightbox(){lightbox.hidden = true; lightboxImage.src = '';}
document.getElementById('closeLightbox').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {if(e.target === lightbox) closeLightbox();});
document.addEventListener('keydown', (e) => {if(e.key === 'Escape') closeLightbox();});

function celebrate() {
  const root = document.getElementById('celebration');
  const symbols = ['♥','✦','✧','•'];
  const colors = ['#d94c61','#4384c7','#f3c969','#f6a9b7','#a6c8ef'];
  for (let i=0; i<34; i++) {
    const p = document.createElement('span');
    p.className = 'particle';
    p.textContent = symbols[Math.floor(Math.random()*symbols.length)];
    p.style.left = `${Math.random()*100}%`;
    p.style.color = colors[Math.floor(Math.random()*colors.length)];
    p.style.fontSize = `${12+Math.random()*19}px`;
    p.style.setProperty('--drift', `${Math.random()*180-90}px`);
    p.style.animationDuration = `${2.6+Math.random()*3}s`;
    root.appendChild(p);
    setTimeout(() => p.remove(), 6000);
  }
}
for (let i=0;i<18;i++) {
  const star = document.createElement('span');
  star.className = 'twinkle';
  star.textContent = '✦';
  star.style.left = `${Math.random()*100}%`;
  star.style.top = `${Math.random()*95}%`;
  star.style.fontSize = `${7+Math.random()*9}px`;
  star.style.animationDelay = `${Math.random()*3}s`;
  document.body.appendChild(star);
}
setInterval(() => {
  if (document.visibilityState === 'visible' && Math.random() > .45) {
    const heart = document.createElement('span');
    heart.className = 'particle';
    heart.textContent = Math.random() > .45 ? '♥' : '✧';
    heart.style.left = `${Math.random()*100}%`;
    heart.style.color = Math.random() > .5 ? '#e78c9b' : '#8eb9e9';
    heart.style.fontSize = `${10+Math.random()*12}px`;
    heart.style.setProperty('--drift', `${Math.random()*100-50}px`);
    heart.style.animationDuration = `${6+Math.random()*4}s`;
    document.getElementById('celebration').appendChild(heart);
    setTimeout(() => heart.remove(), 11000);
  }
}, 1400);
