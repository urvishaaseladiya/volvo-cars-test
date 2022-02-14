import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getCarData } from "../Services/CarData";
import { CarCarousel } from "./CarCarousel";

export const CarsHomeComponent = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  });
  const [cars, setCars] = useState([]);
  useEffect(() => {
    setCars([]);
    getCarData()
      .then(results => results.json())
      .then(data => {
        console.log(data);
        if ( props.searchText !== 'all') {
        data = data.filter(item => item.bodyType === props.searchText);
        }
        setCars(data);
        console.log(data);
      });
  }, [props.searchText]);

  let content;
  if (cars?.length === 0) {
    content = <p>Loading.....</p>;
  } else {
    content = <CarCarousel cars={cars} width={width} />;
  }
  return (
    <div id="main-slide" className="container carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {content}
      </div>
    </div>
  );
}
