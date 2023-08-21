# History of GUIs and Intro to Tkinter (t-k-inter)

`Graphical User Interface`

Even the mouse is part of a GUI

The Mac Lisa was one of the first to provide a GUI

Apple actually sued Microsoft when Microsoft came out with a GUI. Both took it from Xerox PARC?

# Creating Windows and Labels with Tkinter

First, import `tkinter` and make a new window. A window is kinda like a turtle screen.

    import tkinter
    window = tkinter.Tk()

If you run it just like this, you won't see anything happen. Just like turtle, the program opens the window, sees there's nothing else after the window, and closes it.

    window.mainloop()

using `window.mainloop()` essentially keeps the window in a while loop to keep it open, keep it listening. It also needs to be at the very end of your program.

`window.minsize(width=500, height=300)` just means that when the program opens, the size of the window will be at LEAST 500x300. The user can click and drag the window and make it bigger if they want, they just can't make it smaller than 500x300.

Initialize a new Label class:

    my_label = tkinter.Label(text="I am a label", font="Arial", "bold")

If you run, the window opens but the label isn't there. Reminds me of DOM manipulation -- we've made a new label element, but we haven't put it in the bowl yet. To put it in the bowl we have to use `.pack()`

    my_label.pack()

You can pass arguments to `pack` to tell it where to put the label (center,left, right) etc.

# Advanced Python Arguments

    def my_function(a, b, c):
        # Do this with a
        # Then do this with b
        # Finally do this with c

    my_function(c=3, a=1, b=2)

How we called the function above uses keyword arguments.

In Python, you can provide default arguments

    def my_function(a=1, b=2, c=3):
        # function body

If we provide a function with default arguments, and you want to just USE those arguments, you can just call the function without passing in any arguments, like this: `my_function()`.

If you wanted to change just one of the arguments but keep the rest default, then you just have to pass that argument in: `my_function(b=5)`. `a` and `c` will use their default values.

If you hover over something like `.pack()`, a window will pop up with all the arguments you can pass in. You'll see a lot of them have `...` after the `=` sign. That means that it has a default value there. It's not a required thing for you to pass in. If you want o change it, go ahead, but until you do, there's a default value it'll use.

# \*args: Unlimited Positional Arguments

What if we wanted to make a function that can take in an unlimited number of arguments?

    def add(*args):
        for n in args:
            print(n)

    add(n1=5, n2=3)

The \* in the parameters is the most important part. That tells the function it's going to receive any number of arguments. `args` can be whatever you want to call it; the standard is `args`.

Everything in args gets added to a tuple. Tuples are iterable.

## \*kwargs: Unlimited Keyword Arguments

    def calculate(**kwargs):
        print(kwargs)

    calculate(add=3, multiple=5)

When you use kwargs, everything is added to a dictionary.

