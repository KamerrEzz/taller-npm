const multiplicacion = (...args) => {
    if(args.length < 0) {
        return new Error('Debe haber al menos más de un número')
    }
    let multiplicacion = 1;
    args.forEach((n, i) => {
        if(typeof n !== "number") throw new Error(`${n} is not a number in position ${i}`)
        multiplicacion = multiplicacion * n
    })
    return multiplicacion
}

module.exports = multiplicacion