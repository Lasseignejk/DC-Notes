# Errors, Exceptions, and Saving JSON Data

## Handling Errors and Exceptions

    # FileNotFound
    with open("a_file.txt") as file:
        file.read()

    # KeyError
    a_dictionary = {"key": "value"}
    value = a_dictionary["non_existant_key"]

    # IndexError
    fruit_list = ["Apple", "Banana", "Pear"]
    fruit = fruit_list[3]

    # TypeError
    text = "abc"
    print(text + 5)

### Catching Exceptions

`try` -- something that might cause an exception. It'll probably work, but it might not and that's why it's called `try`

`except` -- if there was an exception, do this

`else` -- do this if there were no exceptions

`finally` -- do this no matter what happens. usually used to clean things up

Let's use the `FileNotFound` error above and add some catching to it.

    try:
        file = open("a_file.txt")
    except:
        print("There was an error")

If we run that code, we see in the console `There was an error`, instead of all the bright red text that yells at you.

But that error isn't super helpful. We want to write the code so that we're successful no matter what. So let's change the `except`

    except:
        file = open("a_file.txt", "w")
        file.write("Something")    # This line is just extra

Now, if the file doesn't exist, the `except` clause is triggered. It'll look for the file again, but this time, because we're in "w" mode, `write`, if it can't find it it'll <em>create</em> it.

You might see a warning squiggle under the `except` keyword. If you hover, it says `Too broad exception clause. do not use bare 'except'`. It's basically saying that with this short `except` clause, we're solving an error. But we're not covering all of our bases. It will ignore all errors, even ones that are not fixed by our current `except` clause. For example:

    try:
        file = open("a_file.txt")
        a_dictionary = {"key":"value"}
        print(a_dictionary["sdkljdf"])
    except:
        file = open("a_file.txt","w")
        file.write("Something")

So the code starts at the top. It says "open the a_file.txt file". This file exists, so it opens it. Next line, it creates a dictionary. Ok so far. Then the next line, "find the key "sdkljdf" in the dictionary and give me the value". That key doesn't exist, we've created an exception. But the only thing we have in our except is to create a file called "a_file.txt" if it doesn't exist and write "Something" in it. So if we run this code, we DON'T see an error print in the console. We also don't see the print(a_dictionary) line in the console either. We don't see anything. That's what it means when it says `bare 'except'`. We've only covered one exception and we're using it as a catch all.

To fix this, we can add `FileNotFoundError` next to `except`

    try:
        file = open("a_file.txt")
        a_dictionary = {"key":"value"}
        print(a_dictionary["sdkljdf"])
    except FileNotFoundError:
        file = open("a_file.txt","w")
        file.write("Something")

Now if we run the code, we see the `KeyError` in the console.

We can have multiple `except` clauses! And we can show the error message itself.

    try:
        file = open("day30/a_file.txt")
        a_dictionary = {"key":"value"}
        print(a_dictionary["sdkljdf"])
    except FileNotFoundError:
        file = open("a_file.txt","w")
        file.write("Something")
    except KeyError as error_message:
        print(f"The key {error_message} does not exist.")

Now if we run the code, we see `The key 'sdkljdf' does not exist.`

Let's add an `else` block.

    try:
        file = open("day30/a_file.txt")
        a_dictionary = {"key":"value"}
        print(a_dictionary["key"])
    except FileNotFoundError:
        file = open("a_file.txt","w")
        print("FileNotFound, file created.")
    except KeyError as error_message:
        print(f"The key {error_message} does not exist.")
    else:
        content = file.read()
        print(content)

We've changed the print statement in the `try` block so we won't get a KeyError. Remember, an `else` block runs if there are no exceptions. So if everything is ok, then it will read the file we opened in the `try` and print the contents in the console.

Last, let's add a `finally` block.

    try:
        file = open("day30/a_file.txt")
        a_dictionary = {"key":"value"}
        print(a_dictionary["key"])
    except FileNotFoundError:
        file = open("a_file.txt","w")
        print("FileNotFound, file created.")
    except KeyError as error_message:
        print(f"The key {error_message} does not exist.")
    else:
        content = file.read()
        print(content)
    finally:
        file.close()
        print("File was closed.")

`inally` blocks aren't used too often, but can be handy when you want to run code no matter what happens to clean up.

## Raising Exceptions

There is actually another keyword in the `try/except` world, and it's `raise`.

This allows us to raise our own exceptions. For example:

    try:
        file = open("day30/a_file.txt")
        a_dictionary = {"key":"value"}
        print(a_dictionary["key"])
    except FileNotFoundError:
        file = open("a_file.txt","w")
        print("FileNotFound, file created.")
    except KeyError as error_message:
        print(f"The key {error_message} does not exist.")
    else:
        content = file.read()
        print(content)
    finally:
        raise KeyError("This is an error that I made up.")

We put a `raise KeyError` in the `finally` block. So no matter what happens, at the end of the code execution, we get a `KeyError` show up in the console. Why would we want to use this??

Let's say we are calculating bmi

    height = float(input("Height: "))  # centimeters
    weight = int(input("Weight: "))   # kilograms

    bmi = weight / height ** 2
    print(bmi)

What if our user types in a height/weight that is impossible? Like I am 400cm tall. That's 13 feet! Impossible! Right now, our code will still run and give some crazy bmi. So let's raise our own exceptions.

    height = float(input("Height: "))  # centimeters
    weight = int(input("Weight: "))   # kilograms

    if height > 300:
        raise ValueError

    bmi = weight / height ** 2
    print(bmi)

`ValueError` is just "something you typed in was probably wrong. And we can give it an error message too: `raise ValueError("Human height should not be over 300cm.)`

## Write, read, and update JSON data

To write to a JSON file, we don't say `data_file.write("stuff to write")`. Instead, we `import json` and use `json.dump()`. Inside of the parenthesis, we put the data we want to put in the json file. It needs to be a dictionary. The second argument is the file path to the file itself. So now our code looks like this:

    new_data = {
        website_text: {
            "email": email_text,
            "password": password_text
        }
    }
    with open("day29/password_manager/data.json", mode="w") as file:
        json.dump(new_data, file)

If we run the code, it works -- but the json data in the file is a little hard to read. To put indents in the code, we just have to modify the `json.dump()` line to be `json.dump(new_data, file, indent=4)`

To read from a JSON file, we use `json.load()`. The only thing you need to pass it is a file path. If we save the `json.load()` to a variable, we can print it to the console.

To update the data in a JSON file, we use `json.update()`. This one works a little differently. First, we need to read the file using `json.load()` and store it in a variable. Then, we use `.update()` on that variable and pass it the data we want to update the file with. Finally, we use `json.dump()` to write the new information to the file.

    with open("day29/password_manager/data.json", mode="r") as file:
        # Reading the old data
        data = json.load(file)
        # Updating old data with new data
        data.update(new_data)
    with open("day29/password_manager/data.json", mode="w") as file:
        # Saving updated data
        json.dump(data, file, indent=4)
