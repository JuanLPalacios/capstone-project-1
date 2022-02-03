function navigate(hash) {
  if (hash === '#menu') {
    document.querySelector('.navbar-items-c').classList.add('active');
  } else {
    document.querySelector('.navbar-items-c').classList.remove('active');
  }
}

window.addEventListener('load', () => {
  navigate(window.location.hash);
  window.addEventListener('popstate', () => {
    navigate(window.location.hash);
  });
  document.getElementById('close-menu').addEventListener('click', () => { window.history.back(); });
});