const hand1 = ['4H', '5H', '6H', '7H', '9H']
const hand2 = ['4H', '10S', '2D', '3C', 'JH']
const hand3 = ['6C', 'QC', '2C', '3C', '2S']

function isFlush(cards) {
    let count = []
    cards.forEach(el => {
      count.push(el.slice(-1))
    })
    return count.every(el => el === count[0])
  }


console.log(isFlush(hand1)) // => true
console.log(isFlush(hand2)) // => false
console.log(isFlush(hand3)) // => false