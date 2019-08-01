const bookNow = document.getElementById('bookData');

bookNow.innerHTML = `
<!-- mobile title -->
<div class="mbhtt">Book Trip</div>
<!-- end of mobile title -->
<div class="mbtpoa">
    <div id="mptdt">DATE : 23, SEPT 2019</div>
    <div class="mbset--lb">
    <input type="number" class="mstb" id="stkis" placeholder="Number of seats">
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
        <a href="booking.html">
            <button class="btn --mbbk bk">BOOK</button>
        </a>
        <a href="index.html">
            <button class="btn --mbbk cn">CANCEL</button>
        </a>
    </div>
</div>
</div>`