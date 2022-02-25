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
    element.innerHTML = `<span class='hidden'>${emojiList[value]}</span>`
    element.id = index
    element.className = 'card'
    gameBoard.appendChild(element)
    console.log(index)
})





