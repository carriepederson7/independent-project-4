function Pizza(inputSize, toppingsArray) {
  this.size = inputSize;
  this.toppings = [];
}


Pizza.prototype.addPrice = function() {
  var toppings = this.toppings.toString();
return parseInt(this.size) + this.toppings;
}



//   var size = []
//   if (this.small === 10) {
//     size.push(this.small)
//   } else if (this.medium === 12) {
//     size.push(this.medium)
//   } else if (this.large === 14) {
//     size.push(this.large)
//   }
//
//   var toppings = []
//   var finalToppings = []
//   toppings.push(this.pepperoni, this.olives, this.sausage, this.peppers);
//   toppings.forEach(function(topping) {
//     if (topping === 2) {
//       finalToppings.push(topping)
//     }
//   });
//
//   var one = finalToppings.concat(size);
//   var two = one.splice("");
//   total = 0;
//   two.forEach(function(number) {
//     total = number + total
//   });
//
//   return total
//
// }



// UI Logic
$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();

    var size = $("#size").val();
    var toppings = [];
    var toString = toppings.toString();
    console.log(toString);
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppings.push($(this).val());
    });
    var newPizza = new Pizza(size, toString);
    var cost = newPizza.addPrice();
    console.log(size);
    $("#cost").text(cost);
    $(".total").show()


  });
});
