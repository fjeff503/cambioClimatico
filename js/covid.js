(function () {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://covid-193.p.rapidapi.com/statistics",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a7eaf4e3e0mshe728097b85a7d63p167e5djsn30f0b7f31935",
            "x-rapidapi-host": "covid-193.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function ({ response }) {
        $(".accordion").html("");
        var i = 0;
        response.forEach(data => {
            i++;
            var card = "<div class='card bg-dark'>" +
                "<div class='card-header' id='heading" + i + "'>" +
                "<h2 class='mb-0'>" +
                " <button class='btn btn-link btn-block text-left text-white collapsed' type='button'" +
                "data-toggle='collapse' data-target='#collapse" + i + "' aria-expanded='true'" +
                "aria-controls='collapse" + i + "'>" +
                "" + data.country + "" +
                "</button>" +
                "</h2>" +
                "</div>" +
                "<div id='collapse" + i + "' class='collapse' aria-labelledby='heading" + i + "'" +
                "data-parent='#accordionCovid'>" +
                "<div class='card-body'>" +
                " <table class='table table-hover'>" +
                "<tr class='table-secondary'>" +
                "<th scope='row'>Casos Nuevos:</th>" +
                "<td>" + data.cases.new + "</td>" +
                " </tr>" +
                "<tr class='table-secondary'>" +
                " <th scope='row'>Casos Activos:</th>" +
                " <td>" + data.cases.active + "</td>" +
                "</tr>" +
                "<tr class='table-secondary'>" +
                " <th scope='row'>Casos Cr&iacute;ticos:</th>" +
                "<td>" + data.cases.critical + "</td>" +
                "</tr>" +
                "<tr class='table-secondary'>" +
                " <th scope='row'>Casos Recuperados:</th>" +
                " <td>" + data.cases.recovered + "</td>" +
                "</tr>" +
                " <tr class='table-secondary'>" +
                "  <th scope='row'>Fallecidos:</th>" +
                "  <td>" + data.deaths.total + "</td>" +
                " </tr>" +
                "<tr class='table-warning'>" +
                "<th scope='row'>Casos Totales:</th>" +
                " <td>" + data.cases.total + "</td>" +
                " </tr>" +
                " <tr class='table-info'>" +
                "  <th scope='row'>Pruebas realizadas:</th>" +
                "  <td>" + data.tests.total + "</td>" +
                " </tr>" +
                " </table>" +
                "  <footer class='blockquote-footer'><cite title='Source Title'>" + data.country + "</cite>" +
                " </footer>" +
                "</div>" +
                "</div>" +
                "</div >";

            $(".accordion").append(card);
        });

    });
})();