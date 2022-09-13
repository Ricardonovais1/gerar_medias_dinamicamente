function sum() {
    // const numbers = Array.from(arguments)
    const numbers = [...arguments]
    return numbers.reduce(function (sum, atual) {
        return sum + atual
    }, 0)
}
function average() {
    return sum(...arguments) / arguments.length
}

console.log(sum(10, 3, 7.5, 3))
console.log(average(10, 3, 7.5, 3))