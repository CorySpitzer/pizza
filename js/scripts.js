var Pizza = function(toppings, howBig, quantity) {
  this.toppings = toppings;
  this.howBig = howBig;
  this.quantity = quantity;
};

Pizza.prototype.cost = function() {
  return 10 * this.quantity;
};

var Order = function(pizzas) {
  var cost = 0;
  pizzas.forEach(function(pizza) {
    cost += pizza.cost();
  });
  this.cost = cost;
  this.pizzas = pizzas;
};

$(function() {
  $('#add-pizza').click(function(event) {
    event.preventDefault();
    $('#new-pizza').append(
      '<div class="single-pie-forms">' +
        '<div class="form-group">' +
          '<label for="toppings">Toppings:</label>' +
          '<input type="text" class="form-control" id="toppings">' +
        '</div>' +

        '<div class="form-group">' +
          '<label for="size">Size:</label>' +
          '<input type="text" class="form-control" id="size">' +
        '</div>' +

        '<div class="form-group">' +
          '<label for="quantity">Quantity:</label>' +
          '<input type="text" class="form-control" id="quantity">' +
        '</div>' +
      '</div>'
    );
  });

  $('#order').click(function(event) {
    event.preventDefault();
    var pizzas = []
    $('.single-pie-forms').each(function() {
      debugger;
      var toppings = $(this).find('#toppings').val();
      var size = $(this).find('#size').val();
      var quantity = parseInt($(this).find('#quantity').val());
      pizzas.push(new Pizza(toppings, size, quantity));
    });
    var order = new Order(pizzas);
    alert("You have ordered: " + order + '.' + 'which costs ' + order.cost);
  });
});











//
