function attachEventsListeners() {

    const converter = {
        'days': (value) =>{

            const hour = value * 24;
            const min = hour * 60;
            const seconds = min * 60;

            return [hour, min, seconds]
        },
        'hours': (hours) =>{

            const days = hours / 24;
            const min = hours * 60;
            const seconds = min * 60;

            return [days, min, seconds]
        },
        'minutes': (minutes) =>{
debugger
            const hours = minutes / 60;
            const days = hours / 24;
            const seconds = minutes * 60;

            return [hours, days, seconds]
        },
        'seconds': (seconds) =>{

            const minutes = seconds / 60;
            const hours = minutes / 60;
            const days = hours / 24;

            return [minutes, hours, days]
        }
    }

    let inputDays = document.getElementById('days');
    let inputHours = document.getElementById('hours');
    let inputMin = document.getElementById('minutes');
    let inputSec = document.getElementById('seconds');

    function daysHandler() {
        const value = Number(inputDays.value);

        let [hours, minutes, seconds] = converter['days'](value);
        inputHours.value = hours
        inputMin.value = minutes
        inputSec.value = seconds
    }
    function hoursHandler() {
        let value = Number(inputHours.value);

        let [day, minutes, seconds] = converter['hours'](value);
        inputDays.value = day
        inputMin.value = minutes
        inputSec.value = seconds
    }
    function minutesHandler() {
        let value = Number(inputMin.value);

        let [hours,day, seconds] = converter['minutes'](value);
        inputDays.value = day
        inputHours.value = hours
        inputSec.value = seconds
    }

    function secondsHandler() {
        let value = Number(inputSec.value);
debugger
        let [minutes, hours, day] = converter['seconds'](value);
        inputDays.value = day
        inputHours.value = hours
        inputMin.value = minutes
    }

    document.getElementById('daysBtn')
    .addEventListener('click', daysHandler);

    document.getElementById('hoursBtn')
    .addEventListener('click', hoursHandler);

    document.getElementById('minutesBtn')
    .addEventListener('click', minutesHandler);

    document.getElementById('secondsBtn')
    .addEventListener('click', secondsHandler);



}