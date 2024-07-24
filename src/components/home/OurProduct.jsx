import { useState } from "react";

const OurProduct = () => {
    const [activeButtton, setActiveButton] = useState("new-arrival");
    return (
        <div className="mt-28">
            <div className="flex flex-col items-center justify-center">
                <h4 className="text-4xl font-bold raleway">Our Products</h4>
                <p className="md:px-[400px] text-center text-base mt-6">Explore our exquisite furniture collection, combining timeless elegance with modern functionality to enhance every space.</p>
                <div className="flex gap-8 mt-8">
                    <button onClick={() => setActiveButton("top-product")} className={`text-lg font-semibold ${activeButtton == "new-arrival" ? "text-orange-400" : ""}`}>New Arrival</button>
                    <button onClick={() => setActiveButton("new-arrival")} className={`text-lg font-semibold ${activeButtton == "top-product" ? "text-orange-400" : ""}`}>Top Product</button>
                </div>
            </div>
        </div>
    );
};

export default OurProduct;