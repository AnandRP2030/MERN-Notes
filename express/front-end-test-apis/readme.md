
Question:

Consider the following scenario where you are tasked with implementing various HTTP methods (`GET`, `POST`, `PATCH`, and `DELETE`) to interact with a RESTful API using the `fetch()` method in JavaScript. You are provided with the base URL `https://jsonplaceholder.typicode.com/posts` which represents a mock REST API for testing and prototyping.

1. GET Method:
   - Implement a JavaScript function named `getData()` that retrieves data from the API endpoint provided (`https://jsonplaceholder.typicode.com/posts`).
   - Ensure that the function asynchronously fetches the data and logs the retrieved posts data to the console.
   - Provide any necessary error handling.

2. POST Method:
   - Create an asynchronous function named `postData(payload)` that accepts a payload object.
   - This function should post data to the API endpoint (`https://jsonplaceholder.typicode.com/posts`) using the `POST` method.
   - The payload object should be converted to JSON format and sent in the request body.
   - Log the response data after posting to the console.
   - Handle any errors that may occur during the request.

3. PATCH Method:
   - Implement an asynchronous function called `patchData(payload)` which accepts a payload object.
   - Use the `PATCH` method to update an existing post at the API endpoint (`https://jsonplaceholder.typicode.com/posts/{id}`).
   - Convert the payload object to JSON and include it in the request body.
   - Log the response data after patching to the console.
   - Ensure proper error handling.

4. DELETE Method:
   - Create an asynchronous function named `deleteData(id)` that takes the ID of the post to delete as a parameter.
   - Use the `DELETE` method to remove the specified post from the API (`https://jsonplaceholder.typicode.com/posts/{id}`).
   - Log a success message if the deletion is successful.
   - Handle errors gracefully, providing appropriate error messages.

Instructions:
- Implement each method according to the provided specifications.
- Utilize the `fetch()` method for making HTTP requests.
- Ensure proper error handling to deal with potential network errors or API failures.
- Test each function with suitable data to verify its functionality.
- Provide comments or documentation where necessary to explain your implementation.

Note: The provided base URL (`https://jsonplaceholder.typicode.com/posts`) represents a mock API endpoint. All operations (POST, PATCH, DELETE) on this endpoint are simulated and do not have permanent effects.

