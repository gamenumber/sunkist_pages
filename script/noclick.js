document
    .querySelectorAll(
        ".lemon-list li, .orange-list li, .mandarin-list li, .drink-list li, .meat-list li"
    )
    .forEach((item) => {
        item.addEventListener(
            "click",
            (e) => {
                e.preventDefault();
                e.stopPropagation();
            },
            true
        ); // 캡처링 단계에서 이벤트를 가로챕니다.

        item.addEventListener(
            "mousedown",
            (e) => {
                e.preventDefault();
                e.stopPropagation();
            },
            true
        );

        item.addEventListener(
            "mouseup",
            (e) => {
                e.preventDefault();
                e.stopPropagation();
            },
            true
        );
    });
