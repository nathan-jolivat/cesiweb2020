let jumpToTop = document.getElementById('jump-to-top');
jumpToTop.style.visibility = "hidden";

window.onscroll = function(e) {
    if (this.scrollY > 40) {
        jumpToTop.style.visibility = "";
    } else {
        jumpToTop.style.visibility = "hidden";
    }
};
