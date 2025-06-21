export interface Question {
  id: number;
  title: string;
  description: string;
  starterCode: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  estimatedTime: number;
  example?: string;
  hints?: string[];
}

export const questions: Question[] = [
  {
    id: 1,
    title: "Print 'Hello World'",
    description: "Write a program to display 'Hello World' in the console.",
    starterCode: "// Write your code here\n",
    difficulty: 'Easy',
    estimatedTime: 2,
    example: "Output: Hello World",
    hints: ["Use console.log() to print to the console", "Remember to use quotes around the text"]
  },
  {
    id: 2,
    title: "Print the addition of two numbers",
    description: "Create variables for two numbers and print their sum.",
    starterCode: "// Define two numbers and add them\nlet num1 = 5;\nlet num2 = 3;\n// Add your code here\n",
    difficulty: 'Easy',
    estimatedTime: 3,
    example: "Input: 5, 3\nOutput: 8",
    hints: ["Use the + operator to add numbers", "Store the result in a variable before printing"]
  },
  {
    id: 3,
    title: "Find the square root of a number",
    description: "Calculate and display the square root of a given number.",
    starterCode: "// Find square root of a number\nlet number = 16;\n// Add your code here\n",
    difficulty: 'Easy',
    estimatedTime: 3,
    example: "Input: 16\nOutput: 4",
    hints: ["Use Math.sqrt() function", "You can also use Math.pow(number, 0.5)"]
  },
  {
    id: 4,
    title: "Calculate the area of a triangle",
    description: "Given the base and height of a triangle, calculate its area using the formula: Area = (base * height) / 2",
    starterCode: "// Calculate triangle area\nlet base = 10;\nlet height = 8;\n// Add your code here\n",
    difficulty: 'Easy',
    estimatedTime: 4,
    example: "Input: base=10, height=8\nOutput: 40",
    hints: ["Area formula: (base * height) / 2", "Make sure to use parentheses for correct order of operations"]
  },
  {
    id: 5,
    title: "Swap two variables",
    description: "Exchange the values of two variables and display the result.",
    starterCode: "// Swap two variables\nlet a = 5;\nlet b = 10;\nconsole.log('Before swap: a =', a, ', b =', b);\n// Add your code here\nconsole.log('After swap: a =', a, ', b =', b);\n",
    difficulty: 'Easy',
    estimatedTime: 5,
    example: "Before: a=5, b=10\nAfter: a=10, b=5",
    hints: ["Use a temporary variable to store one value", "Or use destructuring: [a, b] = [b, a]"]
  },
  {
    id: 6,
    title: "Convert Celsius to Fahrenheit",
    description: "Convert a temperature from Celsius to Fahrenheit using the formula: F = (C * 9/5) + 32",
    starterCode: "// Convert Celsius to Fahrenheit\nlet celsius = 25;\n// Add your code here\n",
    difficulty: 'Easy',
    estimatedTime: 4,
    example: "Input: 25°C\nOutput: 77°F",
    hints: ["Formula: F = (C * 9/5) + 32", "Remember to use parentheses for correct calculation order"]
  },
  {
    id: 7,
    title: "Generate a random number",
    description: "Generate and display a random number between 1 and 100.",
    starterCode: "// Generate random number between 1 and 100\n// Add your code here\n",
    difficulty: 'Easy',
    estimatedTime: 3,
    example: "Output: Random number like 42, 73, 15, etc.",
    hints: ["Use Math.random() which gives 0-1", "Multiply by 100 and use Math.floor()", "Add 1 to get range 1-100"]
  },
  {
    id: 8,
    title: "Check if a number is positive, negative, or zero",
    description: "Write a program that checks whether a given number is positive, negative, or zero.",
    starterCode: "// Check if number is positive, negative, or zero\nlet number = -5;\n// Add your code here\n",
    difficulty: 'Easy',
    estimatedTime: 5,
    example: "Input: -5\nOutput: The number is negative",
    hints: ["Use if-else statements", "Check for zero first, then positive/negative", "Use comparison operators: >, <, ==="]
  },
  {
    id: 9,
    title: "Check if a number is odd or even",
    description: "Determine whether a given number is odd or even.",
    starterCode: "// Check if number is odd or even\nlet number = 7;\n// Add your code here\n",
    difficulty: 'Easy',
    estimatedTime: 4,
    example: "Input: 7\nOutput: 7 is odd",
    hints: ["Use the modulo operator (%)", "If number % 2 === 0, it's even", "Otherwise, it's odd"]
  },
  {
    id: 10,
    title: "Find the largest among three numbers",
    description: "Compare three numbers and find the largest one.",
    starterCode: "// Find largest of three numbers\nlet num1 = 15;\nlet num2 = 8;\nlet num3 = 22;\n// Add your code here\n",
    difficulty: 'Easy',
    estimatedTime: 6,
    example: "Input: 15, 8, 22\nOutput: The largest number is 22",
    hints: ["Use nested if-else statements", "Compare two numbers first, then compare result with third", "You can also use Math.max(num1, num2, num3)"]
  },
  {
    id: 11,
    title: "Check if a number is a prime number",
    description: "Determine whether a given number is prime (only divisible by 1 and itself).",
    starterCode: "// Check if number is prime\nlet number = 17;\n// Add your code here\n",
    difficulty: 'Medium',
    estimatedTime: 8,
    example: "Input: 17\nOutput: 17 is a prime number",
    hints: ["Numbers less than 2 are not prime", "Check divisibility from 2 to sqrt(number)", "Use a loop and modulo operator"]
  },
  {
    id: 12,
    title: "Display the multiplication table",
    description: "Print the multiplication table for a given number from 1 to 10.",
    starterCode: "// Display multiplication table\nlet number = 5;\n// Add your code here\n",
    difficulty: 'Easy',
    estimatedTime: 6,
    example: "Input: 5\nOutput: 5 x 1 = 5, 5 x 2 = 10, ..., 5 x 10 = 50",
    hints: ["Use a for loop from 1 to 10", "Multiply the number by loop variable", "Format output nicely"]
  },
  {
    id: 13,
    title: "Check if a number is an Armstrong number",
    description: "An Armstrong number is equal to the sum of its digits raised to the power of number of digits. (e.g., 153 = 1³ + 5³ + 3³)",
    starterCode: "// Check if number is Armstrong number\nlet number = 153;\n// Add your code here\n",
    difficulty: 'Medium',
    estimatedTime: 12,
    example: "Input: 153\nOutput: 153 is an Armstrong number",
    hints: ["Convert number to string to get digits", "Count number of digits", "Calculate sum of each digit raised to power of digit count"]
  },
  {
    id: 14,
    title: "Find the sum of natural numbers",
    description: "Calculate the sum of first N natural numbers (1 + 2 + 3 + ... + N).",
    starterCode: "// Find sum of first N natural numbers\nlet n = 10;\n// Add your code here\n",
    difficulty: 'Easy',
    estimatedTime: 5,
    example: "Input: 10\nOutput: Sum = 55",
    hints: ["Use a for loop from 1 to n", "Add each number to a sum variable", "Formula: sum = n * (n + 1) / 2"]
  },
  {
    id: 15,
    title: "Make a simple calculator",
    description: "Create a calculator that can perform basic operations (+, -, *, /) on two numbers.",
    starterCode: "// Simple calculator\nlet num1 = 10;\nlet num2 = 5;\nlet operation = '+';\n// Add your code here\n",
    difficulty: 'Medium',
    estimatedTime: 10,
    example: "Input: 10, 5, '+'\nOutput: Result: 15",
    hints: ["Use switch statement or if-else", "Handle division by zero", "Support operations: +, -, *, /"]
  },
  {
    id: 16,
    title: "Reverse a string",
    description: "Take a string and reverse its characters.",
    starterCode: "// Reverse a string\nlet str = 'hello';\n// Add your code here\n",
    difficulty: 'Easy',
    estimatedTime: 6,
    example: "Input: 'hello'\nOutput: 'olleh'",
    hints: ["Use built-in methods: split(''), reverse(), join('')", "Or use a loop to build reversed string", "Or use recursion"]
  },
  {
    id: 17,
    title: "Check if a string is a palindrome",
    description: "Determine if a string reads the same forwards and backwards.",
    starterCode: "// Check if string is palindrome\nlet str = 'racecar';\n// Add your code here\n",
    difficulty: 'Medium',
    estimatedTime: 8,
    example: "Input: 'racecar'\nOutput: 'racecar' is a palindrome",
    hints: ["Compare string with its reverse", "Convert to lowercase for case-insensitive check", "Remove spaces and special characters if needed"]
  },
  {
    id: 18,
    title: "Count the vowels in a string",
    description: "Count how many vowels (a, e, i, o, u) are in a given string.",
    starterCode: "// Count vowels in string\nlet str = 'Hello World';\n// Add your code here\n",
    difficulty: 'Easy',
    estimatedTime: 7,
    example: "Input: 'Hello World'\nOutput: Number of vowels: 3",
    hints: ["Use a loop to check each character", "Create array of vowels to check against", "Convert to lowercase for easier comparison"]
  },
  {
    id: 19,
    title: "Count the elements in an array",
    description: "Find the length/count of elements in an array.",
    starterCode: "// Count array elements\nlet arr = [1, 2, 3, 4, 5, 6];\n// Add your code here\n",
    difficulty: 'Easy',
    estimatedTime: 3,
    example: "Input: [1, 2, 3, 4, 5, 6]\nOutput: Array has 6 elements",
    hints: ["Use the .length property", "You can also manually count with a loop"]
  },
  {
    id: 20,
    title: "Remove duplicates from an array",
    description: "Create a new array with duplicate values removed.",
    starterCode: "// Remove duplicates from array\nlet arr = [1, 2, 2, 3, 4, 4, 5];\n// Add your code here\n",
    difficulty: 'Medium',
    estimatedTime: 8,
    example: "Input: [1, 2, 2, 3, 4, 4, 5]\nOutput: [1, 2, 3, 4, 5]",
    hints: ["Use Set to remove duplicates: [...new Set(arr)]", "Or use filter with indexOf", "Or use reduce method"]
  },
  {
    id: 21,
    title: "Check if a property exists in an object",
    description: "Verify whether a specific property exists in a given object.",
    starterCode: "// Check if property exists in object\nlet obj = { name: 'John', age: 30, city: 'New York' };\nlet property = 'age';\n// Add your code here\n",
    difficulty: 'Easy',
    estimatedTime: 5,
    example: "Input: obj, 'age'\nOutput: Property 'age' exists",
    hints: ["Use 'in' operator", "Use hasOwnProperty() method", "Use Object.hasOwn() (modern approach)"]
  },
  {
    id: 22,
    title: "Add an item to an object",
    description: "Add a new property and value to an existing object.",
    starterCode: "// Add item to object\nlet obj = { name: 'John', age: 30 };\n// Add your code here\nconsole.log(obj);\n",
    difficulty: 'Easy',
    estimatedTime: 4,
    example: "Input: {name: 'John', age: 30}\nOutput: {name: 'John', age: 30, city: 'Boston'}",
    hints: ["Use dot notation: obj.newProperty = value", "Use bracket notation: obj['newProperty'] = value", "Use Object.assign() to add multiple properties"]
  },
  {
    id: 23,
    title: "Convert string to number and number to string",
    description: "Demonstrate type conversion between strings and numbers.",
    starterCode: "// Type conversion\nlet str = '123';\nlet num = 456;\n// Add your code here\n",
    difficulty: 'Easy',
    estimatedTime: 5,
    example: "String '123' to number: 123\nNumber 456 to string: '456'",
    hints: ["String to number: Number(str), parseInt(str), +str", "Number to string: String(num), num.toString(), num + ''"]
  },
  {
    id: 24,
    title: "Perform push and pop operations on an array",
    description: "Add elements to the end of an array (push) and remove elements from the end (pop).",
    starterCode: "// Array push and pop operations\nlet arr = [1, 2, 3];\nconsole.log('Original array:', arr);\n// Add your code here\n",
    difficulty: 'Easy',
    estimatedTime: 6,
    example: "Original: [1, 2, 3]\nAfter push(4): [1, 2, 3, 4]\nAfter pop(): [1, 2, 3]",
    hints: ["Use arr.push(element) to add to end", "Use arr.pop() to remove from end", "Pop returns the removed element"]
  },
  {
    id: 25,
    title: "Perform a splice operation on an array",
    description: "Use splice to add, remove, or replace elements at any position in an array.",
    starterCode: "// Array splice operation\nlet arr = [1, 2, 3, 4, 5];\nconsole.log('Original array:', arr);\n// Add your code here\n",
    difficulty: 'Medium',
    estimatedTime: 8,
    example: "Original: [1, 2, 3, 4, 5]\nSplice(2, 1, 'new'): [1, 2, 'new', 4, 5]",
    hints: ["Syntax: arr.splice(start, deleteCount, item1, item2, ...)", "Start: index to begin changes", "DeleteCount: number of elements to remove"]
  }
];