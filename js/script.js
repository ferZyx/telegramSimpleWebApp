let main_table = document.querySelector('#main_table')
let day_dictionary = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
let tg = window.Telegram.WebApp;
let data = { user_id: tg.initDataUnsafe.user.id }

fetch('https://tolyan.onrender.com/get_schedule_for_bot_by_id', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
})
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < day_dictionary.length; i++) {
            main_table.innerHTML += '<tr>'
            main_table.innerHTML += '<td>' + day_dictionary[i] + '</td>'
            schedule_day_array = data[i].split('\n\n')
            schedule_day_array.forEach(element => {
                main_table.innerHTML += '<td>' + element + '</td>'
            });
            main_table.innerHTML += '</tr>'
        }
    })
    .catch(error => console.error('Error:', error));


