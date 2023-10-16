"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { ImCross } from "react-icons/im";
import Image from "next/image";
import Link from "next/link";
import { ThemeChanger } from "../Providers/ThemeChanger";
const Navbar = () => {
  const { theme } = useTheme();
  const { status, data } = useSession();
  return (
    <div className="border-b h-18 bg-base-100 sticky top-0 left-0 right-0 z-50 ">
      <div className="navbar p-0 max-w-[1180px] mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              htmlFor="my-drawer-4"
              tabIndex={0}
              className=" btn-ghost drawer-button btn btn-primary lg:hidden"
            >
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

            <div className="drawer drawer-end z-50">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">{/* Page content here */}</div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                  <ul tabIndex={0} className="">
                  <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay btn  btn-xs"
                > <ImCross className=""></ImCross></label>
                    <li>
                      <a>Favorites</a>
                    </li>
                    <li>
                      <a>Submit</a>
                      <ul tabIndex={-1} className="">
                        <li>
                          <Link href="/dashboard/submit-tool">Submit Tool</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Resources</a>
                      <ul className="">
                        <li>
                          <Link href="/news">Latest AI News</Link>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://discord.com/invite/CCmUHTPj"
                          >
                            Join Discord
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="https://jackmateo.com">
                            Blog
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Subscribe</a>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
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
            <li tabIndex={0}>
              <details>
                <summary>Submit</summary>
                <ul className="p-2 shadow bg-base-100 text-md w-40">
                  <li>
                    <Link href="/dashboard/submit-tool">Submit Tool</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Resources</summary>
                <ul className="p-2 shadow bg-base-100 w-52 text-md ">
                  <li>
                    <Link href="/news">Latest AI News</Link>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://discord.com/invite/CCmUHTPj"
                    >
                      Join Discord
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://jackmateo.com">
                      Blog
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/subscribe">Subscribe</Link>
            </li>
            <li>
              <a
                target="_blank"
                href="https://us13.list-manage.com/contact-form?u=c8c4870109147447f0d23f027&form_id=69373552a23655e62bc5169ea2051501"
              >
                Contact
              </a>
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
