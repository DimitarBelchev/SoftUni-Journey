const dbReaderWithDefault = (cb, timing) => {
    setTimeout(() => {
        cb([1, 2, 3, 4])
    }, timing)

}

const dbReader = (cb, timing) => {
    setTimeout(() => {
        cb([1, 2, 3, 4])
    }, timing)
    return "Loading"
}

module.exports = { dbReader, dbReaderWithDefault }