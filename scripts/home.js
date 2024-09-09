document.addEventListener("DOMContentLoaded", function() {

    const therapySelect = document.getElementById("Our Therapies");


    const courses = document.querySelectorAll("[class^='course']");

    
    therapySelect.addEventListener("change", function() {
        const selectedTherapy = therapySelect.value.trim();

        courses.forEach(function(course) {
    
            const therapyName = course.querySelector("p").textContent.trim();

        
            if (selectedTherapy === "All Therapies" || therapyName === selectedTherapy) {
                course.style.display = "flex";  
            } else {
                course.style.display = "none";  
            }
        });
    });
});