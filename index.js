import express from 'express'
import { generateData } from './scripts/helper.js'

let app = express()

let data = generateData(5)

app.set("port", (process.env.PORT || 8080))
app.use(bodyParser.json({
    type: "application/json"
}))

app.get('/', (request, result) => {
    result.send('Hello World!\n'+JSON.parse(data))
})

// Start the server
app.listen(app.get('port'), () => {
    require('dns').lookup(require('os').hostname(),
        (err, addr) => {
        console.log(
            `App listening at http://${addr}:${process.env.PORT || 8080}\n` +
            'Press Ctrl+C to quit.'
        )
    })
})