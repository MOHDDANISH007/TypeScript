var myName = "Mohammad Danish";
console.log(myName);
var isBoolean = false;
var value = isBoolean === false ? true : false;
console.log(isBoolean);
console.log(value);
console.log(typeof myName);




// what is annotation in ts in simple way?                                                            
  
  
  
    
// In TypeScript, an annotation is simply a way to explicitly tell the compiler what type a variable, function parameter, or return value should have. It helps TypeScript understand and enforce the types you intend to use in your code.

// Example:
// typescript
// Copy
// let age: number = 25; // Here, `: number` is the annotation
// : number is the annotation, telling TypeScript that age should always be a number.

// Why use annotations?
// They make your code clearer and easier to understand.

// They help TypeScript catch errors early by ensuring you use the correct types.

// Another example:
// typescript
// Copy
// function greet(name: string): string {
//   return `Hello, ${name}!`;
// }
// name: string annotates that the name parameter must be a string.

// : string after the function annotates that the function will return a string.

// In short, annotations are like labels that tell TypeScript what types to expect.

    
// not understand




// No problem! Let me explain it in a super simple way with an example.

// Imagine you have a box, and you want to tell someone what should go inside the box. For example:

// If it’s a box for apples, you’d write "Apples Only" on it.

// If it’s a box for books, you’d write "Books Only."

// In TypeScript, annotations are like those labels. They tell TypeScript what kind of data (like numbers, strings, etc.) should go into a variable, function, or other places.

// Example 1: Variable Annotation
// typescript
// Copy
// let age: number = 25;
// Here, : number is the annotation.

// It’s like saying, "This box (variable age) can only hold numbers."

// If you try to put something else, like a string, TypeScript will give an error:

// typescript
// Copy
// age = "twenty"; // Error! "twenty" is a string, not a number.
// Example 2: Function Annotation
// typescript
// Copy
// function add(a: number, b: number): number {
//   return a + b;
// }
// a: number and b: number mean the function only accepts numbers as inputs.

// : number after the function means it will return a number.

// If you try to pass something else, TypeScript will complain:

// typescript
// Copy
// add(5, "10"); // Error! "10" is a string, not a number.
// Why use annotations?
// They help TypeScript catch mistakes in your code.        

// They make your code easier to understand because you know exactly what type of data is expected.





// what is Type Inference

//Type inference is like TypeScript being a smart guesser. It automatically figures out the type of a variable or value without you having to explicitly tell it.?

// ==================================================================================OR===============================================================================                                                                                                    
  

// Type Inference in TypeScript is the ability of the TypeScript compiler to automatically figure out (or "infer") the type of a variable, function, or expression based on the value you assign to it. This means you don’t always have to explicitly write the type—TypeScript can guess it for you!                             
  
// How Does Type Inference Work?
// When you declare a variable and assign a value to it, TypeScript looks at the value and says, "Okay, this looks like a number, so I’ll assume this variable is of type number."
// Example:
// let age = 25; // TypeScript infers `age` is a `number`
// let name = "Alice"; // TypeScript infers `name` is a `string`
// let isActive = true; // TypeScript infers `isActive` is a `boolean`
// In the above example:
// You didn’t explicitly write let age: number or let name: string.
// TypeScript automatically inferred the types based on the values you assigned.
// Why Is Type Inference Useful?
// Less Code: You don’t have to write types everywhere—TypeScript does the work for you.
// Safer Code: TypeScript still checks the types, so if you try to do something invalid (like assigning a string to a number), it will catch the error.
// Easier to Read: Code looks cleaner and simpler without unnecessary type annotations.
var Name = 21;
console.log(Name);
console.log(typeof Name);
// Name = "Danish"
console.log(Name);
console.log(typeof Name);


// what is any TypeScript


// The any type in TypeScript is like a "get out of jail free" card for types. It basically tells TypeScript:

// "I don’t care what type this is. Let me do whatever I want with it, and don’t check or enforce any type rules."


// ==================================================================================OR===============================================================================                                                                                                    
  


