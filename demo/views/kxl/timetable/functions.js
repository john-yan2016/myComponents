var getDayList = (startTime, endTime) => {
    let arr = [];
    var getDate = function(str) {
        var tempDate = new Date();
        var list = str.split("-");
        tempDate.setFullYear(list[0]);
        tempDate.setMonth(list[1] - 1);
        tempDate.setDate(list[2]);
        return tempDate;
    }
    var date1 = getDate(startTime);
    var date2 = getDate(endTime);
    if (date1 > date2) {
        var tempDate = date1;
        date1 = date2;
        date2 = tempDate;
    }
    date1.setDate(date1.getDate() + 1);
    var dates = [startTime],
        id = 1;
    while (!(date1.getFullYear() == date2.getFullYear() && date1.getMonth() == date2.getMonth() && date1.getDate() == date2.getDate())) {
        dates[id] = date1.getFullYear() + "-" + addZero(date1.getMonth() + 1) + "-" + addZero(date1.getDate());
        id++;
        date1.setDate(date1.getDate() + 1);
    }
    dates[dates.length] = endTime;
    dates.map(function(s, j) {
        arr.push({ name: s });
    })
    return arr;
};

function addZero(n) {
    if (n < 10) {
        return '0' + n;
    }
    return n;
}


var getResult = (selectarr, dayList, hourList) => {
    let arr = [];
    let arr2 = [];
    dayList.map(function(s, j) { //行12
        let item = [];
        hourList.map(function(v, k) { //列24
            if (selectarr[j][k]) { //判断为真
                item.push(v.title);
            }
        })
        arr.push({
            date: s.name,
            content: item
        });

        arr2[s.name] = item;
    })
    return arr2;
}

var initSelected = (dayList, hourList) => {
    let arr = [];
    dayList.map(function(s, j) {
        let item = [];
        hourList.map(function(v, k) {
            item.push(false);
        })
        arr.push(item);
    })
    return arr;
}

export {
    getDayList,
    getResult,
    initSelected
}
