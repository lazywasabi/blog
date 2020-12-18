twemoji.parse(document.body);

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
    shareButton.classList.remove('invisible');
    shareButton.addEventListener('click', function (ev) {
      navigator.share({
        text: pageTitle,
        url: pageURL,
      });
    });
  } else {
    console.log('share button not found!');
  }
}
