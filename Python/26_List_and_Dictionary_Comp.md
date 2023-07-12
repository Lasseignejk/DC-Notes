# List and Dictionary Comprehension
Pretty unique to Python 

Basically making a new list based off a previous list. Before now, we've been doing this with for loops, like this: 

    numbers = [1,2,3]
    new_list = []
    for num in numbers: 
        add_1 = num + 1
        new_list.append(add_1)

With list comprehension, we can do everything we just did but with fewer lines of code. 

It looks something like this: 

    new_list = [new_item for item in list]

So to rewrite that for loop above, we can just write `new_list = [num + 1 for num in numbers] // [2,3,4]`

Even though it's called `List Comprehension`, you can use it for other iterables too. For example: 

    name = "Jaye"
    new_name = [letter for letter in name]
    // ["J", "a", "y", "e"]

Ranges are also iterable: 

    range_list = [num * 2 for num in range(1,5)]
    // [2,4,6,8]

## Conditional List Comprehension
`new_list = [new_item for item in list if test]`

    conditional_list = [num for num in range(1,11) if num % 2 == 0]
    // [2, 4, 6, 8, 10]

    names = ["Alex", "Beth", "Caroline", "Dave", "Eleanor", "Freddie"]
    short_names = [name for name in names if len(name) < 5]
    // ["Alex", "Beth", "Dave"]

If you're dealing with `txt` files with a new value on each line, you can use `.readlines()` to store the values in a list, like we did in the day 25 lesson. Like this: 

`file1.txt`
    1
    2
    3

`file2.txt`
    2
    3
    4

`main.py`

    with open("file1.txt") as file1:
        file1_data = file1.readlines()
    print(file1) // ["1","2","3"]

    with open("file2.txt") as file2:
        file2_data = file2.readlines()
    print(file2) // ["2", "3", "4"]

Now, if we wanted to use list comprehension to make a new array with just the numbers those two files have in common, we can write this: 

    result = [int(num) for num in file1_data if num in file2_data]

# Dictionary Comprehension
`new_dict = {new_key:new_value for item in list}`

`new_dict = {new_key:new_value for (key,value) in dict.items()}`

    names = ["Alex", "Beth", "Caroline", "Dave", "Eleanor", "Freddie"]
    import random

    students_scores = {student:random.randint(1,100) for student in names}
    print(students_scores) // {'Alex': 48, 'Beth': 86...}

    passed_students = {student:score for (student,score) in students_scores.items() if score >= 60}

## Iterating over a Pandas DataFrame

    import pandas

    student_dict = {
        "student": ["Angela", "James", "Lily"],
        "score": [56, 76, 98]
    }

    student_data_frame = pandas.DataFrame(student_dict)

We can loop through like this: 

    for (key, value) in student_data_frame.items();

But Pandas has something better built in. It lets us loop through the rows of the data frame.

    for (index, row) in student_data_frame.iterrows():
        print(row)