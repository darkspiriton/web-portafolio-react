let contador = (() => {
  let _counter = 0

  function increse () {
    _counter++
  }

  function decrese () {
    _counter--
  }

  function valor () {
    return _counter
  }

  return {
    increse,
    decrese,
    valor
  }
})()

// contador.decrese()
contador.increse()
contador.increse()
contador.increse()

console.log(contador.valor())

;((c) => {

})(console.log)
