class Post {
  constructor() {
    this.tags = ['stars', 'space', 'planets', 'fly'];
  }

  [Symbol.iterator]() {
    let ix = -1;
    let self = this;

    return {
      next() {
        ix++;
        return {
          done: ix >= self.tags.length,
          value: self.tags[ix]
        };
      }
    };
  }
}

var post = new Post();

for (var p of post) {
  console.log(p);
}
