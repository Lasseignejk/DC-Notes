# Slalom Quest 1 
TS is a superset of JS -- TS is still JS. 

Static languages check the types at compile-time, after you write it but before you run it. 

Dynamic languages (like JS) determine the types at run-time, and it doesn't care. 


```
const someString: string = 'example'
const someNumber: number = 453
const someBoolean: boolean = true 
const firstPrimes: number[] = [2,3,5,7,11]
```

In vanilla JS, arrays can hold any data type. In TS, you have to tell it all the data types it's expected to contain. 

If you want to initialize a variable without declaring it... 
```
let someString: string

let someString = "Hello" 
```
They think this will work? They're not sure if it'll have to be a union type with undefined or null or something

<a href="https://www.tutorialspoint.com/explain-the-concept-of-null-and-its-uses-in-typescript#:~:text=In%20TypeScript%2C%20'null'%20refers,type%20or%20initialize%20the%20variable"></a>

Typescript does have some optimizations and stuff, but it's mostly to help developers

Elements in the DOM can be specified using either a general type or a more specific type. Both are valid. 

    const someButton: HTMLElement = document.createElement('button')
    const someOtherButton: HTMLButtonElement = document.createElement('button')

Type assertions basically say "look, I know this is an HTMLElement. I know there's a chance it could be null, but ignore it." 

If you use type assertion, you don't need to have `const someOtherButton: HTMLButton Element`, but you can keep it if you want to be super specific. 



