// var newPizza = new Pizza();
//
// function Pizza(){
//   this.pizzaCost = []
// }



function Pizza(base1, topping1, topping2, topping3, topping4){
  this.base= parseInt(base1);
  this.pepperoni= parseInt(topping1);
  this.olives= parseInt(topping2);
  this.sausage= parseInt(topping3);
  this.peppers= parseInt(topping4);
}

//Cannot write this function unless it's being pushed to an instance of another constructor
// Pizza.prototype.startPizza = function(newPizza){
// }


// Pizza.prototype.Price = function(pizza){
//   this.pizzaCost.push(pizza);
// }

Pizza.prototype.addToppings = function(){
this.base + this.pepperoni + this.olives + this.sausge + this.peppers
}

// Pizza.prototype.addPrice = function(){
//   var total = this.base += this.pepperoni += this.olives += this.sausge += this.peppers
//   return total
// }
// console.log(total);




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
// console.log(base);
// console.log(pepperoni);
// console.log(sausage);
var pizza1 = new Pizza(base, pepperoni, olives, sausage, peppers);
pizza1.addToppings(pizza1);
console.log(pizza1);


var prices = [pizza1.base.toString(), pizza1.pepperoni.toString(), pizza1.olives.toString(), pizza1.sausage.toString(), pizza1.peppers.toString()];
console.log(prices);

var nan = []
var pizza = []
console.log(nan);
console.log(pizza);

prices.forEach(function(price){
  if(pizza === "NaN"){
  nan.push(pizza)
}else{
  price.push(pizza)
}
});



// var filter1 = prices.filter(function(value){
// return value === "10";});
// var filter2 = prices.filter(function(value){
// return value === "2";});
// filter1.join(,);
// filter2.join(,);
// console.log(filter1);
// console.log(filter2);
// var total = paresInt(filter1) += parseInt(filter2)
// console.log(total);

// console.log(prices);


// var result = []
// // var nan = []
// console.log(result);
// console.log(prices);
// for(var i =0; i<prices.length; i++){
//   if([i] === "10"){
//   result.push([i]);
//   }
// }

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
