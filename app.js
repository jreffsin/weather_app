const getWeatherData = async function() {
    try {
        let response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=42.3178989&lon=-72.6311006&appid=5fc5590dfda3f2e525c97e184b48dc1b')
        let data = await response.json()
        return data
    } catch (error) {
        console.error('error fetching data from api: ' + error)
        return 'error'
    }
}

const getCurrentTemp = async function(scale) {
    let data = await getWeatherData()
    if (data === 'error') {
        return
    }

    let convertTemp = scale === 'c' ? convertKtoC : convertKtoF

    console.log(data)
    console.log(data.main.temp)
    console.log(convertTemp(data.main.temp))
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
            getLocationData()
            e.preventDefault()
          }
    })

    //handle button click
    let searchButton = document.querySelector('#searchSubmit')
    searchButton.addEventListener('click', getLocationData)
}

const getLocationData = async function () {
    let locationArray = parseLocationInput()
    clearLocationInput()

    console.log(locationArray)

    let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${locationArray[0]},${locationArray[1]},${locationArray[2]}&appid=5fc5590dfda3f2e525c97e184b48dc1b`)
    let data = await response.json()
    console.log(data[0])
    console.log(data[0].lat)
}

const parseLocationInput = function(){
    let locationInput = document.querySelector('#locationInput')
    let locationArray = locationInput.value.split(',')
    locationArray.forEach((element, i) => {
        locationArray[i] = element.trim()
    });
    return locationArray
}

const clearLocationInput = function() {
    locationInput.value = ''
}

getCurrentTemp('c')
addLocationSearchListener()
