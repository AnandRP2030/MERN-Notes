1. Using Context API we create a centralized store or Context for react application.
2. Context API is an inbuilt feature in react
3. Any Component can access this centralized store or context

### Introduction to React Context API and useContext Hook

React Context API and the `useContext` hook are powerful tools for managing global state in a React application. They allow you to share data across the component tree without having to pass props down manually at every level.

### When to Use Context

- When you have data that needs to be accessed by many components at different nesting levels.
- For theming, authentication, and user preferences.
- When prop drilling becomes cumbersome.

### Steps to Use Context API and useContext Hook

#### 1. Create a Context

Create a new context using the `createContext` function.

```javascript
import React, { createContext, useState } from 'react';

export const MyContext = createContext();
```

#### 2. Provide the Context

Wrap your component tree with the `MyContext.Provider` component and provide the value you want to share.

```javascript
const MyProvider = ({ children }) => {
  const [state, setState] = useState('default value');

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
```

#### 3. Consume the Context

Use the `useContext` hook to consume the context in any component.

```javascript
import React, { useContext } from 'react';
import { MyContext } from './MyContext';

const MyComponent = () => {
  const { state, setState } = useContext(MyContext);

  return (
    <div>
      <p>Current state: {state}</p>
      <button onClick={() => setState('new value')}>Change State</button>
    </div>
  );
};

export default MyComponent;
```

### Complete Example

Let's create a simple example to manage global state for user authentication status.

#### 1. Create a Context (`AuthContext.js`)

```javascript
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
```

#### 2. Provide the Context (`App.js`)

```javascript
import React from 'react';
import AuthProvider from './AuthContext';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <AuthProvider>
      <MyComponent />
    </AuthProvider>
  );
};

export default App;
```

#### 3. Consume the Context (`MyComponent.js`)

```javascript
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const MyComponent = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <div>
      <p>User is {isAuthenticated ? 'logged in' : 'logged out'}</p>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default MyComponent;
```

### Benefits of Using Context API

- **Avoid Prop Drilling:** Context API helps avoid the need to pass props through intermediate elements.
- **Global State Management:** It’s a good solution for managing global state that needs to be accessed across various components.
- **Improved Readability:** Context API can make your codebase cleaner and more readable by reducing the need for complex prop management.

### Best Practices

- **Use Multiple Contexts:** For different data sets, use multiple contexts instead of a single large context.
- **Performance Considerations:** Be mindful of performance as unnecessary re-renders might occur if the provider's value changes frequently. You can optimize this by using `useMemo` to memoize the context value.
- **Provider Placement:** Place providers wisely in your component tree to avoid wrapping too many components unnecessarily.

By understanding and utilizing React Context API and `useContext` hook, you can efficiently manage global state in your React applications, leading to cleaner and more maintainable code.