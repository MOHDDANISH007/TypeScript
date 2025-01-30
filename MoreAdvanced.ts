// Tuples

let Tupleperson: [string, number, string];


Tupleperson = ["Mohammad Danish", 21, "mohddanish8948442467@gmail.com"];


// Give Error Because number is using in this TuplePerson...
// Tupleperson = ["Mohammad Mobasshir", "mohddanish8948442467@gmail.com"];

console.log(Tupleperson);

// console.log(Tupleperson.includes("Mohammad Danish"))


// Optinal Property With TuplePerson

// Optional elements (?) must be at the end of a tuple.

let Tupleperson2: [string, string, number?];
Tupleperson2 = ["Mohammad Mobasshir", "mohammadMobsshirAli@gmail.com"];
console.log(Tupleperson2)



// Tuple with Readonly Modifier

let TuplePerson3: readonly [string, number, readonly string[]];

TuplePerson3 = ["Mohammad Danish", 21, ["TypeScript", "JS", "C++", "ReactJS", "NodeJs", "MYSQL", "MongoesDB"]];
console.log(TuplePerson3);

// // This will now cause an error because the tuple is readonly
// TuplePerson3 = ["Mohammad Kashif", 21, ["TypeScript", "JS", "C++", "ReactJS", "NodeJs", "MYSQL", "MongoesDB", "Angular JS"]]; 
// console.log(TuplePerson3);


// Tuple with Spread Operator (...)


let TuplePerson4: [string, number, ...string[]];

TuplePerson4 = ["Mohammad Kashif", 21, ...["TypeScript", "JS", "C++", "ReactJS", "NodeJs", "MYSQL", "MongoesDB", "Angular JS"]];
console.log(TuplePerson4)


//DestructingValue

let [MyName, age, ...ProgrammingSkills] = TuplePerson4;

console.log(`MyName is ${MyName}`);

console.log(`My Age is ${age}`);

console.log(`My Programming Skills is ${ProgrammingSkills}`)



// Not understand Properly Little Bits confusion




// What is an Enum in TypeScript?


// An enum (short for "enumeration") is a way to define a set of named constants. It helps you create more readable and organized code by using meaningful names instead of numbers or strings.

// Example:
// You can use an enum to represent the days of the week instead of just using numbers like 0, 1, 2, ....

// Numeric Enum Example:

// enum Day {
//   Sunday,   // 0
//   Monday,   // 1
//   Tuesday,  // 2
//   Wednesday,// 3
//   Thursday, // 4
//   Friday,   // 5
//   Saturday  // 6
// }

// console.log(Day.Sunday);  // 0
// console.log(Day.Monday);  // 1
// Here, Day.Sunday refers to 0, Day.Monday refers to 1, and so on. If you don't specify a value, TypeScript automatically assigns numbers starting from 0.

// String Enum Example:
// If you want to use strings instead of numbers for your enum values, you can create a string enum:


// enum Status {
//   Active = "ACTIVE",
//   Inactive = "INACTIVE",
//   Pending = "PENDING"
// }

// console.log(Status.Active);   // "ACTIVE"
// console.log(Status.Inactive); // "INACTIVE"
// In this example, instead of using numbers like 0 or 1, you are using strings like "ACTIVE" and "INACTIVE".

// Why Use Enums?
// Readability: Enums provide descriptive names for your values. Instead of using numbers like 0 or 1, you can use more readable names like Active, Inactive, etc.

// Avoid Magic Numbers/Strings: In programming, we call random numbers or strings that don’t explain their meaning "magic numbers". Enums help you avoid this by using named constants.

// Better Organization: Enums help organize related constants into a group, like the days of the week, months, colors, etc.

// Key Points:
// Numeric Enums (default) assign numbers to each constant.
// String Enums assign strings to each constant.
// Enum Members can be accessed by using their name.
// Bidirectional Mapping in numeric enums allows you to access the name from the value.

// Recap with Example:

// enum Direction {
//   Up = 1,
//   Down = 2,
//   Left = 3,
//   Right = 4
// }

// console.log(Direction.Up);    // 1
// console.log(Direction[1]);    // "Up" (reverse mapping)
// Direction.Up will give you 1.
// You can also access the name "Up" from the number 1 using Direction[1].

// Important Note About Enum

// And enum is used for readonly value...

// Also, mention that enums in TypeScript are compiled into JavaScript objects, so they exist at runtime too. That's different from some other TypeScript features that are compile-time only. So you can loop through them or access them dynamically.

// But keep it simple. Maybe don't dive too deep into the compilation details unless necessary. Focus on the basic concept, usage, and benefits.

enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}

console.log(Direction.Up);
enum Day {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
}


const WhichDay = (day: Day): string => {
    switch (day) {
        case Day.Monday:
            return `Today Day is ${Day.Monday}`;
        case Day.Tuesday:
            return `Today Day is ${Day.Tuesday}`;
        case Day.Wednesday:
            return `Today Day is ${Day.Wednesday}`;
        case Day.Thursday:
            return `Today Day is ${Day.Thursday}`;
        case Day.Friday:
            return `Today Day is ${Day.Friday}`;
        case Day.Saturday:
            return `Today Day is ${Day.Saturday}`;
        case Day.Sunday:
            return `Today Day is ${Day.Sunday}`;
        default:
            return "Invalid day";
    }
}

console.log(WhichDay(Day.Monday));  // "Today Day is Monday"
console.log(WhichDay(Day.Wednesday)); // "Today Day is Wednesday"


console.log(Day);




// what is OOPS in TypeScript




