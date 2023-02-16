const object = {
  a: "apple",
  b: "banana",
  c: "cherry",
}

function createObject(fruit) {
  return {
    a: fruit,
    b: "blueberry",
    c: "clementine",
  }
}

const objectA = createObject("raspberry")
const objectB = createObject("grape")

console.log(objectA)
console.log(objectB)