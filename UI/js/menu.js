import Main from './main';
const usr_img = document.getElementById('usdds');
const usr_menu = document.getElementById('uspdd');
const mdl = document.getElementById('modl');

usr_menu.style.display = 'none';
mdl.style.display = 'none';

Main.MakeChange(usr_img, usr_menu, mdl, 'block', 'block');
Main.MakeChange(mdl, usr_menu, mdl, 'none', 'none');
