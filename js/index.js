function changeImage() {
    var image = document.getElementById('image');
    if (image.src.match("Tet")) {
        image.src = "img/tet-shatsk.jpeg";
    } else {
        image.src = "img/Tet.jpeg";
    }
}