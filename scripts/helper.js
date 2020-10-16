export const generateData = (mins) => {
    let currentTime = Math.floor(Date.now() * 0.0001)*10
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
    return  Math.floor((new Date(parseInt(dt)).getTime()) * 0.001)
}

export const today = () => {
    const today = new Date()
    return new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime()
}

const getRandomIntFromRange = (start, end) => {
    return ~~(Math.random() * end) + start
}

export const validateInput = (params) => {
    if (!params || (!params.day && (!params.start || !params.end))) {
        return false
    }
    const start = new Date(params.start) != "undefined", end = new Date(params.end) != "undefined"
    return (start && end)
}

export const queryData = (start, end, data) => {
    return data.filter(obj => {
        return (start <= obj.timestamp) && (obj.timestamp <= end)
    })
}