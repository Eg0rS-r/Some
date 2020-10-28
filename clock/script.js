const wrapper = document.querySelector('.wrapper')
const clock = document.querySelector('.clock')
const dial = document.querySelector('.clock__dial')
const sec = document.querySelector('.clock__sec')
const min = document.querySelector('.clock__min')
const hour = document.querySelector('.clock__hour')
const theme = document.querySelector('.theme-ch')

theme.addEventListener('click', () => {
  wrapper.classList.toggle('wrapper--dark')
  clock.classList.toggle('clock--dark')
  dial.classList.toggle('clock__dial--dark')
  min.classList.toggle('clock__min--dark')
  hour.classList.toggle('clock__hour--dark')
  theme.classList.toggle('theme-ch--dark')
})

setInterval(() => {
  var date = new Date()
  var date_sec = date.getSeconds()*6
  var date_min = date.getMinutes()*6
  var date_hour = date.getHours()*30+0.08*date_min
  sec.style.transform = 'rotate(' + date_sec + 'deg)'
  min.style.transform = 'rotate(' + date_min + 'deg)'
  hour.style.transform = 'rotate(' + date_hour + 'deg)'
}, 1000);