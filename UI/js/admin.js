const adminNav = document.getElementById('adm-nav');
const newtrip = document.getElementById('cretp');
const gohome = document.getElementById('cantp');
const cancel = document.getElementById('cantptw');

adminNav.innerHTML = `
<link rel="stylesheet" href="css/screens.css">
<a href="./index.html"><div class="ntlg"><img src="../images/logo2.png" alt="Way Farer logo" class="ntlg-img">
<div class="nltt">Admin</div>
</a>
<div class="rghtnvm lgdin">
<a href="./create_trip.html"><button class="-bth">CREATE TRIP</button></a>
<div id="usdds">
    <img src="../images/user.png" alt="Way Farer user" class="usrda-img">
</div>
<div id="uspdd">
      <div class="ksfnk">
        <a href="#" class="a--urc"><div class="sght">Item</div></a>
        <a href="./adminSignin.html" class="a--urc"><div class="sght">Logout</div></a>
    </div>
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