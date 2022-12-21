function getEle(ele) {
    return document.getElementById(ele);
}

/*
1. Xuất 3 số theo thứ tự tăng dần
*/
getEle('btnSort').onclick = function () {
    // input
    let a = +getEle('num1').value;
    let b = +getEle('num2').value;
    let c = +getEle('num3').value;

    // progress
    let sort = '';
    if (!a || !b || !c) {
        alert('Dữ liệu không hợp lệ.');
    }
    else {
        if (a >= b && a >= c) {
            if (b >= c) {
                sort = c + ', ' + b + ', ' + a;
            }
            else {
                sort = b + ', ' + c + ', ' + a;
            }
        }
        else if (b >= a && b >= c) {
            if (a >= c) {
                sort = c + ', ' + a + ', ' + b;
            }
            else {
                sort = a + ', ' + c + ', ' + b;
            }
        }
        else if (c >= a && c >= b) {
            if (a >= b) {
                sort = b + ', ' + a + ', ' + c;
            }
            else {
                sort = a + ', ' + b + ', ' + c;
            }
        }
    }

    // output
    getEle('sortASC').innerHTML = sort;
}


/*
2. Chương trình "chào hỏi"
*/
getEle('btnGreetings').onclick = function () {
    // input
    let family = getEle("members").value;

    // progress
    let greetings = '';
    switch (family) {
        case 'father':
            greetings = 'Xin chào Bố!';
            break;
        case 'mother':
            greetings = 'Xin chào Mẹ!';
            break;
        case 'brother':
            greetings = 'Xin chào Anh Trai!';
            break;
        case 'sister':
            greetings = 'Xin chào Em Gái!';
            break;
        default:
            greetings = 'Xin chào Người lạ ơi!';
            break;
    }

    // output
    getEle('hello').innerHTML = greetings;
}


/*
3. Đếm số chẵn lẻ
*/
getEle('btnCount').onclick = function () {
    // input
    let n1 = +getEle('n1').value;
    let n2 = +getEle('n2').value;
    let n3 = +getEle('n3').value;

    // progress
    let i = 0; // tạo biến đếm i
    let countResult = '';
    if (!n1 || !n2 || !n3) {
        alert('Dữ liệu không hợp lệ.');
    }
    else {
        if (n1 % 2 == 0) {
            i++;
        }
        else {
            i;
        }
        if (n2 % 2 == 0) {
            i++;
        }
        else {
            i;
        }
        if (n3 % 2 == 0) {
            i++;
        }
        else {
            i;
        }
        countResult = 'Có ' + i + ' số chẵn, ' + (3 - i) + ' số lẻ';
    }

    // output
    getEle('evenOdd').innerHTML = countResult;
}


/*
4. Đoán hình tam giác
*/
getEle('btnGuess').onclick = function () {
    // input
    let length1 = +getEle('length1').value;
    let length2 = +getEle('length2').value;
    let length3 = +getEle('length3').value;

    // progress
    let tamGiac = '';
    if (!length1 || !length2 || !length3) {
        alert('Dữ liệu không hợp lệ.');
    }
    else {
        if (length1 > 0 && length2 > 0 && length3 > 0) {
            if (length1 + length2 > length3 && length1 + length3 > length2 && length2 + length3 > length1) {
                if (length1 == length2 && length2 == length3 && length1 == length3) {
                    tamGiac = 'Hình tam giác đều';
                }
                else if (length1 == length2 || length2 == length3 || length1 == length3) {
                    tamGiac = 'Hình tam giác cân';
                }
                else if (length1 ** 2 == length2 ** 2 + length3 ** 2 || length2 ** 2 == length1 ** 2 + length3 ** 2 || length3 ** 2 == length1 ** 2 + length2 ** 2) {
                    tamGiac = 'Hình tam giác vuông';
                }
                else {
                    tamGiac = 'Một loại tam giác khác';
                }
            }
            else {
                alert('Tổng 2 cạnh bất kì phải lớn hơn cạnh còn lại.');
            }
        }
        else {
            alert('Cạnh tam giác phải là một số dương.');
        }
    }
    // output
    getEle('triangle').innerHTML = tamGiac;
}


