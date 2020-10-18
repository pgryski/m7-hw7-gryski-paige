var textContainer = document.querySelectorAll("body span");

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

         { //City name and weather description//
        
            function addHeaderText() {
                var newHeaderText = document.createTextNode(apiResult.name);
                headertext.appendChild(newHeaderText);
            };
            addHeaderText();
        } 
        
    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=20723,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();