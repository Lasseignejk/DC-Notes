# Application Programming Interfaces (APIs)

First thing to do: `import requests`

    response = requests.get(url="http://api.open-notify.org/iss-now.json")

If we `print` the response and run the code, we see `<Response [200]>` in the console, but we don't see the data.

## Status Codes

-   1xx: Hold on
-   2xx: All good, here's the data
-   3xx: You don't have authorization
-   4xx: You (the user) screwed up
-   5xx: I (the website) screwed up

## Error Handling

What if our request doesn't work? What if it returns a 400 or a 300 error? Instead of writing long `if/else` statements, we can use the `request` module itself. All we need to write is

    response.raise_for_status()

## Getting the data

Just like in JS, we have to write `data = response.json()` and that's it! If we print the data we should see it in the console.

## Passing Parameters

Parameters are added after the url like this:

    parameters = {
        "lat": 24.3224,
        "lng": -0.2343
    }

    response = requests.get(url, params=parameters)
