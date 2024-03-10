'use strict';

const randomPlace = document.getElementById('randomPlaceKharkiv');
const place = document.getElementById('place');

randomPlace.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * 9) + 1;
    const photo = document.createElement('img');

    photo.src = `../images/${randomIndex}.jpg`;
    photo.style.width = '700px';
    place.innerHTML = '';

    place.appendChild(photo);
});