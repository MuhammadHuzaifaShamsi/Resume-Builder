document.addEventListener("DOMContentLoaded", function () {
    function animate() {
        let showcase: any = document.getElementById("interface");
        let body: any = document.getElementById("body");

        if (showcase) {
            showcase.style.overflow = "hidden";
            showcase.classList.add("slide-up");
            
            showcase.addEventListener("transitionend", function () {
                showcase.style.display = "none";
                body.style.display = "block";
            });
        }
    }
    
    let button = document.querySelector(".btn");

    if (button) {
        button.addEventListener("click", animate);
    }
});
