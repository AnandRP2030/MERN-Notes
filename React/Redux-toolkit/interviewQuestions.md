# Redux Interview Questions
## 1. What is Redux?

Redux is a predictable state container for JavaScript apps. Redux use for global state management. It helps manage the state of an application in a single immutable state tree, making it easier to manage and modify the state of the application.

## 2. What are the core principles of Redux?

The core principles of Redux include:

    1. Single source of truth: The state of the entire application is stored in a single JavaScript object tree within a single store.
    2. State is read-only: The only way to change the state is by dispatching an action, which describes the intent to change the state.
    3. Changes are made with pure functions: To specify how the state tree is transformed by actions, you write pure reducer functions.

## 3. Explain what is a reducer in Redux?

A reducer is a pure function in Redux that takes the current state and an action as arguments, and returns the new state based on that action. It specifies how the application's state changes in response to actions sent to the store.


## 4. What is Redux Toolkit?

Redux Toolkit is the official opinionated toolset for Redux. It provides simplified APIs and utilities to reduce the boilerplate code typically associated with Redux, making it easier and faster to write Redux code.

## 5. What are the main features of Redux Toolkit?

The main features of Redux Toolkit include:

    1. configureStore(): A function that simplifies the creation of Redux store with commonly used middlewares and dev tools pre-configured.
    2. createSlice(): A function that generates action creators and reducer functions based on a slice of the state, reducing the amount of boilerplate code.
    3. createAsyncThunk(): A utility for creating async action creators that dispatch multiple actions based on the lifecycle of an asynchronous operation.

## 6. How does createSlice() simplify Redux code?

createSlice() simplifies Redux code by generating action creators and reducer functions based on a slice of the state. It automatically generates action types and action creators, and handles immutable updates to the state, reducing the amount of repetitive code.

## 7. How does Redux Toolkit help with performance optimization?

Redux Toolkit helps with performance optimization by encouraging the use of immutable updates to the state and providing utilities like createSlice() which generate optimized reducer functions. It also includes built-in support for serializable state and middleware configuration, which can help identify performance bottlenecks.

## 8.  Can you use Redux Toolkit with existing Redux projects?

Yes, Redux Toolkit can be used with existing Redux projects. It's designed to be compatible with Redux, and you can gradually adopt its features into existing Redux codebases without requiring a complete rewrite.