[Less CSS Pre-Processor Tutorial](https://www.youtube.com/watch?v=YD91G8DdUsw)

[documentation](https://lesscss.org/#)

Less is a CSS pre-processor, meaning that it extends the CSS language

Less lets you use CSS variables -- basically gives logic to CSS

# To install
`npm i less -g`

Less doesn't have a 'watch' functionality built-in, so you'll have to install this too: `npm i -g less-watch-compiler`

To use the watch: 

`less-watch-compiler NameOfFolderLessFilesAreIn NameOfFolderToPutCSSFilesIn`

`less-watch-compiler Less Css`

If you want to change the settings of the watch, add this file: 

    less-watch-compiler.config.json

and inside, you should have this: 

    {
        "allowedExtensions":["less"],
        "minified": false,
        "sourceMap": false,
        "watchFolder": "tests/less",
        "outputFolder": "tests/css"
    }

We'll change the watch/output folders to be just "less" and "css" because they aren't themselves in a folder

# To use
Make a `styles.less` page and put in some regular css: 

    body {
        background: red;
    }

This by itself won't run. The file has to be compiled into CSS. To compile, run this: 

`lessc styles.less` or `less-watch-compiler Less Css` if using the watch

If you want to make a new file and send all the compiled CSS there, run this: 
`lessc styles.less styles.css`

If you look at the compiled CSS file, you'll notice it looks exactly the same as the less file. That's just because we didn't do anything crazy in our less. So now, let's try something unique to less.

In the less file: 

    @background-color: #f4f4f4;

    body {
        background: @background-color
    }

Once you compile, the css file will now have `background: #f4f4f4`

## Extending css classes 

    .btn {
        padding:10px 15px;
        border: 0;
    }

If you want to create another button that has the same attributes as the `.btn` class but you want to add more, you can do this: 

    .primary-btn:extend(.btn) {
        background: @primary-color;
        color: #fff;
    }

## Mixins

    h1, h3 {
        .bordered
    }
    .bordered {
        border-top: dotted 1 #000;
        border-bottom: solid 2px #000
    }

### Mixin with parameter

    .border-radius(@radius){
        border-radius: @radius
    }

    .btn {
        padding: 10px 15px;
        border: 0;
        .border-radius(30px)
    }

## Nesting Classes 

    ul#menu {
        list-style: none;
    }

If you want to then edit the `li`s inside of the ul, normally you'd have to write `ul#menu li`. But with less, you can nest it inside the the ul#menu css

    ul#menu {
        list-style: none;
        li {
            padding: 10px 0;
            a {
                color: @secondary-color;
                text-decoration: none;
                &:hover {
                    color: #000
                }
            }
        }
    } 

You can use the & to target the same element, just in a different state like `:hover` or `:focus`

## Functions
Less has some functions you can use, like `lighten`. To use, look at the `background-color` under `ul#menu`

    ul#menu {
        list-style: none;
        background-color: lighten(@secondary-color, 50%);
        li {
            padding: 10px 0;
            a {
                color: @secondary-color;
                text-decoration: none;
                &:hover {
                    color: #000
                }
            }
        }
    } 

## Text Color Mixin

    .text-color(@a) when (lightness(@a) >= 50%) {
        color: black;
    }

    .text-color(@a) when (lightness(@a) <= 50%) {
        color: white;
    }

    .primary-btn:extend(.btn) {
        background: @primary-color;
        .text-color(@primary-color);
    }