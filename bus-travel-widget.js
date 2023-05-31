function calculateTrips() {
    //initialise a vaiable to zero where you will store your price
    let trip = 0;
    //initialize a variable to zero where you are going to store your single trips
    let singleTrips = 0;
    //initialize a variable to zero where you are going to store your return trips
    let returnTrips = 0;
    //initialize a variable to zero where you are going to store your return trips
    let returnTripsPrice = 0;
    //create a function that will take location an time as parameters and return the price depending if it is peak time or nor
    function setpricePerTrip(location, time) {
        //create a condition that will check the location and time
        if (location === "Khayelitsha") {
            if (time === "peak") {
                trip = 50
            } else {
                trip = 40
            }
        } else if (location === "Dunoon") {
            if (time === "peak") {
                trip = 31.25
            } else {
                trip = 25
            }
        } else if (location === "MitchellsPlain") {
            if (time === "peak") {
                trip = 37.5
            } else {
                trip = 30
            }
        }
    }
    //create a function that will calculate how many trips one will take using their points
    //the paramete should be the points
    function setSingleTrips(point) {
        singleTrips = (point / trip)
    }
    //create a function that will calculate the return trip using the trip price
    function setReturnTripsPrice() {
        returnTripsPrice = (trip * 2)
    }
    //create a fuction that will get the number of return trips posible
    function setReturnTrips() {
        returnTrips = parseInt((parseInt(singleTrips) / 2))
    }
    //create a function that will return the trip cost
    function getpricePerTrip() {
        return trip
    }
    //create a function that will return the number of trips possible
    function getSingleTrips() {
        return parseInt(singleTrips)
    }
    //create a functio that will return the number of return trips posiple
    function getReturnTrips() {
        return returnTrips
    }
    //create a function that will return the cost of a return trip
    function getReturnTripsPrice() {
        return returnTripsPrice
    }
    return {
        setpricePerTrip,
        getpricePerTrip,
        setSingleTrips,
        getSingleTrips,
        setReturnTrips,
        getReturnTrips,
        setReturnTripsPrice,
        getReturnTripsPrice
    }
}