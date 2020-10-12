import express from 'express'
import generateData from './scripts/helper.js'

let app = express()

let data = generateData(5)

app.set("port", (process.env.PORT || 8080))
app.use(express.json)

app.get('/', (request, result) => {
    result.send('Hello World!\n'+JSON.parse(data))
})

// Start the server
app.listen(app.get('port'), () => {
    console.log(`App listening at http://localhost:${process.env.PORT}\n` +
        'Press Ctrl+C to quit.')
    console.log('data', JSON.stringify(data))
})