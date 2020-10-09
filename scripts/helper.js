generateData = (mins) => {
    let currentTime = Math.floor(Date.now() * 0.0001) *10;
    let data = [];

    for (let i = 0; i < mins; i++) {
        data.push({
            timestamp: currentTime - (i*60),
            cpuLoad: getRandomIntFromRange(0, 100),
            concurrency: getRandomIntFromRange(0, 500000)
        });
    }

    return data;
}

getRandomIntFromRange = (start, end) => {
    return ~~(Math.random() * end) + start;
}

export { generateData };