A partial is a piece of code that we want to show on multiple pages, like a nav/footer

Inside of `views`, make a new folder called `partials`, then inside of there, make a new file named `nav.ejs`

In the main `index.js`, put this line: 

    app.use(express.static(__dirname + "/views/partials"))

On a page, to include a partial: 

    <%- include ('../partials/nav'); %>