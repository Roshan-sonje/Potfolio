import { useState,React } from "react";
import { BoxIconElement } from "boxicons";
import { HashLink as NavLink } from "react-router-hash-link";

const Navbar = () => {
  const [toggle, setToggle] = useState(null);
  const [active, setActive] = useState(null);
  
  return (
    <div className="fixed w-full z-30">
      <div className="navbar relative flex justify-around sm:justify-around h-12 bg-white shadow-lg items-center px-6 z-[4]">
        <div>
          <h1
          className="logo text-xl font-[500]">
            Roshan.
          </h1>
        </div>

        <div className="transition-all duration-150">
          <ul
            className={
              toggle
                ? `absolute lg:block flex flex-col bg-white-30 backdrop-blur-xl pl-4 gap-4 py-3 w-full z-[1] top-12 left-0 duration-500`
                : `absolute lg:static flex flex-col lg:flex-row lg:gap-8 pl-4 gap-4 py-3 w-full z-[3]  left-0 top-[-260px] duration-500 opacity-15 lg:opacity-100`
            }
          >
            <NavLink
              onClick={()=>{setToggle(false),setActive("Home")}}
              to="#home"
              className={active == "Home" ? `w-fit font-[500] border-b-[2px] border-blue-500 relative duration-150` : `font-[500] relative hover:bg-blue-500 duration-150`}
            >
              Home
            </NavLink>
            <NavLink
              onClick={()=>{setToggle(false),setActive("About")}}
              to='#about'
              className={active == "About" ? `w-fit font-[500] border-b-[2px] border-blue-500 relative duration-150` : `font-[500] relative duration-150`}
            >
              About
              
            </NavLink>
            <NavLink
              onClick={()=>{setToggle(false),setActive("Resume")}}
              to="#resume"
              className={active == "Resume" ? `w-fit font-[500] border-b-[2px] border-blue-500 relative duration-150` : `font-[500] relative duration-150`}
            >
              Resume
            </NavLink>
            <NavLink
              onClick={()=>{setToggle(false),setActive("Projects")}}
              to="#projects"
              className={active == "Projects" ? `w-fit font-[500] border-b-[2px] border-blue-500 relative duration-150` : `font-[500] relative duration-150`}
            >
              Projects
            </NavLink>
            <NavLink
              onClick={()=>{setToggle(false),setActive("Contact")}}
              to="#contact"
              className={active == "Contact" ? `w-fit font-[500] border-b-[2px] border-blue-500 relative duration-150` : `font-[500] relative duration-150`}
            >
              Contact Me
            </NavLink>
          </ul>
        </div>

        <div className="lg:hidden z-[5] menu">
          {toggle ? (
            <img
              onClick={()=>{setToggle(false),setActive("Home")}}
              src="/src/assets/cross.svg"
              alt="menu icon"
              className="menu-logo h-9 w-9 duration-150"
            />
          ) : (
            <img
              onClick={()=>{setToggle(true),setActive("Home")}}
              src="/src/assets/menu.svg"
              alt="menu icon"
              className="h-9 w-9 duration-150 ease-in-out"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
