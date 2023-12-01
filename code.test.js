const fs = require('fs');
const jsc = require('jsverify');

const async = require('async');
eval(fs.readFileSync('code.js')+'');

const countMatchesProperty = jsc.forall(jsc.array(jsc.number), jsc.number, async function (array, key) {
  const expectedCount = array.filter(element => element === key).length;

  const result = await new Promise((resolve) => code.countAsync(array, key, resolve));
  return result === expectedCount;
});

