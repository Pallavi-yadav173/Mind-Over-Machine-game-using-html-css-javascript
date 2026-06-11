const rectangularCollision = ({ rectangle1, rectangle2 }) => {
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
        rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    )
}

const determineWinner = ({ player, enemy }) => {
    clearTimeout(timerId)
    timerId = null

    const displayText = document.querySelector('#displayText')

    if (player.health === enemy.health) {
        displayText.innerHTML = `
            🤝 It's a Tie!
            <button class="btn-aurum btn-retry" onclick="location.reload()">🔁 Retry</button>
            <button class="btn-aurum btn-levels" onclick="window.location.href='levelselect.html'">🗺️ Level Select</button>
        `
    } else if (player.health > enemy.health) {
        displayText.innerHTML = `
            🏆 Player 1 Wins!
            <button class="btn-aurum btn-retry" onclick="location.reload()">🔁 Retry</button>
            <button class="btn-aurum btn-levels" onclick="window.location.href='levelselect.html'">🗺️ Level Select</button>
        `
    } else {
        displayText.innerHTML = `
            💀 You Lose!<br>Kenji Wins!
            <button class="btn-aurum btn-retry" onclick="location.reload()">🔁 Retry</button>
            <button class="btn-aurum btn-levels" onclick="window.location.href='levelselect.html'">🗺️ Level Select</button>
        `
    }

    displayText.style.display = 'flex'
}

const decreaseTimer = (timer) => {
    if (timer <= 0) {
        determineWinner({ player, enemy: currentWaveEnemies[0] })
        return null
    }
    document.querySelector('#timer').innerHTML = timer
    return setTimeout(() => {
        timerId = decreaseTimer(timer - 1)
    }, 1000)
}