document.addEventListener("DOMContentLoaded", function () {
    const menuSections = document.querySelectorAll(".menu-section");
    const parent = menuSections[0].parentNode;
    const sectionsArray = Array.from(menuSections);

    // 섹션 순서를 무작위로 섞기
    sectionsArray.sort(() => Math.random() - 0.5);

    // 섹션을 부모 요소에 다시 추가
    sectionsArray.forEach((section) => parent.appendChild(section));
});
