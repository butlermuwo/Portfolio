// popups
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable no-plusplus */
const hamburger = document.querySelector('.menu');
const links = document.querySelectorAll('.mobile-menu a');
hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains('active')) {
    hamburger.classList.remove('active');
    document.querySelector('.mobile-menu').style.display = 'none';
  } else {
    hamburger.classList.add('active');
    document.querySelector('.mobile-menu').style.display = 'block';
  }
});

links.forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();

    hamburger.classList.remove('active');
    document.querySelector('.mobile-menu').style.display = 'none';
  });
});

// popupwindow

const cardObject = [
  {
    id: 1,
    title: 'Tonic',
    subTitle: 'CANOPY',
    imageMobile: './img/Snapshoot-Portfolio.png',
    imageDesktop: './img/card-Portfolio.png',
    details: ['Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    langs: ['html', 'css', 'javaScript'],
    gitLink: '#',
    srcLink: '#',
  },
  {
    id: 2,
    title: 'Tonic',
    subTitle: 'CANOPY',
    imageMobile: './img/Snapshoot-Portfolio.png',
    imageDesktop: './img/Snapshoot-Portfolio3.png',
    details: ['Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    langs: ['html', 'css', 'javaScript'],
    gitLink: '#',
    srcLink: '#',
  },
  {
    id: 3,
    title: 'Tonic',
    subTitle: 'CANOPY',
    imageMobile: './img/Snapshoot-Portfolio2.png',
    imageDesktop: './img/Snapshoot-Portfolio.png',
    details: ['Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    langs: ['html', 'css', 'javaScript'],
    gitLink: '#',
    srcLink: '#',
  },
  {
    id: 4,
    title: 'Tonic',
    subTitle: 'CANOPY',
    imageMobile: './img/Snapshoot-Portfolio3.png',
    imageDesktop: './img/Snapshoot-Portfolio1.png',
    details: ['Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    langs: ['html', 'css', 'javaScript'],
    gitLink: '#',
    srcLink: '#',
  },
];

for (let i = 0; i < cardObject.length; i++) {
  const element = cardObject[i];

  document.querySelector(
    '.main-section'
  ).innerHTML += `<section class="tonic-section" id="tonic">
        <ul class="images">
          <li>
            <img
              src="${element.imageDesktop}"
              alt="nature card"
              class="desktop-images"
            />
          </li>
          <li>
            <img
              src="${element.imageMobile}"
              alt="tarnner christensen from high school dropout to product designer at facebook"
              class="mobile-images"
            />
          </li>
        </ul>
        <div class="tonic">
          <h3>${element.title}</h3>
          <div class="date">
            <h3>${element.subTitle}</h3>
                ${element.details
                  .map(
                    (
                      x
                    ) => ` <img src="img/Counter.png" alt="" class="counter" />
            <p>${x}</p>`
                  )
                  .join('')}           
          </div>
          <p class="daily">
           ${element.description}
          </p>      
          
          <div>           
            ${element.langs
              .map((x) => `<button type="button">${x}</button>`)
              .join('')}           
          </div>
          <button id='${element.id}' class="see-project">See Project</button>
        </div>
      </section>`;
}

document.querySelectorAll('.see-project').forEach((btn) => {
  btn.addEventListener('click', () => {
    const id = Number(btn.id);
    const project = cardObject.find((p) => p.id === id);

    document.querySelector('.pop').innerHTML = `
      
    <section class="modal-wrapper">
      <div class="modal">
        <div class="modal-title">
          <h2>${project.title}</h2>
          <div class='close-modal'>
          <span class="iconify" data-icon="ep:close-bold"></span>
          </div>
        </div>
        <div class="date">
            <h3>${project.subTitle}</h3>
                ${project.details
                  .map(
                    (
                      x
                    ) => ` <img src="img/Counter.png" alt="" class="counter" />
            <p>${x}</p>`
                  )
                  .join('')}           
          </div>
        <img src="${project.imageDesktop}"/>
        <div class="modal-content">
          <p>
            ${project.description}
          </p>
          <div>
             <div>           
            ${project.langs
              .map((x) => `<button type="button">${x}</button>`)
              .join('')}           
          </div>
            <div class="modal-btns">
              <a href="${project.gitLink}" class="btn github-link">
                See live
                <span class="iconify iconbtn" data-icon="bytesize:github"></span>                                                                      
              </a>
              <a href="${project.srcLink}" class="btn source-link">
                See source                
                <span class="iconify iconbtnlink" data-icon="cil:external-link"></span>                            
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>  
    `;
    document.querySelector('.close-modal').addEventListener('click', () => {
      document.querySelector('.modal-wrapper').remove();
    });
  });
});
