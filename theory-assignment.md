# `Learn React With Harshi` Series 
   Documenting my learning journey of [Namaste React Live Course](https://learn.namastedev.com/) conducted by Akshay Saini
   
   
## Theory Assignment: `Chapter - 03 Laying the foundation` (01/01/2023)

### 1. What is `JSX`?
`JSX` is neither a string nor a html tag but a syntactic sugar for the React object. It is a `html-like syntax` inside `js` code for creating react elements. By using JSX, instead of writting markup (html) and logic(js) separately, the separation of concerns (SoC) is emphasized based on loosely coupled units called 'Components' which contains both. 

Broswer does not understand JSX and a transpiler/compiler is required to convert this to browser understandable js code. Eg: Babel

JSX ------> React.createElement() -----> React element ----> Object to be rendered in the DOM

### 2. Superpowers of JSX 

- JSX as `variables` : markup (html-like) syntax can be set in a variable. This creates a react element (object).

- `javascript expressions` in JSX : JSX supports all js expressions by wrapping them in {} 

- `Attributes` in JSX : We can pass all the html attributes inside jsx tag (attributes must be CamelCased). Even, custom attributes can be created, but it must not use CamelCase. 

- `Props` in JSX : The values of each attribute can be passed as properties (props) to a react element. This is my favourite superpower of jsx, since it can handle dynamic data to create react elements.

### 3. Role of type attribute in script tag ? What options can I use there ?

`type` attribute of the <script> tag indicates the type of script.Until HTML 4,  type is a required attribute. The value of type can be any of the following : 

```
<script type="" src="app.js"></script>
```
In HTML5, type attribute is not mandatory. If type attribute is not present(default), or an empty string (type="") or javascript MIME type (text/javascript or application/ecmascript), it is treated as classic "javascript" file.

```
<script type="module" src="app.js"></script>
```
If the type attribute is set `module`, then the code in that js file is treated as module.

```
<script type="importmap" src="app.js"></script>
```
If the type attribute is set `importmap`, the body of teh element contains importmap ie an JSON object using which the browser can resolve the module specifiers while importing modules.

```
<script type="{$anyothervalue}" src="app.js"></script>
```
  
If the type attribute contains anyother value, then the code is treated as data block and will not be processed by the browser. A valid MIME type other than Javascript MIME type (Eg: image/png or text/css) must be mentioned. All the other attributes for this type will be ignored even the `src` attribute.

   
### 4. `{ TitleComponent }` vs `{ <TitleComponent /> }` vs `{ <TitleComponent> </TitleComponent> }` in JSX    

   `{ TitleComponent }` - This value in jsx is considered as jsx expression or variable. If no such variable is present, no output will be shown in the browser. Console throws the following warning
   ```
   index.js:1 Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.
  
   ```

   `{ <TitleComponent /> }` - This value in jsx is meant for rendering a component (i.e) function that return jsx. This is self closing tag.
   
   `{ <TitleComponent> </TitleComponent> }` - This is same as `{ <TitleComponent /> }` if there are no child inside TitleComponent. If there are children, then those values come inside   `{ <TitleComponent>} ` and `</TitleComponent> }`. 
   
   

