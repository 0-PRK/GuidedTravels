import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import { Box, Flex, SkeletonText } from "@chakra-ui/react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import img from "./images/defaultuser.png";

import { useParams,NavLink } from "react-router-dom";
import { BiCurrentLocation } from "react-icons/bi"; // Import the location icon
import Card1 from "./cards";
import UseFetch from "../Hooks/UseFetch";

const defaultMapOptions = {
  center: { lat: 27.7172, lng: 85.324 }, // Default center set to Nepal
  zoom: 7,
};

export default function Afterlogin(props) {
  const [imgSrc, setImgSrc] = useState(img);
  const { id } = useParams();
  const { user } = UseFetch(`http://localhost:4000/user/userProfile/${id}`);
  const searchBoxRef = useRef(null); // Ref for the search box component
  const [mapCenter, setMapCenter] = useState(null); // State for map center
  const [userLocation, setUserLocation] = useState(null); // State for user location

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAOP6ZstiSFhfdwwvXy8c2dtWU7U8i-Q4Q",
    libraries: ["places"],
  });

  useEffect(() => {
    setMapCenter(defaultMapOptions.center); // Set the default map center to Nepal
  }, []);

  if (!isLoaded) {
    return <SkeletonText />;
  }

  const handlePlaceSelect = () => {
    // Get the selected place from the Autocomplete component
    const selectedPlace = searchBoxRef.current.getPlace();

    if (selectedPlace.geometry && selectedPlace.geometry.location) {
      // Get the latitude and longitude of the selected place
      const { lat, lng } = selectedPlace.geometry.location;

      // Update the map center to the selected place
      setMapCenter({ lat: lat(), lng: lng() });
    }
  };

  const handleLocate = () => {
    // Check if geolocation is supported by the browser
    if (navigator.geolocation) {
      // Get the user's current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Update the map center and user location
          setMapCenter({ lat: latitude, lng: longitude });
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error retrieving user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="fit container Dashboard-container">
      <div className="Dashboard-user-details">
        <div className="Dashboard-profile-box quicksand18">
          <div className="Dashboard-profile-image">
            <img
              src={imgSrc}
              alt="Profile"
              className="Dashboard-circular-image"
            />
          </div>
          <div className="Dashboard-user-info">
            <div className="Dashboard-full-name">
              <h5> <b>Welcome!</b> {user.name}</h5>
            </div>
            <div className="user-name">
              <h5><b>Username:-</b>@{user.username}</h5>
            </div>
            <div className="user-name">
              <h5><b>Email:-</b>{user.email}</h5>
            </div>
          </div>
        </div>

        <div className="Dashboard-map">
          <Flex position="relative" alignItems="center" h="100%">
            <Box w="100%" h="100%">
              <GoogleMap
                center={mapCenter}
                zoom={15}
                mapContainerStyle={{ width: "100%", height: "100%" }}
                options={{
                  zoomControl: true,
                  streetViewControl: true,
                  mapTypeControl: true,
                  fullscreenControl: true,
                }}
              >
                {<Marker position={mapCenter} />}
                {userLocation && <Marker position={userLocation} />}

                <Autocomplete
                  onLoad={(autocomplete) => {
                    searchBoxRef.current = autocomplete;
                  }}
                  onPlaceChanged={handlePlaceSelect}
                >
                  <input
                    type="text"
                    placeholder="Search places"
                    style={{
                      boxSizing: `border-box`,
                      border: `1px solid transparent`,
                      width: `240px`,
                      height: `32px`,
                      padding: `0 12px`,
                      borderRadius: `3px`,
                      boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                      fontSize: `14px`,
                      outline: `none`,
                      textOverflow: `ellipses`,
                      position: "absolute",
                      top: "10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                </Autocomplete>
                <button
                  onClick={handleLocate}
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    zIndex: 1,
                    background: "none",
                    border: "none",
                    color: "#666",
                    cursor: "pointer",
                    fontSize: "24px",
                  }}
                >
                  <BiCurrentLocation />
                </button>
              </GoogleMap>
            </Box>
          </Flex>
        </div>
      </div>
      <div className="alignCenter"> <hr className="line1" /></div>
     

      <div className="trip-section">
        <div>
          <h2 className="alignCenter quicksand20">My Trips</h2> <div className="quicksand200"><NavLink to="/plantrip"><button style={{width:"300px",height:"100px"}}type="button" class="btn btn-danger "><h1>+ PLAN TRIP</h1></button></NavLink></div><br/>
          <Card1 />
        </div>
<br/>

      </div>
    </div>
  );
}
