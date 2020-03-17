const calculateTotal = function () {
  const boxes = document.getElementsByClassName('box')

  const length = document.createElement('p')
  length.innerHTML = boxes.length
  document.getElementById('total').appendChild(length)
}


const calculateSum = function () {
  const boxes = document.getElementsByClassName('box')

  let sum = 0
  for (let box of boxes) {
    sum += parseInt(box.innerHTML)
  }

  const sumElem = document.createElement('p')
  sumElem.innerHTML = sum
  document.getElementById('sum').appendChild(sumElem)
}


const calcTotal = document.getElementById('calc-total')
calcTotal.addEventListener('click', function () {
  calculateTotal()
})

const calcSum = document.getElementById('calc-sum')
calcSum.addEventListener('click', function () {
  calculateSum()
})