const getWeatherData = async function(locationData) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${locationData.lat}&lon=${locationData.lon}&appid=5fc5590dfda3f2e525c97e184b48dc1b`)
        let data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching weather data from api: ' + error)
        return 'error'
    }
}

const getConvertedTemp = function(data, scale) {
    let convertTemp = scale === 'c' ? convertKtoC : convertKtoF
    return convertTemp(data.main.temp)
}

const displayTemp = function(data, scale) {
    let currentTemp = getConvertedTemp(data, scale)
    currentTemp = Math.round(currentTemp)
    let displayScale = scale === 'c' ? 'C' : 'F'

    let tempDisplay = document.querySelector('#tempDisplay')
    tempDisplay.innerHTML = `${currentTemp}\u00B0${displayScale}`
}

const convertKtoF = function(tempInK) {
    let tempinF = (((tempInK - 273.15)*9)/5) + 32
    return tempinF
}

const convertKtoC = function(tempInK) {
    let tempinC = tempInK - 273.15
    return tempinC
}

const addLocationSearchListener = function(){
    //handle enter keypress
    let locationInput = document.querySelector('#locationInput')
    locationInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            populateDisplay()
            e.preventDefault()
          }
    })

    //handle button click
    let searchButton = document.querySelector('#searchSubmit')
    searchButton.addEventListener('click', populateDisplay)
}

const getLocationData = async function () {
    let locationString = parseLocationInput()
    clearLocationInput()
    console.log(locationString)
    try{
        let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${locationString}&appid=5fc5590dfda3f2e525c97e184b48dc1b`)
        let data = await response.json()
        if (data.length === 0){
            throw new Error('Could not find location from input')
        }
        return data[0]
    } catch(error){
        console.error(error)
    }
}

const parseLocationInput = function(){
    let locationInput = document.querySelector('#locationInput')
    let locationArray = []
    locationArray = locationInput.value.split(',')
    let locationString = ''
    locationArray.forEach((element, i) => {
        locationString = locationString === '' ? element.trim() : locationString + ',' + element.trim()
    });
    console.log(locationString)
    try {
        if (locationArray[0] === ''){
            throw new Error('Empty location input')
        }
        return locationString
    } catch(error){
        console.error(error)
    }
}

const clearLocationInput = function() {
    locationInput.value = ''
}

const displayLocation = function (data){
    let cityElement = document.querySelector('#cityDisplay')
    let stateElement = document.querySelector('#stateDisplay')
    let countryElement = document.querySelector('#countryDisplay')

    cityElement.innerHTML = data.name
    stateElement.innerHTML = data.state
    countryElement.innerHTML = data.country
}

const populateDisplay = async function() {
    let locationData = await getLocationData()
    console.log(locationData)
    let weatherData = await getWeatherData(locationData)

    displayLocation(locationData)

    displayTemp(weatherData, 'f')
}

addLocationSearchListener()
