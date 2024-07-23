const OurProduct = () => {
    return (
        <div className="mt-28">
            <div className="flex flex-col items-center justify-center">
                <h4 className="text-4xl font-bold raleway">Our Products</h4>
                <p className="px-[400px] text-center text-base mt-6">Explore our exquisite furniture collection, combining timeless elegance with modern functionality to enhance every space.</p>
                <div className="flex gap-8 mt-8">
                    <button className="text-lg font-semibold">New Arrival</button>
                    <button className="text-lg font-semibold">Top Product</button>
                    <button className="text-lg font-semibold">Top Rated</button>
                </div>
            </div>
        </div>
    );
};

export default OurProduct;