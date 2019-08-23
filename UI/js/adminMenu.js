const usr_img = document.getElementById('usdds');
const usr_menu = document.getElementById('uspdd');
const mdl = document.getElementById('modl');

usr_menu.style.display = 'none';
mdl.style.display = 'none';

const nakeChange = (main, div1, div2, action1, action2) => {
    main.addEventListener('click', () => {
    div1.style.display = action1;
    div2.style.display = action2;
})}

nakeChange(usr_img, usr_menu, mdl, 'block', 'block');
nakeChange(mdl, usr_menu, mdl, 'none', 'none');
