/*
Intro:
    - Objects can be assigned to VARIABLES just like any other data type.

1. What are Objects?
    - Objects are the 8th data type in JS.
    - The curly braces, {}, is used to define an Object Literal (the code block of an object)
    - It holds UNORDERED data.
    - The data is stored in key-value pairs. 

2. Object structure/syntax.
    - The variable keyword (let, const, var) is used to link the object name with the object literal.
    - followed by the object name and the = operator.
    - followed by curly braces, {}
    - Inside the curly braces, you add you properties.
        - Properties are the combination of the key-value pair.
    - Between the key and the value, you must place a colon, : .
    - The properties are divided a comma ( , ).


3. Keys explained.
    - A key is similar to a variable name that points to a location in memory where the value is held.
    - Key are STRINGS by default (the system stores it as a string in the background)
        -You don't need to use the quotation marks for single worded keys.
        -When defining a key with a space, you MUST use quotes.

4. Values explained.
    - Values can be any data type.

-------------------------------------------------------
1. Accessing the Properties:
    a. There are 2 methods to access the properties. These are the dot notation (.), and the square bracket method.
        i. dot notation:
            - You write the object's name, followed by the dot operator and then the propery name (the key).
            - This will then return the value of that key.
            - NOTE: If you try to access a property that does not exist, undefined is returned.
            -Examples:
                let spaceship = {
                    homePlanet: 'Earth',
                    color: 'silver'
                };
                spaceship.homePlanet; // Returns 'Earth',
                spaceship.color; // Returns 'silver',
        ii. Bracket notation:
            - The bracket notation is used when the key is a string with a space or special character.
            - 

*/