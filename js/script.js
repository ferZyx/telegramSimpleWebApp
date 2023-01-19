let main_table = document.querySelector('#main_table')
let day_dictionary = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
let tg = window.Telegram.WebApp;
// let data = { user_id: tg.initDataUnsafe.user.id }
let data = { user_id: 638404076 }
let table = ''

fetch('https://tolyan.onrender.com/get_schedule_for_bot_by_id', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
})
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < day_dictionary.length; i++) {
            table += '<tr>'
            table += '<td>' + day_dictionary[i] + '</td>'
            schedule_day_array = data[i].split('\n\n')
            schedule_day_array.forEach(element => {
                table += '<td>' + element.replace('\n', '<br>') + '</td>'
            });
            table += '</tr>'
        }
        main_table.innerHTML = table
    })
    .catch(error => console.error('Error:', error));


