const sound = document.querySelector('.sound');
sound.addEventListener('click', () => {
  const playing = sound.classList.toggle('playing');
  sound.setAttribute('aria-pressed', String(playing));
  sound.lastChild.textContent = playing ? ' DALGALARI SUSTUR' : ' DENİZİN SESİ';
});
