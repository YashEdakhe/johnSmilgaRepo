const _ = require('lodash');

let arr = [1,[2,[3,[4]]]];

console.log(_.flattenDeep(arr));