# monitoring-stats-app

1. Run `git clone https://github.com/barthola/monitoring-stats-app.git`
2. Navigate to the cloned repo directory through command line
3. Run `npm i` (if prompted, run `npm fund`)
4. Run `npm run start` to start localhost at 8080

### Testing

Postman can be used to test the API by sending requests to `http://localhost:8080/search` with the following parameters:

``` text

Specify date range using keywords or in EPOCH time format to query data

Parameters:

day     Values from [ today, yesterday ]

------------------ OR -----------------

start   Valid start EPOCH time
end     Valid end EPOCH time

```
