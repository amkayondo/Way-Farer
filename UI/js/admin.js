const adminNav = document.getElementById('adm-nav');
const newtrip = document.getElementById('cretp');
const gohome = document.getElementById('cantp');
const cancel = document.getElementById('cantptw');

adminNav.innerHTML = `
<link rel="stylesheet" href="css/screens.css">
<a href="./index.html"><div class="ntlg"><img src="../images/logo2.png" alt="Way Farer logo" class="ntlg-img">
<div class="nltt">Admin</div>
</a>
<div id="modl"></div>
<div class="rghtnvm lgdin adfdg" id="nvbls">
<a href="./create_trip.html"><button class="-bth">CREATE TRIP</button></a>
<div id="usdds">
    <img src="../images/user.png" alt="Way Farer user" class="usrda-img">
</div>
<div id="uspdd" class="asdasd">
      <div class="ksfnk">
        <a href="./adminSignin.html" class="a--urc"><div class="sght">Logout</div></a>
    </div>
</div>
</div>
`
const route = (div, url) => {
    div.addEventListener('click', () => {
        location = url;
    });    
}

route(newtrip, './trip.html');
route(gohome, './index.html');
route(cancel, './trip_del.html');
