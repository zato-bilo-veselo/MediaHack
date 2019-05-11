window.onload = function () {
    Array.from(document.getElementsByClassName('ImageAsk')).map(item => {
        item.onclick = function () {
            var $img = this.getElementsByTagName("img")[0];
            move($img.alt);
        };
    });
}
function move(x) {
    $Bar="myBar"+x;
    var Width=55;
    var Width1=35;
    var Width2=10;
    var width = 1;
    document.getElementById($Bar).style.color = "white";
    var elem = document.getElementById("myBar1");
    var elem1 = document.getElementById("myBar2");
    var elem2 = document.getElementById("myBar3");
    elem.textContent=Width;
    elem1.textContent=Width1;
    elem2.textContent=Width2;
    var id = setInterval(frame, 10);
    var id1 = setInterval(frame1, 10);
    var id2 = setInterval(frame2, 10);
    function frame() {
        if (width >= Width) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
    function frame1() {
        if (width >= Width1) {
            clearInterval(id1);
        } else {
            width++;
            elem1.style.width = width + '%';
        }
    }
    function frame2() {
        if (width >= Width2) {
            clearInterval(id2);
        } else {
            width++;
            elem2.style.width = width + '%';
        }
    }
}