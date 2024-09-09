document.addEventListener("DOMContentLoaded", function () {
    const categoryItems = document.querySelectorAll(".category li");
    const sectionsContainer = document.getElementById("sections-container");
    const sections = Array.from(document.querySelectorAll(".menu-section"));

    // 처음에 모든 섹션을 표시
    sections.forEach((section) => (section.style.display = "block"));

    categoryItems.forEach((item) => {
        item.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            // 해당 카테고리의 섹션만 필터링
            const filteredSections = sections.filter(
                (section) => section.getAttribute("data-category") === category
            );

            // 모든 섹션 숨기기
            sections.forEach((section) => (section.style.display = "none"));

            // 섹션을 무작위로 섞기
            const shuffledSections = filteredSections.sort(
                () => Math.random() - 0.5
            );

            // 처음 3개의 섹션만 표시
            for (let i = 0; i < 3; i++) {
                if (shuffledSections[i]) {
                    shuffledSections[i].style.display = "block";
                }
            }
        });
    });
});
