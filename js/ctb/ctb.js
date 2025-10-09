$(document).ready(function () {
    // ctb 리스트 생성
    const list = $("#ctbContent");

    const resultJson = [
        { img: "ctb1.jpg", ctgry: "배양기", name: "배양기 500리터" },
        { img: "ctb2.jpg", ctgry: "배양기", name: "배양기 1000리터" },
        { img: "ctb3.jpg", ctgry: "배양기", name: "배양기 300리터" },
        { img: "ctb4.jpg", ctgry: "부속장치", name: "소포장기(충진계량기)" },
        { img: "ctb5.jpg", ctgry: "부속장치", name: "소포장기(충진계량기)" },
        { img: "ctb6.jpg", ctgry: "부속장치", name: "배출계량기(간이형)" },
        { img: "ctb7.jpg", ctgry: "부속장치", name: "원료투입호퍼" },
        { img: "ctb8.jpg", ctgry: "부속장치", name: "자동급수탱크" },
        { img: "ctb9.jpg", ctgry: "부속장치", name: "저온저장조" },
    ];

    list.children().remove();
    let html = "";
    for (let keyValue of resultJson) {
        html = `
                <li>
                    <a href="#none" class="open_modal_ctb">
                        <div class="img_box">
                            <img src="../image/${keyValue.img}" alt="${keyValue.name}" />
                        </div>
                        <div class="ctb_info">
                            <span class="ctb_ctgry">${keyValue.ctgry}</span>
                            <p class="wordhover">${keyValue.name}</p>
                        </div>
                    </a>
                </li>
                `;

        list.append(html);
    }

    $("#modalClose").on("click", function () {
        $("#zoomImgModal").hide();
    });
    $(".open_modal_ctb").on("click", function (event) {

        event.preventDefault()
        // const item = $(this);
        const modal = $("#zoomImgModal");
        const itemSrc = $(this).find("img").attr("src");
        const itemCtgry = $(this).find('.ctb_ctgry').text();
        const itemInfo = $(this).find(".ctb_info > p").text();
        console.log(itemSrc,itemInfo)
        initModalInfo();
        modal.show()
        modal.find(".modal_inner_img > img").attr("src", itemSrc);
        modal.find(".modal_top b").text(itemInfo);
        modal.find(".modal_top .ctgry_icon").text(itemCtgry);

    });
    function initModalInfo() {
        const modal = $("#zoomImgModal");
        modal.find(".modal_inner_img > img").attr("src", "");
        modal.find(".modal_top b").text("");
        modal.find(".modal_top .ctgry_icon").text("");
    }
});
