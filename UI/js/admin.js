const adminNav = document.getElementById('adm-nav');
const newtrip = document.getElementById('cretp');
const gohome = document.getElementById('cantp');
const cancel = document.getElementById('cantptw');

adminNav.innerHTML = `
<a href="index.html"><div class="ntlg"><img src="../images/logo2.png" alt="Way Farer logo" class="ntlg-img">
<div class="nltt">Way-Farer</div>
</a>
<ul class="ncv">
</ul>
<div class="rghtnvm">
<a href="./signup.html" class="jsdf fins">Create account</a>
<a href="./signin.html" class="jsdf"><button class="btn sig in">SIGNIN</button></a>
</div>
</div>`

newtrip.addEventListener('click', () => {
    location = './trip.html';
});

gohome.addEventListener('click', () => {
    location = './index.html';
});

cancel.addEventListener('click', () => {
location = './trip_del.html';
});