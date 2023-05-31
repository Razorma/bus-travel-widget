//get the references to my DOM elements
const pointsInput = document.querySelector(".points")
const selectLocation = document.querySelector(".selectLocation")
const returnElem = document.querySelector(".return")
const calculateButton = document.querySelector(".calculate")
const singleTrips = document.querySelector("#singleTrips")
const pricePerTrip = document.querySelector("#pricePerTrip")
const returnTrips = document.querySelector("#returnTrips")
const returnTripsPrice = document.querySelector("#returnTripsPrice")
const errorMessage = document.querySelector(".errorMessage")
//get my function 
let tripsFunction = calculateTrips()

//add an eevengt listener to my button
calculateButton.addEventListener("click", function () {
    
    if (pointsInput.value === "") {
        errorMessage.innerHTML = "please enter points"
        setTimeout(function () {
            errorMessage.innerHTML = '';
        }, 3500);
    } else if (selectLocation.value === "") {
        errorMessage.innerHTML = "please select location"
        setTimeout(function () {
            errorMessage.innerHTML = '';
        }, 3500);

    } else {
        const checkedPeakButton = document.querySelector('input[name="peakTime"]:checked');
        const returnButton = document.querySelector('input[name="return"]:checked');
        if (checkedPeakButton) {
            tripsFunction.setpricePerTrip(selectLocation.value,checkedPeakButton.value)
            tripsFunction.setSingleTrips(pointsInput.value)
            singleTrips.innerHTML = tripsFunction.getSingleTrips()
            pricePerTrip.innerHTML = tripsFunction.getpricePerTrip()

            if (returnButton) {
                tripsFunction.setReturnTripsPrice()
                tripsFunction.setReturnTrips()
                returnTrips.innerHTML = tripsFunction.getReturnTrips()
                returnTripsPrice.innerHTML = tripsFunction.getReturnTripsPrice()
            } else {
                returnTrips.innerHTML = ""
                returnTripsPrice.innerHTML = ""
            }
        } else {
            errorMessage.innerHTML = "please enter time 'peak or off peak'"
            setTimeout(function () {
                errorMessage.innerHTML = '';
            }, 3500);
        }
//remove the valuse after the calculate button is pressed
        // pointsInput.value =""
        // checkedPeakButton.checked = false
        // selectLocation.value =""
    }
})