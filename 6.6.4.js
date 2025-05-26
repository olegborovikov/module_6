const size = 3

for (let row = 0; row < size; row++) {
  let line = ''

  for (let col = 0; col < size; col++) {
    line += (row + col) % 2 === 0 ? 'x' : 'o'

    if (col < size - 1) {
      line += ' '
    }
  }

  console.log(line)
}
