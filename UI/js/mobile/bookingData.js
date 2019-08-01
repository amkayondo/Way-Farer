const bookingData = document.getElementById('bookedit');

bookingData.innerHTML = `
<!-- mobile title -->
<div class="mbhtt">Trip Details</div>
<!-- end of mobile title -->
<div class="mbtpoa">
    <div id="mptdt">DATE : 23, SEPT 2019</div>
    <div class="mbset--lb">
    <input type="text" class="mstb" id="stkis" placeholder="Number of seats" value="SEATS: 5" disabled>
    </div>
    <div class="mbbd--ctn">  
        <div class="mbdbt-tp">
                <div class="bpDpAddr"><div class="msd oh"><div class="dshes"></div><div class="bllts">
                    <div class="wnskw"></div></div><div class="ksfnl">
                    <div class="orgi--lb">KAMPALA</div>
                   </div></div>
                    <div class="msfsfe"><div class="bllts"><div class="circle--bs"></div></div>
                    <div class="ksfnl msd"><span class="dstn--lb">KIGALI</span></div></div></div>
        </div>
    </div>
    <div id="faaremb">FARE: UGX 50000</div>
    <div class="mbkbtm">
        <a href="#">
            <button class="btn --mbbk cnl">CANCEL BOOKING</button>
        </a>
        <a href="bookings.html">
            <button class="btn --mbbk cn">BACK TO BOOKINGS</button>
        </a>
    </div>
</div>`