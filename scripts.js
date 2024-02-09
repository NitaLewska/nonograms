const schemesEasy = {
    tower: [[1, 0, 1, 0, 1], [1, 1, 1, 1, 1], [0, 1, 1, 1, 0], [0, 1, 0, 1, 0], [0, 1, 1, 1, 0]],
    camel: [[0, 0, 0, 1, 1], [1, 1, 0, 1, 0], [1, 1, 1, 1, 0], [1, 0, 1, 0, 0], [1, 0, 1, 0, 0]],
    clock: [[0, 1, 1, 1, 0], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 0, 0, 0, 1], [0, 1, 1, 1, 0]],
    rabbit: [[0, 1, 1, 0, 0], [0, 0, 0, 1, 1], [0, 1, 1, 1, 1], [1, 1, 1, 1, 0], [0, 1, 1, 1, 1]],
    heart: [[0, 1, 0, 1, 0], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0]]
}

const schemesMedium = {
    coffee: [[0, 0, 1, 0, 1, 0, 1, 0, 0, 0], [0, 0, 1, 0, 1, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 1, 1, 1, 1, 1, 1], [0, 1, 1, 0, 1, 1, 1, 1, 0, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 0, 0], [1, 0, 1, 1, 1, 1, 1, 0, 0, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0]],
    leaf: [[0, 0, 0, 0, 1, 1, 1, 1, 1, 1], [0, 0, 0, 1, 0, 1, 0, 1, 0, 1], [0, 0, 1, 1, 0, 1, 0, 1, 1, 0], [0, 1, 0, 1, 0, 1, 1, 0, 1, 0], [0, 1, 0, 1, 0, 1, 1, 1, 1, 0], [0, 1, 0, 1, 1, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 1, 0, 0], [0, 1, 0, 1, 1, 1, 1, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0, 0, 0, 0]],
    tv: [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 1, 0, 0, 0, 0, 1, 1], [1, 1, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 0, 0, 0, 0, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 0, 0, 0, 0, 0, 0, 1, 0]],
    alien: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 1, 1, 0, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 1, 1, 1, 1, 1, 0, 1], [1, 0, 1, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
    apple: [[0, 0, 0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 0], [0, 0, 0, 0, 1, 0, 0, 0, 1, 1], [0, 1, 1, 0, 1, 0, 1, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 0, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 1, 1, 0, 0, 0]]
}

