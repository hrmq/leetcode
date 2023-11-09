const check = (input) => {
    if (Array.isArray(input)) {
        return input.sort()
    }
    return input
}

module.exports = {
    check
}