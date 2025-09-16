The idea of rolling up the state in React:

It means moving the state from a lower-level (child) component up into a higher-level (parent) component, so that multiple child components can share and control that state.

Why?
Because in React, data only flows downward (parent → child). If two siblings need to share the same data, the parent has to "own" that state and pass it down to both.

Example without rolling up

Imagine you have two child components:

One where you type a number.

Another that shows the square of that number.

If each child keeps its own state, they don’t know about each other. So updating one won’t affect the other.

function InputBox() {
  const [number, setNumber] = React.useState(0);

  return (
    <input 
      type="number"
      value={number}
      onChange={(e) => setNumber(Number(e.target.value))}
    />
  );
}

function SquareDisplay() {
  const [number, setNumber] = React.useState(0);

  return <p>Square is: {number * number}</p>;
}

export default function App() {
  return (
    <div>
      <InputBox />
      <SquareDisplay />
    </div>
  );
}


👉 Here, typing in InputBox won’t change what SquareDisplay shows, because their states are separate.

Example with rolling up the state

We move the number state up to the App (parent), then pass it down to both children.

function InputBox({ number, setNumber }) {
  return (
    <input 
      type="number"
      value={number}
      onChange={(e) => setNumber(Number(e.target.value))}
    />
  );
}

function SquareDisplay({ number }) {
  return <p>Square is: {number * number}</p>;
}

export default function App() {
  const [number, setNumber] = React.useState(0);

  return (
    <div>
      <InputBox number={number} setNumber={setNumber} />
      <SquareDisplay number={number} />
    </div>
  );
}


👉 Now both components are in sync because they share the same parent state.

In plain English:

Without rolling up: Each child keeps its own secret diary (state), so they don’t know what the other is writing.

With rolling up: The parent keeps one diary and shows copies to both children, so they always see the same info.