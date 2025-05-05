document.addEventListener("DOMContentLoaded", function () {
    const divs = document.querySelectorAll(".container > div"); // Select all direct children divs of .container
    let currentIndex = 0;

    function changeDiv() {
        // Hide the currently active div
        divs[currentIndex].classList.remove("active");

        // Increment the index and loop back if it exceeds the number of divs
        currentIndex = (currentIndex + 1) % divs.length;

        // Show the next div
        divs[currentIndex].classList.add("active");
    }

    // Automatically change div every 3 seconds
    setInterval(changeDiv, 3000); 
});
