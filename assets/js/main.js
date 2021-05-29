twemoji.parse(document.body, {
  base: 'https://cdn.lazywasabi.net/emoji/latest/',
  folder: 'svg',
  ext: '.svg',
});

function toggleMenu() {
  document.querySelector('.menu').classList.toggle('active');
  document.querySelector('body').classList.toggle('overflow-hidden');
}

function toggleThemeSelect() {
  document.querySelector('.theme-select').classList.toggle('lg:hidden');
}

if (navigator.share) {
  const shareButton = document.querySelector('.share-button');
  if (shareButton) {
    const pageTitle = document.querySelector('h1').textContent;
    const pageURL = document.location.href;
    shareButton.classList.remove('hidden');
    shareButton.addEventListener('click', function (ev) {
      navigator.share({
        title: pageTitle,
        url: pageURL,
      });
    });
  }
}
