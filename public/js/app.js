const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#p1')
const message2 = document.querySelector('#p2')

weatherForm.addEventListener('submit', (e) => {
   e.preventDefault()
   message1.textContent = 'Loading...'
   const location = search.value
   fetch('http://localhost:3000/weather?address='+location).then((response) => {
   response.json().then((data) => {
      if (data.err) {
         message1.textContent = data.err
      } else {
         message1.textContent = data.location
         message2.textContent = data.forecast
      }
   })
})
})