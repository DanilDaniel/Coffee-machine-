const input = require('sync-input');

function actions(){
  console.log('Enter action please: remaining / buy /  fill / take / exit');
  let action = String(input());
  switch (action) {
    case 'remaining':
    case 'buy':
    case 'fill':
    case 'take':
      coffeeMachine(action);
      break;
    case 'exit':
      console.log(`Process finished
          See you next time`);
      break;
    default :
      console.log('Try again....');
      actions();
  }
}

function addSugar(coffeeType){
  console.log('Add sugar: Yes enter 1 or No enter 2');
  let addSugar = Number(input());
  let numberSugar = 0;
  if (addSugar === 1) {
    console.log('Write how many servings of sugar to add: Enter the number please');
    numberSugar = Number(input());
    sugar -= numberSugar;
  }
  console.log(`Your cup of ${coffeeType} in progress.
        Sugar: ${numberSugar}`);
}

let water = 400;
let milk = 540;
let coffee = 120;
let cups = 9;
let money = 550;
let sugar = 50;

function coffeeMachine(action) {
  switch (action) {
    case 'remaining':
      console.log('The coffee machine has:');
      console.log(water + ' ml of water');
      console.log(milk + ' ml of milk');
      console.log(coffee + ' g of coffee beans');
      console.log(cups + ' disposable cups');
      console.log(`$${money} of money`);
      console.log(`${sugar} portions of sugar`);
      actions();
      break;

    case 'buy':
      console.log('What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino');
      let coffeeType = String(input());
      if (coffeeType === 'exit'){
        actions();
        break;
      } else if(coffeeType === '1') {
        if(water < 250){
          console.log('Sorry, not enough water!');
          actions();
          break;
        } else if(coffee < 16){
          console.log('Sorry, not enough coffee!');
          actions();
          break;
        } else if(cups < 1){
          console.log('Sorry, not enough cups!');
          actions();
          break;
        } else {
          console.log('I have enough resources, making you a coffee!');
        }
        addSugar("espresso");
        water -= 250;
        coffee -= 16;
        cups--;
        money += 4;
      }
      else if(coffeeType === '2') {
        if(water < 350){
          console.log('Sorry, not enough water!');
          actions();
          break;
        } else if(milk < 75) {
          console.log('Sorry, not enough milk!');
          actions();
          break;
        } else if(coffee < 20){
          console.log('Sorry, not enough coffee!');
          actions();
          break;
        } else if(cups < 1){
          console.log('Sorry, not enough cups!');
          actions();
          break;
        } else {
          console.log('I have enough resources, making you a coffee!');
        }
        addSugar("latte");
        water -= 350;
        milk -= 75;
        coffee -= 20;
        cups--;
        money += 7;
      }
      else if(coffeeType === '3') {
        if(water < 200){
          console.log('Sorry, not enough water!');
          actions();
          break;
        } else if(milk < 100) {
          console.log('Sorry, not enough milk!');
          actions();
          break;
        } else if(coffee < 12){
          console.log('Sorry, not enough coffee!');
          actions();
          break;
        } else if(cups < 1){
          console.log('Sorry, not enough cups!');
          actions();
          break;
        } else {
          console.log('I have enough resources, making you a coffee!');
        }
        addSugar("cappuccino");
        water -= 200;
        milk -= 100;
        coffee -= 12;
        cups--;
        money += 6;
      }
      actions();
      break;
    case 'fill':
        console.log('Write how many ml of water you want to add:');
      let input1 = Number(input());
      water += input1;
        console.log('Write how many ml of milk you want to add:');
      let input2 = Number(input());
      milk += input2;
      console.log('Write how many grams of coffee beans you want to add:');
      let input3 = Number(input());
      coffee += input3;
      console.log('Write how many disposable coffee cups you want to add:');
      let input4 = Number(input());
      cups += input4;
      console.log('Write how many sugar you want to add:');
      let input5 = Number(input());
      sugar += input5;
      actions();
      break;
    case 'take':
      console.log('I gave you $' + money);
      money = 0;
      actions();
      break;
  }

}

// actions();
