document.addEventListener("DOMContentLoaded", function () {
    const categoryItems = document.querySelectorAll(".category li");
    const sections = Array.from(document.querySelectorAll(".menu-section"));

    function initializeSections() {
        sections.forEach((section, index) => {
            section.style.display = index < 3 ? "block" : "none";
        });
    }

    function handleWindowResize() {
        if (window.innerWidth > 1024) {
            sections.forEach((section) => (section.style.display = "block"));
        } else {
            initializeSections();
        }
    }

    // Initial setup
    handleWindowResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleWindowResize);

    categoryItems.forEach((item) => {
        item.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            sections.forEach((section) => {
                if (section.getAttribute("data-category") === category) {
                    section.style.display = "block";
                } else {
                    section.style.display = "none";
                }
            });

            if (window.innerWidth <= 1024) {
                const visibleSections = sections.filter(
                    (section) => section.style.display === "block"
                );
                visibleSections.forEach((section, index) => {
                    section.style.display = index < 3 ? "block" : "none";
                });
            }
        });
    });
});
