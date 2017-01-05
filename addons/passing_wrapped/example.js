const {createObject, add} = require('./build/Release/addon')

const obj1 = createObject(10)
const obj2 = createObject(20)

const result = add(obj1, obj2)

console.log(result)
