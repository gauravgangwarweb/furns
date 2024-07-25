import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CategoriesCard from "../components/home/CategoriesCard";
import OurProduct from "../components/home/OurProduct";
import ProductGrid from "../components/home/ProductGrid";
import SaleBanners from "../components/home/SaleBanners";

const Home = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const categoriesData = [
    {
      image: "light-sofa.webp",
      title: "Light Sofa",
    },
    {
      image: "study-table.png",
      title: "Study Table",
    },
    {
      image: "corner-table.png",
      title: "Corner Table",
    },
    {
      image: "office-chair.webp",
      title: "Office Chair",
    },
    {
      image: "book-self.png",
      title: "Book Shelf",
    }
  ]
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <div ref={ref1} className="w-full bg-[#e8e8e8] grid grid-cols-1 md:grid-cols-2 px-4 md:px-32 py-14 md:py-24">
            <div className="flex flex-col items-start justify-center">
              <motion.h5
                className="text-head-color text-base md:text-2xl font-bold md:font-semibold raleway"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView1 ? { opacity: 1, y: 0 } : ""}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                New Products
              </motion.h5>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView1 ? { opacity: 1, y: 0 } : ""}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-head-color text-5xl md:text-7xl raleway font-bold mt-2"
              >
                Flexible Chair
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView1 ? { opacity: 1, y: 0 } : ""}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-head-color text-sm md:text-base mt-4 font-medium"
              >
                This flexible chair adapts to your body's movements, offering
                unparalleled comfort and support.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView1 ? { opacity: 1, y: 0 } : ""}
                transition={{ duration: 1, delay: 0.7 }}
                className="bg-orange-500 hover:bg-orange-400 text-white text-base md:text-lg font-medium px-5 md:px-10 py-2 md:py-3 mt-8"
              >
                Shop now
              </motion.button>
            </div>
            <div className="md:pl-8 mt-10 md:mt-0">
              <motion.img
                loading="lazy"
                src="slider-1.webp"
                alt="slider-1"
                initial={{ opacity: 0, y: 120 }}
                animate={isInView1 ? { opacity: 1, y: 0 } : ""}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div ref={ref2} className="w-full bg-[#e8e8e8] grid grid-cols-1 md:grid-cols-2 px-4 md:px-32 py-14 md:py-24">
            <div className="flex flex-col items-start justify-center">
              <motion.h5
                className="text-head-color text-base md:text-2xl font-bold md:font-semibold raleway"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView2 ? { opacity: 1, y: 0 } : ""}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                New Products
              </motion.h5>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView2 ? { opacity: 1, y: 0 } : ""}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-head-color text-5xl md:text-7xl raleway font-bold mt-2"
              >
                Flexible Chair
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView2 ? { opacity: 1, y: 0 } : ""}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-head-color text-sm md:text-base mt-4 font-medium"
              >
                This flexible chair adapts to your body's movements, offering
                unparalleled comfort and support.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView2 ? { opacity: 1, y: 0 } : ""}
                transition={{ duration: 1, delay: 0.7 }}
                className="bg-orange-500 hover:bg-orange-400 text-white text-base md:text-lg font-medium px-5 md:px-10 py-2 md:py-3 mt-8"
              >
                Shop now
              </motion.button>
            </div>
            <div className="md:pl-8 mt-10 md:mt-0">
              <motion.img
                loading="lazy"
                src="slider-2.webp"
                alt="slider-2"
                initial={{ opacity: 0, y: 120 }}
                animate={isInView2 ? { opacity: 1, y: 0 } : ""}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-pagination md:mb-8"></div>
      <div className="hidden md:grid grid-cols-5 gap-16 mt-28 px-32">
        {categoriesData.map((category, index) => (
          <CategoriesCard key={index} image={category.image} title={category.title} />
        ))}
      </div>
      <OurProduct />
      <ProductGrid />
      <SaleBanners />
    </div>
  );
};

export default Home;
