// Code your solution here
const findMatching = (listofDrivers, driver) => {
  return listofDrivers.filter((element) => {
    if (element.toLowerCase() === driver.toLowerCase()) {
      return element
    }
  })
}


const fuzzyMatch = (listofDrivers, driver) => {
  return listofDrivers.filter((element) => {
    if (element.toLowerCase().substring(0, 2) === driver.toLowerCase()) {
      return element
    }
    // return all drivers whose name begin with the provided letters
  })
}

const matchName = (listofDrivers, driver) => {
  return listofDrivers.filter((element) => {
    if (element.name === driver) {
      return element
    }
  })
}