function addOne() {
  $("#goal-list").append("<li class='list-item'>" + $("#type").val() + ": " + $("#new-restaurant").val() + "</li>");
  $("#new-restaurant").val("");
}

$(document).ready(function() {
  alert($("#css-item").text());


  $("#goal-list").html("<label>Restaurants</label>");
  $("#restaurant-button").click(addOne());
  



  $("#new-restaurant").bind("enterKey", function() {
    addOne();
  });

  $("#new-restaurant").keyup(function(e) {
    if (e.keyCode ==13) {

      $(this).trigger("enterKey");
    }
  });


});
