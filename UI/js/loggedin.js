const logedIn = document.getElementById('nav-login');
const Ltrips = document.getElementById('ntp--cnt');

// loggedin nav
logedIn.innerHTML = `
<link rel="stylesheet" href="css/screens.css">
<a href="./home.html"><div class="ntlg"><img src="./images/logo2.png" alt="Way Farer logo" class="ntlg-img">
<div class="nltt">Way-Farer</div>
</a>
<div id="modl"></div>
<div class="rghtnvm lgdin" id="nvbls">
<div id="usdds">
    <img src="./images/user.png" alt="Way Farer user" class="usrda-img">
</div>
<div class="fjlwf">
<div id="uspdd">
    <div class="ksfnk">
        <a href="./index.html" class="a--urc"><div class="sght">Logout</div></a>
</div></div>
</div>

</div>
`

const dta = ` <a href="./trip.html"><div class="tpodf">
<div class="busbim"></div>
<div id="tpod">Kigali to Kampala</div>
<div id="dte">Sat 23/Sept/2019</div>
</div></a>`

Ltrips.innerHTML = `
        ${dta}${dta}${dta}${dta}${dta}${dta}
`
