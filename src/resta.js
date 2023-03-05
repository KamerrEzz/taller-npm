const resta = (...args) => {
    if(args.length < 0) {
        return new Error('Debe haber al menos más de un número')
    }
    let resta = args[0];
    args.forEach((n, i) => {
        if(typeof n !== "number") throw new Error(`${n} is not a number in position ${i}`)
        if(i === 0) return;
        resta -= n
    })
    return resta
}

module.exports = resta