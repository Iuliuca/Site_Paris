function openArticles() {
    window.location.href = "index.html";
}

function openPhotos() {
    window.location.href = "Photos.html";
}
 function nextPage() {
        document.getElementById("pagina1").style.display = "none";
        document.getElementById("pagina2").style.display = "block";
}

function goBack() {
        window.history.back();
}

function openImage(src) {
    window.open(src, "_blank", "width=800,height=600");
}