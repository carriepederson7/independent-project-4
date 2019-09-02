function Pizza(){
  this.small= 10;
  this.medium= 12;
  this.large= 14;
  this.pepperoni= 2;
  this.olives= 2;
  this.sausage= 2;
  this.peppers= 2;
}

Pizza.prototype.addPrice = function() {
  var size = []
  if (this.small === 10){
    size.push(this.small)
  } else if (this.medium === 12) {
    size.push(this.medium)
  }else if (this.large === 14) {
    size.push(this.large)
  }

  var toppings = []
  var finalToppings = []
  toppings.push(this.pepperoni, this.olives, this.sausage, this.peppers);
  toppings.forEach(function(topping) {
    if(topping === 2){
      finalToppings.push(topping)
    }
  });

 var one = finalToppings.concat(size);
 var two = one.splice("");
 total= 0;
 two.forEach(function(number){
   total = number + total
 });

return total

}



// UI Logic
$(document).ready(function(){
$('#form').submit(function(event){
    event.preventDefault();

var pizza1 = new Pizza();
pizza1.small = parseInt($("input:radio[name=small]:checked").val());
pizza1.medium = parseInt($("input:radio[name=medium]:checked").val());
pizza1.large = parseInt($("input:radio[name=large]:checked").val());
pizza1.pepperoni = parseInt($("input:radio[name=pepperoni]:checked").val());
pizza1.olives = parseInt($("input:radio[name=olives]:checked").val());
pizza1.sausage = parseInt($("input:radio[name=sausage]:checked").val());
pizza1.peppers = parseInt($("input:radio[name=peppers]:checked").val());
console.log(pizza1);
var cost = pizza1.addPrice();
$("#cost").text(cost);
$(".total").show()


});
});
