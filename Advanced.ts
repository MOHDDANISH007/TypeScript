// date 29/01/25

// Array In typeScript


// In TypeScript, an array is a special variable that can hold multiple values of the same type. It is like a list where you can store and manage multiple items together.

// Example:
// let numbers: number[] = [1, 2, 3, 4, 5];
// Here, numbers is an array that can store only numbers.

// Key Points:
// Arrays store multiple values in a single variable.
// All elements in an array must be of the same type.
// You can access elements using their index (position in the array).


// Example with Strings:
// let fruits: string[] = ["Apple", "Banana", "Mango"];
// console.log(fruits[0]); // Output: Apple

// Alternative Way (Using Array Type)
// let marks: Array<number> = [85, 90, 78];
// Would you like to see more examples? 😊





// You said:
// let marks: Array<number> = [85, 90, 78];
// how to use in string 
// ChatGPT said:
// ChatGPT
// If you want to create an array of strings in TypeScript using the Array<T> syntax, you can do it like this:

// typescript
// Copy
// Edit
// let fruits: Array<string> = ["Apple", "Banana", "Mango"];
// console.log(fruits[0]); // Output: Apple

// This is the same as using string[], but written differently.

// Alternative Way:
// typescript
// Copy
// Edit
// let fruits: string[] = ["Apple", "Banana", "Mango"];
// Both ways work the same. Do you prefer using Array<string> or string[]? 😊




let ArrayNumber : number[] = [1,2,3,4,5];

console.log(`Array=> ${ArrayNumber}`)

ArrayNumber.push(21);

console.log(ArrayNumber)
ArrayNumber.unshift(21);
console.log(ArrayNumber)

const filterArray = ArrayNumber.filter((ArrayValue : number) =>{
    return ArrayValue !== 21;
})

console.log(filterArray)



// New way to Assign Number 
let NewArray : Array<string> = ['Mohammad', 'Danish' ,'21'];
console.log(NewArray);


let NewArray2: any[] = ["Mohammad", "Danish", { Age: "21" },{
    Address : "529/234/4-5(333)LajPatNagar NewDelhi",
    city : "New Delhi",
    Area : "LajPatNagar"
}];

console.log(NewArray2);

// slice method 


console.log(NewArray2.slice(1, 3));


// splice method
console.log("Splice Method", NewArray2.splice(0,3));

console.log(NewArray2)


// multidimensional Array

let singleDi : number[]     = [1,2,3,4,5];
let twoDi    : number[][]   = [[1,2,3,4,5], [6,7,8,9,10]];
let threeDi  : number[][][] = [[[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15]]]


console.log(`Single Dimensional Array is ${singleDi}`)
console.log(`Two Dimensional Array is ${twoDi}`)
console.log(`Three Dimensional Array is ${threeDi}`)
  


// What is an Object in TypeScript?

// An object in TypeScript is a collection of key-value pairs where each key has a specific value type. 
// It is used to store multiple related values in a structured way.

// syntax => "type variableName (annotations/types) = { property: value }"

// Example of an Object

// let person = {
//     name: "Mohammad Danish",
//     age: 21,
//     isStudent: true
// };

// console.log(person.name); // Output: Mohammad Danish
// console.log(person.age);  // Output: 21
// Here:

// name is a string.
// age is a number.
// isStudent is a boolean.



let Person = {
    "name" : "Danish",
    "age"  : 21
}

console.log(Person)

Person['age'] = 22;
console.log(Person)

Person["name"] = "Mohammad Danish"
console.log(Person)


// object as function return value;


function person() : {name:string, age:number, country :string , city:string , class: string} {
    return{
        name : "Mohammad Babar",
        age  : 15,
        country : "India",
        city : "Lucknow",
        class : "9" + "th",
    }
}


console.log(person());




// What is Type Alias in TypeScript?                                                            
  
  

//A Type Alias in TypeScript is a way to give a custom name to a type. It helps make your code more readable and reusable.

// =======================================================================OR=============================================================================

// A Type Alias is way to create a new name for an existing type. It allows you to define a custom type that refers to another type  and give it more meaningfull or descriptive name 
// Type Aliases are defined  using type keyword followed by the name of the alias, an equal sign(=) and the type if refers to....

// Simple Example

// type Person = {
//     name: string;
//     age: number;
// };

