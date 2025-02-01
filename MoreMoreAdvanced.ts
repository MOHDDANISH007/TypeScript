// // Tuples

// let Tupleperson: [string, number, string];


// Tupleperson = ["Mohammad Danish", 21, "mohddanish8948442467@gmail.com"];


// // Give Error Because number is using in this TuplePerson...
// // Tupleperson = ["Mohammad Mobasshir", "mohddanish8948442467@gmail.com"];

// console.log(Tupleperson);

// // console.log(Tupleperson.includes("Mohammad Danish"))


// // Optinal Property With TuplePerson

// // Optional elements (?) must be at the end of a tuple.

// let Tupleperson2: [string, string, number?];
// Tupleperson2 = ["Mohammad Mobasshir", "mohammadMobsshirAli@gmail.com"];
// console.log(Tupleperson2)



// // Tuple with Readonly Modifier

// let TuplePerson3: readonly [string, number, readonly string[]];

// TuplePerson3 = ["Mohammad Danish", 21, ["TypeScript", "JS", "C++", "ReactJS", "NodeJs", "MYSQL", "MongoesDB"]];
// console.log(TuplePerson3);

// // // This will now cause an error because the tuple is readonly
// // TuplePerson3 = ["Mohammad Kashif", 21, ["TypeScript", "JS", "C++", "ReactJS", "NodeJs", "MYSQL", "MongoesDB", "Angular JS"]]; 
// // console.log(TuplePerson3);


// // Tuple with Spread Operator (...)


// let TuplePerson4: [string, number, ...string[]];

// TuplePerson4 = ["Mohammad Kashif", 21, ...["TypeScript", "JS", "C++", "ReactJS", "NodeJs", "MYSQL", "MongoesDB", "Angular JS"]];
// console.log(TuplePerson4)


// //DestructingValue

// let [MyName, age, ...ProgrammingSkills] = TuplePerson4;

// console.log(`MyName is ${MyName}`);

// console.log(`My Age is ${age}`);

// console.log(`My Programming Skills is ${ProgrammingSkills}`)



// // Not understand Properly Little Bits confusion




// // What is an Enum in TypeScript?


// // An enum (short for "enumeration") is a way to define a set of named constants. It helps you create more readable and organized code by using meaningful names instead of numbers or strings.

// // Example:
// // You can use an enum to represent the days of the week instead of just using numbers like 0, 1, 2, ....

// // Numeric Enum Example:

// // enum Day {
// //   Sunday,   // 0
// //   Monday,   // 1
// //   Tuesday,  // 2
// //   Wednesday,// 3
// //   Thursday, // 4
// //   Friday,   // 5
// //   Saturday  // 6
// // }

// // console.log(Day.Sunday);  // 0
// // console.log(Day.Monday);  // 1
// // Here, Day.Sunday refers to 0, Day.Monday refers to 1, and so on. If you don't specify a value, TypeScript automatically assigns numbers starting from 0.

// // String Enum Example:
// // If you want to use strings instead of numbers for your enum values, you can create a string enum:


// // enum Status {
// //   Active = "ACTIVE",
// //   Inactive = "INACTIVE",
// //   Pending = "PENDING"
// // }

// // console.log(Status.Active);   // "ACTIVE"
// // console.log(Status.Inactive); // "INACTIVE"
// // In this example, instead of using numbers like 0 or 1, you are using strings like "ACTIVE" and "INACTIVE".

// // Why Use Enums?
// // Readability: Enums provide descriptive names for your values. Instead of using numbers like 0 or 1, you can use more readable names like Active, Inactive, etc.

// // Avoid Magic Numbers/Strings: In programming, we call random numbers or strings that don’t explain their meaning "magic numbers". Enums help you avoid this by using named constants.

// // Better Organization: Enums help organize related constants into a group, like the days of the week, months, colors, etc.

