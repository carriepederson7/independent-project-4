// function Pizza(base1, topping1, topping2, topping3, topping4){
//   this.small= parseInt(small);
//   this.medium= parseInt(medium);
//   this.large= parseInt(large);
//   this.pepperoni= parseInt(topping1);
//   this.olives= parseInt(topping2);
//   this.sausage= parseInt(topping3);
//   this.peppers= parseInt(topping4);
// }

function Pizza(){
  this.small= 10;
  this.medium= 12;
  this.large= 14;
  this.pepperoni= 2;
  this.olives= 2;
  this.sausage= 2;
  this.peppers= 2;
}


// console.log(lastPrice)

Pizza.prototype.addSize = function() {
  var size = []
  if (this.small === 10){
    size.push(this.small)
  } else if (this.medium === 12) {
    size.push(this.medium)
  }else if (this.large === 14) {
    size.push(this.large)
  }
    return size

};

Pizza.prototype.addToppings = function() {
  var toppings = []
  var finalToppings = []
  toppings.push(this.pepperoni, this.olives, this.sausage, this.peppers);
  toppings.forEach(function(topping) {
    if(topping === 2){
      finalToppings.push(topping)
    }
  });
   return finalToppings

};

//
// Pizza.prototype.addToppings = function(){
// this.base + this.pepperoni + this.olives + this.sausge + this.peppers
// }






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



var pizza1 = new Pizza();

// pizza1.addToppings(pizza1);
pizza1.small = parseInt($("input:radio[name=small]:checked").val());
pizza1.medium = parseInt($("input:radio[name=medium]:checked").val());
pizza1.large = parseInt($("input:radio[name=large]:checked").val());
pizza1.pepperoni = parseInt($("input:radio[name=pepperoni]:checked").val());
pizza1.olives = parseInt($("input:radio[name=olives]:checked").val());
pizza1.sausage = parseInt($("input:radio[name=sausage]:checked").val());
pizza1.peppers = parseInt($("input:radio[name=peppers]:checked").val());
console.log(pizza1);
var sizeCost = pizza1.addSize();
var toppingCost = pizza1.addToppings();
var combined = sizeCost.concat(toppingCost);
var cost = combined.reduce(addNumbers);
function addNumbers(total, num) {
  return total + num;
}
// var price = pizza1.addPrice();

console.log(cost);

$("#cost").text(cost)



// this generates the price of the pizza
// var prices = [pizza1.base, pizza1.pepperoni, pizza1.olives, pizza1.sausage, pizza1.peppers];
// var filter1 = prices.filter(function(value){
//   return value === 10;});
// var filter2 = prices.filter(function(value){
//     return value === 2;});
// var combined = filter1.concat(filter2)
// var addFilter2 = combined.reduce(addNumbers);
// function addNumbers(total, num) {
//   return total + num;
// }
// $("#cost").text(addFilter2)


// var nan = []
// var pizza = []
// prices.forEach(function(price){
//   if(pizza === "NaN"){
//   nan.push(pizza)
// }else{
//   price.push(pizza)
// }
// });


// var pizzaPrice = []
// pizza1.forEach(function(pizza){
//     if(pizza === 10 | 2){
//       pizzaPrice.push(pizza)
//     }else{
//     }
//
//     });



});
});
