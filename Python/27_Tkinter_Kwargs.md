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

# *args: Unlimited Positional Arguments
What if we wanted to make a function that can take in an unlimited number of arguments? 

    def add(*args):
        for n in args: 
            print(n)
    
    add(n1=5, n2=3)

The * in the parameters is the most important part. That tells the function it's going to receive any number of arguments. `args` can be whatever you want to call it; the standard is `args`.

Everything in args gets added to a tuple. Tuples are iterable.

## *kwargs: Unlimited Keyword Arguments

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
