const createObject = require('./build/Release/addon')

const obj = createObject(10)

console.log(obj.plusOne())

console.log(obj.plusOne())
console.log(obj.plusOne())