// // Key Points:
// // Numeric Enums (default) assign numbers to each constant.
// // String Enums assign strings to each constant.
// // Enum Members can be accessed by using their name.
// // Bidirectional Mapping in numeric enums allows you to access the name from the value.

// // Recap with Example:

// // enum Direction {
// //   Up = 1,
// //   Down = 2,
// //   Left = 3,
// //   Right = 4
// // }

// // console.log(Direction.Up);    // 1
// // console.log(Direction[1]);    // "Up" (reverse mapping)
// // Direction.Up will give you 1.
// // You can also access the name "Up" from the number 1 using Direction[1].

// // Important Note About Enum

// // And enum is used for readonly value...

// // Also, mention that enums in TypeScript are compiled into JavaScript objects, so they exist at runtime too. That's different from some other TypeScript features that are compile-time only. So you can loop through them or access them dynamically.

// // But keep it simple. Maybe don't dive too deep into the compilation details unless necessary. Focus on the basic concept, usage, and benefits.

// enum Direction {
//     Up = 1,
//     Down = 2,
//     Left = 3,
//     Right = 4
// }

// console.log(Direction.Up);
// enum Day {
//     Sunday = "Sunday",
//     Monday = "Monday",
//     Tuesday = "Tuesday",
//     Wednesday = "Wednesday",
//     Thursday = "Thursday",
//     Friday = "Friday",
//     Saturday = "Saturday",
// }


// const WhichDay = (day: Day): string => {
//     switch (day) {
//         case Day.Monday:
//             return `Today Day is ${Day.Monday}`;
//         case Day.Tuesday:
//             return `Today Day is ${Day.Tuesday}`;
//         case Day.Wednesday:
//             return `Today Day is ${Day.Wednesday}`;
//         case Day.Thursday:
//             return `Today Day is ${Day.Thursday}`;
//         case Day.Friday:
//             return `Today Day is ${Day.Friday}`;
//         case Day.Saturday:
//             return `Today Day is ${Day.Saturday}`;
//         case Day.Sunday:
//             return `Today Day is ${Day.Sunday}`;
//         default:
//             return "Invalid day";
//     }
// }

// console.log(WhichDay(Day.Monday));  // "Today Day is Monday"
// console.log(WhichDay(Day.Wednesday)); // "Today Day is Wednesday"


// console.log(Day);




// // what is OOPS in TypeScript




// // OOP (Object-Oriented Programming) in TypeScript is a way of organizing your code using objects and classes. It helps you structure your code in a reusable, modular, and easy-to-understand way. TypeScript fully supports OOP concepts like classes, inheritance, encapsulation, and polymorphism.

// // Key Concepts of OOP in TypeScript:
// // Class:

// // A blueprint for creating objects.

// // Defines properties (data) and methods (functions) that the objects will have.

// // class Animal {
// //   name: string;

// //   constructor(name: string) {
// //     this.name = name;
// //   }

// //   speak(): void {
// //     console.log(`${this.name} makes a sound.`);
// //   }
// // }

// // const dog = new Animal("Rex");
// // dog.speak(); // Output: "Rex makes a sound."
// // Object:

// // An instance of a class.

// // Created using the new keyword.

// // const cat = new Animal("Whiskers");
// // cat.speak(); // Output: "Whiskers makes a sound."
// // Inheritance:

// // A class can inherit properties and methods from another class.

// // Use the extends keyword.

// // class Dog extends Animal {
// //   breed: string;

// //   constructor(name: string, breed: string) {
// //     super(name); // Call the parent class constructor
// //     this.breed = breed;
// //   }

// //   bark(): void {
// //     console.log(`${this.name} barks!`);
// //   }
// // }

// // const myDog = new Dog("Buddy", "Golden Retriever");
// // myDog.speak(); // Output: "Buddy makes a sound."
// // myDog.bark();  // Output: "Buddy barks!"
// // Encapsulation:

// // Hiding internal details and exposing only what's necessary.

