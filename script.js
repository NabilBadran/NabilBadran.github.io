const switchTheme = (event) => {
  event.preventDefault(); // Prevent the default link behavior

  const rootElem = document.documentElement;
  let dataTheme = rootElem.getAttribute('data-theme');

  newTheme = (dataTheme === 'light') ? 'dark' : 'light';

  rootElem.setAttribute('data-theme', newTheme);

  // set the new local stoarage item
  localStorage.setItem('theme',newTheme)
};

document.querySelector('#theme-switcher').addEventListener('click', switchTheme);


