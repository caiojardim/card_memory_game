let gameBoard = document.querySelector('#game-board');

emojiList = [
    '&#128540',
    '&#128512',
    '&#128513',
    '&#128514',
    '&#128515',
    '&#128516',
    '&#128517',
    '&#128518',
    '&#128519',
    '&#128520',
    '&#128521',
    '&#128522',
    '&#128523',
    '&#128524',
    '&#128525',
    '&#128526',
    '&#128527',
    '&#128528',
    '&#128530',
    '&#128531',
    '&#128529',
];

let numbers = []
for(let i = 0; i < 40; i++) {
    if (i > 19) {
       number = i - 20
    } else {
        number = i
    }
    numbers.push(number)
}

let shuffledNumbers = numbers
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

console.log(shuffledNumbers)

shuffledNumbers.forEach((value, index) => {
    var element = document.createElement('div')
    element.innerHTML = `<span class='hidden' id='e${value}'>
            ${emojiList[value]}
        </span>`
    element.id = index
    element.className = 'card'
    gameBoard.appendChild(element)
    console.log(index)
})

let allCards = document.querySelectorAll('.card')

allCards.forEach(element => {
    element.addEventListener('click', flipCard)
})

function unflipCards() {
    allCards.forEach(element => {
        if (element.classList != 'card checked') {
            element.firstChild.classList = 'hidden'
        }
    })
}

let flipedTimes = 0
let flipedCards = []
let firstFlipCard = ''

function flipCard(event) {
    let element = event.target
    
    if (flipedTimes >= 2){
        return
    }
    let emoji = element.firstChild
    emoji.classList = ''
    flipedTimes += 1

    if (flipedTimes == 1) {
        firstFlipCard = element.id
        console.log(firstFlipCard)
    } else {
        if (firstFlipCard == element.id) {
            flipedTimes = 1
            return
        }
    }

    flipedCards.push(emoji.id)
    console.log(flipedCards)
    setTimeout(() => {
        if (flipedTimes >= 2) {
            flipedTimes = 0
            checkPoints(flipedCards)
            unflipCards()
        }
    },1200)
}

function checkPoints(Cards) {
    if (Cards[0] === Cards[1]) {
        document.querySelectorAll(`#${Cards[0]}`)
            .forEach((element) => {
                element.parentNode.classList = 'card checked'
                element.parentNode.removeEventListener('click', flipCard)
                console.log(element)
            })
    }
    flipedCards = []
}