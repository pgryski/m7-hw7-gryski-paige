var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        {
            "coord": {
                "lon": -76.85,
                "lat": 39.12
            },
            "weather": [{
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10d"
            }],
            "base": "stations",
            "main": {
                "temp": 286.18,
                "feels_like": 283.57,
                "temp_min": 285.15,
                "temp_max": 287.59,
                "pressure": 1020,
                "humidity": 87
            },
            "visibility": 10000,
            "wind": {
                "speed": 4.16,
                "deg": 346
            },
            "rain": {
                "1h": 4.21
            },
            "clouds": {
                "all": 90
            },
            "dt": 1602850809,
            "sys": {
                "type": 1,
                "id": 4115,
                "country": "US",
                "sunrise": 1602847100,
                "sunset": 1602887220
            },
            "timezone": -14400,
            "id": 4361885,
            "name": "Columbia",
            "cod": 200
        }

    }
};
xmlhttp.open('GET', 'API URL Goes Here', true);
xmlhttp.send();