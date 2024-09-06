document
    .querySelectorAll(
        ".lemon-list, .orange-list, .mandarin-list, .drink-list, .meat-list"
    )
    .forEach((list) => {
        let isDown = false;
        let startX;
        let scrollLeft;

        list.addEventListener("mousedown", (e) => {
            if (e.button !== 0) return; // 좌클릭만 허용
            isDown = true;
            list.classList.add("active");
            startX = e.pageX - list.offsetLeft;
            scrollLeft = list.scrollLeft;
        });

        list.addEventListener("mousemove", (e) => {
            if (!isDown) return; // 마우스가 눌려있지 않으면 아무 것도 하지 않음
            e.preventDefault();
            const x = e.pageX - list.offsetLeft;
            const walk = (x - startX) * 2; // 스크롤 속도 조정
            list.scrollLeft = scrollLeft - walk;
        });

        list.addEventListener("mouseup", () => {
            isDown = false;
            list.classList.remove("active");
        });

        list.addEventListener("mouseleave", () => {
            isDown = false;
            list.classList.remove("active");
        });

        // 기본 스크롤 동작 방지
        list.style.overflowX = "hidden";
    });
