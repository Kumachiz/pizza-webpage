//business logic
function Pizza(sizes, toppings) {
  this.sizes = sizes;
  this.toppings = toppings;
}

Pizza.prototype.addTotalCost = function()  {
  return (this.toppings + this.sizes);
}

//user interface logic
$(function() {
  $("#submit").click(function() {
    var sizes = parseInt($("#sizes").val());

    var toppings = document.getElementsByTagName("input"),
    count = 0;
    for (var i=0; i<toppings.length; i++) {
      if (toppings[i].type === "checkbox" && toppings[i].checked === true) {
        count ++;

      }
    }

    toppings = count * 0.25 
    var newPizza = new Pizza(sizes, toppings);

    newPizza.cost = newPizza.addTotalCost();
    var totalPrice = newPizza.cost.toFixed(2)
    $("#pizza-cost").text( "Your bill today is $" + totalPrice  +  " Enjoy your pizza, Pizza Town thanks you");

    $("pizza-life.jpg").show()
  });

});
