//闰年 -- 能整除4整除且不能整除100，或能整除400
function isLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return true
    } else {
        return false
    }
}