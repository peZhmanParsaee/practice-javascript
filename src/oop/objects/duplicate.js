
var someObj = {
  pageSize: 10,
  pageIndex: 12,
  totalRecords: 18,
  data: [
    {
      id: 1,
      name: 'pezhman'
    }
  ],
  filter: {
    q: 'criteria'
  }
};

var newObj = JSON.parse(JSON.stringify(someObj));

newObj.filter = null;

console.log(someObj);
console.log(newObj);
console.log(newObj.data === someObj.data);
console.log(newObj.filter === someObj.filter);


var newObj2 = Object.assign({}, someObj);
console.log(newObj2.pageSize);
console.log(newObj2.data === someObj.data);
console.log(newObj2.filter === someObj.filter);