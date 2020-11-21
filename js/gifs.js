(function () {
    var getGifs = async () => {
        var url = `https://api.giphy.com/v1/gifs/search?q=Naturaleza&limit=12&api_key=P6FeN3nbrvNOYdASoFQSXmtJBuYaJHB2`;
        var respuesta = await fetch(url);
        var { data } = await respuesta.json();
        var gifs = data.map(img => {
            return {
                title: img.title,
                url: img.images?.downsized_medium.url
            };
        });
        mostrarData(gifs)
    }
    setTimeout(() => {
        getGifs();
    }, 1500);


    function mostrarData(data) {
        $(".imagenes").html("");
        var imgs = data;
        imgs.forEach(img => {
            $(".imagenes").append("<figure class='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4'>" +
                "<img alt='" + img.title + "' src=" + img.url + " class='img-fluid img-thumbnail' style='height: 20rem; width:100%;'>" +
                "</figure>");
        });
    }
})();