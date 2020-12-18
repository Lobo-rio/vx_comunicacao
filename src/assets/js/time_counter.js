CountDownTimer("12/31/2020 09:00 AM");

function CountDownTimer(dt) {
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showCount() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document
                .querySelector('#expireded')
                .innerHTML = "EXPIRED!";

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document
            .querySelector('#days')
            .innerHTML = days;
        document
            .querySelector('#hours')
            .innerHTML = hours;
        document
            .querySelector('#minutes')
            .innerHTML = minutes;
        document
            .querySelector('#seconds')
            .innerHTML = seconds;
    }

    timer = setInterval(showCount, 1000);
}