//object is a combination of key value pairs
let bike1 = {
    make: 'bajaj',
    model: 'pulsar150',
    miles: 34506,
    passengers: ['Joy', 'Khalid', 'Billy', 'Leah']
  };
  //accessing object
  //dot notation: accessing the particular key and value by  object.key
  //bracket notation : accessing the particular key and value by  object['key'] ,here key should be in string

  console.log(bike1.model); // pulsar
  console.log(bike1['model']); //pulsar
  console.log(bike1.passengers) //  ['Joy', 'Khalid', 'Billy', 'Leah']
  console.log(bike1.passengers[0]) //  ['Joy']

  console.log(bike1['passengers']) //  ['Joy', 'Khalid', 'Billy', 'Leah']


  function checkForFood(restaurant, food) {
    if (restaurant.menus[food.type].includes(food.name)) {
      return `Yes, we're serving ${food.name} today!`;
    }
    return `Sorry, we aren't serving ${food.name} today.`
  }
  
  var foodItem = {
    name: "Quiche",
    price: "6.49",
    type: "breakfast"
  };
  
  var restaurant = {
    name: 'Butcher Block Cafe',
    menus: {
      breakfast: ['Quiche', 'Egg and Sausage Sandwhich', 'Corn Beef Hash'],
      lunch: ['Ham and Swiss', 'Chicken Fried Steak', 'Cheeseburger'],
      dinner: ['T Bone Steak', 'Spagetti and Meatballs']
    }
  }
  
  console.log(checkForFood(restaurant, foodItem))
