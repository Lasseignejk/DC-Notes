# Tkinter Canvas Widget

Allows you to put things on top of each other (like an image with text on top)

The `Canvas` object can take in things like a `width`, a `height`, a `bg`, and `highlightthickness`. The last one is kind of like the border.

If you want to add an image, we can use `.create_image`. Then we have to specify a `height`, `width`, and the `image`. However it doesn't understand a file path. We can't just type this:

    canvas.create_image(100, 112, image="tomato.png")

Instead, we have to use the `PhotoImage` class.

    tomato_img = PhotoImage(file="tomato.png")
    canvas.create_image(100, 112, image=tomato_img)

We can use `.create_text()` to add text.

    canvas.create_text(100, 130, text="0.00", fill="white", font=(FONT_NAME, 35, "bold"))

# .after()

Tkinter method you call on the window. You just pass it a number in milliseconds and a function that will run after a delay.

    def say_something(thing):
    print(thing)

    window.after(1000, say_something, "Hello")

After 1000ms (or 1 sec), print "Hello" to the console.

This will only do it one time though. We're using this as the countdown, so we need to do it EVERY second, not just the first.

To update something on the canvas, we need to go about it a little differently than something like a label.

First, we need to make sure the thing we want to update is stored inside of a variable.

    timer_text = canvas.create_text(100, 130, text="00:00, fill="white", ...)

Then, we use `canvas.itemconfig()` to grab the item and update it.

    canvas.itemconfig(timer_text, text=count)