// // Use public, private, and protected access modifiers.

// // class Person {
// //   private age: number;

// //   constructor(age: number) {
// //     this.age = age;
// //   }

// //   public getAge(): number {
// //     return this.age;
// //   }
// // }

// // const person = new Person(25);
// // console.log(person.getAge()); // Output: 25
// // // console.log(person.age); // Error: 'age' is private


// class perSon {
//     readonly name: string;
//     readonly age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }


// // instance of the person
// const p = new perSon("Danish", 21);
// console.log(p)
// console.log(`Getting the uSer Name ${p.name}`)



// // what is modifier in TypeScript 


// // In TypeScript, modifiers are keywords used to control the accessibility and behavior of class members (properties and methods). They help you define how and where class members can be accessed or modified. TypeScript provides three main access modifiers: public, private, and protected. There's also the readonly modifier for making properties immutable.

// // 1. public Modifier
// // Default behavior: If you don't specify a modifier, it's public by default.

// // Accessibility: Can be accessed from anywhere (inside the class, outside the class, and in derived classes).


// // class Person {
// //   public name: string;

// //   constructor(name: string) {
// //     this.name = name;
// //   }
// // }

// // const person = new Person("Alice");
// // console.log(person.name); // Output: "Alice" (accessible outside the class)

// // 2. private Modifier
// // Accessibility: Can only be accessed within the class where it's defined.

// // Use case: Hide internal implementation details.


// // class Person {
// //   private age: number;

// //   constructor(age: number) {
// //     this.age = age;
// //   }

// //   public getAge(): number {
// //     return this.age; // Accessible inside the class
// //   }
// // }

// // const person = new Person(25);
// // console.log(person.getAge()); // Output: 25
// // // console.log(person.age); // Error: 'age' is private and inaccessible outside the class.

// // 3. protected Modifier
// // Accessibility: Can be accessed within the class and in derived classes (subclasses).

// // Use case: Allow inheritance but restrict external access.

// // class Person {
// //   protected name: string;

// //   constructor(name: string) {
// //     this.name = name;
// //   }
// // }

// // class Employee extends Person {
// //   public getName(): string {
// //     return this.name; // Accessible in the subclass
// //   }
// // }

// // const employee = new Employee("Bob");
// // console.log(employee.getName()); // Output: "Bob"
// // // console.log(employee.name); // Error: 'name' is protected and inaccessible outside the class/subclass.
// // 4. readonly Modifier
// // Purpose: Makes a property immutable (cannot be changed after initialization).

// // Use case: Ensure a property remains constant.


// // class Person {
// //   readonly birthYear: number;

// //   constructor(birthYear: number) {
// //     this.birthYear = birthYear;
// //   }
// // }

// // const person = new Person(1990);
// // console.log(person.birthYear); // Output: 1990
// // // person.birthYear = 2000; // Error: Cannot assign to 'birthYear' because it is read-only.

// // Summary of Modifiers:

// // Modifier	Accessibility	Use Case
// // public	    Everywhere (default)	No restrictions on access.
// // private	    Only within the class	Hide internal implementation details.
// // protected	Within the class and subclasses	Allow inheritance but restrict external access.
// // readonly	Everywhere (but cannot be modified after initialization)	Ensure immutability.


// class Animal {
//     private name: string;
//     private breed: string;
//     private color: string;

//     constructor(name: string, breed: string, color: string) {
//         this.name = name;
//         this.breed = breed;
//         this.color = color;
//     }

//     // Getter methods to access private properties
//     getName(): string {
//         return this.name;
//     }

//     getBreed(): string {
//         return this.breed;
//     }

//     getColor(): string {
//         return this.color;
//     }
// }

// const animal = new Animal("Cat", "Persian", "White");

// // Accessing private properties using getters
// console.log(animal.getName());
// console.log(animal.getName());  // Output: Cat
// console.log(animal.getBreed()); // Output: Persian
// console.log(animal.getColor()); // Output: White



