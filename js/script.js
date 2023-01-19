
let tg = window.Telegram.WebApp;

let data = { user_id: 638404076}

fetch('https://tolyan.onrender.com/get_schedule_for_bot_by_id', {
  method: 'POST',
  body: JSON.stringify(data), 
  headers: { 'Content-Type': 'application/json' },
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));


