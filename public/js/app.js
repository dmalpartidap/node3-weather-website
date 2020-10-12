const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From JavaScript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    messageOne.textContent = 'Searching...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                // console.log(data.error)
                messageOne.textContent = data.error
            } else {
                // console.log('forecast: ' + data.forecast)
                // console.log('location: ' + data.location)
                messageOne.textContent = 'Forecast: ' + data.forecast
                messageTwo.textContent = 'Location: ' + data.location
            }
        })
    })
    
})