$(document).ready(function () {
    // ctb 리스트 생성
    // const list = $("#faqContent");

    // const resultJson = [
    //     { img: "ctb1.jpg", ctgry: "배양기", name: "배양기 500리터" },
    //     { img: "ctb2.jpg", ctgry: "배양기", name: "배양기 1000리터" },
    //     { img: "ctb3.jpg", ctgry: "배양기", name: "배양기 300리터" },
    //     { img: "ctb4.jpg", ctgry: "부속장치", name: "소포장기(충진계량기)" },
    //     { img: "ctb5.jpg", ctgry: "부속장치", name: "소포장기(충진계량기)" },
    //     { img: "ctb6.jpg", ctgry: "부속장치", name: "배출계량기(간이형)" },
    //     { img: "ctb7.jpg", ctgry: "부속장치", name: "원료투입호퍼" },
    //     { img: "ctb8.jpg", ctgry: "부속장치", name: "자동급수탱크" },
    //     { img: "ctb9.jpg", ctgry: "부속장치", name: "저온저장조" },
    // ];

    // list.children().remove();
    // let html = "";
    // for (let keyValue of resultJson) {
    //     html = `
    //             <li>
    //                 <a href="#none" class="open_modal_ctb">
    //                     <div class="img_box">
    //                         <img src="../image/${keyValue.img}" alt="${keyValue.name}" />
    //                     </div>
    //                     <div class="ctb_info">
    //                         <span class="ctb_ctgry">${keyValue.ctgry}</span>
    //                         <p class="wordhover">${keyValue.name}</p>
    //                     </div>
    //                 </a>
    //             </li>
    //             `;

    //     list.append(html);
    // }

    //faq 아코디언 동작
    $(document).on("click", ".faq_item_f", function () {
        const allItems = $(".faq_item_a");
        const target = $(this).closest(".faq_item").find(".faq_item_a");

        // 닫기 애니메이션
        allItems.each(function () {
            $(this).css({
                height: $(this)[0].scrollHeight + "px", // 현재 높이에서
            });
            $(this)[0].offsetHeight; // 강제 리플로우
            $(this).css({
                height: "0",
            });
            allItems.removeClass("active");
        });

        // 이미 열려있다면 닫기만 실행
        if (target.height() > 0) {
            allItems.removeClass("active");
            return;
        }

        // 열기 애니메이션
        const scrollHeight = target[0].scrollHeight;
        target.css({
            height: scrollHeight + "px",
        });
        target.addClass("active");
    });
});
