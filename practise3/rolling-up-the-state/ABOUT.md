Of course, here is the content formatted as a Markdown file.

````markdown
# The Problem with Props (Prop Drilling)

Normally, in React, you pass props down the component tree from parent to child, then to grandchild, and so on. This becomes a problem when a deeply nested component needs data from a component high up in the tree.

Even if only the great-grandchild needs the prop, you have to pass it through all the intermediate components.

**Example:**

```jsx
function GreatGrandchild({ theme }) {
  return <p>Theme is: {theme}</p>;
}

function Grandchild({ theme }) {
  return <GreatGrandchild theme={theme} />;
}

function Child({ theme }) {
  return <Grandchild theme={theme} />;
}

export default function App() {
  return <Child theme="dark" />;
}
````

Here, the `theme` prop is being passed through every layer. This is called **prop drilling**. It can become messy and hard to maintain when many components are in between.

-----

## Context API: The Solution

The Context API provides a way to pass data through the component tree without having to pass props down manually at every level. It lets you create a global store that any component can access directly.

-----

## How to Use Context API (Step by Step)

### 1\. Create a Context

First, you create a Context object. React will read the current context value from the closest matching `Provider` above it in the tree.

```jsx
import React from 'react';

const ThemeContext = React.createContext();
```

### 2\. Provide a Value

Next, you use the `Provider` component to wrap the part of your app that needs access to the context. The `Provider` accepts a `value` prop to be shared with its descendant components.

```jsx
export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}
```

Here, `"dark"` is the value being shared globally with all components inside the provider.

### 3\. Consume the Value

Any component inside the `Provider` can now subscribe to the context changes using the `useContext` hook. This lets them access the value directly without receiving it as a prop.

```jsx
function GreatGrandchild() {
  const theme = React.useContext(ThemeContext);  // Access the context value directly
  return <p>Theme is: {theme}</p>;
}

function Grandchild() {
  return <GreatGrandchild />; // No need to pass props
}

function Child() {
  return <Grandchild />; // No need to pass props
}
```

Now, `GreatGrandchild` directly reads the `theme` from the context, and the intermediate components (`Child`, `Grandchild`) are much cleaner.

-----

## Real Example: Dark/Light Theme Toggle

Here’s a practical example of using state with context to create a theme toggler.

```jsx
import React, { useState, useContext } from 'react';

// 1. Create context
const ThemeContext = React.createContext();

// 3. Consume context in a component
function Navbar() {
  const theme = useContext(ThemeContext);
  const style = {
    padding: '10px',
    backgroundColor: theme === "dark" ? "#333" : "#EEE",
    color: theme === "dark" ? "white" : "black"
  };
  return <h2 style={style}>Navbar</h2>;
}

// 2. Provide context value
export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
      <Navbar />
    </ThemeContext.Provider>
  );
}
```

In this example, the `ThemeContext.Provider` passes the current `theme` state down. The `Navbar` component uses `useContext(ThemeContext)` to access this value directly and update its style accordingly.

-----

## In Simple Words

> **Props** = Passing things manually, like handing a note to each person in a row until it reaches the last one. 📝
>
> **Context API** = Putting the note on a bulletin board in the room. Anyone who needs it can just walk up and read it. 📌

👉 Context is mainly used for **global data** that many components might need, such as:

  - Theme (e.g., dark/light mode)
  - User information
  - Authentication status
  - Language preference
  - Shopping cart data

```
```