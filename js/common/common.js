$(document).ready(function () {
  // nav 전체에서 나가면 전체 닫기
  $("nav").mouseleave(function () {
    $(".header-bg").stop(true, true).animate({ height: 0 }, 300, function(){
      $(this).hide();
    });
    $(".submenu").stop(true, true).fadeOut(200);
  });

  // 개별 메뉴 hover 시
  $(".gnb > li").hover(
    function () {
      var $submenu = $(this).find(".submenu");

      if ($submenu.length > 0) {
        var submenuHeight = $submenu.outerHeight();

        // 배경이 display:none 상태라면 height를 0부터 시작
        if ($(".header-bg").css("display") === "none" || $(".header-bg").height() === 0) {
          $(".header-bg").show().css("height", 0);
        }

        // 서브메뉴 높이에 맞춰 자연스럽게 변경
        $(".header-bg").stop(true, true)
                       .animate({ height: submenuHeight+100 + "px" }, 300);

        // 해당 서브메뉴만 fadeIn
        $submenu.stop(true, true).fadeIn(300);
      } else {
        // 서브 없는 li → 배경 닫기
        $(".header-bg").stop(true, true).animate({ height: 0 }, 300, function(){
          $(this).hide();
        });
      }
    },
    function () {
      var $submenu = $(this).find(".submenu");
      if ($submenu.length > 0) {
        $submenu.stop(true, true).fadeOut(200);
      }
    }
  );
});
