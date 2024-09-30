
**- What are custom hooks**

**Hooks** that you create yourself, so you can reuse later.

A **custom hook** is effectively a function, but with the following properties -

1. Uses another hook internally (useState, useEffect, another custom hook)
2. Starts with **use**

A few good examples of this can be

1. Data fetching hooks
2. Browser functionality related hooks - useOnlineStatus, useWindowSize, useMousePosition



// Task
// 1.  Create a custom hook, it automatically fetch data from db every 5 seconds. (api: https://jsonplaceholder.typicode.com/posts)
// 1.1 how to handle if second change 5 to 10 (or any other value). how to cleanup old interval and start a new one.

// 2. create a loading feature on loading state is true, (use 2 sec, set timeout for increase loading time.)