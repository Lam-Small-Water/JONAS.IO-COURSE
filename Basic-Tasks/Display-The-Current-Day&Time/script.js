const demo = document.getElementById('demo');

const currentDayTime = () => {
    let today = new Date();
    let day = today.getDay();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let t = '';

    t = (hour >= 12) ? t = 'PM' : t = 'AM';
    minute = (minute < 10) ? minute = '0' + minute : minute;
    second = (second < 10) ? second = '0' + second : second;

    return `Today is : ${dayList[day]} Current time is ${hour}${t}:${minute}:${second}`;
}

demo.innerText = currentDayTime();