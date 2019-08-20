function DayOfTheYear(date) {
    let dict = {
        "1": 31,
        '2': 28,
        '3': 31,
        '4': 30,
        '5': 31,
        '6': 30,
        '7': 31,
        '8': 31,
        '9': 30,
        '10': 31,
        '11': 30,
        '12': 31
    }
    let year = date.split('-')[0];
    let leap = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

    let month = date.split('-')[1];
    let da = date.split('-')[2];
    let totalDays = 0
    for (let i = 0; i < month; i++) {
        if (dict[i]) {
            totalDays += dict[i]
        }
    }
    if (leap && parseInt(month) < 3) {
        leap = 0
    }
    return totalDays + parseInt(da) + leap;
}

// console.log(DayOfTheYear("2019-02-10"))
// console.log(DayOfTheYear("2003-03-01"))
// console.log(DayOfTheYear("2019-01-09"))
// console.log(DayOfTheYear("2004-03-01"))
// console.log(DayOfTheYear("2016-02-29"))
console.log(DayOfTheYear("1976-01-24"))
console.log(DayOfTheYear("2016-02-29"))