function quickSetTheme() {
  const html = document.querySelector('html').classList;
  const storage = localStorage.theme;

  if (storage === 'auto' || !('theme' in localStorage)) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      html.add('dark');
    } else {
      html.remove('dark');
    }
  } else if (storage === 'dark') {
    html.add('dark');
  } else if (storage === 'light') {
    html.remove('dark');
  }
}

quickSetTheme();
