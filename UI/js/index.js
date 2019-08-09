const notLogedin = document.getElementById('nav-no-login');
const notLtrips = document.getElementById('ntp--cnt');

const loggedIn = (_div) => {
    _div.innerHTML = ctn;
}

// Not loggedin nav
notLogedin.innerHTML = `
<a href="index.html"><div class="ntlg"><img src="./images/logo2.png" alt="Way Farer logo" class="ntlg-img">
<div class="nltt">Way Farer</div>
</a>
<ul class="ncv">
<li class="sjd"><a href="#" class="nv-a active">Trips available</a></li>
</ul>
<div class="rghtnvm fddhtr">
<a href="./signup.html" class="jsdf fins">Create account</a>
<a href="./signin.html" class="jsdf"><button class="btn sig in">SIGNIN</button></a>
</div>
</div>`

// trips, not logged in
const tpst = `    <td class="t--hd">Bus</td>
<td class="t--hd">Origin</td>
<td class="t--hd">Destination</td>
<td class="t--hd">Date</td>
<td class="t--hd">Fare</td>
<td class="t--hd">Status</td>
<td class="t--hd">Book seats</td>
</tr>`

const dta = ` <a href="./signin.html"><div class="tpodf">
<div class="busbim"></div>
<div id="tpod">Kigali to Kampala</div>
<div id="dte">Sat 23/Sept/2019</div>
</div></a>`

notLtrips.innerHTML = `
        ${dta}${dta}${dta}${dta}${dta}${dta}
`
