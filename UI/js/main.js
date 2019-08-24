const Main = {
    MakeChange = (main, div1, div2, action1, action2) => {
        main.addEventListener('click', () => {
        div1.style.display = action1;
        div2.style.display = action2;
    })}
}
module.exports = Main;