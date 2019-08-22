/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday
/*

  In order to do these exercises you'll need your newly acquired knowledge on
  constructor functions, methods, prototypes and the `this` keyword.
  Here's an example of an exercise:

  TASK 0:

  - Build an Airplane constructor that takes a name.
  - Give airplanes the ability to take off and land.
  - If a plane takes off, its "isFlying" property is true.
  - If a plane lands, its "isFlying" property is false.

  SOLUTION CODE:

  function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  }
  Airplane.prototype.land = function () {
    this.isFlying = false;
  }

  HOW TO TEST OUR SOLUTION:

  const jumbo = new Airplane('Jumbo');
  console.log(jumbo.name)              // 'Jumbo'
  console.log(jumbo.isFlying)          // false
  jumbo.takeOff();
  console.log(jumbo.isFlying)          // true
  jumbo.land();
  console.log(jumbo.isFlying)          // false
*/

/*

  TASK 1

  - Build a Person Constructor that takes name and age.
  - Give persons the ability to greet by returning a string stating name and age.
  - Give persons the ability to eat edibles.
  - When eating an edible, it should be pushed into a "stomach" property which is an array.
  - Give persons the ability to poop.
  - When pooping, the stomach should empty.
*/

// function person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.eating = false;
//   this.pooping = false;
//   let stomach = [];
// }
//   person.prototype.greet = function () {
    //   return `My name is ${this.name}, my age is ${this.age}`
    // }

    // person.prototype.eat = function () {
    //     this.edibles = ["apples", "meat", "vegetables"];
    //     stomach = stomach.concat(this.edibles);
    //     this.eating = true;
    //     return `You can eat ${this.edibles}`;
    //   }

    // person.prototype.poop = function () {
    //     this.stomach = [0];
    //     this.pooping = true;
    //     return `Your stomach level is now ${this.stomach}`;
    //   }
let stomach = [];

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.eating = false;
        this.pooping = false;
        
        
    }
      greet() {
             `My name is ${this.name}, my age is ${this.age}`
        }
      eat() {
            this.edibles = ["apples", "meat", "vegetables"];
            this.stomach = stomach.concat(this.edibles);
            this.eating = true;
            return `You can eat ${this.edibles}`;
        }
      poop() {
            this.stomach = [0];
            this.pooping = true;
            return `Your stomach level is now ${this.stomach}`;
        }
}


const effie = new Person("Effie", 21);

console.log(effie);                 //person {name: "Effie", age: 21, eating: false, pooping: false}
console.log(effie.greet());         //My name is Effie, my age is 21
console.log(effie.eat());          // You can eat apples,meat,vegetables
console.log(effie.eating);        // true
console.log(effie.poop());        //Your stomach level is now 0

/*
  TASK 2

  - Build a Car constructor that takes model name and make.
  - Give cars the ability to drive a distance.
  - By driving a car, the distance driven should be added to an "odometer" property.
  - Give cars the ability to crash.
  - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
  - Give cars the ability to be repaired.
  - A repaired car can be driven again.
  */

// function carMaker(model, make) {
//   this.model = model;
//   this.make = make;
//   this.distance = 0;
//   this.odometer = 0;
// }

// carMaker.prototype.drive = function (distance) {
//     this.distance = distance;
//     this.odometer += this.distance;
//     return `This ${this.model} ${this.make} car has been driven for ${this.odometer} miles`;
//   }

// carMaker.prototype.crash = function (distance) {
//     this.distance = distance;
//     this.odometer += this.distance;
//     return ` This ${this.model} ${this.make} car crashed at ${this.odometer} miles`;
//   }

// carMaker.prototype.repair = function () {

//     return `${this.drive('')}, This car has been repaired and can now be driven `;
//   }



class Carmaker {

    constructor (model, make) {
        this.model = model;
        this.make = make;
        this.distance = 0;
        this.odometer = 0;
    }
    drive (distance) {
        this.distance = distance;
        this.odometer += this.distance;
        return `This ${this.model} ${this.make} car has been driven for ${this.odometer} miles`;
    }
    crash(distance) {
        this.distance = distance;
        this.odometer += this.distance;
        return ` This ${this.model} ${this.make} car crashed at ${this.odometer} miles`;
    }
    repair() {

        return `${this.drive('')}, This car has been repaired and can now be driven `;
    }
      

}

let Tesla = new Carmaker ("Tesla", "Model S");
console.log(Tesla.drive(20));       //This car has been driven for 20 miles
console.log(Tesla.crash(40));       //This car crashed at 60 miles
console.log(Tesla.repair());        //This Tesla Model S car has been driven for 60 miles, This car has been repaired and can now be driven 

