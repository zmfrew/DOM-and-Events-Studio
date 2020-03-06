// Remember to pay attention to page loading!
// Write your JavaScript code here.

let flightStatus
let rocket
let shuttleHeight
let shuttleScreen

function init() {
    flightStatus = document.getElementById('flightStatus')
    rocket = document.getElementById('rocket')
    rocket.style.position = 'absolute';
    rocket.style.left = '0px';
    rocket.style.bottom = '0px';
    shuttleHeight = document.getElementById('spaceShuttleHeight')
    shuttleScreen = document.getElementById('shuttleBackground')

    const abortButton = document.getElementById('missionAbort')
    abortButton.addEventListener('click', abort)

    const downButton = document.getElementById('down')
    downButton.addEventListener('click', down)

    const landButton = document.getElementById('landing')
    landButton.addEventListener('click', land)

    const leftButton = document.getElementById('left')
    leftButton.addEventListener('click', left)

    const rightButton = document.getElementById('right')
    rightButton.addEventListener('click', right)

    const takeoffButton = document.getElementById('takeoff')
    takeoffButton.addEventListener('click', takeoff)

    const upButton = document.getElementById('up')
    upButton.addEventListener('click', up)
}

function abort() {
    if (confirm('Confirm that you want to abort the mission.')) {
        updateFlight('Mission Aborted.', 'green', 0)
        rocket.style.bottom = '0px';
        rocket.style.left = '0px';
    }
}

function animate(direction) {
    if (direction === 'down') {
        const newBottom = parseInt(rocket.style.bottom) - 10
        if (newBottom > 0) {
            const shifted = newBottom + 'px';
            rocket.style.bottom = shifted;
        }
    } else if (direction === 'left') {
        const newLeft = parseInt(rocket.style.left) - 10
        if (newLeft > 0) {
            const shifted = newLeft + 'px';
            rocket.style.left = shifted;
        }
    } else if (direction === 'right') {
        const newLeft = parseInt(rocket.style.left) + 10
        if (newLeft < 500) {
            const shifted = newLeft + 'px';
            rocket.style.left = shifted;
        }
    } else {
        const newBottom = parseInt(rocket.style.bottom) + 10
        if (newBottom < 240) {
            const shifted = newBottom + 'px';
            rocket.style.bottom = shifted;
        }
    }
}

function shuttleIsInFlight() {
    return flightStatus.innerHTML === 'Shuttle in flight'
}

function down() {
    if (shuttleIsInFlight) {
        shuttleHeight.innerHTML = shuttleHeight.innerHTML > 10000 ? shuttleHeight.innerHTML - 10000 : 0
        animate('down')
    }
}

function land() {
    alert('The shuttle is landing. Landing gear engaged.')
    updateFlight('The shuttle has landed', 'green', 0)
    rocket.style.bottom = '0px';
    rocket.style.left = '0px';
}

function left() {
    if (shuttleIsInFlight) {
        animate('left')
    }
}

function right() {
    if (shuttleIsInFlight) {
        animate('right')
    }
}

function updateFlight(message, backGroundColor, height) {
    flightStatus.innerHTML = message
    shuttleScreen.style.backgroundColor = backGroundColor
    shuttleHeight.innerHTML = height
}

function takeoff() {
    if (confirm('Confirm that the shuttle is ready for takeoff.')) {
        updateFlight('Shuttle in flight.', 'blue', 10000)
        animate('up')
    }
}

function up() {
    if (shuttleIsInFlight) {
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000
        animate('up')
    }
}

window.onload = init