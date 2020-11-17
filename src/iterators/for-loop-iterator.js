var arr = [10, 20, 30];

for (var item of arr) {
  console.log(item);
}

var it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

var it2 = arr[Symbol.iterator]();
for(let x; (x = it2.next()) && !x.done;) {
  console.log(x.value);
}
