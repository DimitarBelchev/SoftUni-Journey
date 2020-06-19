const { dbReader, dbReaderWithDefault } = require('./dbReader')

const express = require('express')

const calculate = () => {
    return 1 + 2
}

const print = () => {
    return "Hello"
}

const readUsers = (callback) => {
    //second thread
    const users = dbReader(callback, 1000) // input output operation read users fron db
    return users
}

const readArticles = (callback) => {
    //second thread
    const articles = dbReader(callback, 3000) // input output operation read users fron db
    return articles
}

//Main Thread
console.log(calculate()) // 3
console.log(print()) // Hello
const firstUsers = readUsers((numbers) => {
    console.log('Users numbers', numbers)
})

const firstArticles = readArticles((numbers) => {
    console.log('Articles numbers', numbers)
})
console.log(firstUsers)
console.log(firstArticles)

console.log(calculate()) // 3