// OOP (Object-Oriented Programming) in TypeScript is a way of organizing your code using objects and classes. It helps you structure your code in a reusable, modular, and easy-to-understand way. TypeScript fully supports OOP concepts like classes, inheritance, encapsulation, and polymorphism.

// Key Concepts of OOP in TypeScript:
// Class:

// A blueprint for creating objects.

// Defines properties (data) and methods (functions) that the objects will have.

// class Animal {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   speak(): void {
//     console.log(`${this.name} makes a sound.`);
//   }
// }

// const dog = new Animal("Rex");
// dog.speak(); // Output: "Rex makes a sound."
// Object:

// An instance of a class.

// Created using the new keyword.

// const cat = new Animal("Whiskers");
// cat.speak(); // Output: "Whiskers makes a sound."
// Inheritance:

// A class can inherit properties and methods from another class.

// Use the extends keyword.

// class Dog extends Animal {
//   breed: string;

//   constructor(name: string, breed: string) {
//     super(name); // Call the parent class constructor
//     this.breed = breed;
//   }

//   bark(): void {
//     console.log(`${this.name} barks!`);
//   }
// }

// const myDog = new Dog("Buddy", "Golden Retriever");
// myDog.speak(); // Output: "Buddy makes a sound."
// myDog.bark();  // Output: "Buddy barks!"
// Encapsulation:

// Hiding internal details and exposing only what's necessary.

// Use public, private, and protected access modifiers.

// class Person {
//   private age: number;

//   constructor(age: number) {
//     this.age = age;
//   }

//   public getAge(): number {
//     return this.age;
//   }
// }

// const person = new Person(25);
// console.log(person.getAge()); // Output: 25
// // console.log(person.age); // Error: 'age' is private


class perSon {
    readonly name: string;
    readonly age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


// instance of the person
const p = new perSon("Danish", 21);
console.log(p)
console.log(`Getting the uSer Name ${p.name}`)



// what is modifier in TypeScript 


// In TypeScript, modifiers are keywords used to control the accessibility and behavior of class members (properties and methods). They help you define how and where class members can be accessed or modified. TypeScript provides three main access modifiers: public, private, and protected. There's also the readonly modifier for making properties immutable.

// 1. public Modifier
// Default behavior: If you don't specify a modifier, it's public by default.

// Accessibility: Can be accessed from anywhere (inside the class, outside the class, and in derived classes).


// class Person {
//   public name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const person = new Person("Alice");
// console.log(person.name); // Output: "Alice" (accessible outside the class)

// 2. private Modifier
// Accessibility: Can only be accessed within the class where it's defined.

// Use case: Hide internal implementation details.


// class Person {
//   private age: number;

//   constructor(age: number) {
//     this.age = age;
//   }

//   public getAge(): number {
//     return this.age; // Accessible inside the class
//   }
// }

// const person = new Person(25);
// console.log(person.getAge()); // Output: 25
// // console.log(person.age); // Error: 'age' is private and inaccessible outside the class.

// 3. protected Modifier
// Accessibility: Can be accessed within the class and in derived classes (subclasses).

// Use case: Allow inheritance but restrict external access.

// class Person {
//   protected name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class Employee extends Person {
//   public getName(): string {
//     return this.name; // Accessible in the subclass
//   }
// }

// const employee = new Employee("Bob");
// console.log(employee.getName()); // Output: "Bob"
// // console.log(employee.name); // Error: 'name' is protected and inaccessible outside the class/subclass.
// 4. readonly Modifier
// Purpose: Makes a property immutable (cannot be changed after initialization).

// Use case: Ensure a property remains constant.


// class Person {
//   readonly birthYear: number;

//   constructor(birthYear: number) {
//     this.birthYear = birthYear;
//   }
// }

// const person = new Person(1990);
// console.log(person.birthYear); // Output: 1990
// // person.birthYear = 2000; // Error: Cannot assign to 'birthYear' because it is read-only.

// Summary of Modifiers:

// Modifier	Accessibility	Use Case
// public	    Everywhere (default)	No restrictions on access.
// private	    Only within the class	Hide internal implementation details.
// protected	Within the class and subclasses	Allow inheritance but restrict external access.
// readonly	Everywhere (but cannot be modified after initialization)	Ensure immutability.


class Animal {
    private name: string;
    private breed: string;
    private color: string;

    constructor(name: string, breed: string, color: string) {
        this.name = name;
        this.breed = breed;
        this.color = color;
    }

    // Getter methods to access private properties
    getName(): string {
        return this.name;
    }

    getBreed(): string {
        return this.breed;
    }

    getColor(): string {
        return this.color;
    }
}

const animal = new Animal("Cat", "Persian", "White");

// Accessing private properties using getters
console.log(animal.getName());
console.log(animal.getName());  // Output: Cat
console.log(animal.getBreed()); // Output: Persian
console.log(animal.getColor()); // Output: White



class personInformation {
    name: string;
    DOB: string;

    constructor(name: string, DOB: string) {
        this.name = name;
        this.DOB = DOB;
    }
}

class Employee extends personInformation {
    E_role: string;
    E_salary: number;
    E_Number?: number;

    constructor(role: string, salary: number, name: string, DOB: string, Number?: number) {
        super(name, DOB);
        this.E_role = role;
        this.E_salary = salary;
        if (Number !== undefined) this.E_Number = Number; // Assign if provided
    }

    getter() {
        return this.name;
    }

}

const empolyee = new Employee("Software Engineer", 100000, "Mohammad Danish", "16/01/2000", 8948442472);

console.log(empolyee);
console.log(`Employee Name is ${empolyee.getter()}`); // Fix method call