/*
 TASK 3

 - Build a Baby constructor that subclasses the Person built earlier.
 - Babies of course inherit the ability to greet, which can be strange.
 - Babies should have the ability to play, which persons don't.
 - By playing, a string is returned with some text of your choosing.

 */

function baby(name, age) {

  person.call(this, name, age);

}

baby.prototype = Object.create(person.prototype);

let malkia = new baby("Malkia", "2");

baby.prototype.greet = function () {

  return `Hi! my name is ${this.name}`;
}

baby.prototype.play = function () {

  return ` I spend most of my days playing!`;
}
console.log(malkia.greet());         //Hi! my name is Malkia
console.log(malkia.play());          //I spend most of my days playing!
console.log(malkia.eat());           //You can eat apples,meat,vegetables
console.log(malkia.poop());          //Your stomach level is now 0

/*

 TASK 4

 Use your imagination and come up with constructors that allow to build objects
 With amazing and original capabilities. Build 3 small ones, or a very
 complicated one with lots of state. Surprise us!

*/
const patient_history = [{ patient_id: 1, name: "Mild", last_visit: "31/12/18", disease_history: "malaria, common cold, flur" },
{ patient_id: 2, name: " Furaha ", last_visit: "31/12/17", disease_history: "malaria, common cold, flur" }
];

let patient_ind_history = [];

function hospital(hospitalName, hospitalLocation) {

  this.name = hospitalName;
  this.location = hospitalLocation;
}

hospital.prototype.sayHospName = function () {

  return `This hospital is called ${this.name} located in ${this.location}`
}

// function hospitalDepart (hospitalDepartment) {
//      this.hospitalDepartment = hospitalDepartment;
//      this.sayHospName();
// }


hospital.prototype.doctorCall = function (doctor, waiting, hospDepart) {
  this.doctor = doctor;
  this.waiting = waiting;
  this.department = hospDepart
  return ` ${this.sayHospName('')}, \n ${this.doctor} is on call today for ${this.department}, the waiting time is ${this.waiting} minutes.`;
}

hospital.prototype.visit = function (patient_name, patient_id) {
  this.patient_name = patient_name;
  this.patient_id = patient_id;
  this.patient_history = patient_history;

  //  function patientInfo (patient){

  //  let patient_ind_history = patient_history.concat(patient_history[1].disease_history);
  //  return patient_ind_history;
  //  }
  //  patient_history.map(patientInfo);

  return ` ${this.patient_name} of patient id  ${this.patient_id}, The patients history is ${this.patient_history[patient_id].disease_history} and payment information is `
}

let kijabe = new hospital("Kijabe", "Nairobi");

console.log(kijabe.sayHospName());                             //This hospital is called Kijabe located in Nairobi
console.log(kijabe.doctorCall("Dr Heri", "20", "OBGYN"));      //This hospital is called Kijabe located in Nairobi, 
//Dr Heri is on call today for OBGYN, the waiting time is 20 minutes.
console.log(kijabe.visit("Mild", "1"));                         //Mild of patient id  1, The patients history is malaria, common cold, flur and payment information is 
/*

  STRETCH TASK

  Object oriented design is commonly used in video games. You will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(createdAt,name,dimensions) {
  this.date = createdAt;
  this.name = name;
   dimensions = {};
  this.dimensions =dimensions;
  
}
    GameObject.prototype.destroy = function () {

      return `${this.name} was removed from the game.`;
    }

let Juma = new GameObject ("31/12/2018", "Juma","1, 2, 3");
console.log(Juma.destroy());


/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats ({createdAt, name, dimensions, healthPoints}){
  GameObject.call(this, createdAt, name, dimensions);
  this.healthPoints = healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {

  return `${this.name} took damage.`

}

let Maalim = new CharacterStats ("Maalim", "1,2,3", "5");

console.log (Maalim.destroy());
console.log (Maalim.takeDamage());


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid ({createdAt, name, dimensions,healthPoints,team, weapons, language}){
  CharacterStats.call (this, createdAt, name, dimensions, healthPoints);
  this.team = team;
 this.weapons = weapons;
 this.language = language;

}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  
   return `${this.name} offers a greeting in ${this.language}.`
}

let bahati = new Humanoid ("Bahati", "1,2,3", "5", "Simba", "gun", "Swahili");
console.log(bahati.greet());
console.log(bahati.destroy());
console.log(bahati.takeDamage());

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  name: 'Bruce',
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});
const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});
const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.



// 2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