// let student: Person = { name: "Danish", age: 21 };
// console.log(student.name); // Output: Danish

// Here:

// type Person creates a custom type.
// Now, instead of writing { name: string; age: number; } every time, we can just use Person.
// Why Use Type Alias?
// Makes code cleaner (no need to repeat type definitions).
// Improves readability (easy to understand what a variable represents).
// Reusability (use the same type in multiple places).
// Using Type Alias for Different Data Types
// For a Single Value Type

// type ID = number;
// let userId: ID = 101; // Same as: let userId: number = 101;

// For an Object

// type Car = {
//     brand: string;
//     model: string;
//     year: number;
// };

// let myCar: Car = { brand: "Toyota", model: "Corolla", year: 2022 };
// For an Array

// type Names = string[];
// let students: Names = ["Danish", "Ali", "Sara"];
// For Union Types (Multiple Types Allowed)

// type Status = "success" | "error" | "loading";
// let currentStatus: Status = "success";


type myString = string;

let hello : myString = "hello";

console.log(hello)
console.log(typeof hello);



// function person() : {name:string, age:number, country :string , city:string , class: string} {
//     return{
//         name : "Mohammad Babar",
//         age  : 15,
//         country : "India",
//         city : "Lucknow",
//         class : "9" + "th",
//     }
// }

// instead writing this {name:string, age:number, country :string , city:string , class: string} thing so many we define our custom type


// type personObject = {
//   name: string,
//   age: number,
//   country: string,
//   city: string,
//   programming_Language: Array<string>;
// }

// function PersonInformation(): personObject {
//   return {
//     name: "John Doe",
//     age: 30,
//     country: "USA",
//     city: "New York",
//     programming_Language: ["JavaScript", "TypeScript", "C++","ReactJs", "NodeJs"]
//   };
// }



type personObject = {
    name: string;
    age: number;
    country: string;
    city: string;
    programming_Language: string[];
};

const PersonInformation = (personInfo: personObject) :string => {
    return `Name: ${personInfo.name}, Age: ${personInfo.age}, Country: ${personInfo.country}, City: ${personInfo.city}, Programming Languages: ${personInfo.programming_Language.join(", ")}`;
};

console.log(PersonInformation({
    name: "John Doe",
    age: 30,
    country: "USA",
    city: "New York",
    programming_Language: ["JavaScript", "TypeScript", "C++", "ReactJs", "NodeJs"],
}));





// What is an Optional Property in TypeScript?

// An optional property in TypeScript is a property that may or may not exist in an object. It is defined using a ? (question mark) after the property name.

// Example: Optional Property in an Object

// type Person = {
//     name: string;
//     age?: number; // Optional property
// };

// let person1: Person = { name: "Danish" }; // ✅ Valid (age is missing)
// let person2: Person = { name: "Ali", age: 25 }; // ✅ Valid (age is present)

// console.log(person1.name); // Output: Danish
// console.log(person1.age);  // Output: undefined (since age is not given)

// Here, age? means the age property is optional. The object can have age, but it is not required.

// Why Use Optional Properties?
// Flexibility – Not every object needs to have all properties.
// Avoid Errors – You don’t need to provide a value for every property.
// Useful for Partial Data – When working with APIs or forms, some fields may be optional.
// Accessing Optional Properties
// Since an optional property might be undefined, you should check before using it:


// if (person1.age !== undefined) {
//     console.log(`Age: ${person1.age}`);
// } else {
//     console.log("Age is not provided");
// }
// Or use optional chaining (?.):


// console.log(person1.age?.toString()); // Won't throw an error if age is undefined
// Example with Functions
// Optional properties are useful in function parameters:

// function greet(person: { name: string; age?: number }) {
//     if (person.age) {
//         console.log(`Hello ${person.name}, you are ${person.age} years old.`);
//     } else {
//         console.log(`Hello ${person.name}, age not provided.`);
//     }
// }

// greet({ name: "Danish" }); // Output: Hello Danish, age not provided.
// greet({ name: "Ali", age: 25 }); // Output: Hello Ali, you are 25 years old.

type OptionalProperty = {
    name : string,
    age : number ,
    readonly email?: string; 
}

// arrow function to use this OptionalProperty

const OptionaInformation1 = (info : OptionalProperty) :string => {
    return `Name: is ${info.name} And the Age: is ${info.age} And Your Email: is ${info.email}`;
}

