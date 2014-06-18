var searchString = document.getElementById("string_search")
var searchYear = document.getElementById("year_search")
var searchTitle = document.getElementById("title_search")
var searchTomatoes = document.getElementById("tomatoes_boolean")

$(document).ready(function () {
  $('#submit_button').click(function() {
    $('#results_fill').html(""); // Clear the results without refreshing page
    $.getJSON( "http://www.omdbapi.com/?s=" + searchString.value + "&t=" + searchTitle.value + "&y=" + searchYear.value + "&tomatoes=" + searchTomatoes, function(data) {
      if (searchString.value.length > 0) {
        $('#header').html("<h1>" + data.Search[0].Title + "</h1>");
        $.each(data.Search, function(index, value) {
          $.each(data.Search[index], function(index, value) {
            if (value == "N/A" || index == "Response") {
              // Skip useless information
            } else if (index == "Poster") {
              $('#results_fill').append("<img src=" + value + "</img>");
            } else {
              $('#results_fill').append("<p>" + index + ": " + value + "</p>");
            }
          })
        });
      } else {
        $('#header').html("<h1>" + data.Title + "</h1>");
        $.each(data, function(index, value) {
          if (value == "N/A" || index == "Title" || index == "Response" || index == "Type") {
            // Skip useless information
          } else if (index == "Poster") {
            $('#results_fill').append("<img src=" + value + "</img>");
          } else{
            $('#results_fill').append("<p>" + index + ": " + value + "</p>");
          }
        });
      }
    });
  });
});
