const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const bodyRef = document.querySelector('body');
  const checkboxRef = document.querySelector('#theme-switch-toggle');

  checkboxRef.addEventListener('change', toggleCheckbox);

function toggleCheckbox() {
  if (checkboxRef.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

 renewalTheme();

function renewalTheme() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    bodyRef.classList.add(Theme.DARK);
    checkboxRef.checked = true;
  }
}