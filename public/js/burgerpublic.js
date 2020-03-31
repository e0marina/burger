$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newDevoured");

    var newdevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/" + id, {
      type: "POST",
      data: newdevouredState
    }).then(function() {
      console.log("changed devoured to", newDevoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  ".create-form".on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bur")
        .val()
        .trim(),
      devoured: 0
    };
  });

  // Send the POST request.
  $.ajax("/" + burger_name, {
    type: "POST",
    data: newBurger
  }).then(function() {
    console.log("created another burger");
    // Reload the page to get the updated list
    location.reload();
  });
});
