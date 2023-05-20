# How to Read and Write to files in Python 
Make a file called `my_file.txt`.

In our main.py, let's open that file. 

    file = open("my_file.txt")

If you run the code, nothing happens visually. But behind the scenes, Python has opened that file and is waiting for further instruction.

If you want to read the contents of the file, you can do this: 

    file = open("my_file.txt")
    contents = file.read()
    print(contents)
    // My favorite color is blue

Once we're done with the file, we have to close it. 

    file = open("my_file.txt")
    contents = file.read()
    print(contents)
    file.close() 

Why do we need to close the file? Opening a file in Python takes up some of your computer's resources. If we close it, we free those resources back up. It's like having a whole bunch of tabs open in your browser. If your browser is slowing down, you should probably close some tabs. 

But it's kinda hard to remember to close files. Instead, you can use the `with` keyword, which closes the file automatically once the code underneath is done running. 

    with open("my_file.txt") as file: 
        contents = file.read()
        print(contents)

When you use `with`, the word after `as` is the variable name.

What if we want to write to the file? Just as easy 

## Writing to a file 

    with open("my_file.txt") as file: 
        file.write("New text.")

If you run this, you'll get an error -- can't write to file or something. That's because we opened the file in 'read only' mode. To change it, add in a second parameter to `open`.

    with open("my_file.txt", mode="w") as file: 
        file.write("New text.")

Now if you run it, then check my_file, you'll see that everything in that file has been overwritten and replaced with "New text."

If we don't want to get rid of everything in the file, we can change the mode to "a", append. This will put the "New text." right after whatever is in the file.

    My favorite color is blueNew text.

To space it out, put \n in front of the text.

    with open("my_file.txt", mode="a") as file:
        file.write("\nNew text.")

If you try to write to a file that doesn't exist, it'll create that file for you.

    with open("new_file.txt", mode="w") as file:
        file.write("New text.")