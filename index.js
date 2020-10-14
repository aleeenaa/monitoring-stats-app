import express from 'express'
import { generateData, getSeconds, today, validateInput, queryData } from './scripts/helper.js'

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
        if (params.day) {
            const t = today()
            if (params.day.toLowerCase() == 'today') {
                params.start = t
                params.end = params.start + 86399000
            } else if (params.day.toLowerCase() == 'yesterday') {
                params.start = t - 86400000
                params.end = t - 1000
            }
        }
        
        result = queryData(getSeconds(params.start), getSeconds(params.end), data)
    }
    res.send(result)
})

// Start the server
app.listen(app.get('port'), () => {
    // Logging generated data for inspection purposes
    console.log('Generated Data:\n', JSON.stringify(data))
    console.log(`\nApp listening at http://localhost:${PORT}\n` +
        'Press Ctrl+C to quit.\n')
})