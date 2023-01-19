let main_table = document.querySelector('#main_table')
let day_dictionary = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
let tg = window.Telegram.WebApp;
// let data = { user_id: tg.initDataUnsafe.user.id }
let data = { user_id: 638404076 }
let table = ''
let today = new Date();
let dayOfWeek = today.getDay() - 1;
let errorMsg = document.querySelector('#error-msg');

if (dayOfWeek < 0) {
    dayOfWeek = 0
}

tg.expand()

function load_page() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

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
        tr_list = document.querySelectorAll('tr')
        tr_list[dayOfWeek].scrollIntoView({ behavior: 'smooth' });
        errorMsg.outerHTML = "";
        load_page()
    })
    .catch(error => {
        console.error('Error:', error)
        load_page()
        console.log("Fuck")
        typewriter(errorMsg, "Произошла ошибка. Попробуйте загрузить расписание через бота, и потом попробовать снова.");
    });


function typewriter(error, string) {
    let i = 0;
    const speed = 50;

    function type() {
        if (i < string.length) {
            error.innerHTML += string.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}





