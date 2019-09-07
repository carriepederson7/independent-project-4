function Pizza(inputSize, toppings) {
  this.size = parseInt(inputSize);
  this.toppings = toppings;
}



Pizza.prototype.addPrice = function() {
  var toppings = []
  for (i = 0; i < this.toppings.length; i++) {
    toppings[i] = parseInt(this.toppings[i]);}
  var finalToppings = []
    toppings.forEach(function(topping) {
      if (topping === 2) {
        finalToppings.push(topping)
      }
    });
  var one = finalToppings.concat(this.size);
  var two = one.splice("");
  total = 0;
  two.forEach(function(number) {
  total = number + total
      });

      return total

    };
// total= 0
// total = this.size + this.toppings.length;
// return total
// var one = this.size
// var toppings = this.toppings.splice('')
// total = 0;
// toppings.forEach(function(topping){
//       total = topping + total
//     });
// var three = one.concat(two);








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
//



// UI Logic
$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();

    var size = $("#size").val();
    var toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppings.push($(this).val());
    });
    var numbers = toppings.toString();
    console.log(numbers);

    console.log(toppings.length);
    var newPizza = new Pizza(size, numbers);
    var cost = newPizza.addPrice();
    console.log(size);
    $("#cost").text(cost);
    $(".total").show()


  });
});
