<script>
window.onscroll = function() {scrollFunction()};

var menu = document.getElementById("menu");
var stick = menu.offsetTop;

function scrollFunction() {
    if (window.pageYOffset >= stick) {
        menu.classList.add("sticky");
    } else {
        menu.classList.remove("sticky");
    }
}
</script>