/*
5. Tính ngày tháng năm
*/
// tạo hàm tính ngày hôm qua
getEle('btnYesterday').onclick = function () {
    // input
    let date = +getEle('date').value;
    let month = +getEle('month').value;
    let year = +getEle('year').value;

    // progress
    // cách tính ngày hôm qua (default)
    let prevDay = date - 1;
    let prevMonth = month;
    let prevYear = year;
    // xét điều kiện cho các case ngoại lệ
    if (date > 0 && date <= 31 && month > 0 && month <= 12 && year >= 1920) {
        if (month == 2) {
            if (year % 4 == 0 && year % 100 != 0) {
                if (date == 30 || date == 31) {
                    alert('Dữ liệu không hợp lệ.');
                    return 0;
                }
                else {
                    prevDay = date - 1;
                    prevMonth = 2;
                    prevYear = year;
                }
            }
            else {
                if (date == 29 || date == 30 || date == 31) {
                    alert('Dữ liệu không hợp lệ.');
                    return 0;
                }
                else {
                    prevDay = date - 1;
                    prevMonth = 2;
                    prevYear = year;
                }
            }
        }
        if (date == 1) {
            if (month == 5 || month == 7 || month == 10 || month == 12) {
                prevDay = 30;
                prevMonth = month - 1;
                prevYear = year;
            }
            else if (month == 3) {
                if (year % 4 == 0 && year % 100 != 0) {
                    prevDay = 29;
                    prevMonth = 2;
                    prevYear = year;
                }
                else {
                    prevDay = 28;
                    prevMonth = 2;
                    prevYear = year;
                }
            }
            else if (month == 1) {
                prevDay = 31;
                prevMonth = 12;
                prevYear = year - 1;
            }
            else {
                prevDay = 31;
                prevMonth = month - 1;
                prevYear = year;
            }
        }
    }
    else if (date > 0 && date <= 31 && month > 0 && month <= 12 && year < 1920) {
        alert('Năm cần lớn hơn 1920.');
        return 0;
    }
    else {
        alert('Dữ liệu không hợp lệ.');
        return 0;
    }

    // output
    getEle('result').innerHTML = prevDay + '/' + prevMonth + '/' + prevYear;
}

// tạo hàm tính ngày mai
getEle('btnTomorrow').onclick = function () {
    // input
    let date = +getEle('date').value;
    let month = +getEle('month').value;
    let year = +getEle('year').value;

    // progress
    // cách tính ngày mai (default)
    let nextDay = date + 1;
    let nextMonth = month;
    let nextYear = year;
    // xét điều kiện cho các case ngoại lệ
    if (date > 0 && date <= 31 && month > 0 && month <= 12 && year >= 1920) {
        if (month == 2) {
            if (year % 4 == 0 && year % 100 != 0) {
                if (date == 30 || date == 31) {
                    alert('Dữ liệu không hợp lệ.');
                    return 0;
                }
                else if (date == 29) {
                    nextDay = 1;
                    nextMonth = 3;
                    nextYear = year;
                }
                else {
                    nextDay = date + 1;
                    nextMonth = 2;
                    nextYear = year;
                }
            }
            else {
                if (date == 29 || date == 30 || date == 31) {
                    alert('Dữ liệu không hợp lệ.');
                    return 0;
                }
                else if (date == 28) {
                    nextDay = 1;
                    nextMonth = 3;
                    nextYear = year;
                }
                else {
                    nextDay = date + 1;
                    nextMonth = 2;
                    nextYear = year;
                }
            }
        }
        if (date == 30) {
            if (month == 4 || month == 6 || month == 9 || month == 11) {
                nextDay = 1;
                nextMonth = month + 1;
                nextYear = year;
            }
            else {
                nextDay = 31;
                nextMonth = month;
                nextYear = year;
            }
        }
        if (date == 31) {
            if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10) {
                nextDay = 1;
                nextMonth = month + 1;
                nextYear = year;
            }
            else if (month == 12) {
                nextDay = 1;
                nextMonth = 1;
                nextYear = year + 1;
            }
        }
    }
    else if (date > 0 && date <= 31 && month > 0 && month <= 12 && year < 1920) {
        alert('Năm cần lớn hơn 1920.');
        return 0;
    }
    else {
        alert('Dữ liệu không hợp lệ.');
        return 0;
    }

    // output
    getEle('result').innerHTML = nextDay + '/' + nextMonth + '/' + nextYear;
}


