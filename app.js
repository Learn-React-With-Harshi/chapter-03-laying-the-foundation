import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './assets/logo.png';

/* Nested header element with h1,h2,h3 using React.createElement() */ 
const heading1 = React.createElement("h1", {id: "heading"}, "Namaste React Live");
const heading2 = React.createElement("h2", {id: "main_heading"}, "Chapter 03 : Laying the foundation");
const heading3 = React.createElement("h3", {id: "sub_heading"}, "Nested header element with h1,h2,h3 using React.createElement()");

const header = React.createElement("div", {class : "title"}, [heading1, heading2, heading3]);


/* Nested header element with h1,h2,h3 using JSX */ 
const jsx_header= (
  <div className="title">
    <h1>Namaste React Live</h1>
    <h2>Chapter 03 : Laying the foundation</h2>
    <h3>Nested header element with h1,h2,h3 using JSX</h3>
  </div>
);

/* Nested header element with h1,h2,h3 using JSX React Element */ 
const jsx_header_attr= (
  <div className="title">
    <h1> <a href="https://learn.namastedev.com/">Namaste React Live </a></h1>
    <h2>Chapter 03 : Laying the foundation</h2>
    <h3>Nested header element with h1,h2,h3 using JSX</h3>
  </div>
);


/* Nested header element with h1,h2,h3 using Functional Component */ 
const HeadingComponent = function() {
  return (
    <div className="title">
      { TitleComponent } {/* It does not work since TitleComponent is a component and not a react element*/}
      { <TitleComponent /> } {/* It works since TitleComponent is enclosed within <> */}
      { <TitleComponent> </TitleComponent> } {/* It works since TitleComponent is enclosed within <> */}
      <h1><a href="https://learn.namastedev.com/">Namaste React Live</a></h1>
      <h2>Chapter 03 : Laying the foundation</h2>
      <h3>Nested header element with h1, h2, h3 using Functional Component</h3>
    </div>
  );
}



/* Component Composition */

const TitleComponent = function() {
  return (
    <h1>Namaste React Live : From Title Component </h1>
  );
}


/* Assignment 2 */

const HeaderComponent = function (){
  return(
    <div className="heading-wrapper">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" />
        <span className="logo-name">Learn React With Harshi</span>
      </div>

      <div className="search">
        <input type="text" key="search" placeHolder="Search for a chapter"/>
      </div>
    
      <div class="avatar">
        <div class="user-icon" key="user-icon"> </div>
      </div>
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById("root"));

/* Assignment 1 */
root.render(header); /* Rendering header created using React.createElement() */
root.render(jsx_header); /* Rendering header created using JSX */
root.render(jsx_header_attr); /* Rendering header created using JSX  and passing attributes in jsx tag*/
root.render(<HeadingComponent />); /* Rendering header created using Functional Component */


//root.render(<HeaderComponent />); /* Assignment 2  */