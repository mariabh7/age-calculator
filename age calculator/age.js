const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")
const number = document.getElementById("num-y")
const number2 = document.getElementById("num-m")
const number3 = document.getElementById("num-d")
const show = () => {
    let storeYear = year.value;
    let storeDay = day.value;
    let storeMonth = month.value;
    parseInt(storeDay, storeMonth, storeYear);
    if (storeYear <= 0 || storeMonth <= 0 || storeDay <= 0) {
        alert("check your inputs please ");
    } else {
        let currentYear = new Date().getFullYear();
        let currentMonth = new Date().getMonth() + 1;
        let currentDay = new Date().getDate();
        // count year , month , day 
        let countYear = currentYear - storeYear;
        let countMonth = currentMonth - storeMonth;
        let countDay = currentDay - storeDay;
        // checking for months and days
        if (currentMonth < storeMonth) {
            countYear -= 1;
            countMonth += 12;
        }
        else if (currentMonth == storeMonth && currentDay < storeDay) {
            countMonth += 12;
            countYear -= 1;
        }
        if (currentDay < storeDay) {
            countMonth -= 1;
            countDay += 31;
        }
        // update outputs
        number2.textContent = countMonth;
        number.textContent = countYear;
        number3.textContent = countDay;
    }
}