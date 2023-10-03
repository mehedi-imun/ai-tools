"use client";
import Link from "next/link";
import { useState } from "react";
import { ThemeChanger } from "../Providers/ThemeChanger";
import { signOut, useSession } from "next-auth/react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();
  return (
    <div className="navbar bg-base-100 border-b h-24">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {/* small device */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Favorites</a>
            </li>
            <li>
              <a>Discover</a>
            </li>
            <li className="dropdown dropdown-hover">
              <label tabIndex={-1}>Submit</label>
              <ul
                tabIndex={-1}
                className="dropdown-content z-[2] menu p-2 shadow bg-base-100 rounded-box w-56 text-lg font-light"
              >
                <li>
                  <a>Submit Tool</a>
                </li>
                <li>
                  <a>Sponsorship Options</a>
                </li>
              </ul>
            </li>
            <li className="dropdown dropdown-hover">
              <label tabIndex={-2}>Resources</label>
              <ul
                tabIndex={-2}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-56 text-lg font-light"
              >
                <li>
                  <a>Newsletter Issues</a>
                </li>
                <li>
                  <a>Latest AI News</a>
                </li>
                <li>
                  <a>Join Discord</a>
                </li>
                <li>
                  <a>AI Conferences List</a>
                </li>
                <li>
                  <a>Plugins List</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Subscribe</a>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          YOUR LOGO
        </Link>
      </div>

      {/* large device */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-bold">
          <li>
            <a>Favorites</a>
          </li>
          <li>
            <a>Discover</a>
          </li>
          <li className="dropdown dropdown-hover">
            <label tabIndex={0}>Submit</label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-56 text-lg font-light"
            >
              <li>
                <a>Submit Tool</a>
              </li>
              <li>
                <a>Sponsorship Options</a>
              </li>
            </ul>
          </li>
          <li className="dropdown dropdown-hover">
            <label tabIndex={0}>Resources</label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-56 text-lg font-light"
            >
              <li>
                <a>Newsletter Issues</a>
              </li>
              <li>
                <a>Latest AI News</a>
              </li>
              <li>
                <a>Join Discord</a>
              </li>
              <li>
                <a>AI Conferences List</a>
              </li>
              <li>
                <a>Plugins List</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Subscribe</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeChanger />
        {status === "unauthenticated" ? (
        <Link className="btn btn-xs" href="/login" >
          Login
        </Link>
      ) : (
        <>
         
          <span className="btn btn-outline btn-primary" onClick={signOut}>
            Logout
          </span>
        </>
      )}
       
      </div>
    </div>
  );
};

export default Navbar;
