let count = 100;
while (count >= 0) {
  console.log(count);
  // count = count - 1;
  // ð syntax sugar for ð
  count -= 1;
}

// Using a for loop
for (let i = 100; i >= 0; i -= 1) {
  console.log(i);
}

// 100
// 99
// 98
// ...
