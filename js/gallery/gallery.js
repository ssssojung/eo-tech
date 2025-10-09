$(document).ready(function () {
    // gallery 리스트 생성
    const list = $("#galleryContent");

    const resultJson = [
        { img: "fpp2.jpg", ctgry: "생산플랜트", name: "TMF(자가사료)생산플랜트" },
        { img: "fpp3.jpg", ctgry: "생산플랜트", name: "발효사료생산플랜트" },
        { img: "fpp1.jpg", ctgry: "생산플랜트", name: "생균제생산플랜트" },
        { img: "eo_13500.jpg", ctgry: "발효기", name: "EO-13500외 발효기 - 양돈단체" },
        { img: "eo_9000.jpg", ctgry: "발효기", name: "EO-9000 발효기 - 농업기술센터" },
        { img: "eo_9000.jpg", ctgry: "발효기", name: "EO-9000 발효기 - 양돈단체" },
        { img: "eo_5000.jpg", ctgry: "발효기", name: "EO-5000 발효사료기 - 영농단체" },
        { img: "eo_6000.jpg", ctgry: "발효기", name: "EO-5000 발효사료기 - 낙농조합" },
        { img: "eo_9000.jpg", ctgry: "발효기", name: "EO-9000 발효기 - 농업기술센터" },
        { img: "eo_9000.jpg", ctgry: "발효기", name: "EO-9000 발효기 - 양돈단체" },
        { img: "eo_5000.jpg", ctgry: "발효기", name: "EO-5000 발효기 - 영농단체" },
        { img: "eo_6000.jpg", ctgry: "발효기", name: "EO-6000 발효기 - 낙농조합" },
        { img: "eo_13500.jpg", ctgry: "발효기", name: "EO-13500 TMR공장" },
        { img: "eo_3000.jpg", ctgry: "발효기", name: "EO-3000 발효사료기 - 영농단체" },
        { img: "eo_6000.jpg", ctgry: "발효기", name: "EO-6000 발효기 - 한우농가" },
        { img: "eo_3000.jpg", ctgry: "발효기", name: "EO-3000 발효기 - 한우농가" },
    ];

    // list.children().remove();
    // let html = "";
    // for (let keyValue of resultJson) {
    //     html = `
    //             <li>
    //                 <a href="#none" class="open_modal_gllery">
    //                     <div class="img_box">
    //                         <img src="../image/${keyValue.img}" alt="${keyValue.name}" />
    //                     </div>
    //                     <div class="fmt_info">
    //                         <span class="fmt_ctgry">${keyValue.ctgry}</span>
    //                         <p class="wordhover">${keyValue.name}</p>
    //                     </div>
    //                 </a>
    //             </li>
    //             `;

    //     list.append(html);
    // }
});
