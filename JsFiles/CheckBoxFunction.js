export function initializeCheckboxes() {
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
}


