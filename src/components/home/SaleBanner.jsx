const SaleBanner = ({ img, text }) => {
  return (
    <div className="w-full relative">
      <img className="w-full" src={img} alt="sale" />
      <div className="absolute top-1/2">
        <h4>{text}</h4>
      </div>
    </div>
  );
};

export default SaleBanner;
