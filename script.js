var img_tracker = '1';

function changeImg() {
    var img = document.getElementById("change-img");
    if (img_tracker == "1") {
        img.src = "banner_atar.jpg";
        img_tracker = "2";
    }
    else {
        img.src = "250X110668568400.jpg";
        img_tracker = "1";
    }
}

var timer = setInterval('changeImg();', 5000);