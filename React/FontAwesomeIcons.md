# Using Font Awesome Icons in React

## Install Font Awesome

    npm i --save @fortawesome/fontawesome-svg-core
    npm i --save @fortawesome/free-solid-svg-icons
    npm i --save @fortawesome/free-regular-svg-icons
    npm i --save @fortawesome/react-fontawesome@latest

## Go to the page you want to use the icons on

First, import Font Awesome at the top

    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

Add the FontAwesomeIcon component where you want to use it in your code

    <FontAwesomeIcon />

Import the icon you want to use from FontAwesome

    import {
        faHouse,
    } from "@fortawesome/free-solid-svg-icons";

Pass the icon you want to use to the FontAwesome component in your code

    <FontAwesomeIcon icon={faHouse} />

Change the size of the icon using 'font size,' not 'height' and 'width'
