document.addEventListener("DOMContentLoaded", function() {
    const scroller = document.getElementById("scroller");
    function scrollerAction() {
        window.scrollBy({
            top: window.innerHeight,
            left: 0,
            behavior: "smooth",
        });
    }
    scroller.addEventListener("click", scrollerAction);
});
