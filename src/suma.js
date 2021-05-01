const {numero} = require('../utils/errorHandler')

module.exports = {
    suma: (a,b) => {
        numero(a)
        numero(b)
        return a + b;
    },
    sumatres(a, b, c) {
        return a + b + c;
    },
    sumacuatro: function(a,b,c,d) {

    }
};