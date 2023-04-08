import React, { useState } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

declare global {
  interface CarouselProps {
    items: Array<{ type: "image" | "video"; url: string }>;
  }
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  return (
    <div className="relative h-full w-full">
      <Slider {...settings}>
        {items.map((item, index) => {
          if (item.type === "image") {
            return (
              <img
                key={index}
                src={item.url}
                alt={`Slide ${index}`}
                className="h-full w-full object-cover"
              />
            );
          } else {
            return (
              <video
                key={index}
                controls
                muted
                className="h-full w-full object-cover"
              >
                <source src={item.url} type="video/mp4" />
              </video>
            );
          }
        })}
      </Slider>
      {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        {items.map((_, index) => (
          <div
            key={index}
            className={`mx-1 h-2 w-2 rounded-full ${
              index === currentSlide ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
