// controls that needs to be handled
// volume up/down
// jumping forward/backward short/long
// pause/play

const keysToListen = [
    " ", //space
    "Enter",
    "ArrowRight",
    "ArrowLeft",
    "Control"
]


let state = {
    pressed: undefined
}

const setState = (action, value) => {
    if (action === 'pressed') {
        state = {
            pressed: value
        }
    } else {
        state  = {
            pressed: undefined
        }
    }
}

window.addEventListener("keydown", (event) => {
    if(keysToListen.includes(event.key)) {
        switch (true){
            case event.key === " ": {
                handlePause()

                break
            }
            case event.key === "Enter": {
                handlePlay()

                break
            }
            case event.key === 'Control': {
                setState('pressed', event.key)

                break
            }
            case event.key === 'ArrowRight': {
                if(state.pressed) {
                    // C - ->
                    handleLongJump('forward')
                } else {
                    handleShortJump('forward')
                }
                break
            }
            case event.key === 'ArrowLeft': {
                if(state.pressed) {
                    // C - ->
                    handleLongJump('backward')
                } else {
                    handleShortJump('backward')
                }
                break
            }
            case event.key === 'ArrowUp': {
                handleVolUp()

                break
            }
            case event.key === 'ArrowDown': {
                handleVolDown()

                break
            }
        }
        console.log(`pressed some control key: ${event.key}, state: ${JSON.stringify(state)}!`)
    }
})

window.addEventListener('keyup', (event) => {
    if(event.key === state.pressed) {
        setState()
    }
    console.log(`keyup: ${event.key}, state: ${JSON.stringify(state)}`)
})

const tableContainer = document.querySelector(".nlControlsTable")
const pauseBtn = tableContainer.querySelector('.nlPauseBtn')
const playBtn = tableContainer.querySelector('.nlPlayBtn')

const handlePause = () => {
    const ev = new Event('click')
    pauseBtn.dispatchEvent(ev)
}

const handlePlay = () => {
    const ev = new Event('click')
    playBtn.dispatchEvent(ev)
}

const handleLongJump = (direction) => {
    console.log(`jumping ${direction} -- LONG`)
}

const handleShortJump = (direction) => {
    console.log(`jumping ${direction} -- SHORT`)
}
