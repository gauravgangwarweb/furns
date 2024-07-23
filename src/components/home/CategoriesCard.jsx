const CategoriesCard = ({image, title}) => {
    return (
        <div className="flex flex-col items-center justify-center border-2 rounded-full hover:border-orange-400 hover:border-dashed hover-animate-border cursor-pointer p-10">
            <img loading="lazy" src={image} alt={"imgsrc"} />
            <p className="font-medium mt-2">{title}</p>
        </div>
    );
};

export default CategoriesCard;