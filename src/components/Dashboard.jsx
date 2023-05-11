import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, useMap ,Marker ,Popup } from "react-leaflet";
import "../style/map.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet"
import axios from "axios"
import { Linegraph } from "./Linegraph";




const markerIcon = new L.Icon({
  iconUrl:require("../mapicon.png"),
  iconSize:[39,45],
  iconAnchor:[17,46],
  popupAnchor:[3,-46]
})



export const Dashboard = () => {

  const [country,setCountry] = useState([])
  const [center, setCenter] = useState({ lat: 15.457, lng: 80.67 });
  const zoom = 3;
  const url = "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=EumqQAH2QViaNgrn07Xw";
  const attribution = '&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
  const mapRef = useRef();


 useEffect(()=>{
  try{
    axios.get("https://disease.sh/v3/covid-19/countries")
    .then((res=>{
      setCountry(res.data)
    }))
  }
  catch(err){
    console.log(err)
  }
 },[])


  return (
    <div className="absolute z-10 w-full min-h-screen space-y-5 mt-4">
   <Linegraph/>
    <div className=" w-[95%]  mx-auto">
      <MapContainer className="w-full" center={center} zoom={zoom}>
        <TileLayer url={url} attribution={attribution} />
        {country.map((country , id)=>
        <Marker position={[country.countryInfo.lat , country.countryInfo.long]} icon={markerIcon} key={id}>
          <Popup>
            <h1 className="font-extrabold">{country.country}</h1>
            <p>Active Case = {country.active}</p>
            <p>Recovery Case = {country.recovered}</p>
            <p>Death Case = {country.deaths}</p>
          </Popup>
        </Marker>
        )}
      </MapContainer>
    </div>
    </div>
  );
};
