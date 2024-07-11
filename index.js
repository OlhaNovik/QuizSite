document.addEventListener('DOMContentLoaded', function () {
    loadHTMLIntoContainer('Components/Web1Text.html', 'middle_container');
});
// import "./Components/Additional/CheckBox.html"

function loadHTMLIntoContainer(url, containerId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = data;
                attachButtonHandlers();
            } else {
                console.error(`Container with ID ${containerId} not found`);
            }
        })
        .catch(error => console.error('Error loading HTML:', error));
}





function attachButtonHandlers() {
    document.querySelectorAll('.btn_yes, .btn_no, .btn_cont').forEach(button => {
        button.addEventListener('click', function () {
            const nextBlock = this.dataset.nextBlock;
            if (nextBlock) {
                loadHTMLIntoContainer(nextBlock, 'middle_container');
            }
        });
    });
}









document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.limited-checkbox');
    const maxChecked = 3;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const checkedCount = document.querySelectorAll('.limited-checkbox:checked').length;
            
            if (checkedCount >= maxChecked) {
                checkboxes.forEach(box => {
                    if (!box.checked) {
                        box.disabled = true;
                    }
                });
            } else {
                checkboxes.forEach(box => {
                    box.disabled = false;
                });
            }
        });
    });
});