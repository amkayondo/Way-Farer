const usr_img = document.getElementById('usdds');
const usr_menu = document.getElementById('uspdd');
const mdl = document.getElementById('modl');

usr_menu.style.display = 'none';
mdl.style.display = 'none';

usr_img.addEventListener('click', () => {
    usr_menu.style.display = 'block';
    mdl.style.display = 'block';
});

mdl.addEventListener('click', () => {
    usr_menu.style.display = 'none';
    mdl.style.display = 'none';
});