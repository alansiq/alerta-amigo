// src/components/Mapbox.tsx
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhbnNpcTk1IiwiYSI6ImNrM3A0a3p4ZzBiNjQzaXBkNGVmemNxbGkifQ.O8NLatt7xzx2AU10nbeQgA';

const Mapbox = () => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const [lng, setLng] = useState(-51.2177); // Default longitude
    const [lat, setLat] = useState(-30.0346); // Default latitude
    const [zoom, setZoom] = useState(12); // Default zoom
  
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLng(position.coords.longitude);
            setLat(position.coords.latitude);
            setZoom(14); // Adjust zoom level after getting the location
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      }
    }, []);
  
    useEffect(() => {
      if (mapContainer.current) {
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom,
        });
  
        return () => {
          map.remove();
        };
      }
    }, [lng, lat, zoom]);
  
    return <div ref={mapContainer} style={{ margin: 0, padding: 0, width: '100%', height: '100%', minHeight: "600px" }} />;
  };
  
  export default Mapbox;