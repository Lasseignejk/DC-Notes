# HTML Elements

📂 htmlElements.html, htmlElements.css

🔗 [HTML elements files on GitHub](https://github.com/Lasseignejk/DC-Notes/tree/main/HTML/HTMLElements)

📓 [list of elements on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

HTML elements are the building blocks of any site. They tell the browser how things should be structured on the page.
Some common examples of HTML elements are

-   `<h1></h1>` -- a large heading element
-   `<p></p>` -- a paragraph element
-   `<div></div>` -- a division element, a container
-   `<button></button>` -- a button element

## Anatomy of an HTML Element

If you look at the examples above, you might notice some things in common. For example, they all have an opening tag (`<h1>`) and a closing tag (`</h1>`). In all of these cases, the content, what you want to show on the browser, goes in between the opening and closing tags.

    <h1>This is a large header. Hello!</h1>

    <p>This is a paragraph. It has random text in it.</p>

    <div>
        <p>This is a paragraph inside of a div. The div is just the container -- we can put text directly in the div, but we usually put it inside of another element instead.</p>
    </div>

    <button>Click here!</button>

The basic anatomy of HTML elements is

    <openingTag> content </closingTag>

Here's another example. Imagine you have a book shelf in the middle of the wall and you want to put some books on the shelf. But when you place the books, they keep falling over or sliding. So you go to Amazon or Barnes & Noble or somewhere and buy some bookends. Now the books stay exactly where you want them to.

In that example, the bookends are your opening and closing tags and the books are the content. You need to have both bookends, otherwise the books will still fall. The same is true of our HTML elements ... with a few exceptions

## Self-Closing Tags

For every rule, there are always exceptions. Some HTML elements are `self-closing` -- they only need one tag!

Here are some common examples you might run into:

-   `<img/>` -- an image element
-   `<input/>` -- an input element, allows the user to type something in

So instead of having an opening and closing tag, a self-closing tag just has one tag which contains a `/`. You might be thinking, "Well where does the content go??"

## Attributes

All HTML elements have attributes. These are extra things that we can add to the element to make them act or look a certain way or do something. Let's look at the `<input/>` element as an example.

The input element has a ton of different attributes. The first is `type`. The default is `text`, which allows the user to type something in.

    <input type="text" />

See how the `type="text"` goes in the tag itself, between `<input` and the `/>` at the end? That is where attributes go. And just by changing the `type` from `text` to `checkbox`, we can change what shows on the screen!

    <input type="checkbox" />

Inputs have other attributes, like `required`, `name`, and `id` -- I won't get into those here. If you're curious, check out [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)!

Elements like `<h1>` and `<div>` also have attributes, but the only attributes we usually give it are the `class` or `id` attributes, so we can target it in CSS or JavaScript.

    // HTML file
    <h1 class="helloHeader">Hello!</h1>

    // CSS file
    .helloHeader {
        background-color: "blue";
        color: "white"
    }
