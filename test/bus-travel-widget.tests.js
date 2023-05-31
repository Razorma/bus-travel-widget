
describe('Calculate Trips function', function () {
    
    it('it should be able return 40 if they are from Khayelitsha and she travels off Peak', function () {
        let tripsFunction = calculateTrips()
        tripsFunction.setpricePerTrip("Khayelitsha","offpeak")
        assert.equal(tripsFunction.getpricePerTrip(), 40);
    });

    it('it should be able return 50 if she is from Khayelitsha and she travels on Peak time', function () {
        let tripsFunction = calculateTrips()
        tripsFunction.setpricePerTrip("Khayelitsha","peak")
        assert.equal(tripsFunction.getpricePerTrip(), 50);
    });

    it('it should be able return 25 if she is from Dunoon and she travels on off Peak time', function () {
        let tripsFunction = calculateTrips()
        tripsFunction.setpricePerTrip("Dunoon","offpeak")
        assert.equal(tripsFunction.getpricePerTrip(), 25);
    });
    it('it should be able return 31.25 if she is from Dunoon and she travels on Peak time', function () {
        let tripsFunction = calculateTrips()
        tripsFunction.setpricePerTrip("Dunoon","peak")
        assert.equal(tripsFunction.getpricePerTrip(), 31.25);
    });
    it('it should be able return 30 if she is from MitchellsPlain and she travels on off Peak time', function () {
        let tripsFunction = calculateTrips()
        tripsFunction.setpricePerTrip("MitchellsPlain","offpeak")
        assert.equal(tripsFunction.getpricePerTrip(), 30);
    });
    it('it should be able return 37.5 if she is from Dunoon and she travels on Peak time', function () {
        let tripsFunction = calculateTrips()
        tripsFunction.setpricePerTrip("MitchellsPlain","peak")
        assert.equal(tripsFunction.getpricePerTrip(), 37.5);
    });

    it('it should be able to get the number of single trips they can take depending on the points they have', function () {
        let tripsFunction = calculateTrips()
        tripsFunction.setpricePerTrip("Dunoon","peak")
        tripsFunction.setSingleTrips(130)
        assert.equal(tripsFunction.getSingleTrips(), 4);
    });
    it('it should be able to get the number of return trips possible', function () {
        let tripsFunction = calculateTrips()
        tripsFunction.setpricePerTrip("Dunoon","peak")
        tripsFunction.setSingleTrips(128)
        tripsFunction.setReturnTrips()
        assert.equal(tripsFunction.getReturnTrips(), 2);
    });
    it('it should be able to get the price of a return trip', function () {
        let tripsFunction = calculateTrips()
        tripsFunction.setpricePerTrip("Dunoon","peak")
        tripsFunction.setReturnTripsPrice()
        assert.equal(tripsFunction.getReturnTripsPrice(), 62.5);
    });

});
