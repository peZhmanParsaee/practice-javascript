function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;
  
  return {
    next: function () {
      let result;

      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        iterationCount++;
        nextIndex += step;
        return result;
      }

      return {
        value: iterationCount,
        done: true
      };
    }
  };  
}

const it = makeRangeIterator(1, 10, 2);
let result = it.next();

while(!result.done) {
  console.log(result.value);
  result = it.next();
}


console.log('result: ', result);


console.log(`iterated over sequence of size: ${result.value}`);

