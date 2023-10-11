"use client";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { LiaToolsSolid,LiaToolboxSolid } from "react-icons/lia";
import { BiBookmarkHeart} from "react-icons/bi";
import { MdManageAccounts} from "react-icons/md";
import { SiRetool} from "react-icons/si";
const Sidebar = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="flex flex-row  ">
      <div className={toggle ? "visible basis-1/5 border  shadow" : "hidden"}>
        <ul className="menu  p-2">
          <li>
            <a>
             <CgProfile className="text-2xl"/>
              Profile
            </a>
          </li>
          <li>
            <a>
        
            <LiaToolsSolid className="text-2xl"/>
            submit Tool
            </a>
          </li>
       
          <li>
            <a>
            <LiaToolboxSolid className="text-2xl"/>
              My ai tool
            </a>
          </li>
         
          <li>
            <a>
 
            <BiBookmarkHeart className="text-2xl"/>
              My Favorites
            </a>
          </li>
          <li>
            <a>
            <SiRetool className="text-xl"/>
              manage tool
            </a>
          </li>
          <li>
            <a>
            <MdManageAccounts className="text-2xl"/>
              manage user
            </a>
          </li>
        </ul>
      </div>

      <div className={toggle ? "hidden" : "visible basis-1/8 border "}>
      <ul className="menu  p-2">
          <li>
            <a>
             <CgProfile className="text-2xl"/>
              
            </a>
          </li>
          <li>
            <a>
        
            <LiaToolsSolid className="text-2xl"/>
           
            </a>
          </li>
       
          <li>
            <a>
            <LiaToolboxSolid className="text-2xl"/>
            
            </a>
          </li>
         
          <li>
            <a>
 
            <BiBookmarkHeart className="text-2xl"/>
              
            </a>
          </li>
          <li>
            <a>
            <SiRetool className="text-xl"/>
             
            </a>
          </li>
          <li>
            <a>
            <MdManageAccounts className="text-2xl"/>
             
            </a>
          </li>
        </ul>
      </div>

      <div className="basis-full shadow-inner border ">
        <div className="flex items-center">
          <label
            tabindex="0"
            className="btn btn-ghost btn-circle"
            onClick={() => setToggle(!toggle)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          Dashboard
        </div>
        <div className="p-5 h-[100vh]">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
