const SaleBanners = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 px-4 md:px-32 mt-28">
      <div className="h-[280px] w-full relative cursor-pointer overflow-hidden">
        <img className="w-full hover:scale-110 hover:rotate-3 ease-in-out transition-all duration-200" src="sale-banner-1.webp" alt="sale" />
        <div className="absolute w-60 top-20 right-0">
          <h4 className="text-3xl font-medium">Sale Furniture For Summer</h4>
          <p className="mt-8">Great Discounts Here</p>
        </div>
      </div>
      <div className="h-[280px] w-full relative cursor-pointer overflow-hidden">
        <img className="w-full hover:scale-110 hover:rotate-3 ease-in-out transition-all duration-200" src="sale-banner-2.webp" alt="sale" />
        <div className="absolute w-60 top-20 left-9">
          <h4 className="text-3xl font-medium">Office Chair For Best Offer</h4>
          <p className="mt-8">Great Discounts Here</p>
        </div>
      </div>
    </div>
  );
};

export default SaleBanners;
