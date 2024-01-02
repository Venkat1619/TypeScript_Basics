var greetings = ["hello", "hey", "hi", "hey there"];

function sayAllTheGreetings() {
  for (var i = 0; i < greetings.length; i++) {
    return greetings[i];
  }
}
let resp = sayAllTheGreetings();
console.log(resp);

var fruits = ["apples", "oranges", "bananas"];

function fruit():string | undefined{
  for (var i = 0; i < fruits.length; i++) {
    // console.log("I have some .........." + fruits[i]);
 
    return ("I have some " + fruits[i]);  //We can only return ONE TIME in a function. Once that return occurs, the function ends.
  }
}
const rs = fruit();
console.log(rs)

var animals: string[] = ["lion", "tiger", "cheetha"];
function nameAnimals(): void {
  for (let i = 0; i < animals.length; i++) {
    console.log(`Mommy, I want to see ${animals[i]}! Waaah!`);
  }
}
nameAnimals();


let users = [
    {
      id: 127238,
      firstName: "Matthew",
      handle: "@matthewph",
      lastLoggedIn: 1611937890083,
      followerCount: 723,
      recentPost: "This is the first time I've checked the internet since last March."
    }, {
      id: 728912,
      firstName: "Tanisha",
      handle: "@tdavey",
      lastLoggedIn: 1611937937749,
      followerCount: 2319,
      recentPost: "Wear a mask people, it's not over."
    }, {
      id: 409126,
      firstName: "Megan",
      handle: "@meg36",
      lastLoggedIn: 1611937973534,
      followerCount: 212,
      recentPost: "OMG Gametime AHHHH!!!!!!"
    }
  ];


  function userNames(): void {
    for (let i = 0; i < users.length; i++) {
      console.log(`hi ${users[i].firstName} your id is ${users[i].id}`);
    }
  }
  userNames();

  function showImportantPosts(number:number):void{
    for (let i = 0; i < users.length; i++) {
        if(users[i].followerCount > number)
        console.log(`hi ${users[i].firstName} your id is ${users[i].id} and post is ${users[i].recentPost}`);
      }
  }  
  showImportantPosts(1000);