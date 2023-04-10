// local reviews data
const reviews = [
  {
    id: 1,
    name: "Laura Lima",
    job: "Técnica em Informática",
    img: "/pages/03 - reviews/laura1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at erat felis. Curabitur et lacinia ex. Quisque malesuada lacus non nulla hendrerit accumsan. Praesent mi lectus, bibendum ac vehicula quis, efficitur non nulla.",
  },
  {
    id: 2,
    name: "Letícia Muniz",
    job: "Técnica em Informática",
    img: "/pages/03 - reviews/leticia.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at erat felis. Curabitur et lacinia ex. Quisque malesuada lacus non nulla hendrerit accumsan. Praesent mi lectus, bibendum ac vehicula quis, efficitur non nulla.",
  },
  {
    id: 3,
    name: "Enzo Soares",
    job: "Técnico em Informática",
    img: "/pages/03 - reviews/enzo.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at erat felis. Curabitur et lacinia ex. Quisque malesuada lacus non nulla hendrerit accumsan. Praesent mi lectus, bibendum ac vehicula quis, efficitur non nulla.",
  },
];

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1; 
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
