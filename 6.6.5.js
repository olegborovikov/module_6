const obj = {
  some: 'some',
  dom: 'text',
  arr: [1, 2, 3, 4, 5],
  tom: 'there',
}

const arrValues = []

for (let key in obj) {
  const value = obj[key]

  if (Array.isArray(value)) {
    for (let item of value) {
      arrValues.push(item)
    }
  } else {
    arrValues.push(value)
  }
}

console.log(arrValues)
