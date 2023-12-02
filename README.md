[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13051679&assignment_repo_type=AssignmentRepo)
# Asynchronicity

Implement a function that takes an array and a key to search for and counts the
number of times key matches an element in the array (the count matches function
we talked about in lectures). Your implementation must count the number of
matches asynchronously, but does not need to do so in parallel. What type of
asynchronous execution you choose is up to you.

I have not provided a template; depending on how you choose to implement the
function, it will have a different signature. I have also not provided any test
code, but you can base yours on test code from other exercises.

The [async library](https://caolan.github.io/async/v3/) may be helpful with
this.

## Runtime Analysis

What is the time complexity of your implementation (worst-case $\Theta$)? Add
your answer, including your reasoning, to this markdown file.

The "countAsync" function counts the occurrences of a specified key within an array using the "async" library. It first  checks for an empty array and returns an error
messege if the array is empty. My implementation uses the "async.filter" to count matches for each element, determing whether it matches the specific key, asynchronously. The "async.reduce" sums up individual counts. The worst-case time complexity of my implementation is $\ O(n)$, where $n$ is the length of the array, as it iterates through the array once for filtering and counting operations, maintaining a linear time complexity. 

