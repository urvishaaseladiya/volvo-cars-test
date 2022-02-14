import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {CarCard} from "../pages/CarCard";

export const CarCarousel = (props) => {
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1000 }, items: 4 },
        mobile: { breakpoint: { max: 1000, min: 0 }, items: 1.2 },
      };
      const CustomDot = ({ onClick, active }) => {
        return (
          <li style={{ fontSize: '3em' }}
            className={active ? "react-multi-carousel-dot react-multi-carousel-dot--active" : "react-multi-carousel-dot"}
            onClick={() => onClick()}
          >.</li>
        );
      };
    
      const rightArrowStyle = {
        background: "none",
        border: 0,
        opacity: 1,
        fontSize: "80px",
        marginTop: '3.8em',
        right: 'calc(4% + 1px)'
      };
      const CustomRight = ({ onClick }) => (
        <button className="react-multiple-carousel__arrow" onClick={onClick} style={rightArrowStyle}>
          <img src="/chevron-circled.svg" style={{ width: 40 }} alt="" />
        </button>
      );
      const leftArrowStyle = {
        background: "none",
        border: 0,
        opacity: 1,
        fontSize: "80px",
        marginTop: '3.8em',
        right: 'calc(8% + 1px)'
      };
      const CustomLeft = ({ onClick }) => (
        <button className="react-multiple-carousel__arrow" onClick={onClick} style={leftArrowStyle}>
          <img src="/chevron-circled.svg" style={{ width: 40, transform: 'rotate(180deg)' }} alt=""/>
          {/* <Icon type="chevronback" /> */}
        </button>
      );

      return (
        <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows={props.width <= 1000 ? false : true}
        centerMode={false}
        className=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={true}
        showDots={props.width <= 1000 ? true : false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        customDot={<CustomDot />}
        customRightArrow={<CustomRight />}
        customLeftArrow={<CustomLeft />}
      >
        {props.cars.map((car, i) => {
          return (
          <CarCard car={car} key={car.id} />
          );
        })}
      </Carousel>

      )
}