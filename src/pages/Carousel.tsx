import Slider from "react-slick";
import Carousel from "y/components/Carousel";
import Head from "next/head";
const items = [
  {
    type: "image",
    url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
  },
  { type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  {
    type: "image",
    url: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
  },
] as Array<{ type: "image" | "video"; url: string }>;
const CarouselPage = () => {
  const settings = {
    dots: true,
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <div className="flex h-screen w-screen items-center justify-center">
        <div className="width-[300px]  h-[300px] text-white ">
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CarouselPage;
