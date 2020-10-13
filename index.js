import express from 'express'
import { generateData, getSeconds, validateInput, queryData } from './scripts/helper.js'

const app = express(), data = generateData(5), PORT = (process.env.PORT || 8080)

app.set("port", PORT)
app.use(express.json())

app.get('/search', (req, res) => {
    const params = req.query
    let result
    if (!validateInput(params)) {
        result = {
            status: 'error',
            statusMessage: 'Missing or incorrect user input'
        }
    } else {
        result = queryData(getSeconds(params.start), getSeconds(params.end), data)
    }
    res.send(result)
})

// Start the server
app.listen(app.get('port'), () => {
    console.log(`App listening at http://localhost:${PORT}\n` +
        'Press Ctrl+C to quit.\n')
})