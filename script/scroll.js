document.querySelectorAll(".menu-list").forEach((list) => {
    let isDown = false;
    let startX;
    let scrollLeft;

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
            threshold: 0.5,
        }
    );

    liItems.forEach((item) => observer.observe(item));

    // Mouse drag scrolling
    const onMouseDown = (e) => {
        if (e.button !== 0) return;
        isDown = true;
        list.classList.add("active");
        startX = e.pageX - list.offsetLeft;
        scrollLeft = list.scrollLeft;
    };

    const onMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - list.offsetLeft;
        const walk = (x - startX) * 2;
        list.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
        isDown = false;
        list.classList.remove("active");
    };

    const onMouseLeave = () => {
        isDown = false;
        list.classList.remove("active");
    };

    list.addEventListener("mousedown", onMouseDown);
    list.addEventListener("mousemove", onMouseMove);
    list.addEventListener("mouseup", onMouseUp);
    list.addEventListener("mouseleave", onMouseLeave);

    // Touch scrolling
    const onTouchStart = (e) => {
        isDown = true;
        list.classList.add("active");
        startX = e.touches[0].pageX - list.offsetLeft;
        scrollLeft = list.scrollLeft;
    };

    const onTouchMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - list.offsetLeft;
        const walk = (x - startX) * 2;
        list.scrollLeft = scrollLeft - walk;
    };

    const onTouchEnd = () => {
        isDown = false;
        list.classList.remove("active");
    };

    list.addEventListener("touchstart", onTouchStart);
    list.addEventListener("touchmove", onTouchMove);
    list.addEventListener("touchend", onTouchEnd);

    list.style.overflowX = "hidden";

    const maxScrollLeft = list.scrollWidth - list.clientWidth;

    list.addEventListener("scroll", () => {
        if (list.scrollLeft >= maxScrollLeft) {
            list.scrollLeft = 1;
        } else if (list.scrollLeft <= 0) {
            list.scrollLeft = maxScrollLeft - 1;
        }
    });

    list.addEventListener("wheel", (e) => {
        e.preventDefault();
        list.scrollLeft += e.deltaY;
    });

    document.querySelectorAll(".category li").forEach((categoryItem) => {
        categoryItem.addEventListener("click", (e) => {
            const clickedLi = e.target;
            scrollToCenter(clickedLi);
        });
    });
});
