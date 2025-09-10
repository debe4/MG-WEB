const clickSound = document.getElementById('click-sound');

// Global click sound
document.addEventListener('click', () => {
  clickSound.currentTime = 0;
  clickSound.play();
});

function openTab(evt, tabId) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(c => c.classList.remove('active'));

  const links = document.querySelectorAll('.tab-link');
  links.forEach(l => l.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}

function copyDiscord() {
  const discord = document.getElementById("discord").innerText;
  navigator.clipboard.writeText(discord).then(() => {
    alert("Copied: " + discord);
  });
}

