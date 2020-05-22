$(document).ready(function () {
    getGeolocation();
    var city = '';
    function getGeolocation() {
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": "https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com",
                "x-rapidapi-key": "4160692450msh57c7f939866117fp13f0ccjsn2faf3ca7bcb3"
            }
        }).then(function (response) {
            //console.log(response);
            var type = [];
            city = response.city;
            getBreweries(response.city, type);

            mapboxgl.accessToken = 'pk.eyJ1IjoiY2FybG9zcmVtYTIiLCJhIjoiY2s5em5zZjB2MGN2bTNncDYyM2Ruc2FyZSJ9.piNzfWJ9-dRIsVM3le57gg';
            var map = new mapboxgl.Map({
                container: 'map', // container id
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [response.longitude, response.latitude], // starting position
                zoom: 9 // starting zoom
            });

            map.addControl(new mapboxgl.NavigationControl());
        });
    };

    function getBreweries(city) {
        console.log(city);
        var queryURL = 'https://api.openbrewerydb.org/breweries?by_city=' + city;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $('.emptydiv').empty();
            $('.name').empty();
            $('.brewery_type').empty();
            $('.street').empty();
            $('.favoriteButton').empty();

            console.log(response);

            if (response.length === 0) {
                $("#myModal").modal('show');
            }
            var i = 0;
            while (i < response.length && i < 10) {
                if (response[i].brewery_type === "planning") { i++; continue; };
                $('.emptydiv').append(`<div class="resultItem" id="result" ><a href='#${response[i].name}'><div class = 'name ${i}'> ${response[i].name} </div></a> <div class = 'brewery_type'>   ${response[i].brewery_type}   </div> <div class = 'street'>  ${response[i].street} </div> <div class ="favoriteButton btn"> Add To Wish List</div></div>`);
                i++
            }
        });
    };
  
    function getaddressLocation(addy, city) {
        var queryURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + addy + ' ' + city + '.json?country=US&access_token=pk.eyJ1IjoiY2FybG9zcmVtYTIiLCJhIjoiY2s5em5zZjB2MGN2bTNncDYyM2Ruc2FyZSJ9.piNzfWJ9-dRIsVM3le57gg';

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            mapboxgl.accessToken = 'pk.eyJ1IjoiY2FybG9zcmVtYTIiLCJhIjoiY2s5em5zZjB2MGN2bTNncDYyM2Ruc2FyZSJ9.piNzfWJ9-dRIsVM3le57gg';

            var map = new mapboxgl.Map({
                container: 'map', // container id
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [response.features[0].center[0], response.features[0].center[1]], // starting position
                zoom: 15 // starting zoom
            });
            // Add zoom and rotation controls to the map.
            map.addControl(new mapboxgl.NavigationControl());
            var marker = new mapboxgl.Marker()
                .setLngLat([response.features[0].center[0], response.features[0].center[1]])
                .addTo(map);
        });
    };

    function onSearch() {
     city = $('#searchBrewery').val();
     $('.listSlider').prop("checked", false);
        getBreweries(city.trim());
        getaddressLocation('', city);
    }

    $('#search').on('click', function () {
        onSearch();
    });

    $('#searchBrewery').keypress(function (e) {
        if (e.which == 13) {
            onSearch();
            return false;
        };
    });

    var wishes = [];

    $(document).on("click", '.favoriteButton', function () {
        var getWishes = JSON.parse(localStorage.getItem("wish"));
        wishes = getWishes;
        var previousElements = $(this).prevAll();
        var saveCity = city;
        var wish = $(previousElements[2]).children().first().text();
        var addy = previousElements[0].innerText;
        var arrayIndex = wishes.findIndex(x => x.brewery == wish.trim());
        if (arrayIndex > -1) {
            return;
        }
        wishes.push({
            myCity: saveCity,
            address: addy,
            brewery: wish.trim()
        })
        localStorage.setItem('wish', JSON.stringify(wishes));

    });

    var wishList = function () {
        console.log('wishList');
        var getWishes = JSON.parse(localStorage.getItem("wish"));

        if (getWishes !== null) {
            wishes = getWishes;
            for (wish of wishes) {
                $(".emptydiv").append(`<div class="resultItem" id="result"><a href ='#${wish.brewery}'class= "name"><div>${wish.brewery}</div></a><div class = 'brewery_city'>${wish.myCity}</div><div class = 'street'>${wish.address}</div> <button class='input-group-text delete'>Remove</button></div>`);
            }
        }
    }

    $('.emptydiv').on("click", '#result', function () {
        // var brewery = $(this).closest('#result').text();
        var addy = $(this).closest('.resultItem').find(".street").text();
        getaddressLocation(addy, city);
    });

    $('.listSlider').on('click', function () {
        $('.emptydiv').html("");
        var checked = $('input:checked');
        if (checked.length === 0) {
            getaddressLocation("", city);
            getBreweries(city);
        } else {
            wishList();
           
        }

    $(document).on('click', '.delete', function (element) {
            var br = $(this).closest("div.resultItem").find(".name").text();
            console.log(br);
            $(this).closest("div.resultItem").remove();
            var arrayIndex = wishes.findIndex(x => x.brewery == br);
            if (arrayIndex > -1) {
                wishes.splice(arrayIndex, 1);
                localStorage.setItem("wish", JSON.stringify(wishes));
            }
        });
    });
});


    

