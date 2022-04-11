const modalWindow = document.querySelector('.modal');
const buttonsModal = document.querySelectorAll('.button-play');

buttonsModal.forEach((item, i) => {
    item.addEventListener('click', () => {
        document.getElementById('vid').src = 'https://www.youtube.com/embed/razrg0M36Xc';
        modalWindow.classList.add('active');
    })
});

modalWindow.addEventListener('click', () => {
    modalWindow.classList.remove('active');
    document.getElementById('vid').src = '';
})