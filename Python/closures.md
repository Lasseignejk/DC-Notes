Closure is a function having access to the scope of its parent function after the parent function has returned.

In Python, closures are a way to retain access to variables from an enclosing scope even after that scope has finished executing. They are created when a nested function remembers the variables from its enclosing function even if the enclosing function has returned.

```
def outer_function(message):
	def inner_function():
		print(f"Message: {message}") #'message' comes from the outer scope
	return inner_function

closure_example = outer_function('Hello, Closure!')
closure_example()
```

`outer_function("Hello, Closure!")` runs, creating `inner_function` with access to `message`

It returns `inner_function`, but doesn't execute it yet

When we call closure_example(), it prints "Message: Hello, Closure!", even though `outer_function` has already finished executing.

## Why use closures?

1. Data encapsulation: Closures can 'remember' state without using global variables
2. Function factories: They can generate specialized functions
3. Avoiding global variables: They help manage state in a controlled way

## Examples

```
def multiplier(factor):
    def multiply(number):
        return number * factor  # 'factor' is remembered
    return multiply

double = multiplier(2)
triple = multiplier(3)

print(double(5))  # Output: 10
print(triple(5))  # Output: 15

```

```
def create_logger(prefix):
    def log_message(message):
        print(f"[{prefix}] {message}")  # 'prefix' is remembered
    return log_message

info_logger = create_logger("INFO")
error_logger = create_logger("ERROR")

info_logger("System is running smoothly.")
# Output: [INFO] System is running smoothly.

error_logger("An error occurred while processing the request.")
# Output: [ERROR] An error occurred while processing the request.

```

So you create an instance of the parent function that is attached to a variable (info_logger) and you pass it the argument for the parent. Then when you call the variable, you pass in the arguments for the nested function?

Yes, exactly! You're creating an instance of the closure when you call the outer function (create_logger), and then later, when you call that instance (info_logger), you pass the arguments for the inner function.

### 1. Call the outer function (`create_logger`)

- This runs `create_logger("INFO")`, which:
  - Defines the inner function `log_message(message)`
  - Remembers the `prefix` value ("INFO") via closure.
  - Returns `log_message` but doesn't execute it yet.

### 2. Call the inner function via the closure (`info_logger`)

`info_logger("System is running smoothly.")`

- Since `info_logger` is the returned function `log_message`, calling it is like calling `log_message("System is running smoothly.")`
- Inside `log_message`, `"INFO"` is already stored in the closure, so it prints:
  `[INFO] System is running smoothly.`

### 3. Create another closure (`error_logger`)

`error_logger = create_logger("ERROR")`

- This creates a new instance of `log_message`, but this time, it remembers `"ERROR"` instead of `"INFO"`.

### Key Takeaways

- Each call to `create_logger()` creates a new closure instance with its own remembered value (`prefix`).
- The inner function (log_message) remembers `prefix` from the outer function.
- When you call `info_logger()`, you're actually calling `log_message()`, but it still has access to `prefix`.

```
def rate_limiter(max_calls):
    count = 0  # This variable is "remembered" inside the closure

    def limit():
        nonlocal count
        if count < max_calls:
            count += 1
            return f"API call {count} allowed"
        else:
            return "Rate limit exceeded!"

    return limit

user_api = rate_limiter(3)  # User can make 3 API calls

print(user_api())  # API call 1 allowed
print(user_api())  # API call 2 allowed
print(user_api())  # API call 3 allowed
print(user_api())  # Rate limit exceeded!
```
