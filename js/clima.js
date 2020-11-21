(function () {


    /*---------------------------------Find any IP address or Domain Location world wide------------------------ */
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a7eaf4e3e0mshe728097b85a7d63p167e5djsn30f0b7f31935",
            "x-rapidapi-host": "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(async function (response) {
        var latitude = await response.latitude;
        var longitude = await response.longitude;
        var ciudad = await response.city;
        setTimeout(() => {
            getTemperatura(latitude, longitude, ciudad);
        }, 1500);
    });


    /*---------------------------------OPEN WEATHER------------------------ */
    var getTemperatura = async (latitude, longitude, ciudad) => {
        var url = 'http://api.openweathermap.org/data/2.5/weather?lat='
            + latitude + '&lon=' + longitude
            + '&units=metric&appid=9f50a805aa0089a1edd1829a5db029f0';
        var respuesta = await fetch(url);
        var temperatura = await respuesta.json();
        mostrarTemperatura(temperatura, ciudad)
    }

    function mostrarTemperatura(temperatura, ciudad) {


        // Carga de imagen
        var url = "img/" + temperatura.weather[0].icon + ".png";
        $(".imgClima").attr('src', url);

        var temp = Math.round(temperatura.main.temp);
        $(".lblTemperatura").html(temp + "&#176;");

        $(".lblCiudad").html(ciudad);
    }
})();