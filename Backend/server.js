const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: 

})

app.get('/', (re, res)=> {
    return res.json("From Backend")
})

app.listen (8081, ()=>{
console.log("listening")
})