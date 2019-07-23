window.onload = function () {
    onsize()
}
window.onresize = function () {
    onsize()

}
function onsize() {
    var deviceWidth = document.documentElement.clientWidth;
    if (deviceWidth > 750) {
        deviceWidth = 750;
    }
    var fs = (deviceWidth * 100) / 750;
    document.documentElement.style.fontSize = fs + 'px';
}