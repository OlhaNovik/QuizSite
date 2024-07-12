const photoUrls = [
    'Img/photo1.png',
    'Img/photo2.png',
    'Img/photo3.png',
    'Img/photo4.png',
    'Img/photo5.png',
    'Img/photo6.png',
    'Img/photo7.png',
    'Img/photo8.png',
    'Img/photo9.png'
];

const fotoContainer = document.getElementById('foto_container');
let currentPhotoIndex = 0;

export function changePhoto() {
    fotoContainer.innerHTML = '';

    const img = document.createElement('img');
    img.src = photoUrls[currentPhotoIndex];
    img.alt = `Photo ${currentPhotoIndex + 1}`;
    img.classList.add('fade-in');
    fotoContainer.appendChild(img);

    currentPhotoIndex = (currentPhotoIndex + 1) % photoUrls.length;
}

export function startPhotoSlideshow() {
    setInterval(changePhoto, 2000);
    changePhoto();
}
