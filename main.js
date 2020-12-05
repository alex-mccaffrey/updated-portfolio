
weatherKey = '9fc52be9eec442ba9de25202202011'
weatherUrl = 'https://api.weatherapi.com/v1/current.json?'

function getWeather(){
    const location = 'Denver';
    const url = weatherUrl + 'key=' + weatherKey + '&q=' + location;

    fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => displayWeather(responseJson))
    .catch(err => alert(`Something went wrong: ${err.message}`))
}

function displayWeather(responseJson) {
    $('.weather-results').append(
        `<p>Current Condition: ${responseJson.current.condition.text}<p>
        <p>Temperature: ${responseJson.current.temp_f}ºF<p>
        <p>Wind Speed: ${responseJson.current.wind_mph} mph<p>`
    )
}


$(getWeather)