// class personInformation {
//     name: string;
//     DOB: string;

//     constructor(name: string, DOB: string) {
//         this.name = name;
//         this.DOB = DOB;
//     }
// }

// class Employee extends personInformation {
//     E_role: string;
//     E_salary: number;
//     E_Number?: number;

//     constructor(role: string, salary: number, name: string, DOB: string, Number?: number) {
//         super(name, DOB);
//         this.E_role = role;
//         this.E_salary = salary;
//         if (Number !== undefined) this.E_Number = Number; // Assign if provided
//     }

//     getter() {
//         return this.name;
//     }

// }

// const empolyee = new Employee("Software Engineer", 100000, "Mohammad Danish", "16/01/2000", 8948442472);

// console.log(empolyee);
// console.log(`Employee Name is ${empolyee.getter()}`); // Fix method call




// // 1. What is an Interface?


// // An interface in TypeScript is like a contract or blueprint that defines the structure that an object, class, or function must follow.


// 1 Interface like Object

// interface personInterFaceInfo {
//     name: string,
//     age: number,
//     email: string,
//     greet(): void;
// }


// const johnInfo: personInterFaceInfo = {
//     name: "John Doe",
//     age: 21,
//     email: "johnDoe@gmail.com",
//     greet() {
//         console.log(`Hello I am ${name}`)
//     }
// }


// 2 InterFace Like a Function....

// interface MathOperation {
//     (x: number, y: number): number;
// }

// const addTwo: MathOperation = (x, y) => {
//     return x + y;
// }


// console.log(addTwo(21, 9));

// console.log(typeof addTwo)


// interface person1 {
//     myFirstName: string;
//     myLastName: string;
//     age: number;
//     email: string;
// }

// function AboutUserInfo(p: person1): void {
//     console.log(`My Name is ${p.myFirstName} ${p.myLastName} and My email is ${p.email} and I am ${p.age} years old`);
// }

// // Correct way to pass an object to the function

// console.log(AboutUserInfo({ 
//     myFirstName: "Mohammad", 
//     myLastName: "Danish", 
//     age: 21, 
//     email: "m.danish000889@gmail.com" 
// }));


// // extends with interface

// // interface MovieDetails {
// //   readonly name: string;
// //   rating: number;
// //   printMovieInfo(name: string, price: number, rating: number): string | number;
// // }

// // interface MovieGenra extends MovieDetails {
// //   genra: string;
// // }

// // const Movie1: MovieGenra = {
// //   name: "Star Wars",
// //   genra: "Action",
// //   rating: 8.9,
// //   printMovieInfo(name: string, price: number, rating: number): string | number {
// //     return `Movie Name: ${name}, Price: ${price}, Rating: ${rating}`;
// //   },
// // };

// // // Log the type of Movie1
// // console.log(typeof Movie1); // Output: "object"

// // // Log the Movie1 object
// // console.log(Movie1);

// // // Call the printMovieInfo method
// // console.log(Movie1.printMovieInfo("Star Wars", 15, 8.9));
// // // Output: "Movie Name: Star Wars, Price: 15, Rating: 8.9"                    





