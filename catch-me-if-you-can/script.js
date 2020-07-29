function sum(x, y) {
  try {
    if (x !== Number) {
      throw new Error(`This is an errorssss in red`);
    } else if (x && y === Number) {
      return x + y;
    }
  } catch (err) {
   console.log(`This is an error`)
  }
}

console.log(sum(2, 5));
