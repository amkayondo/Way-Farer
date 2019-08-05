const singtrip = document.getElementById('tpdata');

singtrip.innerHTML = `
<div class="tofds">
<table class="tp--lst">
               <tr class="tp--thd">
               <!-- Not logged in trips -->
               <td class="t--hd">Bus</td>
               <td class="t--hd">Origin</td>
               <td class="t--hd">Destination</td>
               <td class="t--hd">Date</td>
               <td class="t--hd">Fare</td>
               <td class="t--hd">Status</td>
               <td class="t--hd">Book seats</td>
               </tr>
               <tr id="tp--itm">
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
</tr>
           </table></div>
           `
