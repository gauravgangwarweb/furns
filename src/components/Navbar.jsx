import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="W-full">
      <div className="flex items-center justify-between py-6 px-32">
        <img className="w-16" loading="lazy" src="logo.png" alt="logo" />
        <div className="flex items-center justify-center">
          <button className="flex items-center justify-center border-r-2 border-[#8a8a8a] px-4">
            <ion-icon style={{fontSize: "28px"}} name="search-outline"></ion-icon>
          </button>
          <button className="flex items-center justify-center border-r-2 border-[#8a8a8a] px-4">
            <ion-icon style={{fontSize: "28px"}} name="person-outline"></ion-icon>
          </button>
          <button className="flex items-center justify-center px-4 relative">
            <ion-icon style={{fontSize: "28px"}} name="cart-outline"></ion-icon>
            <p className="absolute bg-yellow-300 text-black text-xs rounded-full py-0.5 px-1.5 flex items-center justify-center -top-1.5 right-2">{0}</p>
          </button>
        </div>
      </div>
      <nav className="bg-[#474747] flex items-center justify-center gap-10 py-4 font-sans font-medium"> 
        <NavLink to="/" className={({isActive}) => isActive ? "text-[#ff7004]" : "text-white"}>Home</NavLink>
        <NavLink to="/shop" className={({isActive}) => isActive ? "text-[#ff7004]" : "text-white"}>Shop</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "text-[#ff7004]" : "text-white"}>About Us</NavLink>
        <NavLink to="/blog" className={({isActive}) => isActive ? "text-[#ff7004]" : "text-white"}>Blog</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? "text-[#ff7004]" : "text-white"}>Contact Us</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
