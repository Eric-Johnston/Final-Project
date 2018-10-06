$(document).ready(function () {

    //const app = require("../../routes/")


    /*let haveCityID = false;
    $.ajax({
        url: "https://api.internationalshowtimes.com/v4/cities",
        type: "GET",
        data: {
            "page_size": 1,
            "query": "Columbus",
            "countries": "US",
        },
        headers: {
            "X-API-Key": "a313ypicnkANFfnIeVIFJrCpaUcYj12P",
        },
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data.cities[0].id);

            haveCityID = true;

            $.ajax({
                url: "https://api.internationalshowtimes.com/v4/cinemas",
                type: "GET",
                data: {
                    "page_size": 1,
                    "city_ids": data.cities[0].id,
                    "countries": "US"
                },
                headers: {
                    "X-API-Key" : "a313ypicnkANFfnIeVIFJrCpaUcYj12P"
                }
            }).done(function (data, textStatus, jqXHR) {
                console.log("HTTP Request Succeeded: " + jqXHR.status);
                console.log(data);
            });
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            
        });*/
    function clearDiv(element) {
        $("#results").html("");
    }

    $("#searchBtn").on("click", function () {
        event.preventDefault();
        clearDiv();

        let userInput = $("#searchBar").val();
        const key = "api_key=c473eb512205a37f77691399c75dee0b";
        let URL = `https://api.themoviedb.org/3/search/movie?${key}&language=en-US&query=${userInput}&page=1&include_adult=false`;

        $.ajax({
            url: URL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            let results = response.results;
            for (i = 0; i < results.length; i++) {

                let movieInfo = [];

                
                
                let tableText = `<br><p id=title${i}> <b>${results[i].title}</b></p><br>`;
                let tableImg = `<img src='https://image.tmdb.org/t/p/original${results[i].poster_path}' height='300' width='200'>`;
                let wishlistBtn = `<br><button type='button' class='btn btn-success btn-sm' id='wishlistBtn${[i]}' style='float: left;'>Add to Wishlist</button>`;
                let watchedBtn = `<button type='button' class='btn btn-success btn-sm' id='watchedBtn${[i]}' style='float: right;'>Add to Watched</button>`;
                let movieTable = `<tr id=movieTable-${[i]} style='outline: thin solid black;'><td>${tableText}${tableImg}`;
                let movieTableInfo = $(`#movieTable-${[i]}`).data(`${[i]}`, {media_id: results[i].id, media_name: results[i].title } )
                let newTable = $("#results").append(`${movieTable}${wishlistBtn}${watchedBtn}</tr></td>`).data( {media_id: results[i].id, media_name: results[i].title });

                let newInfo = {
                results:
                    [{
                    media_id: results[i].id,
                    media_name: results[i].title,
                    }],
                }
                
                
                console.log(movieInfo);
                
                //console.log(movieTableInfo);
                //Add movie to wishlist
                $("#wishlistBtn" + [i]).on("click", function () {
                    
                    //console.log($(this).parent().parent().data([i]).key())
                    //console.log($(`#movieTable-0`).data(`0`))

                    
                    
                    console.log($(this).attr("id"))
                    $("#wishlist-table").append(`${movieTable} <br><br><button type='button' class='btn btn-danger btn-sm' id='rmv-${$(this).attr("id")}' style='float: left'>Remove from Wishlist</button><br><hr>`);


                    $(`#rmv-${$(this).attr("id")}`).on("click", function () {
                        console.log($(this).parent().parent().attr("id"));
                        $(this).parent().parent().html("");

                    });
                });
                
                //Add movie to reviewed list
                $("#watchedBtn" + [i]).on("click", function () {

                    $("#reviews-table").append(`${movieTable} <br><br><button type='button' class='btn btn-danger btn-sm' id='rmv-${$(this).attr("id")}' style='float: left'>Remove from Watched list</button><br><hr>`)

                    $(`#rmv-${$(this).attr("id")}`).on("click", function () {
                        console.log($(this).parent().parent().attr("id"));
                        $(this).parent().parent().html("");

                    });
                });
            };
        });
    });
});