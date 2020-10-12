export const generateData = (mins) => {
    let currentTime = getSeconds(Date.now())
    let data = []

    for (let i = 0; i < mins; i++) {
        data.push({
            timestamp: currentTime - (i*60),
            cpuLoad: getRandomIntFromRange(0, 100),
            concurrency: getRandomIntFromRange(0, 500000)
        })
    }

    return data
}

export const getSeconds = (dt) => {
    return  Math.floor(new Date(dt) * 0.0001) *10
}

const getRandomIntFromRange = (start, end) => {
    return ~~(Math.random() * end) + start
}

export const validateInput = (params) => {
    if (!params || !params.start || !params.end) {
        return false
    }
    const start = new Date(params.start) != "undefined", end = new Date(params.end) != "undefined"
    return (start && end)
}

export const queryData = (start, end, data) => {
    data.sort()
    data.filter(obj => {
        return start <= obj.timestamp <= end
    })
    return data
}