const booked = document.getElementById('bktpdtw');

const d2 = `<input type="text" id="stkis" placeholder="Number of seats" value="SEATS : 5" disabled>`;

booked.innerHTML = `
<div class="fld--lb">DATE : 23, SEPT 2019</div>
            <div class="set--lb">
            ${d2}
            </div>
            <div class="bd--ctn">  
        <div class="dbt-tp">
                <div class="bpDpAddr"><div class="msd oh"><div class="dshes"></div><div class="bllts">
                    <div class="wnskw"></div></div><div class="ksfnl">
                    <div class="orgi--lb">KAMPALA</div>
                   </div></div>
                    <div class="msfsfe"><div class="bllts"><div class="circle--bs"></div></div>
                    <div class="ksfnl msd"><span class="dstn--lb">KIGALI</span></div></div></div>
        </div>
       
    </div>
    <div id="fr--lb"  class="adjns">FARE : UGX 35000</div>

`