const schemesDifficult = {
    elephant: [[0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1], [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1], [0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1], [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1], [0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1], [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1], [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1]],
    mouse: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1], [0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0], [1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0], [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1], [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1], [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0], [0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0]],
    mushroom: [[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
    // spaceship: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1], [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0]],
    "palm tree": [[0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0], [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0]],
    spaceship: [[0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,1,0,1,0,1,0,1,0,1,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,1,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,1,1,0,0,0,1,0,1,0],[0,1,0,0,0,0,0,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,1,0,0,0,0,1]]
}

let scheme
let muted = false
let timerIsOn = false
let time = 0

function getRandomPuzzle() {
    document.querySelector(".game-container").replaceChildren();
    let levelsNames = ['easy', 'medium', 'difficult']
    let schemes = [schemesEasy, schemesMedium, schemesDifficult]
    let rand = Math.floor(Math.random() * 3)
    let level = levelsNames[rand]
    let puzzle = Object.keys(schemes[rand])[Math.floor(Math.random() * Object.keys(schemes[rand]).length)]
    scheme = schemes[rand][puzzle]
    let heading = document.createElement('h2')
    heading.innerHTML = `${puzzle} (${level})`
    document.querySelector(".game-container").appendChild(heading)
    let audio = new Audio('./audio/1.wav');
    if (!muted) {
        audio.play()
    }
    createGameField()
}

function getStartingPuzzle() {
    let puzzle = Object.keys(schemesEasy)[Math.floor(Math.random() * Object.keys(schemesEasy).length)]
    scheme = schemesEasy[puzzle]
    let heading = document.createElement('h2')
    heading.innerHTML = `${puzzle} (easy)`
    document.querySelector(".game-container").appendChild(heading)
}

function createPage() {
    let app = document.createElement("div")
    app.id = 'app'

    let aside = document.createElement("aside")
    aside.classList.add("aside")

    let header = document.createElement("h1")
    header.innerHTML = 'Nonograms'

    app.appendChild(header)

    let headingEasy = document.createElement('p')
    headingEasy.innerHTML = 'easy'

    aside.appendChild(headingEasy)

    Object.keys(schemesEasy).map((a) => {
        let image = document.createElement('img')
        image.src = "img/star-white.svg"

        let name = document.createElement('p')
        name.innerHTML = `${a}`
        let level = 'easy'
        let puzzle = document.createElement('div')
        puzzle.appendChild(image)
        puzzle.appendChild(name)
        puzzle.addEventListener(('click'), (e) => changePuzzle(e, schemesEasy, level))

        aside.appendChild(puzzle)
    })

    let headingMedium = document.createElement('p')
    headingMedium.innerHTML = 'medium'

    aside.appendChild(headingMedium)

    Object.keys(schemesMedium).map((a) => {
        let image = document.createElement('img')
        image.src = "img/star-white.svg"

        let name = document.createElement('p')
        name.innerHTML = `${a}`
        let level = 'medium'

        let puzzle = document.createElement('div')
        puzzle.appendChild(image)
        puzzle.appendChild(name)
        puzzle.addEventListener(('click'), (e) => changePuzzle(e, schemesMedium, level))

        aside.appendChild(puzzle)
    })

    let headingDifficult = document.createElement('p')
    headingDifficult.innerHTML = 'difficult'

    aside.appendChild(headingDifficult)

    Object.keys(schemesDifficult).map((a) => {
        let image = document.createElement('img')
        image.src = "img/star-white.svg"

        let name = document.createElement('p')
        name.innerHTML = `${a}`
        let level = 'difficult'

        let puzzle = document.createElement('div')
        puzzle.appendChild(image)
        puzzle.appendChild(name)
        puzzle.addEventListener(('click'), (e) => changePuzzle(e, schemesDifficult, level))

        aside.appendChild(puzzle)
    })

    app.appendChild(aside)

    let menu = createMenu()

    app.appendChild(menu)

    let stopwatch = document.createElement("p")
    stopwatch.classList.add('timer')
    app.appendChild(stopwatch)
    let container = document.createElement("div")
    container.classList.add("game-container")
    app.appendChild(container)
    document.querySelector('body').appendChild(app)
    // document.querySelector('body').className = 'dark'
}

function createMenu() {
    let menu = document.createElement("div")
    menu.classList.add("menu")

    let rating = document.createElement("button")
    rating.classList.add("rating")
    rating.addEventListener(('click'), showRating)

    let mute = document.createElement("button")
    mute.classList.add("mute")
    mute.addEventListener(('click'), mutePage)

    let darkTheme = document.createElement("button")
    darkTheme.classList.add("dark-theme")
    darkTheme.addEventListener(('click'), changeMode)

    let restart = document.createElement("button")
    restart.classList.add("restart")
    restart.innerHTML = "Restart"
    restart.addEventListener(('click'), restartGame)

    let save = document.createElement("button")
    save.classList.add("save")
    save.innerHTML = "Save"
    save.addEventListener(('click'), () => saveGame())

    let load = document.createElement("button")
    load.classList.add("load")
    load.innerHTML = "Load"
    load.addEventListener(('click'), () => loadGame())

    let random = document.createElement("button")
    random.classList.add("random")
    random.innerHTML = "Random Game"
    random.addEventListener(('click'), () => getRandomPuzzle())


    let solution = document.createElement("button")
    solution.classList.add("solution")
    solution.innerHTML = "Show Solution"
    solution.addEventListener(('click'), () => showSolution())

    menu.appendChild(mute)
    menu.appendChild(darkTheme)
    menu.appendChild(rating)
    menu.appendChild(solution)
    menu.appendChild(random)
    menu.appendChild(restart)
    menu.appendChild(save)
    menu.appendChild(load)
    return menu
}

function changeMode() {
    document.querySelector('body').classList.toggle('dark')
    if (!muted) {
        let audio = new Audio('./audio/4.wav');
        audio.play()
    }
}

createPage()
getStartingPuzzle()

function createGameField() {
    let container = document.createElement("div")
    container.classList.add("game-field")
    console.log('схема:', scheme)
    let width = scheme[0].length + 1
    let height = scheme.length + 1

    container.style.gridTemplateColumns = `auto repeat(${width - 1}, 1fr)`

    let corner = document.createElement('div')
    container.appendChild(corner)

    // create the field

    scheme.flat().map((a, i) => {
        let cell = document.createElement("div");
        cell.id = i;
        cell.classList.add('cell')
        container.appendChild(cell)
    })

    // horizontal clues

    scheme.map((a, i) => {
        let number = i;
        let currentRow = []
        let currentValue = 0
        for (let i = 0; i < a.length; i++) {
            if (a[i] != 1 && currentValue != 0) {
                currentRow.push(currentValue)
                currentValue = 0
            } else if (a[i] === 1) {
                currentValue++
            }
        }
        if (currentValue != 0) {
            currentRow.push(currentValue)
        }
        let horizontalClues = document.createElement('div')
        horizontalClues.style.gridArea = `${number + 2}/2/${number + 3}/1`
        horizontalClues.classList.add('clue')
        horizontalClues.classList.add('hClue')
        currentRow.map((a) => {
            let horizontalClue = document.createElement('p')
            horizontalClue.innerHTML = a
            horizontalClues.appendChild(horizontalClue)
        })
        container.appendChild(horizontalClues)
    })

    // vertical clues

    for (let i = 0; i < width - 1; i++) {
        let currentColumn = []
        let currentValue = 0
        for (let j = 0; j < height - 1; j++) {
            if (scheme[j][i] != 1 && currentValue != 0) {
                currentColumn.push(currentValue)
                currentValue = 0
            } else if (scheme[j][i] === 1) {
                currentValue++
            }
        }
        if (currentValue != 0) {
            currentColumn.push(currentValue)
        }
        let verticalClues = document.createElement('div')
        verticalClues.classList.add('clue')
        verticalClues.classList.add('vClue')
        verticalClues.style.gridArea = `1/${i + 2}/2/${i + 3}`
        currentColumn.map((a) => {
            let verticalClue = document.createElement('p')
            verticalClue.innerHTML = a
            verticalClues.appendChild(verticalClue)
        })
        container.appendChild(verticalClues)
    }

    document.querySelector(".game-container").appendChild(container)

    let cells = Array.from(document.querySelectorAll('.cell'))
    cells.map((a) => a.addEventListener('click', (e) => onLeftClick(a), false))
    cells.map((a) => a.addEventListener('contextmenu', (e) => onRightClick(e, a), false))

    for (let i = 0; i < cells.length; i++) {
        // cells[i].innerHTML = i
        if (cells.length === 100) {
            if ((i + 1) % 5 === 0 && (i + 1) % 10 != 0) {
                cells[i].style.borderRight = '1px solid black'
            }
            if (i > 39 && i < 50) {
                cells[i].style.borderBottom = '1px solid black'
            }
        }
        if (cells.length === 225) {
            if ((i + 1) % 5 === 0 && (i + 1) % 15 != 0) {
                cells[i].style.borderRight = '1px solid black'
            }
            if ((i > 59 && i < 75) || (i > 134 && i < 150)) {
                cells[i].style.borderBottom = '1px solid black'
            }
        }
    }
    timerIsOn = false
    time = 0
}

createGameField()

function onLeftClick(a) {
    if (!timerIsOn) timerIsOn = true
    a.classList.remove('cross')
    a.classList.toggle('black')
    checkWin()
    if (!muted) {
        let audio = new Audio('./audio/2.mp3');
        audio.play()
    }
}

function onRightClick(e, a) {
    e.preventDefault()
    a.classList.toggle('cross')
    a.classList.remove('black')
    if (!muted) {
        let audio = new Audio('./audio/3.mp3');
        audio.play()
    }
    checkWin()
}

function checkWin() {
    let cells = Array.from(document.querySelectorAll('.cell'))
    let currentScheme = []
    cells.map((a) => {
        a.classList.contains('black') ? currentScheme.push(1) : currentScheme.push(0)
    })
    if (currentScheme.join('') === scheme.flat().join('')) {
        let text = document.createElement("p");
        text.classList.add('win-message')
        text.innerHTML = `YAY! YOU SOLVED THE PUZZLE IN ${document.querySelector('.timer').innerHTML} <3`
        document.querySelector(".game-container").appendChild(text)
        document.querySelector(".game-field").classList.add('disabled')
        timerIsOn = false
        let rating = localStorage.getItem('rating') ? localStorage.getItem('rating') : ""
        rating += `,${document.querySelector(".game-container > h2").innerText} ${time}`
        localStorage.setItem('rating', rating)
    }
}

function changePuzzle(e, schemes, level) {
    let parent = e.target.parentNode
    let puzzle = parent.lastChild.innerHTML
    document.querySelector(".game-container").replaceChildren();
    scheme = schemes[puzzle]
    let heading = document.createElement('h2')
    heading.innerHTML = `${puzzle} (${level})`
    document.querySelector(".game-container").appendChild(heading)
    createGameField()
    if (!muted) {
        let audio = new Audio('./audio/1.mp3');
        audio.play()
    }
}

function restartGame() {
    let cells = Array.from(document.querySelectorAll('.cell'))
    cells.map((a) => a.classList.remove('black'))
    cells.map((a) => a.classList.remove('cross'))
    if (!muted) {
        let audio = new Audio('./audio/6.mp3');
        audio.play()
    }
    document.querySelector(".game-field").classList.remove('disabled')
    if (document.querySelector('.win-message')) document.querySelector('.win-message').remove()
    time = 0
    timerIsOn = false
}


function saveGame() {
    localStorage.setItem('gameDifficulty', document.querySelector(".game-container > h2").innerText.split(' ')[1].slice(1, -1))
    localStorage.setItem('gameName', document.querySelector(".game-container > h2").innerText.split(' ')[0])

    let cells = Array.from(document.querySelectorAll('.cell'))
    let currentScheme = []
    cells.map((a) => {
        a.classList.contains('black') ? currentScheme.push(1) : a.classList.contains('cross') ? currentScheme.push(2) : currentScheme.push(0)
    })
    localStorage.setItem('currentProgress', currentScheme)
    localStorage.setItem('currentTime', time)
    if (!muted) {
        let audio = new Audio('./audio/4.mp3');
        audio.play()
    }
}


function loadGame() {
    let levelsNames = ['easy', 'medium', 'difficult']
    let level = localStorage.getItem('gameDifficulty')
    let schemes = [schemesEasy, schemesMedium, schemesDifficult][levelsNames.indexOf(level)]
    let puzzle = localStorage.getItem('gameName')
    document.querySelector(".game-container").replaceChildren();
    scheme = schemes[puzzle]
    let heading = document.createElement('h2')
    heading.innerHTML = `${puzzle} (${level})`
    document.querySelector(".game-container").appendChild(heading)
    createGameField()
    let currentScheme = localStorage.getItem('currentProgress').split(',')

    let cells = Array.from(document.querySelectorAll('.cell'))
    currentScheme.map((a, i) => {
        if (a == 1) {
            cells[i].classList.add('black')
        }
        if (a == 2) {
            cells[i].classList.add('cross')
        }
    })
    if (!muted) {
        let audio = new Audio('./audio/5.mp3');
        audio.play()
    }
    time = localStorage.getItem('currentTime')
}

function showSolution() {
    let cells = Array.from(document.querySelectorAll('.cell'))
    scheme.flat().map((a, i) => {
        cells[i].classList.remove('black')
        cells[i].classList.remove('cross')
        if (a == 1) {
            cells[i].classList.add('black')
        }
    })
    document.querySelector(".game-field").classList.add('disabled')
    if (!muted) {
        let audio = new Audio('./audio/boring.mp3');
        audio.play()
    }
    timerIsOn = false
}

function mutePage() {
    muted = !muted
    document.querySelector('.mute').classList.toggle('muted')
}


setInterval(timer, 1000)

function timer() {
    if (timerIsOn) {time++}
    let output = new Date(time * 1000)
    .toISOString()
    .slice(14, 19);
    document.querySelector('.timer').innerHTML = output
}

function showRating() {
    document.querySelector(".game-container").replaceChildren();
    let rating = localStorage.getItem('rating')? localStorage.getItem('rating').split(',') : []
    rating.shift()
    rating = rating.reverse().slice(0, 5)
    rating.sort((a,b) => {return +a.split(' ')[2] - +b.split(' ')[2]})
    let ratingHeading = document.createElement('h2')
    document.querySelector(".game-container").appendChild(ratingHeading)
    ratingHeading.innerHTML = "Last 5 results"
    rating.map((a, i) => {
        let line = document.createElement('p')
        line.classList.add('rating-line')
        line.innerHTML = "" + (i + 1) + ". " + a
        document.querySelector(".game-container").appendChild(line)
    })
    if (rating.length === 0) {
        let line = document.createElement('p')
        line.classList.add('rating-line')
        line.innerHTML = "nothing to show for now =("
        document.querySelector(".game-container").appendChild(line)
    }
}