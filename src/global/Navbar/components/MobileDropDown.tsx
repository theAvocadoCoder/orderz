import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import placeholderProfile from "assets/placeholder.svg";
import settingsIcon from "assets/settings-icon.svg";
import signoutIcon from "assets/signout-icon-black.svg";

function MobileDropDown() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  function toggleDropdown() {
    if (dialogRef.current != null) {
      if (dialogOpen) {
        dialogRef.current.close();
        setDialogOpen(state => !state);
      } else {
        dialogRef.current.show();
        setDialogOpen(state => !state);
      }
    }
  }

  return (
    <div className="relative">
      <dialog ref={dialogRef} className="absolute -left-[6.5rem] bg-transparent border top-10 open:flex flex-col gap-5 px-3 py-2 items-start [&::backdrop]:[click-events:none]">
        <NavLink to="/settings" className="flex gap-2" onClick={toggleDropdown}>
            <img src={placeholderProfile} alt="" />
            <p>Profile</p> 
          </NavLink>
          <NavLink to="/settings" className="flex gap-2" onClick={toggleDropdown}>
            <img src={settingsIcon} alt="" />
            <p>Settings</p> 
          </NavLink>
          <NavLink to="/welcome" className="flex gap-2" onClick={toggleDropdown}>
            <img src={signoutIcon} alt="" />
            <p>Sign Out</p> 
          </NavLink>
      </dialog>
      <button type="button" title="Profile options" onClick={toggleDropdown}>
        <img src={placeholderProfile} alt="" className="h-5" />
        <div className="bg-[url('assets/down-arrow.svg')] bg-svg" />
      </button>
    </div>
  )
}

export default MobileDropDown