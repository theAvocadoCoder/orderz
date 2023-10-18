import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="full-center gap-5 h-12">
      <NavLink to="/" className="text-blue-500 underline">Home</NavLink>
      <NavLink to="/edit" className="text-blue-500 underline">Edit</NavLink>
      <NavLink to="/view" className="text-blue-500 underline">View</NavLink>
      <NavLink to="/new" className="text-blue-500 underline">New</NavLink>
      <NavLink to="/settings" className="text-blue-500 underline">Settings</NavLink>
      <NavLink to="/welcome" className="text-blue-500 underline">Welcome</NavLink>
    </div>
  )
}

export default Navbar