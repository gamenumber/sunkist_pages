$(function () {
    const $menu = $(".gnb > li");
    const duration = 300;

    $menu.on("mouseenter", function () {
        $(this).find(".submenu2").stop().slideDown(duration);
        $(this).addClass("on");
    });

    $menu.on("mouseleave", function () {
        $(this).find(".submenu2").stop().slideUp(duration);
        $(this).removeClass("on");
    });
});
