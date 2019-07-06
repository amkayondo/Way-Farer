const usr_img = document.getElementById('usdds');
const usr_menu = document.getElementById('uspdd');

usr_menu.style.display = 'none';

usr_img.addEventListener('click', () => {
    usr_menu.style.display = 'block';
});

usr_img.addEventListener('dblclick', () => {
    usr_menu.style.display = 'none';
});