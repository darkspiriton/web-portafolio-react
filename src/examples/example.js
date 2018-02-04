// const [a, b, c, d, e] = [1, 2, 3, 4, 5]
const numbers1 = [1, 2, 3, 4, 5]
const numbers2 = [1, 2, 3, 4, 5]
// const newArray = [...numbers, ...numbers1, ...numbers2, 6, 7, 8]
// console.log(newArray)
// console.log(c, 'argumentos')

const House = {
  size: 500
}

const Department = {
  ...House,
  name: 'Comas-test'
}

const filter = (...args) => {
  return args.filter(el => el !== 1)
}

const filterName = ({ name }) => {
  console.log(name)
}

filterName(Department)

console.log(filter(1, 2, 3, 4, 5, 6))

console.log(Department)

const newDepa = { ...Department }
// const newDepa = Department
Department.name = 'Surco'
console.log(newDepa)
