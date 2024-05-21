In React, the `useRef` hook is used to create a mutable reference that persists across re-renders. It’s commonly used for accessing DOM elements directly or storing mutable values without causing re-renders. Here’s a step-by-step guide on how to use `useRef` in different scenarios.

### 1. **Import `useRef` from React**
To use the `useRef` hook, you need to import it from the React library.
```javascript
import React, { useRef } from 'react';
```

### 2. **Basic Usage to Access DOM Elements**
You can use `useRef` to get a reference to a DOM element. This is useful for tasks such as focusing an input or measuring element dimensions.

**Example: Focusing an Input Field**
```javascript
import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
```
In this example, clicking the button will focus the input field.

### 3. **Storing Mutable Values**
You can also use `useRef` to store any mutable value that doesn’t cause re-renders when changed. This can be useful for keeping track of previous values or any other state that doesn't need to trigger re-renders.

**Example: Storing Previous State**
```javascript
import React, { useState, useRef, useEffect } from 'react';

const PreviousValue = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default PreviousValue;
```
In this example, the previous count value is stored using `useRef`, allowing it to be accessed even after the component re-renders.

### 4. **Avoiding Unnecessary Re-renders**
Since `useRef` doesn't trigger re-renders, it’s useful for storing values that should not cause the component to update.

**Example: Storing a Timer ID**
```javascript
import React, { useState, useRef, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div>
      <p>Elapsed time: {seconds} seconds</p>
      <button onClick={() => clearInterval(timerRef.current)}>Stop Timer</button>
    </div>
  );
};

export default Timer;
```
Here, `useRef` is used to store the timer ID, allowing the interval to be cleared without causing a re-render.

### Personal Growth Technique: Practice by Building Projects
To solidify your understanding of `useRef` and other React hooks, try building small projects or components. For example:
- Create a form that automatically focuses on the next input field after submitting.
- Build a component that measures and logs the dimensions of a DOM element whenever it changes.
- Implement a custom video player with play, pause, and seek functionalities using `useRef` to control the video element.

By incorporating `useRef` into practical projects, you'll gain a deeper understanding of its use cases and how it can improve your React applications.