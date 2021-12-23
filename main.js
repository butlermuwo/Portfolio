const projects = [
  {
    name: 'Tonic',
    details: ['CANOPY', 'Back End Dev', '2015'],
    smallDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    bigDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrlMobile: './Images/First.png',
    imageUrlDesktop: 'Images/desktop-1.png',
    popupImageUrlMobile: './Images/First.png',
    popupImageUrlDesktop: 'assets/popup.png',
    technologiesPopup: [
      'html',
      'css',
      'javaScript',
      'github',
      'Ruby',
      'Bootstrap',
    ],
    technologies: ['html', 'css', 'javaScript'],
    linkLive: 'https://butlermuwo.github.io/Portfolio/',
    linkSource: 'https://butlermuwo.github.io/Portfolio/',
  },
  {
    name: 'Multi-Post Stories',
    details: ['FACEBOOK', 'Full Stack Dev', '2015'],
    smallDescription:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    bigDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrlMobile: './Images/Second.png',
    imageUrlDesktop: './Images/desktop-2.png',
    technologiesPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
    technologies: ['html', 'css', 'javaScript'],
    popupImageUrlMobile: './Images/Second.png',
    popupImageUrlDesktop: './assets/popup.png',
    linkLive: 'https://butlermuwo.github.io/Portfolio/',
    linkSource: '',
  },
  {
    name: 'Facebook 360',
    details: ['FACEBOOK', 'Full Stack Dev', '2015'],
    smallDescription:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    bigDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrlMobile: 'Images/Third.png',
    imageUrlDesktop: 'Images/desktop-3.png',
    technologiesPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    popupImageUrlMobile: 'Images/Third.png',
    popupImageUrlDesktop: 'assets/popup.png',
    linkLive: 'https://butlermuwo.github.io/Portfolio/',
    linkSource: '',
  },
  {
    name: 'Uber navigation',
    details: ['Uber', 'Lead developer', '2018'],
    smallDescription:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    bigDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrlMobile: 'Images/Fourth.png',
    imageUrlDesktop: 'Images/desktop-4.png',
    technologiesPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    popupImageUrlMobile: 'Images./Fourth.png',
    popupImageUrlDesktop: 'assets/popup.png',
    linkLive: '',
    linkSource: '',
  },
];

function g(e, isClass = false) {
  if (isClass) {
    return document.getElementsByClassName(e)[0];
  }
  return document.getElementById(e);
}

// eslint-disable-next-line no-unused-vars
function popup(projectIndex) {
  const project = projects[projectIndex];
  g('t').innerText = project.name;
  g('mImage', true).src = project.imageUrlMobile;
  g('mImageDsk', true).src = project.popupImageUrlDesktop;
  g('modalText', true).innerText = project.bigDescription;
  g('modalTextMobile', true).innerText = project.smallDescription;
  g('myModal').style.display = 'block';
}

function init() {
  for (let k = 0; k < projects.length; k += 1) {
    const project = projects[k];
    const template = document.createElement('template');
    const technologies = project.technologies.map(
      (t) => `<li class="langu">${t}</li>`,
    );

    template.innerHTML = `<article class="project-card">
    <div class="content1">
    <div class="project-img">
      <img
        src="${project.imageUrlMobile}"
        alt="a brief description of what we do"
      />
    </div>
    <div class="desktop-image">
      <img src="${project.imageUrlDesktop}" alt="Nature product catalog" />
    </div>
    </div>
    <div class="card-info">
      <h2 class="project-title">${project.name}</h2>
      <div class="info">
        <span class="canopy">CANOPY</span>
        <img src="./Images/Counter.png" alt="dot" />
        <span class="">back end dev</span>
        <img src="./Images/Counter.png" alt="dot" />
        <span>2015</span>
      </div>
      <p class="project-paragraph">
        ${project.smallDescription}
      </p>
      <ul class="technologies">
        ${unescape(technologies.join(''))}
        
      </ul>
      <button type="button" class="project-btn" onclick=popup(${k})>see project</button>
    </div>
  </article>`;

    g('projects').appendChild(template.content.firstChild);
  }
}

const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];

// eslint-disable-next-line func-names
span.onclick = function () {
  modal.style.display = 'none';
};

// eslint-disable-next-line func-names
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

window.onload = init();

// OPEN &  CLOSE MENU
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});