const OptionaInformation2 = (info : OptionalProperty) :string => {
    return `Name: is ${info.name} And the Age: is ${info.age} And Your Email: is ${info.email}`;
}



console.log(OptionaInformation1({name : "Mohammad Danish", age: 21, email:"danny_boy707@gmail.com"}))
console.log(OptionaInformation2({name : "Mohammad Danish", age: 21}));

let ChangingValue : OptionalProperty={
    name : "Mohammad Danish",
    age : 21 ,
    email : "modaskdas"
}


console.log(ChangingValue)
// we can't change this property if we declare like this "readOnly : PropertyName"
// ChangingValue.email = "mohdanish@gmail.com"
console.log(ChangingValue)




// What is an Intersection Type in TypeScript?                    

// An Intersection Type in TypeScript allows you to combine multiple types into one using the & (ampersand) operator. 
// It merges properties from different types into a single type.

// Example of Intersection Type

// type Person = {
//     name: string;
//     age: number;
// };

// type Employee = {
//     company: string;
//     position: string;
// };

// type EmployeeDetails = Person & Employee;

// let employee: EmployeeDetails = {
//     name: "Danish",
//     age: 25,
//     company: "Google",
//     position: "Software Engineer"
// };

// console.log(employee);

// }
//   name: "Danish",
//   age: 25,
//   company: "Google",
//   position: "Software Engineer"
// }

// How Intersection Types Work
// Person defines properties: name and age.
// Employee defines properties: company and position.
// EmployeeDetails = Person & Employee combines both types.
// Now, EmployeeDetails must have all four properties.




type Student = {
    StudentName: string;
    StudentAge: number;
    StudentEmailId: string;
    StudentCourseName: string;
    StudentBranchName: string;
};

type ComputerScienceDetails = {
    CourseStartingDate: string;
    CourseEndingDate: string;
    Specialization: string;
};

type CivilEngineeringDetails = {
    CourseStartingDate: string;
    CourseEndingDate: string;
    Specialization: string;
};
type genderType = {
    gender? : string
}

// Using intersection to combine Student with specific details
type ComputerScienceStudent = Student & ComputerScienceDetails & genderType;
type CivilEngineeringStudent = Student & CivilEngineeringDetails;


const csStudent: ComputerScienceStudent = {
    StudentName: "John Doe",
    StudentAge: 22,
    StudentEmailId: "johndoe@example.com",
    StudentCourseName: "B.Tech",
    StudentBranchName: "Computer Science",
    CourseStartingDate: "2023-08-01",
    CourseEndingDate: "2027-06-01",
    Specialization: "Artificial Intelligence"
};

console.log(csStudent)



// what is Union

// // A union type means a variable can be either type A or type B.
// It is useful when a value can belong to multiple categories


let myVariable : string | number | boolean | any[];

myVariable = "Mohammad Danish"
console.log(myVariable);

myVariable = 21;
console.log(myVariable)

myVariable = true;
console.log(myVariable)
console.log(myVariable)

myVariable = [1,2,3,4,5, "Mohammad Mobasshir"];
console.log(myVariable);




// Union (|) vs. Intersection (&) in TypeScript
// Both union types (|) and intersection types (&) allow you to work with multiple types, but they serve different purposes.

// 1. Union Type (|) – Either One Type or Another
// A union type means a variable can be either type A or type B.
// It is useful when a value can belong to multiple categories.

// 🔹 Example:
// A variable can store either a string or a number:

// let value: string | number;

// value = "Hello"; // ✅ Valid
// value = 42;      // ✅ Valid
// value = true;    // ❌ Error: Type 'boolean' is not assignable to 'string | number'.
// ✅ Use case: When a value can be multiple things but not at the same time.

// 2. Intersection Type (&) – Must Have All Properties
// An intersection type combines multiple types into one object.
// The result must have all properties from both types.

// 🔹 Example:
// A developer is both a person and has skills:

// type Person = {
//     name: string;
//     age: number;
// };

// type Developer = {
//     programmingLanguages: string[];
// };

// type DeveloperPerson = Person & Developer; // Intersection

// const dev: DeveloperPerson = {
//     name: "Alice",
//     age: 25,
//     programmingLanguages: ["JavaScript", "TypeScript"],
// };

