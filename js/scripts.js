var newPizza = []

function Pizza(base, pepperoni, olives, sausage, peppers){
  this.base= base;
  this.pepperoni= pepperoni;
  this.olives= olives;
  this.sausage= sausage;
  this.peppers= peppers;
}

//Cannot write this function unless it's being pushed to an instance of another constructor
// Pizza.prototype.startPizza = function(newPizza){
// }

// Pizza.prototype.addToppings = function(){
//   this.base = this.base + this.pepperoni + this.olives + this.sausge + this.peppers
//   newPizza.push(this.base);
// }

console.log(newPizza);

// UI Logic
$(document).ready(function(){
  $('#form').submit(function(event){
    event.preventDefault();

$("input:checkbox[name=topping]:checked").each(function(){
var pepperoni = $("#pepperoni").val();
var olives = $("#olives").val();
var sausage = $("#sausage").val();
var peppers = $("#peppers").val();
console.log(pepperoni);
console.log(sausage);
});

});
});
