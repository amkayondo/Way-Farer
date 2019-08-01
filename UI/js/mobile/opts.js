const userImg = document.getElementById('mbusdds');
const userMenu = document.getElementById('ontuop');
const canlBtn = document.getElementById('mcn');

userMenu.style.display = 'none';

userImg.addEventListener('click', () => {
    userMenu.style.display = 'block';
});

canlBtn.addEventListener('click', () => {
    userMenu.style.display = 'none';
});