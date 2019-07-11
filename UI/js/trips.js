const trips = document.getElementById('ksdajd');


// trips, not logged in
const xtyo = `    <td class="t--hd">Bus</td>
<td class="t--hd">Origin</td>
<td class="t--hd">Destination</td>
<td class="t--hd">Date</td>
<td class="t--hd">Fare</td>
<td class="t--hd">Status</td>
<td class="t--hd">Seats Booked</td>
</tr>`

const sdfre = `<tr id="tp--itm">
<td class="t--dt"><a href="./trip.html">UG 203FT</a></td>
<td class="t--dt">Kampala</td>
<td class="t--dt">Kigali</td>
<td class="t--dt">3 Sept, 2019</td>
<td class="t--dt">UGX 40000</td>
<td class="t--dt">active</td>

<td class="t--dt">
<div class="jjdjs">20</div> 
</td>
</tr>`

trips.innerHTML = `
<table class="tp--lst">
               <tr class="tp--thd">
            ${xtyo}
            ${sdfre}
            ${sdfre}
            ${sdfre}
           </table>`
