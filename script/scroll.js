document.querySelectorAll(".menu-list").forEach((list) => {
    let isDown = false;
    let startX;
    let scrollLeft;

    // li 요소가 중앙에 올 때 스크롤이 옆으로 가도록 구현
    const liItems = list.querySelectorAll("li");

    const scrollToCenter = (target) => {
        const listCenter = list.getBoundingClientRect().width / 2;
        const itemCenter =
            target.getBoundingClientRect().left +
            target.getBoundingClientRect().width / 2;
        const scrollAmount = itemCenter - listCenter;
        list.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    scrollToCenter(entry.target);
                }
            });
        },
        {
            root: list,
            threshold: 0.5, // 중앙에 왔을 때 스크롤 트리거
        }
    );

    liItems.forEach((item) => observer.observe(item));

    // 마우스 드래그로 가로 스크롤
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

    // 무한 스크롤 기능 추가
    const maxScrollLeft = list.scrollWidth - list.clientWidth;

    list.addEventListener("scroll", () => {
        // 스크롤이 끝에 도달하면 처음으로 이동
        if (list.scrollLeft >= maxScrollLeft) {
            list.scrollLeft = 1; // 끝에서 처음으로 스크롤
        } else if (list.scrollLeft <= 0) {
            list.scrollLeft = maxScrollLeft - 1; // 처음에서 끝으로 스크롤
        }
    });

    // 마우스 휠로 가로 스크롤 제어
    list.addEventListener("wheel", (e) => {
        e.preventDefault(); // 기본 세로 스크롤 방지
        list.scrollLeft += e.deltaY; // 휠 스크롤을 가로로 처리
    });

    // .category li 클릭 시 해당 li가 화면 중앙으로 오게 스크롤
    document.querySelectorAll(".category li").forEach((categoryItem) => {
        categoryItem.addEventListener("click", (e) => {
            const clickedLi = e.target;
            scrollToCenter(clickedLi); // 클릭된 li가 중앙으로 오도록 스크롤
        });
    });
});
