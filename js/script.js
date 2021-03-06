var searchString = document.getElementById("string_search")
var searchYear = document.getElementById("year_search")
var searchTitle = document.getElementById("title_search")
var searchTomatoes = document.getElementById("tomatoes_boolean")

$(document).ready(function () {
  $('#submit_button').click(function() {
    $('#header').html("");          // Clear the "you searched" section
    $('#results_fill').html("");    // Clear the results without refreshing page
    $.getJSON( "http://www.omdbapi.com/?s=" + searchString.value + "&t=" + searchTitle.value + "&y=" + searchYear.value + "&tomatoes=" + searchTomatoes.checked, function(data) {
      if (searchString.value.length > 0) {
        $('#header').html("<h1>General Search: \"" + searchString.value + "\"</h1>");
        $.each(data.Search, function(index, value) {
          $.each(data.Search[index], function(index, value) {
            if (value == "N/A" || index == "Response") {
              // Skip useless information
            } else if (index == "Title") {
              $('#results_fill').append("<p><strong>" + index + ": " + value + "</strong></p>");
            } else if (index == "Poster") {
              $('#results_fill').append("<img src=" + value + "</img>");
            } else if (index == "imdbID") {
              $('#results_fill').append("<a href='http://www.imdb.com/title/" + value + "'>Link to this result on imdb</a>");
            } else if (index == "Type") {
              $('#results_fill').append("<br><br><br>");
            } else {
              $('#results_fill').append("<p>" + index + ": " + value + "</p>");
            }
          })
        });
      } else {
        $('#header').html("<h1>Exact Title Search: \"" + searchTitle.value + "\"</h1>");
        $.each(data, function(index, value) {
          if (value == "N/A" || index == "Response" || index == "Type") {
            // Skip useless information
          } else if (index == "Title") {
            $('#results_fill').append("<p><strong>" + index + ": " + value + "</strong></p>");
          } else if (index == "Poster") {
            $('#results_fill').append("<img src=" + value + "</img>");
          } else if (index == "Website") {
            $('#results_fill').append("<a href=\"" + value + "\">Link to this result's website</a>");
          } else if (index == "imdbID") {
            $('#results_fill').append("<a href='http://www.imdb.com/title/" + value + "'>Link to this result on imdb</a>");
          } else {
            $('#results_fill').append("<p>" + index + ": " + value + "</p>");
          }
        });
      }
    });
  });
});
