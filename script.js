const newYears = '1 Jan 2024'
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutsEl = document.getElementById('mins')
const secondsEl = document.getElementById('secs')


let countDown = () => {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeceonds = (newYearsDate - currentDate) / 1000
    const days = Math.floor(totalSeceonds / 3600 / 24)
    const hours = Math.floor(totalSeceonds / 3600) % 24
    const minuts = Math.floor(totalSeceonds / 60) %  60
    const seconds =  Math.floor(totalSeceonds) % 60

    daysEl.innerHTML = days
    hoursEl.innerHTML = hours
    minutsEl.innerHTML = minuts
    secondsEl.innerHTML = seconds
}

countDown()

setInterval(countDown,1000)

