const updateTrip = document.getElementById('updtp');

updateTrip.innerHTML = `<div class="tpcr--ctn">
        <div class="crtdt">
            <div class="crth slfds">Update Trip details</div>
            <div class="cttdrt">
                <label for="origin" class="ctlt">ORIGIN</label>
                <input type="text" id="orgn" >
            </div>
            <div class="cttdrt">
                <label for="destination" class="ctlt">DESTINATION</label>
                <input type="text" id="dst" >
            </div>
            <div class="cttdrt">
                <label for="dtat" class="ctlt">TRIP DATE</label>
                <input type="date" id="tpdtat" >
            </div>
             <div class="cttdrt">
                <label for="seating capacity" class="ctlt">SEATING CAPACITY</label>
                <input type="number" id="ctctp" >
            </div>
             <div class="cttdrt">
                <label for="fare" class="ctlt">FARE</label>
                <input type="number" id="fctr" >
            </div>
            <div class="ctbtny">
            <a href="./trip.html">
                <button id="cretp" class="svcxdds">UPDATE TRIP</button>
            </a>
                <button id="cantp">CANCEL</button>
            </div>
        </div>
    </div>`