import { initializeCheckboxes } from './JsFiles/CheckBoxFunction.js';
import { startPhotoSlideshow } from './JsFiles/PhotoSlider.js';

document.addEventListener('DOMContentLoaded', () => {
    const blocks = [
        'Components/Web1Text.html',
        'Components/Web2Text.html',
        'Components/Web3Text.html',
        'Components/Web4Text.html',
        'Components/Web5Text.html',
        'Components/Web6Text.html',
        'Components/Web7Text.html',
        'Components/Web8Text.html',
        'Components/Web9Text.html'];

    let currentIndex = 0;

    function loadHTMLIntoContainer(url, containerId) {
        if (!url) {
            console.error('URL is undefined.');
            return;
        }

        console.log(`Loading block ${url} at index ${currentIndex}`);

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(containerId).innerHTML = data;
                attachEventListeners();
                console.log(`Content loaded for index ${currentIndex}`);

                if (currentIndex === 7 && blocks[currentIndex + 1]) {
                    setTimeout(() => {
                        currentIndex++;
                        console.log(`Automatically moving to index ${currentIndex} after 9 seconds`);
                        loadHTMLIntoContainer(blocks[currentIndex], 'middle_container');
                    }, 8000);
                }
                else {
                    console.log('Reached the last block or URL is undefined.');
                }
            })
            .catch(error => {
                console.error('Error loading HTML:', error);
            });
    }

    function attachEventListeners() {
        const nextButtons = document.querySelectorAll('.btn_yes, .btn_no, .btn_cont');
        const backBtn = document.getElementById('btn_back');
        nextButtons.forEach(button => {
            button.removeEventListener('click', handleNextButtonClick);
        });
        if (backBtn) {
            backBtn.removeEventListener('click', handleBackButtonClick);
        }
        nextButtons.forEach(button => {
            button.addEventListener('click', handleNextButtonClick);
        });
        if (backBtn) {
            backBtn.addEventListener('click', handleBackButtonClick);
        }
    }

    function handleNextButtonClick() {
        if (currentIndex < blocks.length - 1) {
            currentIndex++;
            loadHTMLIntoContainer(blocks[currentIndex], 'middle_container');
        } else {
            console.log('No more blocks to load');
        }
    }

    function handleBackButtonClick() {
        if (currentIndex > 0) {
            currentIndex--;
            loadHTMLIntoContainer(blocks[currentIndex], 'middle_container');
        } else {
            console.log('No previous blocks to load');
        }
    }
    loadHTMLIntoContainer(blocks[currentIndex], 'middle_container');
    initializeCheckboxes()
    startPhotoSlideshow()

});


