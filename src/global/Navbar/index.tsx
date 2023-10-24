import { NavLink } from "react-router-dom";
import logoImage from "assets/orderz.svg";
import placeholderProfile from "assets/placeholder.svg";
import settingsIcon from "assets/settings-icon.svg";
import signoutIcon from "assets/signout-icon-white.svg";
import Button from "global/Button";
import MobileDropDown from "./components/MobileDropDown";

const Navbar = () => {
  return (
    <nav className="relative flex w-full justify-between px-[2rem] py-[2rem] lg:px-[4rem] lg:py-[2.5rem] xl:px-[5rem] xl:py-[3rem]">
      <NavLink to="/">
        <img src={logoImage} alt="logo" className="h-[2rem] lg:h-[2.5rem] xl:h-[3rem]" />
      </NavLink>
      <div className="md:hidden">
        <MobileDropDown />
      </div>
      <div className="hidden md:flex gap-[2.5rem] items-center">
        <NavLink to="/settings">
          <img src={placeholderProfile} alt="" />
        </NavLink>
        <NavLink to="/settings">
          <img src={settingsIcon} alt="" />
        </NavLink>
        <NavLink to="/welcome">
          <Button className="flex">
            <p>Sign Out</p> 
            <img src={signoutIcon} alt="" />
          </Button>
        </NavLink>
      </div>
      <hr className="absolute" />
    </nav>
  )
}

export default Navbar