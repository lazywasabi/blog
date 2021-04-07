const html = document.querySelector('html').classList;
const toggle = document.querySelector('.theme-toggle');
const toggleAuto = document.querySelector('.new-theme-auto').classList;
const toggleLight = document.querySelector('.new-theme-light').classList;
const toggleDark = document.querySelector('.new-theme-dark').classList;

function themeAuto() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.add('dark');
  } else {
    html.remove('dark');
  }
  localStorage.theme = 'auto';
  toggleAuto.add('active');
  toggleLight.remove('active');
  toggleDark.remove('active');
}

function themeLight() {
  html.remove('dark');
  localStorage.theme = 'light';
  toggleAuto.remove('active');
  toggleLight.add('active');
  toggleDark.remove('active');
}

function themeDark() {
  html.add('dark');
  localStorage.theme = 'dark';
  toggleAuto.remove('active');
  toggleLight.remove('active');
  toggleDark.add('active');
}

function changeTheme() {
  const theme = localStorage.theme;
  if (theme === 'auto') {
    themeDark();
  } else if (theme === 'dark') {
    themeLight();
  } else if (theme === 'light') {
    themeAuto();
  } else {
    themeAuto();
  }
}

function setTheme() {
  const theme = localStorage.theme;
  if (theme === 'auto' || !('theme' in localStorage)) {
    themeAuto();
  } else if (theme === 'dark') {
    themeDark();
  } else if (theme === 'light') {
    themeLight();
  }
}

setTheme();

function autoChangeTheme(e) {
  if (localStorage.theme === 'auto' || !('theme' in localStorage)) {
    if (e.matches) {
      html.add('dark');
    } else {
      html.remove('dark');
    }
  }
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', autoChangeTheme);
