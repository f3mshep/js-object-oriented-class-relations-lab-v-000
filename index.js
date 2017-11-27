let driverID = 0

class Driver {
  constructor(name){
    this.name = name
    this.id = ++driverID
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(trip=>{
      return trip.driverId === this.id
    })
  }

  passengers(){
    let passengers = []
    let trips = store.trips
    for (const trip of trips) {
      if (trip.driver() === this) {
        passengers.push(trip.passenger())
      }
    }
    return passengers
  }

}

let passengerID = 0

class Passenger {
  constructor(name){
    this.name = name
    this.id = ++passengerID
    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter(trip=>{
      return trip.passengerId === this.id
    })
  }

  drivers(){
    let drivers = []
    let trips = store.trips

    for (const trip of trips) {
      if (trip.passenger() === this){
        drivers.push(trip.driver())
      }
    }
    return drivers
  }
}

let tripID = 0

class Trip {
  constructor(driver, passenger){
    this.id = ++tripID
    if(driver){
      this.driverId = driver.id
    }
    if(passenger){
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }

  passenger(){
    let passenger = store.passengers.find(
      passenger => { return passenger.id == this.passengerId })
    return passenger
  }

  driver(){
    let driver = store.drivers.filter(
      driver => {return driver.id == this.driverId}
    )
    return driver[0]
  }
}

let store = {
  drivers: [],
  passengers: [],
  trips: []
}