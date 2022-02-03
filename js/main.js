const speakers = [
  {
    img: 'imgs/speakers/greg_turk_0.png',
    name: 'Greg Turk',
    title: 'Professor of Computer Science at Yale University',
    about: 'His research interests include computer graphics, biological simulation and scientific visualization.',
  },
  {
    img: 'imgs/speakers/Holly-Rushmeier.jpg',
    name: 'Holly Rushmeier',
    title: 'Professor of Computer Science at Yale University.',
    about: 'Rushmeier is particularly interested in scanning and modeling shape and appearance, as well as the applications of computer graphics in cultural heritage.',
  },
  {
    img: 'imgs/speakers/John_Carmack.jpeg',
    name: 'John Carmack',
    title: 'CTO of Oculus VR',
    about: 'Honoured with the Academy\'s highest honour, the Fellowship for "work that has consistently been at the cutting edge of games and his technical expertise helping the future arrive that little bit faster".',
  },
  {
    img: 'imgs/speakers/Gabriel-Gambetta.jpg',
    name: 'Gabriel Gambetta',
    title: 'Senior software engineer at Google Zürich.',
    about: 'the author of Computer Graphics from Scratch, ',
  },
  {
    img: 'imgs/speakers/c-karen-liu_profilephoto.jpg',
    name: 'C. Karen Liu',
    title: 'Associate professor at Stanford University',
    about: 'She developed computational approaches to modeling realistic and natural human movements, learning complex control policies for humanoids and assistive robots.',
  },
  {
    img: 'imgs/speakers/niloy_may_13.jpg',
    name: 'Niloy J. Mitra',
    title: 'Professor at University College London (UCL)',
    about: 'His  research focus includes shape analysis, data-driven geometry processing, and computational fabrication.',
  },
];

function speakerTemplate(speaker) {
  return `<li class="speaker row">
  <img src="${speaker.img}">
  <dl class="spk-content cell">
      <dt>
          <p class="name">${speaker.name}</p>
          <p>${speaker.title}</p>
      </dt>
      <dd><p>${speaker.about}</p></dd>
  </dl>
</li>`;
}

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
  const speakersList = document.getElementById('speakers-list');
  if (speakersList) {
    speakersList.innerHTML = speakers.map((x) => speakerTemplate(x)).join('');
  }
});