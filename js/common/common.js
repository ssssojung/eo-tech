$(document).ready(function () {
    $("header").load("../../header/header.html");

    // // gnb 인터렉션
    // $(".gnb_inner > .gnb li").each(function () {
    //     $(this)
    //         .stop()
    //         .mouseleave(function () {
    //             var $this = $(this);
    //             $this.addClass("out");
    //             setTimeout(function () {
    //                 $this.removeClass("out");
    //             }, 500);
    //         });
    // });

    // // gnb 뎁스
    // $(".gnb_inner > .gnb li")
    //     .not(".no-dep")
    //     .stop()
    //     .mouseover(function () {
    //         $(".header_gnb").addClass("gnb_on");
    //         $(".gnb_inner > .gnb li").removeClass("gnb_on");
    //         $(this).addClass("gnb_on");

    //         // 서브에 마우스 오버시 메뉴 활성화
    //         $(".gnb_inner > .gnb li").removeClass("aniStop");
    //         $(this).addClass("aniStop");

    //         // let indexWithoutNoDep = $(this).index();
    //         let gnbMenuId = $(this).attr("id");
    //         if (gnbMenuId === "gnbMenuGreeting") {
    //             $(".header_bg").css("height", "138px");
    //         } else if (gnbMenuId === "gnbMenuFmt") {
    //             $(".header_bg").css("height", "612px");
    //         } else if (gnbMenuId === "gnbMenuSupport") {
    //             $(".header_bg").css("height", "138px");
    //         } else {
    //             $(".header_bg").css("height", "0");
    //         }
    //     })
    //     .mouseout(function () {
    //         $(".header_bg").css("height", "0");
    //     });

    // $(".header_gnb")
    //     .stop()
    //     .mouseleave(function () {
    //         setTimeout(function () {
    //             $(".header_gnb").removeClass("gnb_on");
    //             $(".gnb_inner > .gnb > li").not(".gnb_searchBox").removeClass("gnb_on");
    //         }, 100);
    //     });

    // $(".gnb_inner > .gnb .li-lang").click(function () {
    //     var chk = $(".gnb_inner > .gnb .lang-ul").css("display");
    //     if (chk == "none") {
    //         $(".gnb_inner> .gnb .lang-ul").slideDown();
    //     } else {
    //         $(".gnb_inner> .gnb .lang-ul").slideUp();
    //     }
    // });

    // // no 뎁스 호버시 하위메뉴 숨기기
    // $(".gnb li.no-dep").mouseover(function () {
    //     $(".header_gnb").removeClass("gnb_on");
    //     $(".gnb_inner > .gnb li").removeClass("gnb_on");
    //     $(this).removeClass("gnb_on");
    // });

    // // gnb 클릭시 focus클래스 추가
    // $(".gnb > li").removeClass("focus");

    // 스크롤 시 버튼 보이기/숨기기
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            // 200px 이상 스크롤하면 보임
            $("#topBtn").fadeIn();
        } else {
            $("#topBtn").fadeOut();
        }
    });

    // 버튼 클릭 시 맨 위로 스크롤
    $("#topBtn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500); // 0.5초 동안 맨 위로
        return false;
    });

    $(".dropdown_btn").on("click", function () {
        let $parent = $(this).closest(".dropdown");

        // 이미 열려있으면 닫기
        if ($parent.hasClass("open")) {
            $parent.removeClass("open");
        } else {
            $(".dropdown").removeClass("open"); // 다른 드롭다운 닫기
            $parent.addClass("open");
        }
    });

    // 바깥 클릭 시 닫기
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".dropdown").length) {
            $(".dropdown").removeClass("open");
        }
    });
});
