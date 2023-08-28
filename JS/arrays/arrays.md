# Javascript Arrays

Arrays are one of the main data types in Javascript. They can hold all other primitive types, even in the same array.

    const allTypes = ["string", 1, true, ["nested array"], {object: "in an array"}]

In Javascript, arrays use square brackets.

    const dogs = ["husky", "boxer", "lab", "golden", "pug"]

You can access the elements inside by using the index of the element. Arrays in Javascript are `0 indexed`, meaning the first element's index is 0, the second is 1, and so on. Put the index of the element you want to grab in square brackets next to the name of the array, like this: `dogs[0]`

    console.log(dogs[0]) // "husky"
    console.log(dogs[3]) // "golden"

Use the length property to see how long an array is (how many items it contains)

    console.log(dogs.length) // 5

Arrays are `iterable`, meaning we can loop through them. This is usually how arrays are used! There are a couple different kinds of loops:

-   the regular for loop
-   array.forEach()
-   for of loop
-   array.map()

## Array Methods

-   `.push()` -- adds something to the end of an array
-   `.pop()` -- removes and returns the element at the end of an array
-   `.slice()` -- takes in a start/stop point and returns a new array with the sliced elements. The original array is unchanged.
-   `.splice()` -- takes in a start, deleteCount, and an item to insert. Mutates the original array.
-   `.sort()` -- sorts the array. Default is ascending. Can pass a function in to sort in other ways.
-   `.reverse()` -- reverses an array. Mutates the original array.
-   `.filter()` -- filters the items in an array based on a condition you pass. The original array is unchanged.
-   `.reduce()` -- executes a callback function on each element, then adds that element to a total value. Only returns one value.
-   `.indexOf()` -- returns the index of the first instance of an element you pass. Returns `-1` if the element isn't found.
-   `.includes()` -- returns a boolean value based on if a passed in element is in the array or not
