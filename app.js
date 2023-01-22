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

getCurrentTemp('c')