// Comment
const str: string = 'Hello, world!';
const num: number = 123;
const bool: boolean = true;
const n: null = null;
const u: undefined = undefined;

function greet(name: string): string {
	return `Hello, ${name}!`; // Template string
}

class Person {
	constructor(public name: string) {}
	speak(): void {
		console.log(`${this.name} speaks.`); // Method + template
	}
}

const regex = /test/i; // RegExp
const arr: number[] = [1, 2, 3];
const doubled = arr.map((n) => n * 2); // Arrow function

console.log(greet('Alice'), regex.test('Test'), doubled); // Function call
