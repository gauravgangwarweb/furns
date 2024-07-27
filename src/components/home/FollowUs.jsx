const FollowUs = () => {
  return (
    <div className="mt-28">
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-4xl font-bold raleway">Follow Us Instagram</h4>
        <p className="md:px-[400px] text-center text-base mt-4">Follow us on instagram to get latest updates and new arrivals of product.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 md:px-32 mt-14">
            <div className="h-60">
                <img loading="lazy" src="" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
