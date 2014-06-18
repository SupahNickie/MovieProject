var searchString = document.getElementById("string_search")
var searchYear = document.getElementById("year_search")
var searchTitle = document.getElementById("title_search")
var searchTomatoes = document.getElementById("tomatoes_boolean")

$(document).ready(function () {
  $('#submit_button').click(function() {
    $.getJSON( "http://www.omdbapi.com/?s=" + searchString.value + "&t=" + searchTitle.value + "&y=" + searchYear.value + "&tomatoes=" + searchTomatoes, function(data) {
        $('#header').html("<h1>" + data.Search[0].Title + "</h1>");
    });
  });
});
