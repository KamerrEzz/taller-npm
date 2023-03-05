const {numero} = require('../utils/errorHandler')

const suma = (...args) => {
    if(args.length < 0) {
        return new Error('Debe haber al menos más de un número')
    }
    let suma = 0;
    args.forEach((n, i) => {
        if(typeof n !== "number") throw new Error(`${n} is not a number in position ${i}`)
        suma += n
    })
    return suma
}

module.exports = suma