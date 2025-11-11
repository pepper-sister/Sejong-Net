import { useEffect, useState } from "react";
import "../styles/facilities.css";

export default function Facilities() {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const loadKakaoMapScript = () => {
      if (window.kakao && window.kakao.maps) {
        initMap();
        return;
      }

      const appKey = process.env.REACT_APP_KAKAO_MAP_KEY;
      const script = document.createElement("script");
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false&libraries=services`;
      script.onload = () => window.kakao.maps.load(initMap);
      document.head.appendChild(script);
    };

    loadKakaoMapScript();
  }, []);

  const initMap = () => {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new window.kakao.maps.LatLng(37.5507885, 127.0739328),
      level: 3,
    };

    const kakaoMap = new window.kakao.maps.Map(mapContainer, mapOption);
    setMap(kakaoMap);
  };

  const showMarker = (type) => {
    removeAllMarkers();

    if (type === "printer") {
      addMarker(new window.kakao.maps.LatLng(37.551538, 127.074238), "<div>학술정보원 2층/5층/6층/9층</div>");
      addMarker(new window.kakao.maps.LatLng(37.551089, 127.0757574), "<div>대양AI센터 B1층</div>");
      addMarker(new window.kakao.maps.LatLng(37.5495386, 127.0737384), "<div>군자관 1층</div>");
      addMarker(new window.kakao.maps.LatLng(37.5522605, 127.0739606), "<div>충무관 1층</div>");
      addMarker(new window.kakao.maps.LatLng(37.5494831, 127.0750716), "<div>학생회관 1층</div>");
      addMarker(new window.kakao.maps.LatLng(37.550106, 127.073171), "<div>광개토관 1층</div>");
    } else if (type === "atm") {
      addMarker(new window.kakao.maps.LatLng(37.5495386, 127.0737384), "<div>군자관 1층</div>");
      addMarker(new window.kakao.maps.LatLng(37.550106, 127.073171), "<div>광개토관 1층</div>");
      addMarker(new window.kakao.maps.LatLng(37.5522605, 127.0739606), "<div>충무관 1층</div>");
    } else if (type === "convenience-store") {
      addMarker(new window.kakao.maps.LatLng(37.551089, 127.0757574), "<div>대양AI센터 1층</div>");
      addMarker(new window.kakao.maps.LatLng(37.5494831, 127.0750716), "<div>학생회관 1층</div>");
      addMarker(new window.kakao.maps.LatLng(37.550106, 127.073171), "<div>광개토관 B1층</div>");
      addMarker(new window.kakao.maps.LatLng(37.5518161, 127.0740439), "<div>율곡관 B1층</div>");
      addMarker(new window.kakao.maps.LatLng(37.5508718, 127.073294), "<div>진관홀 B1층</div>");
    }
  };

  const addMarker = (position, title) => {
    const marker = new window.kakao.maps.Marker({
      map: map,
      position: position,
    });

    const infowindow = new window.kakao.maps.InfoWindow({
      content: title,
    });

    window.kakao.maps.event.addListener(marker, "mouseover", () => {
      infowindow.open(map, marker);
    });

    window.kakao.maps.event.addListener(marker, "mouseout", () => {
      infowindow.close();
    });

    setMarkers((prevMarkers) => [...prevMarkers, marker]);
  };

  const removeAllMarkers = () => {
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    setMarkers([]);
  };

  return (
    <div className="facilities">
      <div id="map" className="facilities__map"></div>

      <div className="facilities__buttons">
        <button className="facilities__button" onClick={() => showMarker("printer")}>
          프린터
        </button>
        <button className="facilities__button" onClick={() => showMarker("atm")}>
          ATM
        </button>
        <button className="facilities__button" onClick={() => showMarker("convenience-store")}>
          편의점
        </button>
      </div>
    </div>
  );
}
