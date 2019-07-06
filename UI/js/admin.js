const adminNav = document.getElementById('adm-nav');
const newtrip = document.getElementById('cretp');
const gohome = document.getElementById('cantp');
const cancel = document.getElementById('cantptw');

adminNav.innerHTML = `
<a href="index.html"><div class="ntlg"><img src="../images/logo2.png" alt="Way Farer logo" class="ntlg-img">
<div class="nltt">Admin</div>
</a>
<div class="rghtnvm lgdin">
<div id="usdds">
    <img src="../images/user.png" alt="Way Farer user" class="usrda-img">
</div>
</div>
<div id="uspdd">
    <div class="ksfnk">
        <a href="#" class="a--urc"><div class="sght">Item</div></a>
        <a href="../index.html" class="a--urc"><div class="sght">Logout</div></a>
    </div>
</div>
`
newtrip.addEventListener('click', () => {
    location = './trip.html';
});

gohome.addEventListener('click', () => {
    location = './index.html';
});

cancel.addEventListener('click', () => {
location = './trip_del.html';
});