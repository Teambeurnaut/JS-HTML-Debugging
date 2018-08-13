# JS-HTML-Debugging
The idea of this program is that you don't need the console anymore, just a &lt;p> tag, &lt;hx> tag or whatever you like. 

## How to use
The file contains a shortcut `function geti(s) { ... } ` which is for `document.getElementById() { ... } ` and an object `Debugger() { ... } `.
If you want to use this on your website, add this code in your `<script>` list and create a new object like this:
`var debugger = new Debugger(geti("debug-id-name"), ["array", "of", "colours"]); `
The variable name is of course up to you and so is the `debug-id-name`. That is the element ID your logs will be shown. 
If you'd like to change the colours, you have to add the second parameter. The array should contain two colours: the `LOG` colour and the `ERROR` colour, in that specific order. It doesn't matter which way of colouring (e.g. hexadecimal, rgb,...) you use, as long as it is supported by CSS.

## The Functions
```
var debugger = new Debugger(geti("debug-id-name"), ["array", "of", "colours"]);
debugger.clear();
debugger.write("Hello World!", "log");
debugger.cwrite("Hello World!");
debugger.line("Hello World!", "error");
debugger.cline("Hello World!");
```
I think `clear()` is pretty obvious, but here it is: it clears the text what was there before.
`write()` adds the text to what already is there, but doesn't end with a new line. This function has the `c-ability`.
`line()` adds the text to what already is there, followed by a new line. This function has the `c-ability` as well.
The `c-ability` means you can use the same function with a `c` before the function, for example `cwrite()`. This doesn't change the way the function works, it only clears the console first before the function is called. 

## The Types
Most functions take two parameters, of which the second is optional. The first parameter is obviously the string you want to output. The second, however, is the format you might want to add. Here is a list of all the functions which may have a format added: 
```
debugger.write();
deubber.line();
```
All the `c-ability`-functions can use that too, obviously. 
There are now two supported types, namely `log` and `error`. Add one of these to one of the above listed functions as second parameter to make this work.
Examples: 
`debugger.cwrite("Clean. ", "log"); ` ==> Outputs: \[LOG\]: Clean. // \[LOG\] has text colour blue, unless different set.
`debugger.line("You don't have the rights for that! ", "error"); ` ==> Outputs: \[ERROR\]: You don't have the rights for that! // \[ERROR\] has text colour red, unless different set.





