const logedIn = document.getElementById('nav-login');
const Ltrips = document.getElementById('ntp--cnt');

// Not loggedin nav
logedIn.innerHTML = `
<a href="index.html"><div class="ntlg"><img src="./images/logo2.png" alt="Way Farer logo" class="ntlg-img">
<div class="nltt">Way-Farer</div>
</a>
<ul class="ncv">
<li class="sjd"><a href="#" class="nv-a active">Trips available</a></li>
</ul>
<div class="rghtnvm">
<a href="./signup.html" class="jsdf fins">Create account</a>
<a href="./signin.html" class="jsdf"><button class="btn sig in">SIGNIN</button></a>
</div>
</div>`

// trips, not logged in
const xtyo = `    <td class="t--hd">Bus</td>
<td class="t--hd">Origin</td>
<td class="t--hd">Destination</td>
<td class="t--hd">Date</td>
<td class="t--hd">Fare</td>
<td class="t--hd">Status</td>
<td class="t--hd">Book seats</td>
</tr>`

const sdfre = `<tr id="tp--itm">
<td class="t--dt"><a href="./trip.html">UG 203FT</a></td>
<td class="t--dt">Kampala</td>
<td class="t--dt">Kigali</td>
<td class="t--dt">3 Sept, 2019</td>
<td class="t--dt">UGX 40000</td>
<td class="t--dt">active</td>
<td class="t--dt">
 <a href="./book.html">
     <button class="bk--st">BOOK SEATS</button>
 </a></td>
</tr>`

Ltrips.innerHTML = `
<table class="tp--lst">
               <tr class="tp--thd">
            ${xtyo}
               <!-- Not logged in trips -->
            ${sdfre}
            ${sdfre}
            ${sdfre}
           </table>
`
