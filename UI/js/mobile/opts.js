const userImg = document.getElementById('mbusdds');
const userMenu = document.getElementById('ontuop');
const canlBtn = document.getElementById('mcn');

userMenu.style.display = 'none';

const makeChange = (main, div1, action1) => {
    main.addEventListener('click', () => {
    div1.style.display = action1;
})}

makeChange(userImg, userMenu, 'block');
makeChange(canlBtn, userMenu, 'none');
