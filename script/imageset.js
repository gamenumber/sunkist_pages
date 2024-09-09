// 각 카테고리 항목을 선택
const categoryItems = document.querySelectorAll(".category li a");

// 각 항목에 대해 배경 이미지를 동적으로 설정
categoryItems.forEach((item, index) => {
    const imageUrl = `../img/sub/category-${index + 1}.jpg`; // category-1.jpg, category-2.jpg 형식으로 이미지 설정
    item.style.setProperty("--background-img", `url(${imageUrl})`);
});

// 동적으로 삽입된 background-image 속성을 ::before에 적용
const style = document.createElement("style");
document.head.appendChild(style);
let styleContent = "";

categoryItems.forEach((item, index) => {
    styleContent += `
           .category li:nth-child(${index + 1}) a::before {
               background-image: url('../img/sub/category-${index + 1}.jpg');
           }
       `;
});

style.innerHTML = styleContent;
