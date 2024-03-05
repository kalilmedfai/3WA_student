import express from 'express'
const app = express()
const port = 3002
import path from 'node:path'
import playersRouter from './route/players.js'
import bodyParser from 'body-parser'


//const __dirname = new URL('./views', import.meta.url).pathname
//console.log(__dirname)

app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))

app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'views'));



app.get('/', (req, res) => {
    res.render('home')
})

app.use('/', playersRouter)

app.listen(port, () => {
    console.log('Welcome to our first API using express')
})