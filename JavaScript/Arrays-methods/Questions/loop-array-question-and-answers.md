JS Loop And Array (intermediate question and answers)
Sure, here are 10 machine test questions related to JavaScript, covering topics like loops, conditional statements, strings, and arrays. Each question is followed by a brief explanation. Feel free to use these questions for practice:

1. **Looping through an Array:**

   Write a JavaScript function that takes an array of numbers and returns the sum of all even numbers in the array.

   ```javascript
   function sumOfEvenNumbers(arr) {
     let sum = 0;
     for (let num of arr) {
       if (num % 2 === 0) {
         sum += num;
       }
     }
     return sum;
   }
   ```

2. **Conditional String Manipulation:**

   Write a function that takes a string as input and returns a new string where each word is reversed if its length is even and remains the same if its length is odd.

   ```javascript
   function reverseEvenWords(str) {
     return str
       .split(" ")
       .map((word) =>
         word.length % 2 === 0 ? word.split("").reverse().join("") : word
       )
       .join(" ");
   }
   ```

3. **Array Filtering:**

   Given an array of strings, write a function to filter out strings with a length less than or equal to 3.

   ```javascript
   function filterShortStrings(arr) {
     return arr.filter((str) => str.length > 3);
   }
   ```

4. **Loop and Update:**

   Write a program that takes an array of numbers and updates each element to be its square if it is even and its cube if it is odd.

   ```javascript
   function updateArray(arr) {
     for (let i = 0; i < arr.length; i++) {
       arr[i] = arr[i] % 2 === 0 ? arr[i] * arr[i] : arr[i] * arr[i] * arr[i];
     }
     return arr;
   }
   ```

5. **String Concatenation with Loop:**

   Write a function that takes a string and a number as parameters and returns a new string repeated the specified number of times.

   ```javascript
   function repeatString(str, times) {
     let result = "";
     for (let i = 0; i < times; i++) {
       result += str;
     }
     return result;
   }
   ```

6. **Array Sum with Loop:**

   Write a function that calculates and returns the sum of all elements in an array of numbers.

   ```javascript
   function calculateArraySum(arr) {
     let sum = 0;
     for (let num of arr) {
       sum += num;
     }
     return sum;
   }
   ```

7. **String Search with Loop:**

   Write a function that checks if a given substring is present in a given string. Return `true` if the substring is found, otherwise `false`.

   ```javascript
   function isSubstringPresent(mainStr, subStr) {
     return mainStr.includes(subStr);
   }
   ```

8. **Loop and Conditional Update:**

   Given an array of numbers, write a function to replace each negative number with its absolute value.

   ```javascript
   function replaceNegativeNumbers(arr) {
     for (let i = 0; i < arr.length; i++) {
       if (arr[i] < 0) {
         arr[i] = Math.abs(arr[i]);
       }
     }
     return arr;
   }
   ```

9. **Array Sorting and Filtering:**

   Write a function that takes an array of numbers, sorts it in descending order, and returns a new array with only the positive numbers.

   ```javascript
   function sortAndFilterPositive(arr) {
     const sortedArr = arr.sort((a, b) => b - a);
     return sortedArr.filter((num) => num > 0);
   }
   ```

10. **Nested Loop:**

    Write a function that generates a multiplication table (2D array) for numbers from 1 to n, where n is a parameter passed to the function.

    ```javascript
    function multiplicationTable(n) {
      const table = [];
      for (let i = 1; i <= n; i++) {
        const row = [];
        for (let j = 1; j <= n; j++) {
          row.push(i * j);
        }
        table.push(row);
      }
      return table;
    }
    ```

These questions cover various aspects of JavaScript programming, including loops, conditionals, string manipulation, and array operations. Feel free to use them for practice or modify them as needed.
