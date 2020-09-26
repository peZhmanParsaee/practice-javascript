var squareNumbers = {
  [Symbol.iterator]: () => {
    var ix =1, x=1;

    return {
      next: () => {
        x = ix * ix;
        ix++;
        return { value: x };
      }
    };
  }
};

var output = "";

for (var sq of squareNumbers) {
  output += " " + sq;

  if (sq > 10000000) break;
}

console.log(output);
