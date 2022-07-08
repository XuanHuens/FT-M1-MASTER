'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var suma = 0
  var posicion = 0
  for (let i = num.length - 1; i >= 0; i--) {
    suma = suma + num[i] *2 ** posicion
    posicion++
    
  }
  return suma

}

function DecimalABinario(num) {
  // tu codigo aca

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}