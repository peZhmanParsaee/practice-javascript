function timeDelay(delay, cb) {
  setTimeout(() => {
    cb();
  }, delay);
}

function *messages() {
  yield timeDelay(1000, () => { console.log('1st cb') });
  yield timeDelay(2000, () => { console.log('2nd cb') });
  yield timeDelay(1000, () => { console.log('3rd cb') });
  yield timeDelay(1000, () => { console.log('4th cb') });
  yield timeDelay(1000, () => { console.log('5th cb') });
}

var it = messages();
it.next();
it.next();
