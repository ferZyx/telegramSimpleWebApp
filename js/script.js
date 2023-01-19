
let tg = window.Telegram.WebApp;

let data = { id: tg.initDataUnsafe.user.id }

fetch('https://tolyan.onrender.com/get_schedule_for_bot_by_id/', {
  method: 'POST',
  body: JSON.stringify(data), 
  headers: { 'Content-Type': 'application/json' },
})
.then(response => response.json())
.then(data => document.write(data))
.catch(error => document.write('Error:', error));


