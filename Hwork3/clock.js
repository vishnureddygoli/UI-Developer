function sTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = " PM "
if (h < 12){
ampm = " AM "
}
if (h > 12){
h -= 12
}
if (h < 10){
h = " " + h
}
if (m < 10){
m = "0" + m
}
if (s < 10){
s = "0" + s
}
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
     h + ":" + m + ":" + s + ampm ;
    var t = setTimeout(sTime, 200);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}