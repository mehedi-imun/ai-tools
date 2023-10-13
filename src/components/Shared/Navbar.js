"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { ThemeChanger } from "../Providers/ThemeChanger";
const Navbar = () => {
  const { theme } = useTheme();
  const { status, data } = useSession();
  return (
    <div className="border-b h-18 bg-base-100 sticky top-0 left-0 right-0 z-50 nav_bar">
      <div className="navbar p-0 max-w-[1180px] mx-auto ">
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
              <li className="dropdown dropdown-hover">
                <label tabIndex={-1}>Submit</label>
                <ul
                  tabIndex={-1}
                  className="dropdown-content z-[2] menu p-2 shadow bg-base-100 rounded-box w-56 text-lg font-light"
                >
                  <li>
                  <Link href="/dashboard/submit-tool">Submit Tool</Link>
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
                  <Link href='/news'>Latest AI News</Link>
                  </li>
                  <li>
                    <a target="_blank" href="https://discord.com/invite/CCmUHTPj">Join Discord</a>
                  </li>
                  <li>
                  <a target="_blank" href="https://jackmateo.com">Blog</a>
                </li>
                  <li>
                  <a target="_blank" href="https://us13.list-manage.com/contact-form?u=c8c4870109147447f0d23f027&form_id=69373552a23655e62bc5169ea2051501">Contact</a>
                </li>
              
                </ul>
              </li>
              <li>
                <a>Subscribe</a>
              </li>
            </ul>
          </div>
          {theme === "dark" ? (
            <Link href="/" className="w-full">
              <Image
                src="/logo-dark.png"
                loading="lazy"
                width={110}
                height={110}
                alt="jack logo"
                sizes="(max-width: 768px) 100vw"
              />
            </Link>
          ) : (
            <Link href="/" className="w-full">
              <Image
                src="/logo-dafult.png"
                loading="lazy"
                width={110}
                height={110}
                alt="jack logo"
                sizes="(max-width: 768px) 100vw"
              />
            </Link>
          )}
        </div>

        {/* large device */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-md uppercase font-semibold">
            <li>
              <Link href="/favorites">Favorites</Link>
            </li>
            <li className="dropdown dropdown-hover">
              <label tabIndex={0}>Submit</label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-md w-40"
              >
                <li>
                  <Link href="/dashboard/submit-tool">Submit Tool</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown dropdown-hover">
              <label tabIndex={0}>Resources</label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52 text-md "
              >
                <li>
                  <Link href='/news'>Latest AI News</Link>
                </li>
                <li>
                  <a target="_blank" href="https://discord.com/invite/CCmUHTPj">Join Discord</a>
                </li>
                <li>
                  <a target="_blank" href="https://jackmateo.com">Blog</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/subscribe">Subscribe</Link>
            </li>
            <li>
              <a target="_blank" href="https://us13.list-manage.com/contact-form?u=c8c4870109147447f0d23f027&form_id=69373552a23655e62bc5169ea2051501">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeChanger />

          {status === "loading" ? (
            <span className="loading loading-ring loading-lg"></span>
          ) : (
            <>
              {status === "unauthenticated" ? (
                <div
                  className="flex justify-center items-center cursor-pointer"
                  onClick={() =>
                    signIn("google", {
                      callbackUrl: "/",
                    })
                  }
                >
                  <div className="w-8 ">
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                      alt=""
                    />
                  </div>
                  Login
                </div>
              ) : (
                <>
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img src={data?.user?.image} />
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <Link href="/dashboard" className="justify-between ">
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <button className="" onClick={signOut}>
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
