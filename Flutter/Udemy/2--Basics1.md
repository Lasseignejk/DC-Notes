# Flutter & Dart Basics I -- Getting a Solid Foundation

## Analyzing a new flutter project

The `lib` folder is the most important -- that's where all the Dart code you write actually go.

There are a bunch of other device-specific folders. Typically, we don't need to mess with those.

Folders that start with a dot typically contain more configuration stuff.

## How Flutter Apps Start

`main()` function gets exexuted automatically by Dart when executing the compiled app on the target device.

`runApp()` should be called inside of `main()`. `runApp()` tells Flutter what to display on the UI.

## Understanding Widgets

`runApp()` needs an argument passed to it, a widget. How can it tell Flutter what to display on the UI otherwise?

Flutter UIs are built with widgets, a combination of widgets.

Widgets can be nested into eac other which creates a "widget tree"

Flutter provides many built-in Widgets, like buttons, form inputs, and layout widgets.

You can also build your own Widgets

## Using Widgets

Check out Flutter's documentation for a widget catalog

The first thing that needs to go inside of `runApp()` is the `MaterialApp()` widget.

    void main() {
    	runApp(
    		MaterialApp()
    	)
    }

Of course, MaterialApp() by itself doesn't give much information to Flutter.

## Positional and Named Arguments

Dart has named arguments, yay!!

To use, wrap the parameters in curly brackets.

    void add({num1, num2}) {
    	num1 + num2
    }

    void demo() {
    	add(num2: 5, num1: 3)
    }

One of the parameters for `MaterialApp()` is `home`. We can set that to be a `Text` widget:

    MaterialApp(home: Text('Hello'))

When writing a string, single quotes are more often used than double.

## Understanding `const` values

If we don't have `const` before `MaterialApp`, VSCode complains.

    Use 'const' with the constructor to improve performance. Try adding the 'const' keyword to the constructor invocation.

So we should have `const MaterialApp(home: Text('Hello'))`. Small change but the warning goes away.

`const` is a keyword in Dart. It helps Dart optimize runtime performance. If you mark a variable as a constant, then it stores that widget's information in memory. The second time you use that widget, it'll use the existing memory for that widget instead of using more memory.

If you're not going to re-use that particular widget you don't really need to add `const`, but VSCode will still complain.

## Building a more complex widget tree

Let's use the `Scaffold` widget. Helps us set up a good-looking UI.

`MaterialApp` is our root widget. If we want to add a `Scaffold` widget, it should be inside of `MaterialApp`, but wrapping the `Text` widget.

Hover over a widget to see what positional/named arguments it requires.

`Scaffold` requires a `body` argument. So we can change the code to look like this:

    void main() {
    	runApp(const MaterialApp(home: Scaffold(body: Text('Hello'))));
    }

Once you add the scaffold in, if you refresh the app it looks much better! It's not red text on a black background anymore, it's black text on a white background and the text is much smaller.

It'd be nice if our message was right in the middle of the screen though. For that we need another widget, `Center`.

We could manually refactor this and add a `Center` widget, but instead, right click on Text and click `Refactor`, then 'Wrap with Center'. Now the code looks like this:

    void main() {
    runApp(const MaterialApp(home: Scaffold(body: Center(child: Text('Hello World')))));
    }

Pro tip: put a comma after each closing parenthesis and when you save it'll reformat the code into rows that are easier to read.

    void main() {
    	runApp(const MaterialApp(
    		home: Scaffold(
    		body: Center(
    			child: Text('Hello World'),
    		),
    		),
    	));
    }

Boom, widget tree! And if we refresh the code, 'Hello World'

## Understanding Value Types

Dart is a type-safe language. All values are of certain Types.

It is common for things to have more than one Type.

`'Hello World!'` --> String / Object

29 --> int / num / Object

MaterialApp --> MaterialApp / Widget / Object

Type `double` is used for numbers with decimal places.

`int` is used for numbers without decimal places.

`num` is used for either.

`Object` --> any type of object

## Configuring Widgets and Understanding Objects

Let's add a background color to our page. We can do that by adding another argument to `Scaffold`.

Adding the named argument `backgroundColor` allows us to change the background color of our Widget. If you type `Colors.`, you should see a list of colors you can choose from. Select one, refresh/restart the app, and you should see that color reflected on your app.

You can also use a custom color by putting this:

    Color.fromARGB(255, 47, 5, 120).

Widgets are objects which are data structures in memory.

## Working with 'configuration objects' (non-widget objects)

We want to add a gradient color background, but Scaffold doesn't accept any other color arguments other than `background color`.

To achieve this, we can make another widget between `Scaffold` and `Center`. That way it wraps `Center` and `Text` as well. We'll use the `Container` widget. Remember the shortcut: right click on the thing you want wrapped, refactor, wrap with xyz.

Once we do that, we get a bunch of reds. Apparently, you can't have `const` above `Container`, so we have to remove `const` from the `MaterialApp`. We can instead add `const` before `Center`.

We still have a blue line -- " Unnecessary instance of 'Container'." This is because if we don't configure the container, it IS unnecessary. But there are a lot of different things that Container can do. One of them is `decoration`.

