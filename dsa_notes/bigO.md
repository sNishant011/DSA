# Big O

- Big O is a way to measure or categorize an algorithms time or memory requirement based on the input. It doesn't give actual measurement, rather it gives the general growth rate of time and memory.

- When the complexity is O(N), it means that the algorithms time or memory taken will grow linearly based on the input size.

- Example: O(1), O(logN), O(N), O(N^2), etc.

## Why do we need it?

- It will let us know how the algorithm will perform, this can help us decide best possible program.

```ts
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
      sum += n.charCodeAt(i);
  }

  for (let i = 0; i < n.length; ++i) {
      sum += n.charCodeAt(i);
  }

  return sum;
}
```

- For every character in the string 'n', one computation is to be done.

- The time space complexity of above code is O(N) but not O(2N).


## Important Concepts

- Growth is with respect to the input size.

- Constants are dropped because we are trying to generally know the time or memory requirements not the exact units.

- We often consider worst case scenarios. For example, we do not consider, if there is conditional statement that might terminate program at the middle of execution.
