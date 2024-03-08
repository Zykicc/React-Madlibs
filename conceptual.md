### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
<!-- a development server that uses Webpack to compile React, JSX, and ES6. I would use it for user interface, website and applications. -->

- What is Babel?
  <!-- toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScrip -->

- What is JSX?
  <!-- JavaScript extension that allows creation of Document Object Model trees using an XML-like syntax. -->

- How is a Component created in React?
  <!-- by making a function and passing in a Prop. and then passing that component in a App.js file to render -->

- What are some difference between state and props?
  <!-- State is used to manage internal component data, while props are used to pass data from a parent component to a child component. -->

- What does "downward data flow" refer to in React?
  <!-- the convention in which data is passed from parent components down to their child components. -->

- What is a controlled component?
  <!-- Components are those in which form's data is handled by the component's state. -->

- What is an uncontrolled component?
  <!-- component in React is one that stores its own state internally and does not control its value through the React state mechanism -->

- What is the purpose of the `key` prop when rendering a list of components?
  <!-- to help React differentiate between the items and perform updates more efficiently -->

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  <!-- An index would be unique but it would not be stable since the array can mutate and indices can shift around. -->

- Describe useEffect. What use cases is it used for in React components?
  <!-- useEffect is a hook which you can tell react that your component needs to do something after render.  -->

- What does useRef do? Does a change to a ref value cause a rerender of a component?
  <!-- The useRef hook in React allows you to create a mutable reference to a value that persists across renders.Changing the value of a ref does not cause a component to re-render. -->

- When would you use a ref? When wouldn't you use one?
  <!-- use a ref when you need to perform actions like focusing an input field, triggering animations, or accessing measurements of a DOM element, Refs should only be used as a last resort when other approaches like props and state cannot achieve the desired functionality. -->

- What is a custom hook in React? When would you want to write one?
  <!-- Creating custom Hooks in React allows developers to encapsulate and reuse logic within functional components. It promotes code reusability, readability, and maintainability -->