/*
6. Tính ngày
*/
getEle('btnCountDays').onclick = function () {
    // input
    let monthP6 = +getEle('monthP6').value;
    let yearP6 = +getEle('yearP6').value;

    // progress
    let dateP6 = 0;
    // let daysNum = '';
    if (monthP6 > 0 && monthP6 <= 12 && yearP6 >= 1920) {
        if (monthP6 == 4 || month == 6 || month == 9 || month == 11) {
            dateP6 = 30;
        }
        else if (monthP6 == 2) {
            if (yearP6 % 4 == 0 && yearP6 % 100 != 0) {
                dateP6 = 29;
            }
            else {
                dateP6 = 28;
            }
        }
        else {
            dateP6 = 31;
        }
    }
    else if (monthP6 > 0 && monthP6 <= 12 && yearP6 < 1920) {
        alert('Năm cần lớn hơn 1920.');
        return 0;
    }
    else {
        alert('Dữ liệu không hợp lệ.');
        return 0;
    }

    // output
    getEle('daysNum').innerHTML = 'Tháng ' + monthP6 + ' năm ' + yearP6 + ' có ' + dateP6 + ' ngày ';
}


/*
7. Đọc số
*/
getEle('btnReadNum').onclick = function () {
    // input
    let num3Digits = +getEle('num3Digits').value;

    // progress
    let hundreds = Math.floor(num3Digits / 100);
    let tens = Math.floor(num3Digits % 100 / 10);
    let units = num3Digits % 100 % 10;

    // tạo biến đọc cho từng hàng
    let readHundreds = '';
    let readTens = '';
    let readUnits = '';

    if (hundreds == 0 || num3Digits <= 0 || num3Digits > 999) {
        alert('Dữ liệu không hợp lệ.');
    }
    else if (tens == 0 && units == 0) {
        switch (hundreds) {
            case 1:
                readHundreds = 'Một trăm';
                break;
            case 2:
                readHundreds = 'Hai trăm';
                break;
            case 3:
                readHundreds = 'Ba trăm';
                break;
            case 4:
                readHundreds = 'Bốn trăm';
                break;
            case 5:
                readHundreds = 'Năm trăm';
                break;
            case 6:
                readHundreds = 'Sáu trăm';
                break;
            case 7:
                readHundreds = 'Bảy trăm';
                break;
            case 8:
                readHundreds = 'Tám trăm';
                break;
            case 9:
                readHundreds = 'Chín trăm';
                break;
            default:
                break;
        }
        readTens = '';
        readUnits = '';
    }
    else if (tens == 1 && units == 1) {
        switch (hundreds) {
            case 1:
                readHundreds = 'Một trăm';
                break;
            case 2:
                readHundreds = 'Hai trăm';
                break;
            case 3:
                readHundreds = 'Ba trăm';
                break;
            case 4:
                readHundreds = 'Bốn trăm';
                break;
            case 5:
                readHundreds = 'Năm trăm';
                break;
            case 6:
                readHundreds = 'Sáu trăm';
                break;
            case 7:
                readHundreds = 'Bảy trăm';
                break;
            case 8:
                readHundreds = 'Tám trăm';
                break;
            case 9:
                readHundreds = 'Chín trăm';
                break;
            default:
                break;
        }
        readTens = 'mười';
        readUnits = 'một';
    }
    else {
        switch (hundreds) {
            case 1:
                readHundreds = 'Một trăm';
                break;
            case 2:
                readHundreds = 'Hai trăm';
                break;
            case 3:
                readHundreds = 'Ba trăm';
                break;
            case 4:
                readHundreds = 'Bốn trăm';
                break;
            case 5:
                readHundreds = 'Năm trăm';
                break;
            case 6:
                readHundreds = 'Sáu trăm';
                break;
            case 7:
                readHundreds = 'Bảy trăm';
                break;
            case 8:
                readHundreds = 'Tám trăm';
                break;
            case 9:
                readHundreds = 'Chín trăm';
                break;
            default:
                break;
        }

        switch (tens) {
            case 0:
                readTens = 'lẻ';
                break;
            case 1:
                readTens = 'mười';
                break;
            case 2:
                readTens = 'hai mươi';
                break;
            case 3:
                readTens = 'ba mươi';
                break;
            case 4:
                readTens = 'bốn mươi';
                break;
            case 5:
                readTens = 'năm mươi';
                break;
            case 6:
                readTens = 'sáu mươi';
                break;
            case 7:
                readTens = 'bảy mươi';
                break;
            case 8:
                readTens = 'tám mươi';
                break;
            case 9:
                readTens = 'chín mươi';
                break;
            default:
                break;
        }

        switch (units) {
            case 0:
                readUnits = '';
                break;
            case 1:
                readUnits = 'mốt';
                break;
            case 2:
                readUnits = 'hai';
                break;
            case 3:
                readUnits = 'ba';
                break;
            case 4:
                readUnits = 'bốn';
                break;
            case 5:
                readUnits = 'lăm';
                break;
            case 6:
                readUnits = 'sáu';
                break;
            case 7:
                readUnits = 'bảy';
                break;
            case 8:
                readUnits = 'tám';
                break;
            case 9:
                readUnits = 'chín';
                break;
            default:
                break;
        }
    }

    // output
    getEle('readNum').innerHTML = readHundreds + ' ' + readTens + ' ' + readUnits;
}


