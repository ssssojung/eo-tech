$(document).ready(function () {
  // ✅ SDK가 로드된 후에 실행되도록 보장
  kakao.maps.load(function () {
    var mapContainer = document.getElementById("map");
    var mapOption = {
      center: new kakao.maps.LatLng(37.4069, 127.2904),
      level: 4
    };

    var map = new kakao.maps.Map(mapContainer, mapOption);
    var geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch("경기 광주시 도척면 저수지길 30-78", function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        var marker = new kakao.maps.Marker({
          map: map,
          position: coords
        });

        var infowindow = new kakao.maps.InfoWindow({
          content: '<div style="width:200px;text-align:center;padding:6px 0;">도척면 저수지길 30-78</div>'
        });
        infowindow.open(map, marker);
        map.setCenter(coords);
      } else {
        alert("주소를 찾을 수 없습니다.");
      }
    });
  });
});