// console.log(dev.name); // ✅ "Alice"
// console.log(dev.programmingLanguages); // ✅ ["JavaScript", "TypeScript"]
// ✅ Use case: When an object must satisfy both types.




// what is Literal Type 

// A literal in TypeScript refers to a specific, fixed value rather than a general type. It can be a string, number, boolean, or even a combination of these.

// 1. String Literal Types
// A variable can have only specific string values.


// type Direction = "left" | "right" | "up" | "down";

// let move: Direction;

// move = "left";  // ✅ Valid
// move = "right"; // ✅ Valid
// move = "forward"; // ❌ Error: Type '"forward"' is not assignable to type '"left" | "right" | "up" | "down"'.
// ✅ Use Case: Restricting a variable to only a few allowed values.

// 2. Number Literal Types
// A variable can have specific number values.


// type StatusCode = 200 | 400 | 404 | 500;

// let response: StatusCode;

// response = 200;  // ✅ Valid
// response = 404;  // ✅ Valid
// response = 201;  // ❌ Error: Type '201' is not assignable to type '200 | 400 | 404 | 500'.
// ✅ Use Case: Defining fixed values like HTTP status codes.

// 3. Boolean Literal Types
// A variable can be only true or false.

// type IsEnabled = true;

// let feature: IsEnabled;


// 4. Combining Literals with Unions
// Literal types are often used with union types for flexibility.


// type Mode = "dark" | "light" | "auto";

// function setMode(mode: Mode) {
//     console.log(`Mode set to: ${mode}`);
// }

// setMode("dark");  // ✅ Valid
// setMode("light"); // ✅ Valid
// setMode("blue");  // ❌ Error: Argument of type '"blue"' is not assignable to type '"dark" | "light" | "auto"'.
// ✅ Use Case: Defining valid modes, themes, or states.

// 5. Template Literal Types (Advanced)
// Introduced in TypeScript 4.1, template literal types allow more dynamic values.


// type Sizes = "small" | "medium" | "large";
// type Colors = "red" | "blue" | "green";

// type Shirt = `${Sizes}-${Colors}`;

// let myShirt: Shirt;

// myShirt = "small-red";   // ✅ Valid
// myShirt = "large-blue";  // ✅ Valid
// myShirt = "tiny-purple"; // ❌ Error: Type '"tiny-purple"' is not assignable to type '"small-red" | "small-blue" | "small-green" | "medium-red" | "medium-blue" | "medium-green" | "large-red" | "large-blue" | "large-green"'.






// feature = true;  // ✅ Valid
// feature = false; // ❌ Error: Type 'false' is not assignable to type 'true'.






type Success = "success" | 200

let result : Success;
result = "success";
result = 200


console.log(result)



type statusCode = 200 | 404 | 500;




const  SetStatusCode = (code : statusCode) :string=>{
    if(code === 200){
        return `Get The data and StatusCode is ${code}`
    }
    else if(code === 404){
        return `Page Not Found and Status Code is ${code}`
    }
    else{
        return `Server Busy Please Try After Some Time and Status Code is ${code}`
    }
}

console.log(SetStatusCode(500));
console.log(SetStatusCode(500));
console.log(SetStatusCode(200));


// Tuples

// Tuples in TypeScript (Simple Explanation)                                                                                                                                            
  
  
  
  
  
  
  
// A tuple in TypeScript is a fixed-length array where each element has a specific type.

// Example:
                    
  
// let person: [string, number] = ["Danish", 25];

// The first element must be a string ("Danish")

// The second element must be a number (25).
    
// Key Features:
// Fixed Length – You cannot add more elements than defined.
// Ordered Types – Each position has a predefined type.
// Allows Multiple Data Types – Unlike regular arrays, tuples enforce strict type positions.


let Tupleperson : [string, number, string];


Tupleperson = ["Mohammad Danish", 21, "mohddanish8948442467@gmail.com"];


// Give Error Because number is using in this TuplePerson...
// Tupleperson = ["Mohammad Mobasshir", "mohddanish8948442467@gmail.com"];

console.log(Tupleperson);

// console.log(Tupleperson.includes("Mohammad Danish"))


// Optinal Property With TuplePerson

// Optional elements (?) must be at the end of a tuple.

let Tupleperson2 : [string, string, number?];
Tupleperson2 = ["Mohammad Mobasshir", "mohammadMobsshirAli@gmail.com"];
console.log(Tupleperson2)