// The any type in TypeScript is a special type that essentially turns off TypeScript's type checking for a variable. When you use any, you’re telling TypeScript: "I don’t know what type this is, so don’t check it."
//This can be useful in some cases, but it also removes the safety and benefits of TypeScript's type system.
// What Does any Do?
// A variable of type any can hold any value: a number, string, boolean, object, array, function, etc.
// TypeScript won’t complain about what you do with it—no type errors, no warnings.
// Example:
// typescript
// Copy
// let data: any;
// data = 10; // No problem
// data = "Hello"; // No problem
// data = true; // No problem
// data = { name: "Alice" }; // No problem
// data = [1, 2, 3]; // No problem
// Why Use any?
// When You Don’t Know the Type:
// If you’re working with dynamic data (e.g., from an API or user input) and you’re not sure what type it will be, you might use any temporarily.
// typescript
// Copy
// let userInput: any = getUserInput(); // Could be a string, number, object, etc.
// Migrating from JavaScript:
// When converting a JavaScript project to TypeScript, you might use any as a quick way to make the code compile without fixing all the type errors immediately.
// Working with Third-Party Libraries:
// If a library doesn’t have TypeScript support or type definitions, you might use any to avoid type errors.
// Why Avoid any?
// While any can be convenient, it comes with downsides:
// Loses Type Safety:
// TypeScript can’t catch errors at compile time, which defeats the purpose of using TypeScript.
// typescript
// Copy
// let value: any = "Hello";
// value.toFixed(2); // No error at compile time, but will crash at runtime!
// Makes Code Harder to Understand:
// If everything is any, it’s unclear what types are expected, making the code harder to maintain and debug.
// Misses Out on Tooling:
// Features like autocomplete, refactoring, and type checking won’t work as well with any.
// When to Use any (and When Not To)
// Use any:
// Temporarily, when you’re unsure of the type and need to move quickly.
// When interacting with untyped JavaScript code or libraries.
// Avoid any:
// In most cases, try to use proper types (e.g., string, number, custom interfaces, etc.).
// Use unknown or type assertions (as) as safer alternatives to any.
// Example: any vs Proper Types
// Using any (Not Recommended):
// typescript
// Copy
// let user: any = { name: "Alice", age: 25 };
// console.log(user.name); // Works, but no type checking
// user.age = "thirty"; // No error, but this is wrong!
// Using Proper Types (Recommended):
// typescript
// Copy
// interface User {
//   name: string;
//   age: number;
// }
// let user: User = { name: "Alice", age: 25 };
// console.log(user.name); // Works, with type checking
// user.age = "thirty"; // Error: Type 'string' is not assignable to type 'number'
// Safer Alternatives to any
// unknown:
// Similar to any, but TypeScript forces you to check the type before using it.
// typescript
// Copy
// let data: unknown;
// data = "Hello";
// if (typeof data === "string") {
//   console.log(data.toUpperCase()); // Safe to use
// }
// Type Assertions (as):
// Tell TypeScript what type something is, but only if you’re sure.
// typescript
// Copy
// let value: any = "Hello";
// let length = (value as string).length; // Treat `value` as a string
// Key Takeaway
// The any type is a way to opt out of TypeScript's type checking. While it can be useful in some cases, overusing it defeats the purpose of TypeScript. Always prefer proper types or safer alternatives like unknown when possible.
var anyType;
console.log(typeof anyType);
anyType = "Mohammad Mobasshir Ali";
console.log(anyType);



//what is Function in typeScript



// Function 
// In TypeScript, Function Parameter Annotation refers to the process of specifying the types of the parameters that a function accepts. 
// This allows TypeScript to enforce type checking for the arguments passed to the function, ensuring that the function is called with the correct types. 
// It helps improve the reliability and maintainability of code by providing clear expectations of the types that a function can accept.                                        
                                                    
  
  
// Syntax for Function Parameter Annotation:
// When defining a function, you can annotate the parameters with types by using the : symbol followed by the type.

// Example:
// function greet(name: string, age: number): void {
//   console.log(`Hello, ${name}. You are ${age} years old.`);
// }


// In this example:
// name: string indicates that the name parameter must be a string.
// age: number indicates that the age parameter must be a number.
// : void after the parentheses indicates that the function doesn't return any value.
// Function Parameter Annotation Details:
// Explicit Type Annotation: You specify the exact type for each parameter.
// For example, name: string means the name argument must always be a string.
// Multiple Parameters with Annotations: You can annotate multiple parameters.

// what is Optional Parameter

// Example: function add(a: number, b: number): number.
// Optional Parameters: You can make parameters optional by using the ? symbol.                                        
  
  
// Example:
// function greet(name: string, age?: number): void {
//   if (age) {
//     console.log(`Hello, ${name}. You are ${age} years old.`);
//   } else {
//     console.log(`Hello, ${name}. Age not provided.`);
//   }
// }
function greet(name, age) {
    console.log("Hello ".concat(name, " , I hope you are good and your age is ").concat(age));
}
var v = greet("danish", 21);
console.log(v);
// arrow function
var greet1 = function (name, age) {
    console.log("Hello ".concat(name, " , I hope you are good and your age is ").concat(age));
    // return 21+"danish";
};
var v2 = greet1("Mohammad Mobasshir Ali", 21);
console.log(v2);
var addTwoNumber = function (x, y) {
    return x + y;
};
console.log(addTwoNumber(21, 9));
var anyTypeInArrow = function (xAny, yAny) {
    console.log("".concat(xAny, " and ").concat(yAny));
};
anyTypeInArrow("danish", 21);
console.log((123123.934312).toFixed(0));

// rest operator in typeScript 
var restOperator = function () {
    var xyz = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xyz[_i] = arguments[_i];
    }
    xyz.forEach(function (value) {
        console.log(value);
    });
    var sum = xyz.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);
    console.log(sum);
};
restOperator(1, 2, 3, 4, 5);


// if i want to return an array then ..
var returnArray = function (x, y) {
    console.log("Number 1st is ".concat(x, " And 2nd Number is ").concat(y));
    return [1, 2, 3, 4, 5];
};
console.log(returnArray(1, 2));
// Never keyword in TypeScript
function runForever() {
    var i = 1;
    while (true) {
        console.log(i++);
    }
}
// console.log(runForever());
