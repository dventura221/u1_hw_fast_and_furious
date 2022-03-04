let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
]

window.onload = function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`
  }
  randomQuote()

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1

  document.querySelector('#main-title').innerText =
    "DOM's Homepage. Here, we're family."

  // Part 2

  document.querySelector('body').style.backgroundColor = '#FF91AF'
  //Baker-Miller pink to calm, after some intense street racing.

  // Part 3

  let favList = document.querySelector('#favorite-things')
  // const favListArr = Array.from(favList)
  // console.log(favListArr)
  favList.removeChild(favList.lastElementChild)

  // Part 4

  let titles = document.querySelectorAll('.special-title')
  let titlesArr = Array.from(titles)
  for (let i = 0; i < titlesArr.length; i++) {
    titlesArr[i].style.fontSize = '2rem'
  }

  // Part 5
  //remove child

  let pastRaces = document.querySelector('#past-races')
  if (pastRaces.hasChildNodes()) {
    pastRaces.removeChild(pastRaces.children[3])
  }

  // Part 6
  //create element

  let newListItem = document.createElement('LI')
  let newListItemName = document.createTextNode('Denver')
  newListItem.appendChild(newListItemName)
  pastRaces.appendChild(newListItem)

  // Part 7

  let mainDiv = document.getElementsByClassName('main')
  let newDiv = document.createElement('div')
  newDiv.classList.add('blog-post')
  newDiv.classList.add('purple')
  mainDiv[0].appendChild(newDiv)

  let newH1 = document.createElement('h1')
  newH1.innerHTML = 'Denver'
  newDiv.appendChild(newH1)

  let newP = document.createElement('p')
  newP.innerHTML = 'I got cursed by Blucifer at DIA!'
  newDiv.appendChild(newP)
}
