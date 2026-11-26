// Load a player only after a visitor chooses to watch. Keep one video active.
let activeVideo;

document.querySelectorAll('.video-trigger').forEach((button) => {
  button.addEventListener('click', () => {
    if (activeVideo) activeVideo.frame.replaceChildren(activeVideo.button);

    const frame = button.closest('.video-frame');
    const player = document.createElement('iframe');
    const id = button.dataset.videoId;
    player.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    player.title = button.getAttribute('aria-label').replace(/^Play /, '');
    player.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    player.allowFullscreen = true;
    player.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.replaceChildren(player);
    activeVideo = { frame, button };
    player.focus();
  });
});