You can also use positional arguments with kwargs

    def calculate(n, **kwargs):
        n += kwargs["add]
        n *= kwargs["multiply]
        print(n)

    calculate(2, add=3, multiply=5)

    # n = 25
    # in the beginning, n=2. n then gets added to 3 on line 11, so n=5. on line 12, n is then * by 5 because that's what we put for multiply, 5*5 is 25.

Let's make a car.

    class Car:
    def __init__(self, **kw):
        self.make=kw["make"]
        self.model = kw["model"]

    my_car = Car(make="Nissan", model="GT-R")
    print(my_car.model)

If we run the code above, `GT-R` should print. But what if I don't have a model? What if I only have `make="Nissan`? Then the code will break. Enter `.get()`.

We can access things inside of a dictionary by using `[]`, `. notation`, or `.get()`

With `.get()`, you pass in the name of the key you want to access. If that key doesn't exist, it'll just return `none`, instead of breaking.

# Back to Tkinter -- Buttons

To create a button:

    button = Button(text="Click Me)

But that's not all! Remember, like DOM, we need to add it to the screen.

    button.pack()

Now the button shows on the screen and we can click on it, but it doesn't actually do anything. To make it do something, we need to add an event listener. In Tkinter, those are called `commands`

    def button_clicked():
        print("I got clicked")

    button = Button(text="Click Me", command=button_clicked)
    button.pack()

In the `command`, we just put the NAME of the function -- we don't call it.

# Entry -- input field

    input = Entry()
    input.pack()

What if I want to grab whatever the user inputs in the field? We can use `get`.

    def button_clicked():
        my_label["text"] = input.get()

If we want the entry to already have text inside, we can use `.insert()
`

    input.insert(END, string="Some default text.")

Note that this is NOT placeholder text, but actual text in the field.

# Textarea

    text = Text(height=5, width=30)
    text.pack()

To focus in on the textarea and have the cursor in the textarea by default:

    text.focus()

# Spinbox

A counter you can increment and decrement. Doesn't go below 0.

    spinbox = Spinbox(from_=0, to=10, width=5)
    spinbox.pack()

# Scale

Gives the user a bar they can move from a starting value to an ending value.

# Checkbutton

A checkbox.

    checked_state = IntVar()
    # ^ from the tkinter docs
    checkbutton = Checkbutton(text="Is on?", variable=checked_state, command=checkbutton_used)
    checked_state.get()
    checkbutton.pack()

The `variable` on the checkbutton stores the value of the checkbox, 1 for 'on' and 0 for 'off'.

# Radiobutton

A radiobutton. Works very similarly to the checkbutton except only one can be selected. Because of that, you can connect multiple radio buttons to the same variable:

    radio_state = IntVar()
    radiobutton1 = Radiobutton(text="Option1", value=1, variable=radio_state, command=radio_used)
    radiobutton2 = Radiobutton(text="Option2", value=2, variable=radio_state, command=radio_used)

# Listbox

Kinda like a `select` tag in JS?

Creates a box with options in it. Users can select one option.

    def listbox_used(event):
    print(listbox.get(listbox.curselection()))

    listbox = Listbox(height=4)
    fruits = ["Apple", "Pear", "Orange", "Banana"]
    for item in fruits:
        listbox.insert(fruits.index(item), item)
    listbox.bind("<<ListboxSelect>>", listbox_used)
    listbox.pack()

`curselection()` returns a tuple containing the line numbers of the selected element or elements, counting from 0.

`insert(index,*elements)` inserts one or more new lines into the listbox before the line specified by index. Use END as the first argument if you want to add new lines to the end of the listbox.

From the Tk docs:

    When a user changes the selection, a `<<ListboxSelect>>` virtual event is generated. You can bind to this to take any action you need.

So in the code above, we bind together the <<ListboxSelect>> event and the `listbox_used` function so that when the user selects an option (triggering the `<<ListboxSelect>>`), `listbox_used` is also triggered.

# Pack(), place(), and grid()

By default, `pack()` will put the first widget at the top, then pack all the other widgets below the previous one.

You can change this by adding a `side` parameter.

    my_label.pack(side="left")

If we add `side="left"` on each of the things in the main.py, they all pack together on the left. Looks like you just did `display:flex;`. They're all right next to each other, no spacing, nothing.

The problem with `pack` is it's very hard to specify a precise position.

`place` is all about precise positioning. It takes an x and y value.

    my_label.place(x=0, y=0)

The downside, of course, is that `place` is so specific. You have to know exactly where on the x and y axis you want to put something.

`grid` turns your window into a grid and you can specify where you want something to be in that grid.

    my_label.grid(column=0, row=0)

The grid is relative to the other widgets.

    my_label.grid(column=0, row=0)
    button.grid(column=1, row=1)
    input.grid(column=2, row=2)

Doing this will put them in a diagonal line

Note that you CANNOT use `pack` and `grid` in the same window.

# How to add padding

To add padding around the window:

    window.config(padx=20, pady=20)

The same can be done to specific widgets.

    my_label.config(padx=100, pady=10)
