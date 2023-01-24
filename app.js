const countries = {
    AF: 'Afghanistan',
    AX: 'Aland Islands',
    AL: 'Albania',
    DZ: 'Algeria',
    AS: 'American Samoa',
    AD: 'Andorra',
    AO: 'Angola',
    AI: 'Anguilla',
    AQ: 'Antarctica',
    AG: 'Antigua And Barbuda',
    AR: 'Argentina',
    AM: 'Armenia',
    AW: 'Aruba',
    AU: 'Australia',
    AT: 'Austria',
    AZ: 'Azerbaijan',
    BS: 'Bahamas',
    BH: 'Bahrain',
    BD: 'Bangladesh',
    BB: 'Barbados',
    BY: 'Belarus',
    BE: 'Belgium',
    BZ: 'Belize',
    BJ: 'Benin',
    BM: 'Bermuda',
    BT: 'Bhutan',
    BO: 'Bolivia',
    BA: 'Bosnia And Herzegovina',
    BW: 'Botswana',
    BV: 'Bouvet Island',
    BR: 'Brazil',
    IO: 'British Indian Ocean Territory',
    BN: 'Brunei Darussalam',
    BG: 'Bulgaria',
    BF: 'Burkina Faso',
    BI: 'Burundi',
    KH: 'Cambodia',
    CM: 'Cameroon',
    CA: 'Canada',
    CV: 'Cape Verde',
    KY: 'Cayman Islands',
    CF: 'Central African Republic',
    TD: 'Chad',
    CL: 'Chile',
    CN: 'China',
    CX: 'Christmas Island',
    CC: 'Cocos (Keeling) Islands',
    CO: 'Colombia',
    KM: 'Comoros',
    CG: 'Congo',
    CD: 'Congo, Democratic Republic',
    CK: 'Cook Islands',
    CR: 'Costa Rica',
    CI: 'Cote D\'Ivoire',
    HR: 'Croatia',
    CU: 'Cuba',
    CY: 'Cyprus',
    CZ: 'Czech Republic',
    DK: 'Denmark',
    DJ: 'Djibouti',
    DM: 'Dominica',
    DO: 'Dominican Republic',
    EC: 'Ecuador',
    EG: 'Egypt',
    SV: 'El Salvador',
    GQ: 'Equatorial Guinea',
    ER: 'Eritrea',
    EE: 'Estonia',
    ET: 'Ethiopia',
    FK: 'Falkland Islands (Malvinas)',
    FO: 'Faroe Islands',
    FJ: 'Fiji',
    FI: 'Finland',
    FR: 'France',
    GF: 'French Guiana',
    PF: 'French Polynesia',
    TF: 'French Southern Territories',
    GA: 'Gabon',
    GM: 'Gambia',
    GE: 'Georgia',
    DE: 'Germany',
    GH: 'Ghana',
    GI: 'Gibraltar',
    GR: 'Greece',
    GL: 'Greenland',
    GD: 'Grenada',
    GP: 'Guadeloupe',
    GU: 'Guam',
    GT: 'Guatemala',
    GG: 'Guernsey',
    GN: 'Guinea',
    GW: 'Guinea-Bissau',
    GY: 'Guyana',
    HT: 'Haiti',
    HM: 'Heard Island & Mcdonald Islands',
    VA: 'Holy See (Vatican City State)',
    HN: 'Honduras',
    HK: 'Hong Kong',
    HU: 'Hungary',
    IS: 'Iceland',
    IN: 'India',
    ID: 'Indonesia',
    IR: 'Iran, Islamic Republic Of',
    IQ: 'Iraq',
    IE: 'Ireland',
    IM: 'Isle Of Man',
    IL: 'Israel',
    IT: 'Italy',
    JM: 'Jamaica',
    JP: 'Japan',
    JE: 'Jersey',
    JO: 'Jordan',
    KZ: 'Kazakhstan',
    KE: 'Kenya',
    KI: 'Kiribati',
    KR: 'Korea',
    KW: 'Kuwait',
    KG: 'Kyrgyzstan',
    LA: 'Lao People\'s Democratic Republic',
    LV: 'Latvia',
    LB: 'Lebanon',
    LS: 'Lesotho',
    LR: 'Liberia',
    LY: 'Libyan Arab Jamahiriya',
    LI: 'Liechtenstein',
    LT: 'Lithuania',
    LU: 'Luxembourg',
    MO: 'Macao',
    MK: 'Macedonia',
    MG: 'Madagascar',
    MW: 'Malawi',
    MY: 'Malaysia',
    MV: 'Maldives',
    ML: 'Mali',
    MT: 'Malta',
    MH: 'Marshall Islands',
    MQ: 'Martinique',
    MR: 'Mauritania',
    MU: 'Mauritius',
    YT: 'Mayotte',
    MX: 'Mexico',
    FM: 'Micronesia, Federated States Of',
    MD: 'Moldova',
    MC: 'Monaco',
    MN: 'Mongolia',
    ME: 'Montenegro',
    MS: 'Montserrat',
    MA: 'Morocco',
    MZ: 'Mozambique',
    MM: 'Myanmar',
    NA: 'Namibia',
    NR: 'Nauru',
    NP: 'Nepal',
    NL: 'Netherlands',
    AN: 'Netherlands Antilles',
    NC: 'New Caledonia',
    NZ: 'New Zealand',
    NI: 'Nicaragua',
    NE: 'Niger',
    NG: 'Nigeria',
    NU: 'Niue',
    NF: 'Norfolk Island',
    MP: 'Northern Mariana Islands',
    NO: 'Norway',
    OM: 'Oman',
    PK: 'Pakistan',
    PW: 'Palau',
    PS: 'Palestinian Territory, Occupied',
    PA: 'Panama',
    PG: 'Papua New Guinea',
    PY: 'Paraguay',
    PE: 'Peru',
    PH: 'Philippines',
    PN: 'Pitcairn',
    PL: 'Poland',
    PT: 'Portugal',
    PR: 'Puerto Rico',
    QA: 'Qatar',
    RE: 'Reunion',
    RO: 'Romania',
    RU: 'Russian Federation',
    RW: 'Rwanda',
    BL: 'Saint Barthelemy',
    SH: 'Saint Helena',
    KN: 'Saint Kitts And Nevis',
    LC: 'Saint Lucia',
    MF: 'Saint Martin',
    PM: 'Saint Pierre And Miquelon',
    VC: 'Saint Vincent And Grenadines',
    WS: 'Samoa',
    SM: 'San Marino',
    ST: 'Sao Tome And Principe',
    SA: 'Saudi Arabia',
    SN: 'Senegal',
    RS: 'Serbia',
    SC: 'Seychelles',
    SL: 'Sierra Leone',
    SG: 'Singapore',
    SK: 'Slovakia',
    SI: 'Slovenia',
    SB: 'Solomon Islands',
    SO: 'Somalia',
    ZA: 'South Africa',
    GS: 'South Georgia And Sandwich Isl.',
    ES: 'Spain',
    LK: 'Sri Lanka',
    SD: 'Sudan',
    SR: 'Suriname',
    SJ: 'Svalbard And Jan Mayen',
    SZ: 'Swaziland',
    SE: 'Sweden',
    CH: 'Switzerland',
    SY: 'Syrian Arab Republic',
    TW: 'Taiwan',
    TJ: 'Tajikistan',
    TZ: 'Tanzania',
    TH: 'Thailand',
    TL: 'Timor-Leste',
    TG: 'Togo',
    TK: 'Tokelau',
    TO: 'Tonga',
    TT: 'Trinidad And Tobago',
    TN: 'Tunisia',
    TR: 'Turkey',
    TM: 'Turkmenistan',
    TC: 'Turks And Caicos Islands',
    TV: 'Tuvalu',
    UG: 'Uganda',
    UA: 'Ukraine',
    AE: 'United Arab Emirates',
    GB: 'United Kingdom',
    US: 'United States',
    UM: 'United States Outlying Islands',
    UY: 'Uruguay',
    UZ: 'Uzbekistan',
    VU: 'Vanuatu',
    VE: 'Venezuela',
    VN: 'Viet Nam',
    VG: 'Virgin Islands, British',
    VI: 'Virgin Islands, U.S.',
    WF: 'Wallis And Futuna',
    EH: 'Western Sahara',
    YE: 'Yemen',
    ZM: 'Zambia',
    ZW: 'Zimbabwe'
}

const states = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

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
    locationArray = assumeUsForShortArray(locationArray)
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

const assumeUsForShortArray = function(locationArray) {
    if (locationArray[1]){
        locationArray[1] = locationArray[1].trim().toUpperCase()
    }
    if (locationArray.length === 2 && states.includes(locationArray[1])){
        locationArray.push('US')
    }
    return locationArray
}

addLocationSearchListener()
