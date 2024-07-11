export function attachButtonHandlers() {
    document.querySelectorAll('.btn_yes, .btn_no').forEach(button => {
        button.addEventListener('click', function() {
            const nextBlock = this.dataset.nextBlock;
            if (nextBlock) {
                loadHTMLIntoContainer(nextBlock, 'middle_container');
            }
        });
    });
}