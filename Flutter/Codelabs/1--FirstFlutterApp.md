# Your first Flutter app

🔗 [link to Codelab](https://codelabs.developers.google.com/codelabs/flutter-codelab-first?hl=en#0)

📁 firstFlutter

## To create the project...

Make sure you have the flutter extension installed. Then, hit `ctrl + shift + p` to open the command palette. Type in `flutter new` and select the `Flutter: New Project` command. Select `Application`, choose a folder where you want to create the project, and name it.

Once you're done with that, you'll see that Flutter goes ahead and makes a ton of folders -- `android`, `ios`, `lib`, `linux`, `macos`, `test`, etc.

## Open the `pubspec.yaml` file

This file is kinda like the `package.json` in a Node project in that it lists all the dependencies and what version is installed.

Make sure the `name` on line 1 matches what the name of your app is.

## The `analysis_options.yaml` file

Determines how strict Flutter should be when analyzing your code.

## MyApp()

Sets up the whole app. It creates the app-wide state, names the app, defines the visual theme, and sets the "home" widget.

### MyAppState

Extends `ChangeNotifier`, which means that it can notify others about its own changes. For example, if the current word pair changes, some widgets in the app need to know.

The state is created and provided to the whole app using a `ChangeNotifierProvider`. This allows any widget in the app to get hold of the state.

## MyHomePage

Every widget defines a `build()` method that's automatically called every time the widget's circumstances change so that the widget is always up to date.

MyHomePage tracks changes to te app's current state using the `watch` method

Every `build` method must return a widget or (more typically) a nested tree of widgets. In this case, the top-level widget is `Scaffold`.

`Column` is one of the most basic layout widgets in Flutter. It takes any number of cildren and puts them in a column from top to bottom. By default, the column visually places its children at the top.

## First behavior

We added this code to MyAppState:

     void getNext() {
        current = WordPair.random();
        notifyListeners();
    }

`notifyListeners()` is used to ensure that anyone watching `MyAppState` is notified

## Making it Prettier

We're going to edit the `Text(appState.current.asLowerCase)` line to make it more complex. Rather than do it there, we can extract that line and make it a widget.

To refactor, right click the piece of code you want to refactor and hit `Refactor`. Or, you can press `ctrl+.`

    @override
    Widget build(BuildContext context) {
        final theme = Theme.of(context);
        return Card(
        color: theme.colorScheme.primary,
        child: Padding(
            padding: const EdgeInsets.all(20),
            child: Text(pair.asLowerCase),
        ),
        );
    }

`final theme = Theme.of(context)` -- This line requests the app's current theme.

`color: theme.colorScheme.primary` -- This line defines the card's color to be the same as the theme's colorScheme property.

### To include a Google font:

**pubspec.yaml**

    dependencies:
    flutter:
        sdk: flutter
    google_fonts: ^6.1.0

**main.dart**

    import 'package:google_fonts/google_fonts.dart';

**widget**

    @override
    Widget build(BuildContext context) {
        final theme = Theme.of(context);
        final style = GoogleFonts.raleway(
        textStyle: theme.textTheme.displayMedium!.copyWith(
            color: theme.colorScheme.onPrimary,
        ),
        );
        return Card(
        color: theme.colorScheme.primary,
        child: Padding(
            padding: const EdgeInsets.all(20),
            child: Text(
            pair.asLowerCase,
            style: style,
            ),
        ),
        );
    }

## SafeArea

Ensures that its child is not obscured by a hardware notch or a status bar. In this app, the widget wraps around `NavigationRail` to prevent the navigation buttons from being obscured by a mobile status bar, for example.

## NavigationRail

You can change `extended: false` to show the labels next to the icons.

A `selectedIndex` of zero selects the first destination, an index of one selects the second destination.

## Expanded widget

Extremely useful in rows and columns -- they let you express layouts where some children take only as much space as they need and other widgets should take as much of the remaining room as possible. One way to think about `Expanded` widgets is that they are 'greedy'.

## \_ before state

Putting an underscore before something marks that class as private, which is something the compiler looks at.

## LayoutBuilder

Widget that lets you change the widget tree depending on how much available space you have

`LayoutBuilder`'s `builder` callback is called every time the constraints change. For example, when the user resizes the app's window or rotates their phone from portrait mode to landscape.
