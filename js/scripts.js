var newPizza = []

function Pizza(base1, topping1, topping2, topping3, topping4){
  this.base= base1;
  this.pepperoni= topping1;
  this.olives= topping2;
  this.sausage= topping3;
  this.peppers= topping4;
}

//Cannot write this function unless it's being pushed to an instance of another constructor
// Pizza.prototype.startPizza = function(newPizza){
// }

Pizza.prototype.addToppings = function(){
  this.base = this.base + this.pepperoni + this.olives + this.sausge + this.peppers
  newPizza.push(this.base);
}

console.log(newPizza);

// UI Logic
$(document).ready(function(){
// $("#start-pizza").click(function(){
//   var base = alert('This button does nothing.')});

$('#form').submit(function(event){
    event.preventDefault();

// $("input:checkbox[name=topping]:checked").each(function(){
// var olives = $("#olives").val();
// var pepperoni = $("#pepperoni").val();
// var sausage = $("#sausage").val();
// var peppers = $("#peppers").val();



var olives = $("input:radio[name=olives]:checked").val();
var pepperoni = $("input:radio[name=pepperoni]:checked").val();
var sausage = $("input:radio[name=sausage]:checked").val();
var peppers = $("input:radio[name=peppers]:checked").val();


var base = $("input:radio[name=start]:checked").val();
console.log(base);
console.log(pepperoni);
console.log(sausage);
var pizza1 = new Pizza(base, pepperoni, olives, sausage, peppers);
pizza1.addToppings(pizza1);
console.log(pizza1);



});
});
