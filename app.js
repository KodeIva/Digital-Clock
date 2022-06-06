 function showDate() {
   const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

   let time = new Date()
   let day = time.getDay()
   let date = time.getDate()
  
   let month = time.getMonth()
   let year = time.getFullYear()


   let section = document.querySelector('section')
   let para = document.createElement('p')
   para.textContent = days[day] + ' ' + (date < 10 ? "0" + date : date) + ' ' + months[month] + ' ' + year
   section.appendChild(para)
  }
  showDate()
 
  setInterval(() => {
   let dateTime = new Date()
   let hours = dateTime.getHours()
   let minutes = dateTime.getMinutes()
   let seconds = dateTime.getSeconds()
   let session = document.getElementById('session')

   if (hours >= 12) {
    session.innerHTML = 'PM'
   } else {
    session.innerHTML = 'AM'
   }

   let hour = document.getElementById('hours')
   hour.innerHTML = hours < 10 ? '0' + hours : hours
   let minute = document.getElementById('minutes')
   minute.innerHTML = minutes < 10 ? '0' + minutes : minutes
   let second = document.getElementById('seconds')
   second.innerHTML = seconds < 10 ? '0' + seconds : seconds


   let container = document.querySelector('.container')
   let p = document.querySelectorAll('p')

   if (hours < 9) {
    document.body.style.backgroundImage = 'url(img-1.jpg)'
    container.style.color = 'rgb(204, 129, 32)'
   } else if (hours > 9 && hours < 12) {
    document.body.style.backgroundImage = 'url(img-2.jpg)'
    container.style.color = 'white'
    
   } else if (hours >= 12 && hours < 18) {
    document.body.style.backgroundImage = 'url(img-1.jpg)'
    container.style.color = 'rgb(8, 17, 131)'
   } else if(hours >= 18) {
    document.body.style.backgroundImage = 'url(img-4.jpg)'
    container.style.color = 'rgb(14, 65, 99)'
   }
  }, 10)