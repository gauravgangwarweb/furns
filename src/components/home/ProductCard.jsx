import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ProductCard = ({
  title,
  price,
  oldPrice,
  image,
  sale,
  discount,
  countdown,
  soldout,
}) => {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef(null);
  const buttonReff = useRef(null);
  //   const imageRef1 = useRef(null)
  //   const imageRef2 = useRef(null)
  const isInView = useInView(ref);
  const isButtonInView = useInView(buttonReff);
  //   const imageIsInView1 = useInView(imageRef1)
  //   const imageIsInView2 = useInView(imageRef2)

  //title tranculation function
  const wordLimit = 34;
  const words = title.split("");
  const truncateTitle = (title) => {
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join("") + "...";
    }
    return title;
  };

  return (
    <div
      ref={ref}
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="bg-[#f2f2f2] w-full h-80 md:h-64 rounded-sm p-6">
        {isHover ? (
          <img
            // ref={imageRef1}
            className="w-full h-full rounded-sm rotate-6"
            loading="lazy"
            src={image[1]}
            alt="product-image"
          />
        ) : (
          <img
            // ref={imageRef2}
            className="w-full h-full rounded-sm"
            loading="lazy"
            src={image[0]}
            alt="product-image"
          />
        )}
      </div>
      <div
        ref={buttonReff}
        className={`w-full absolute bottom-24 px-6 ${
          isHover ? "block" : "hidden"
        }`}
      >
        <motion.button
          className="w-full flex items-center justify-center bg-white hover:text-orange-400 py-2.5"
          initial={{ opacity: 0, y: 10 }}
          animate={isButtonInView ? { opacity: 1, y: 0 } : ""}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Select Options
        </motion.button>
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <h6 className="font-medium">{truncateTitle(title)}</h6>
        <div className="flex gap-2 mt-3">
          <p className="font-medium">$ {price}</p>
          {oldPrice && (
            <p className="text-gray-300 font-medium line-through">
              $ {oldPrice}
            </p>
          )}
        </div>
      </div>
      {sale && (
        <span className="absolute w-10 text-center bg-green-600 text-white text-[12px] py-0.5 rounded-sm top-3 left-3">
          Sale
        </span>
      )}
      {discount && (
        <span className="absolute w-10 text-center bg-orange-600 text-white text-[12px] py-0.5 rounded-sm top-10 left-3">
          {discount}%
        </span>
      )}
      {soldout && (
        <span className="absolute w-14 text-center bg-orange-600 text-white text-[12px] py-0.5 rounded-sm top-3 left-3">
          Soldout
        </span>
      )}
    </div>
  );
};

export default ProductCard;
