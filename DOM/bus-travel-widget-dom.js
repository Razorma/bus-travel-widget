//get the references to my DOM elements
const pointsInput = document.querySelector(".points")
const selectLocation = document.querySelector(".selectLocation")
const returnElem = document.querySelector(".return")
const calculateButton = document.querySelector(".calculate")
const singleTrips = document.querySelector("#singleTrips")
const pricePerTrip = document.querySelector("#pricePerTrip")
const returnTrips = document.querySelector("#returnTrips")
const returnTripsPrice = document.querySelector("#returnTripsPrice")
//get my function 
let tripsFunction = calculateTrips()

//add an eevengt listener to my button
calculateButton.addEventListener("click",function(){
    if(pointsInput.value===""){
        console.log('lolo')
    }else if(selectLocation.value===""){
        
    }else{
        const checkedPeakButton = document.querySelector('input[name="peakTime"]:checked');
        if (checkedPeakButton) {
            tripsFunction.setpricePerTrip(selectLocation.value,checkedPeakButton.value)
        }else{
            console.log("enter button")
        }
        console.log(checkedPeakButton.value)
    }
})