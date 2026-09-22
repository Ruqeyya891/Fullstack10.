// task1

let usermonthlysalary = prompt("Aylıq maaşınızı daxil edin: ");
if (usermonthlysalary >= 5000) {
    console.log("Bu yuksek maaşdir")
}

else if (usermonthlysalary >= 1000 && usermonthlysalary <= 1500) {
    console.log("Bu orta maaşdir")
}

else if (usermonthlysalary < 500){
    console.log("Bu standart maaşdir")
}

// oxsar elaveler

let mascara = prompt("Maskaranızın qiymətini daxil edin: ");
if (mascara >= 15) {
    console.log("Bu bahalı maskaradır")
}
else if (mascara >= 8 && mascara <= 12) {
    console.log("Bu orta qiymətli maskaradır")
}
else if (mascara <= 3) {
    console.log("Bu maskara ucuzdur")
}


let teacherage = prompt("Müəlliminizin yaşını daxil edin: ");
if (teacherage >= 50) {
    console.log("Müəlliminiz yaşlıdır")
}
else if (teacherage >= 30 && teacherage <= 40) {
    console.log("Müəlliminiz orta yaşlıdır")
}
else if (teacherage <= 25) {
    console.log("Müəlliminiz gəncdir")
}