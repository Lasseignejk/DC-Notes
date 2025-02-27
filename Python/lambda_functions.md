# Lambda Functions

Lambda functions are anonymous, single-expression functions taht are useful for short, throwaway operations where defining a full `def` function would be overkill. They are often used for simple transformations, filtering, or sorting operations.

## Key features

- Concise: Defined in a single line using `lambda arguments: expression`
- Anonymous: No need to explicitly define a function name
- Limited Use Cases: Best suited for simple operations, not complex logic

### Common Use Casses

1. Using with `map()`, `filter()`, and `reduce()`

```
numbers = [1,2,3,4,5]

squared = list(map(lambda x: x**2, numbers))
print(squared)

even_numbers = list(filter(lambda x: x%2 == 0, numbers))
print(even_numbers_)

students = [("Alice", 25), ("Bob", 20), ("Charlie", 23)]
sorted_students = sorted(students, key=lambda x: x[1])
print(sorted_students)  # Output: [('Bob', 20), ('Charlie', 23), ('Alice', 25)]

```