Inside of decoration, we will use the `BoxDecoration()` constructor function. Inside of `BoxDecoration()` we can use `gradient`. With gradient we can use another constructor function, `LinearGradient()`.

## Generics, Lists, and adding gradients

'Generic Types' are flexible types that work together with other Types.

Lists are flexible, in that they can hold multiples of a data type. However, they can only hold ONE data type -- list of numbers vs list of strings etc.

## How to configure widgets and objects

press `ctrl + space` to see possible values for a named argument.

## Custom widgets -- why do you need them?

Code gets long fast. Custom widgets mean that you can break down large widget trees into separate widgets. The widgets are then smaller and more readable than having everything on one file. It's up to you how you break down your code.

Let's put the container, and all its children, into a separate widget. To do that, we need to make a `class`.

## Understanding classes

Dart is an object-oriented language -- every value is an object.

There are primitive values like strings or numbers, but there are also more complext values -- widgets, config objects, etc.

Those complex values are created based on blueprints: classes.

Objects are data structures that contain data (variables and properties) and functions (methods)

Scaffold, Container, Color -- all of these are classes. BoxDecoration and `.fromARGB` are class constructor functions, which are functions that are used to create objects. So when you write `Scaffold()`, you are instantiating that class. You are creating an object based on blueprints defined in the class.

That's why custom widgets are also classes.

## Building custom widgets

so how do we make a widget? First, we write `class` to tell Dart we're making a class. Then you write the name of the class. The first letter should be capitalized, as well as any following words.

If we were just making a regular class, we'd be done:

    class GradientContainer {
    	// logic
    }

Because we're making a widget, we need some extra stuff.

Classes can extend other classes. So between the name of our class and the curly brackets, we can write the class we're extending, where we're inheriting from. In this case, `StatelessWidget`.

    class GradientContainer extends StatelessWidget {
    	build()
    }

Inheriting from `StatelessWidget` does a couple of things. One of them is that behind the scenes, it adds a lot of logic and data to our new class that is required by Flutter in order to use this class as a widget and add it to the UI.

Every widget needs the `build()` method, and every build method must return a Widget. So we put `Widget` in front of the build method to specify the return value as a widget.

We also need to add `@override` above the build method line. It's just some extra metadata added to the method.

`build()` must have a parameter. This parameter is called `context` or `ctx`. This is required because Flutter needs it. We'll get to that in another lesson. For now, think of `context` as a metadata object that contains some useful information about this widget in the overall widget tree.

Flutter will automatically run the 'build' method of your widgets when it renders the user interface. Flutter will then take the widget returned by the build method and make sure that it is reflected on the UI.

Cut the Container and all of its children and paste it next to the return statement in our new class. Then we can write the name of the class, with parenthesis, next to `body` like this:

    void main() {
    	runApp(
    		MaterialApp(
    		home: Scaffold(
    			backgroundColor: Colors.blueGrey,
    			body: GradientContainer(),
    		),
    		),
    	);
    }

We have to have the parenthesis next to GradientContainer so it instantiates and builds that widget.

## Working with constructor functions

When making your own widget, you should add a constructor function to them. Flutter does automatically make one for you, but if you want to add some extra settings or configuration, you need to add a constructor function.

To do this, inside our new widget, put the name of the class and parenthesis. We get a blue line -- "Constructors for public widgets should have a named 'key' parameter. Try adding a named parameter to the constructor." This is happening because we are extending StatelessWidget. StatelessWidget needs a key argument.

So we need to add a key to our class and forward it to StatelessWidget so it also has the key. There are two ways to write this:

    const GradientContainer({key}): super(key: key);

    // or

    const GradientContainer({super.key});

`super()` refers to the parent class (StatelessWidget in this case)

In the first example, calling super() calls the constructor function of the parent. The first key in `super(key: key)` refers to the named argument called 'key', the second refers to the `({key})` on the class. This is long and complicated so we usually shorten it to the second example.

## Splitting code across files

Good practice to move classes to separate files. This keeps all our code readable and maintainable.

Make a new file in the `lib` folder and paste our new class.

Make sure to import `material.dart` at the top of that file so it knows what a Widget is and stuff. Then, on `main.dart`, import `GradientContainer`.

Naming conventions for files is all lowercase with underscores separating words, like this: `gradient_container.dart`

## Variables and Types

If you create a variable but don't give it a value initially, you should do it like this:

    int score;

Not like this:

    var score;

If you use `var`, then the Type for that variable becomes `dynamic` -- any Type is ok. That's problematic because then Dart can't catch if we're making a mistake when passing data around. Instead, we make a variable with the Type in front.

But this also creates a problem. If score is supposed to be an integer, and we create it with no value, then the value is null not integer. To get around this we add a `?` after the type

    int? score;

That tells Dart that score can either be an integor OR null.

## `final` and `const`

If you create a variable with `var`, it means that the value of that variable can change. But, if you know that the value of that variable will never change, you assign it and leave it, then you should use `final` instead of `var`. `final` means that this data container will never receive a new value.

Good practice to be as restrictive as possible so you don't create bugs for yourself down the road.