interface MovieDetails {
    readonly name: string;
    rating: number;
    printMovieInfo(price: number): string | number;
  }
  
  interface MovieGenra extends MovieDetails {
    genra: string;
  }
  
  const Movie1: MovieGenra = {
    name: "Star Wars",
    genra: "Action",
    rating: 8.9,
    printMovieInfo(price: number): string | number {
      return `Movie Name: ${this.name}, Price: ${price}, Rating: ${this.rating}`;
    },
  };
  
  console.log(Movie1.printMovieInfo(15));
  
  // Dynamically putting data 
  
  interface MovieDetails {
    readonly name: string;
    rating: number;
    printMovieInfo(price: number): string | number;
  }
  
  interface MovieGenra
    extends
    MovieDetails {
    genra: string;
  }
  
  // Define a class that implements the MovieGenra interface                    
  
  
  class
  
    Movie
  
  
    implements MovieGenra {
    constructor(
      public readonly name: string,
      public genra: string,
      public rating: number
    ) { }
  
    // Implement the printMovieInfo method
    printMovieInfo(price: number): string | number {
      return `Movie Name: ${this.name}, Genre: ${this.genra}, Price: ${price}, Rating: ${this.rating}`;
    }
  }
  
  // Create an instance of the Movie class with dynamic data
  const movie1 = new Movie("Inception", "Sci-Fi", 8.8);
  
  // Call the printMovieInfo method with dynamic data
  console.log(movie1.printMovieInfo(12));
  // Output: "Movie Name: Inception, Genre: Sci-Fi, Price: 12, Rating: 8.8"
  
  // Create another instance with different data
  const movie2 = new Movie("The Dark Knight", "Action", 9.0);
  console.log(movie2.printMovieInfo(15));
  // Output: "Movie Name: The Dark Knight, Genre: Action, Price: 15, Rating: 9.0"                    
  
  
  
  
  
  // Declaration Mergin
  
  
  // Declaration Merging in TypeScript is a powerful feature that allows you to combine multiple declarations of the same entity (e.g., interfaces, classes, namespaces, etc.) into a single definition. This is particularly useful when you want to extend or augment existing types without modifying the original definition.
  
  
  // 1. Interface Declaration Merging
  // Interfaces in TypeScript support declaration merging. If you define multiple interfaces with the same name, TypeScript will automatically merge them into a single interface.
  
  
  // Example:
  
  // interface Car {
  //   brand: string;
  // }
  
  // interface Car {
  //   model: string;
  // }
  
  // interface Car {
  //   year: number;
  // }
  
  // const myCar: Car = {
  //   brand: "Toyota",
  //   model: "Corolla",
  //   year: 2020,
  // };
  
  // console.log(myCar); // Output: { brand: "Toyota", model: "Corolla", year: 2020 }
  // Here:
  
  // The three Car interfaces are merged into one.
  
  // The resulting Car interface has all the properties: brand, model, and year.
  
  // 2. Namespace Declaration Merging
  // Namespaces can also be merged. If you define multiple namespaces with the same name, their contents are combined.
  
  // Example:
  // typescript
  // Copy
  // namespace MyNamespace {
  //   export const x = 10;
  // }
  
  // namespace MyNamespace {
  //   export const y = 20;
  // }
  
  // console.log(MyNamespace.x); // Output: 10
  // console.log(MyNamespace.y); // Output: 20
  // Here:
  
  // The two MyNamespace declarations are merged.
  
  // You can access both x and y from the merged namespace.
  
  
  
  // 3. Class and Interface Merging
  // You can merge an interface with a class. This is useful when you want to add additional properties or methods to a class without modifying its original definition.
  
  // Class and Interface Merging in TypeScript (Simple Explanation)
  // 🟢 What is Happening in This Code?
  // Normally, a class and an interface don’t merge in TypeScript. However, TypeScript merges the interface into the class’s type definition, which allows us to add properties to the class without modifying its original definition.
  
  // 🔹 Step-by-Step Explanation
  // 1️⃣ Define the Class
  
  
  // class Car {
  //   brand: string;
  
  //   constructor(brand: string) {
  //     this.brand = brand;
  //   }
  // }
  
  
  // ✔ Here, we create a class Car with one property: brand.
  // ✔ The constructor initializes the brand when creating an object.
  
  // 2️⃣ Define an Interface with the Same Name
  
  
  // interface Car {
  //   model: string;
  // }
  // ✔ An interface with the same name as the class is created.
  // ✔ The interface adds a new property model to the Car class without modifying the class directly.
  
  // 3️⃣ Create an Object and Add a New Property
  
  // const myCar = new Car("Toyota");
  // myCar.model = "Corolla"; // Adding the merged property
  // ✔ A new object myCar is created from the Car class.
  // ✔ Even though Car class did not originally have a model property, TypeScript merged the interface with the class, so myCar.model = "Corolla"; works.
  
  // 4️⃣ Print the Values
  
  // console.log(myCar.brand); // Output: Toyota
  // console.log(myCar.model); // Output: Corolla
  // ✔ The brand property comes from the Car class.
  // ✔ The model property comes from the Car interface (which got merged into the class type).
  
  
  
  
  
  
  
  // Example:
  
  // class Car {
  //   brand: string;
  
  //   constructor(brand: string) {
  //     this.brand = brand;
  //   }
  // }
  
  // interface Car {
  //   model: string;
  // }
  
  // const myCar = new Car("Toyota");
  // myCar.model = "Corolla"; // Adding the merged property
  
  // console.log(myCar.brand); // Output: Toyota
  // console.log(myCar.model); // Output: Corolla
  // Here:
  
  // The Car interface is merged with the Car class.
  
  // The model property is added to instances of the Car class.
  
  // 4. Function Declaration Merging
  // Functions can also be merged. This is often used in libraries to provide multiple overloads for a function.
  
  // Example:
  
  // function greet(name: string): string;
  // function greet(age: number): string;
  // function greet(value: string | number): string {
  //   if (typeof value === "string") {
  //     return `Hello, ${value}`;
  //   } else {
  //     return `You are ${value} years old`;
  //   }
  // }
  
  // console.log(greet("Alice")); // Output: Hello, Alice
  // console.log(greet(25)); // Output: You are 25 years old
  // Here:
  
  // The greet function is declared multiple times with different parameter types.
  
  // TypeScript merges these declarations into a single function with multiple overloads.
  
  // 5. Enum Declaration Merging
  // Enums can also be merged. If you define multiple enums with the same name, their values are combined.
  
  // Example:
  // typescript
  // Copy
  // enum Colors {
  //   Red = "RED",
  //   Green = "GREEN",
  // }
  
  // enum Colors {
  //   Blue = "BLUE",
  // }
  
  // console.log(Colors.Red); // Output: RED
  // console.log(Colors.Blue); // Output: BLUE
  // Here:
  
  // The two Colors enums are merged.
  
  // The resulting Colors enum contains all the values: Red, Green, and Blue.
  
  
  
  // with class declaration merge
  
  class Car {
    brand: string;
  
    constructor(brand: string) {
      this.brand = brand;
    }
  }
  
  
  interface Car {
    model: string;
  }
  
  
  
  
  
  
  
  const myCar = new Car("Toyota");
  myCar.model = "Corolla"; // Adding the merged property
  
  console.log(myCar.brand)
  console.log(myCar.model)
  
  
  // with Function declaration merge
  
  
  
  
  
  
  function greet(name: string): string;
  function greet(age: number): string;
  function greet(value: string | number): string {
    if (typeof value === "string") {
      return `Hello, ${value}`;
    } else {
      return `You are ${value} years old`;
    }
  }
  
  console.log(greet("Alice")); // Output: Hello, Alice
  console.log(greet(25)); // Output: You are 25 years old
  
  
  
  
  
  
  
  
  // Output: "Movie Name: Star Wars, Price: 15, Rating: 8.9"
  
  
  // class Animal {
  //     name: string;
  
  //     constructor(name: string) {
  //         this.name = name
  //     }
  
  //     makeSound(): void {
  //         console.log("Some generic animal sound...");
  //     }
  // }
  
  // class Dog extends Animal {
  //     breedName: string;
  
  //     constructor(breedName: string, name: string) {
  //         super(name)
  //         this.breedName = breedName;
  //     }
  
  //     makeSound(): void {
  //         console.log("Woof! Woof!");
  //     }
  // }
  
  // const myDog = new Dog("GermanShefard", "dog");
  // console.log(myDog.breedName); // Output: Buddy
  // myDog.makeSound(); // Output: Woof! Woof!
  
  
  
  
  
  
  
  //  What is Generics in TypeScript
  
  
  // Generics in TypeScript are a way to create reusable, type-safe components that work with a variety of types rather than a single one. They allow you to define functions, classes, or interfaces that can operate on different types while maintaining type safety.
  
  // Why Use Generics?
  // Generics provide flexibility and type safety. Without generics, you might use any, but this sacrifices type safety. Generics allow you to write code that is both flexible and type-safe.
  
  // Basic Syntax
  // Generics are typically represented by a placeholder (often T, but you can use any name). This placeholder is replaced with the actual type when the function, class, or interface is used.
  
  // Example: Generic Function
  // typescript
  // Copy
  // function identity<T>(arg: T): T {
  //     return arg;
  // }
  
  // let output1 = identity<string>("Hello"); // Type is string
  // let output2 = identity<number>(42);      // Type is number
  // In this example:
  
  // T is a type variable.
  
  // The identity function can accept any type and return the same type.
  
  // Example: Generic Class
  // typescript
  // Copy
  // class Box<T> {
  //     private value: T;
  
  //     constructor(value: T) {
  //         this.value = value;
  //     }
  
  //     getValue(): T {
  //         return this.value;
  //     }
  // }
  
  // let numberBox = new Box<number>(42);
  // console.log(numberBox.getValue()); // 42
  
  // let stringBox = new Box<string>("Hello");
  // console.log(stringBox.getValue()); // Hello
  // Here, the Box class can hold a value of any type, and the type is specified when an instance is created.
  
  // Example: Generic Interface
  // typescript
  // Copy
  // interface Pair<T, U> {
  //     first: T;
  //     second: U;
  // }
  
  // let pair: Pair<number, string> = { first: 1, second: "two" };
  // In this case, the Pair interface can work with any two types, T and U.
  
  // Constraints on Generics
  // You can constrain generics to ensure they meet certain conditions. For example, you might want to ensure that a generic type has a specific property.
  
  // typescript
  // Copy
  // interface HasLength {
  //     length: number;
  // }
  
  // function logLength<T extends HasLength>(arg: T): void {
  //     console.log(arg.length);
  // }
  
  // logLength("Hello"); // 5
  // logLength([1, 2, 3]); // 3
  // logLength({ length: 10 }); // 10
  // Here, T must be a type that has a length property.
  
  // Default Types in Generics
  // You can also provide default types for generics.
  
  // typescript
  // Copy
  // function createArray<T = string>(length: number, value: T): T[] {
  //     return Array(length).fill(value);
  // }
  
  // let stringArray = createArray(3, "x"); // ["x", "x", "x"]
  // let numberArray = createArray<number>(3, 42); // [42, 42, 42]
  // In this example, if no type is provided, T defaults to string.
  
  // Summary
  // Generics in TypeScript allow you to write flexible, reusable, and type-safe code. They are widely used in functions, classes, and interfaces to handle different types without sacrificing type safety.
  
  
  
  // Why we use Generic
  // this reason
  
  
  // const printString = (x : string) :string =>{
  //   return "x";
  // }
  
  // const printNumber = (x : number) :number =>{return x};
  
  // const printBoolean = (x :boolean) :boolean =>{return x};
  
  // console.log(printString("Mohammad Danish"))
  // console.log(printNumber(21))
  // console.log(printBoolean(true));
  
  
  // What will happen if we pass an argument beyond my actual parameter type is that it will throw an error. To avoid this problem, we use 'Generics.
  
  
  function printString(x: string): string {
    return x;
  }
  
  function printNumber(x: number): number {
    return x;
  }
  
  function printBoolean(x: boolean): boolean {
    return x
  }
  
  console.log(printString("Mohammad Danish"))
  console.log(printNumber(21))
  console.log(printBoolean(true));
  
  
  
  
  // What will happen if we pass an argument beyond my actual parameter type is that it will throw an error. To avoid this problem, we use 'Generics.
  
  
  function uniqueDataTypesFunc<T>(items: T, defaultValue: T): [T, T] {
    return [items, defaultValue];
  }
  
  console.log(uniqueDataTypesFunc(21, 9));
  console.log(uniqueDataTypesFunc<string>('Mohammad Danish', '21'))
  
  
  
  interface Dog {
    breedName: string
    breedColor: string
  }
  
  console.log(uniqueDataTypesFunc<Dog>(
    { breedName: "GermanSherfar", breedColor: "Black" },
    { breedName: "Labrador", breedColor: "Golden" }
  ));
  
  
  
  function getRandomKeyValues<T>(obj: { [key: string]: T }): { key: string, value: T } {
    const keys = Object.keys(obj); // Get all keys from the object
    const randKey = keys[Math.floor(Math.random() * keys.length)]; // Select a random key
    return { key: randKey, value: obj[randKey] }; // Return the key and its corresponding value
  }
  
  const stringObj = { a: "apple", b: "banana", c: "cherry" };
  const result = getRandomKeyValues<string>(stringObj);
  
  console.log(result); // Example output: { key: "b", value: "banana" }
  
  
  interface dataBase {
    userName: string;
    userPassword: string;
  }
  
  interface car {
    carName: string;
    carBrand: string;
    carModel: number,
  }
  
  function GetDataFromDB<T, U, V>(valueOne: T, valueTwo: U, valueThree: V): Object {
    return { valueOne, valueTwo, valueThree };
  }
  
  
  // Correct usage: valueTwo must match the `dataBase` interface
  console.log(GetDataFromDB<string, dataBase, car>("Mohammad Danish", { userName: "Mohammad Danish", userPassword: "123Password" }, { carName: "Verna", carBrand: "Hyundai", carModel: 2021 }));
  
  // function filterArray<T>(array: T[]): T[] {
  //   return array.filter((item)=>{
  //     return item % 2 === 0;
  //   }) 
  // }
  
  // function filterArray<T>(array: T[]): T[] {
  //   return array.filter((num: any) => num % 2 === 0);
  // }
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // console.log(filterArray<number>(numberArray));
  
  function filterArray<T>(array: T[], condition:(item:T)=>boolean): T[] {
    return array.filter((item)=> condition(item)) ;
  }
  
  
  
  const stringArr = ["apple", "banana", "cherry", "date"];
  const shortWord = filterArray<string>(stringArr, (word)=>word.length<6);
  console.log(shortWord)
  
  
  
  interface Fruit{
    name: string, 
    color: string
  }
  
  const fruits : Fruit[] = [
    {name : "Apple" , color : "red"},
    {name : "Banana" , color : "yed"},
    {name : "Cherry" , color : "red"},
    {name : "Mango" , color : "yellow"},
    {name : "Grapes" , color : "green"},
    {name : "Blackgrapes" , color : "Black"},
    {name : "Papaya" , color : "orange"},
  ]
  
  
  const fruitsColor = filterArray<Fruit>(fruits, (fruit)=>fruit.color === "red");
  console.log(fruitsColor)
  
  
  
  
  // Generic with class
  
  class Box<T>{
    private content : T;
  
    constructor(content : T){
      this.content = content
    }
  
    getter() : T{
      return this.content;
    }
  
    setter(newContent: T) : void{
      this.content = newContent;
      console.log(`New Content is ${newContent}`);
    }
  }
  
  const StringBox = new Box("Hello Box");
  console.log(StringBox.getter());
  
  const NumberBox = new Box(20);
  console.log(NumberBox.getter());
  
  NumberBox.setter(21);
  console.log(NumberBox.getter());
  
  console.log(document);
  