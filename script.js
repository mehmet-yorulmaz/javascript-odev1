const nameEl = document.getElementById("name")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const dayEl = document.getElementById("day")



let yourName = prompt("Lütfen isminizi yazınız.")
nameEl.innerHTML = `Merhaba, ${yourName}! Hoş Geldin!`

//Tarih ve Saat bilgileri
function showTime() {

    const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

    let currentDate = new Date()
    let hours = currentDate.getHours()
    hoursEl.innerHTML = hours < 10 ? "0" + hours : hours


    const minutes = currentDate.getMinutes()
   minutesEl.innerHTML = minutes < 10 ?"0" + minutes :minutes
    
    const seconds = currentDate.getSeconds()
    secondsEl.innerHTML = seconds < 10 ? "0" + seconds : seconds
    

    dayEl.innerHTML = weekday[currentDate.getDay()]
}

showTime()

setInterval(showTime,1000);