/*
8. Tìm sinh viên xa trường nhất
*/
getEle('btnSearch').onclick = function () {
    // input
    // sinh viên 1
    let student1 = getEle('student1').value;
    let sX1 = +getEle('sX1').value;
    let sY1 = +getEle('sY1').value;

    // sinh viên 2
    let student2 = getEle('student2').value;
    let sX2 = +getEle('sX2').value;
    let sY2 = +getEle('sY2').value;

    // sinh viên 3
    let student3 = getEle('student3').value;
    let sX3 = +getEle('sX3').value;
    let sY3 = +getEle('sY3').value;

    // trường học
    let coX = +getEle('coX').value;
    let coY = +getEle('coY').value;

    // progress
    // tính độ dài đoạn đường của sinh viên 1
    let d1 = Math.sqrt(Math.pow((coX - sX1), 2) + Math.pow((coY - sY1), 2));
    let d2 = Math.sqrt(Math.pow((coX - sX2), 2) + Math.pow((coY - sY2), 2));
    let d3 = Math.sqrt(Math.pow((coX - sX3), 2) + Math.pow((coY - sY3), 2));
    let furthest = '';

    if (sX1 > 0 && sX2 > 0 && sX3 > 0 && sY1 > 0 && sY2 > 0 && sY3 > 0) {
        if (d1 > d2 && d1 > d3) {
            furthest = student1;
        }
        else if (d2 > d1 && d2 > d3) {
            furthest = student2;
        }
        else if (d3 > d2 && d3 > d1) {
            furthest = student3;
        }
    }
    else {
        alert('Dữ liệu không hợp lệ.');
        return 0;
    }

    // output
    getEle('search').innerHTML = 'Sinh viên xa trường nhất: ' + furthest;
}