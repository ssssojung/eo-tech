$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }, // ✅ 반응형 설정
        // ✅ 반응형 설정
        breakpoints: {
            // 768px 이하일 때
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // 480px 이하일 때 (선택사항)
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
        },
    });
});
window.onload = function () {
    kakao.maps.load(function () {
        const mapContainer = document.getElementById("map");
        const mapOption = {
            center: new kakao.maps.LatLng(37.4069, 127.2904),
            level: 4,
        };

        const map = new kakao.maps.Map(mapContainer, mapOption);
        const geocoder = new kakao.maps.services.Geocoder();

        const address = "경기도 광주시 도척면 저수지길 30-78";

        geocoder.addressSearch(address, function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
                const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // ✅ 기본 마커 생성
                const marker = new kakao.maps.Marker({
                    map: map,
                    position: coords,
                });

                // ✅ 기본 인포윈도우 생성
                const infowindow = new kakao.maps.InfoWindow({
                    content: `<div style="text-align:center;padding:10px 5px;">${address}</div>`,
                });
                infowindow.open(map, marker);

                map.setCenter(coords);

                // ✅ 마커 클릭 시 카카오맵 새창으로 열기
                kakao.maps.event.addListener(marker, "click", function () {
                    const kakaoMapUrl = `https://map.kakao.com/link/map/${encodeURIComponent(address)},${result[0].y},${result[0].x}`;
                    window.open(kakaoMapUrl, "_blank");
                });
            } else {
                alert("주소를 찾을 수 없습니다.");
            }
        });
    });
};