`const` is the same as `final` in the sense that you can't reassign the variable it's attached to. But unlike `final`, `const` provides some extra information to Dart.

By using `const`, yuo're telling Dart that the value is a 'compiled-time constant.' This means it is locked in at the point of time this code is compiled. That's not always the case. You could, for example, have some code where you're calling a function that changes the score at run time. When the code is compiled, it doesn't yet know what the score is. It's only known when the code is executed.

    const score = 0;

    final score2 = getScore();

## Instance variables and configurable widgets

Let's make our `StyledText()` widget reusable and pass text to it to render on the page. To do this, we can edit our constructor function.

    const StyledText(String text, {super.key});

To use that `text` in the widget itself, we have to create a class variable, a property to this class. We can do this using `this`

    const StyledText(this.text, {super.key});

Now we just have to make sure that whatever variable we create to store the value of the passed text is named the same thing -- text. `this` refers to the class itself or the object that will be built based on the class. We want to access the text variable that is defined in this class.

Then we have to remove the `const` from that line. Because we are accepting text from an outside source, and it won't be the same text each time, it can't be `const`.

However, we can make our `String text` a `final`, because that value will never change. Once we do that we can add `const` back to the constructor function.

    import 'package:flutter/material.dart';

    class StyledText extends StatelessWidget {
    	const StyledText(this.text, {super.key});

    	final String text;

    	@override
    	Widget build(context) {
    		return Text(
    		text,
    		style: const TextStyle(
    			fontSize: 28,
    			color: Colors.white,
    		),
    		);
    	}
    }

## Displaying images and using multiple constructor functions

Create an assets folder in the root directory and put another folder in assets called images. Drag and drop photos in. Then, go into your `pubspec.yaml` file and write in the names of the images under line 60:

    assets:
    	- assets/images/dice-1.png
    	- assets/images/dice-2.png
    	- assets/images/dice-3.png
    	- assets/images/dice-4.png
    	- assets/images/dice-5.png
    	- assets/images/dice-6.png

Now we can use the images using an `Image` widget. We could use `Image()` and then use `image:` inside of that, but because it's stored on our machine we can do `Image.` and the `asset()` constructor function. This is using a feature in Dart where you can define multiple constructor functions in a given class. We can do this in our own classes as well.

    GradientContainer.purple({super.key}) : colors = [Colors.deepPurple, Colors.indigo];

Then where we instantiate that class, instead of typing this:

    body: GradientContainer(
          [Color.fromARGB(255, 145, 186, 207), Color.fromARGB(221, 70, 70, 70)],
        ),

We could write this:

    body: GradientContainer.purple(),

to tap into the second constructor function.

So. `Image` has a default constructor function (`Image()`) or we can tap into other constructor functions (`Image.asset()`).

## Adding buttons and using functions as values

On the GradientContainer, we want to add a button to our Center widget. However, Center only takes one widget as a child, and we've already got Image there. To add a button, we need to make the child of Center a Column widget.

Column() and Row() can be used to place multiple child widgets next to each other.

Once we wrap our Image with a Column, we can add the button. Flutter has three buttons built in: Elevated, Outlined, and Text.

    TextButton(onPressed: rollDice, child: const Text('Roll Dice'))

## Styling Buttons and working with padding

Try to keep your widget arguments last.

    // O
    TextButton(
        onPressed: rollDice,
    	style: TextButton.styleFrom(
    		foregroundColor: Colors.white,
    		textStyle: const TextStyle(fontSize: 28),
    		),
    	child: const Text('Roll Dice'),
    )

    // X
    TextButton(
        onPressed: rollDice,
    	child: const Text('Roll Dice'),
    	style: TextButton.styleFrom(
    		foregroundColor: Colors.white,
    		textStyle: const TextStyle(fontSize: 28),
    		),
    )

To add space, you have two options: put padding on the widget itself or add a new Widget where you want the space -- SizedBox().

## Introducing Stateful Widgets

If you have a widget that has data that can change internally, and you want the UI to update, you should make the widget `Stateful`.

Because most of the GradientContainer won't change, it's overkill to make the GradientContainer itself a `StatefulWidget`. Instead, we can make the image and the button its own widget and make that widget stateful.

In stateful widgets, we don't add a build method, instead we add a `createState()` method. `createState()` returns a `State`.

To type that state, add the name of your class in carrots.

    State<DiceRoller> createState() {}

When using stateful widgets, you will always work with two classes. The second class typically begins with an `_` and is followed by the name of your class and `State`.

    _DiceRollerState

The underscore means that this class will be private, it will only be usable in this file. Even if you import this file into another file, the other file won't be able to access this state class. That's because this state class is really only meant to be used internally by the DiceRoller widget.

    class _DiceRollerState extends State<DiceRoller> {}

Inside the State class, we have to add our good friend the build method. The build method works the same as in a stateless widget.

As it stands, the UI will still not update because the die widget isn't getting re-built. The variable may have changed, but if the build method isn't called again, nothing will show. How do we get Flutter to re-build? We use `setState()` inside of the method that causes a change.

Inside of `setState()`, you can update any variables that you want updated in the UI.
