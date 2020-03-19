const $ = require('cheerio')
const path = require('path')


describe('exercise-2', () => {
  beforeAll(async () => {
    await page.goto('file://' + path.join(__dirname, '..', '..', 'src', 'index.html'))
  })

  it(`You should append a 'p' element to the 'div' with id 'result' letting the user know the breed was 'not found' if the user enters a breed that is not valid.`, async function (done) {

    let html = await page.content()
    const pElem = $('#result p', html)
    expect(pElem.length, `There was a p element in the div with id 'result' before initiating the search. Make sure to make the API request only when the user clicks the search button and append the error message only when there is an error`).toBe(0)

    const searchValue = 'h'
    await page.evaluate((searchValue) => {
      document.querySelector('#breed-input').value = searchValue
    }, searchValue)
    await page.click('#search')
    await page.waitFor(4000)
    html = await page.content()

    const text = $('#result p', html).text().toLowerCase()
    let includesErrorText = false

    if (text.includes('not') && text.includes('found')) {
      includesErrorText = true
    }

    expect(includesErrorText, `The 'p' element did not have an error message inside when searching for an invalid input such as '${searchValue}', make sure to add a 'p' element with the message "Breed not found - try again" if there is an 'error' with the API request`).toBeTruthy()
    done()
  })

  afterAll(async done => {
    done()
  })
})