const leapYears = function(year) {
    let check1 = year % 4;
    let check2 = year % 100;
    let check3 = year % 400;
    if (check1 == 0) {
        if (check2 == 0) {
            if (check3 == 0) {
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
