// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (prop) => prop;
const createNotEnumerableProperty = (prop) => Symbol(prop);
const createProtoMagicObject = () => Function;

let increment = 0;
const incrementor = () => {
  increment++;
  incrementor.valueOf = () => increment;

  return incrementor;
};

let asyncIncrement = 0;
const asyncIncrementor = () => {
  return new Promise(resolve => {
    asyncIncrement++;
    resolve(asyncIncrement);
  });
};

const createIncrementer = function* () {
  let increment = 1;

  while(true) {
    yield increment++;
  }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (prop) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(prop), 1000);
  });
};

const getDeepPropertiesCount = (obj) => {
  let count = JSON.stringify(obj).match(/[0-9]+/g).length;
  return count;
};

const createSerializedObject = () => null;
const toBuffer = () => {};
const sortByProto = (arr) => arr.sort((a, b) => a.__proto__ - b.__proto__);

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;