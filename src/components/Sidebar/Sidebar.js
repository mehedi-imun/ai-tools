"use client";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { LiaToolsSolid, LiaToolboxSolid } from "react-icons/lia";
import { BiBookmarkHeart, BiCategoryAlt } from "react-icons/bi";
import { MdEditNote, MdManageAccounts, MdPublishedWithChanges } from "react-icons/md";
import { SiRetool } from "react-icons/si";
import Link from "next/link";
const Sidebar = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="flex flex-row  max-w-[1180px] mx-auto ">
      <div
        className={toggle ? "lg:flex hidden basis-1/4 border shadow" : "hidden"}
      >
        <ul className="menu p-2 ">
          <li>
            <Link href="/dashboard">
              <CgProfile className="text-2xl" />
              Profile
            </Link>
          </li>
          <li>
            <Link href="/dashboard/submit-tool">
              <LiaToolsSolid className="text-2xl" />
              Submit Tool
            </Link>
          </li>

          <li>
            <Link href="/dashboard/my-ai-tool">
              <LiaToolboxSolid className="text-2xl" />
              My Ai Tool
            </Link>
          </li>

          <li>
            <Link href="/favorites">
              <BiBookmarkHeart className="text-2xl" />
              My Favorites
            </Link>
          </li>
          <li>
            <Link href="/dashboard/manage-tools">
              <SiRetool className="text-xl" />
              Manage Tools
            </Link>
          </li>
          <li>
            <Link href="/dashboard/manage-users">
              <MdManageAccounts className="text-2xl" />
              Manage Users
            </Link>
          </li>
          <li>
            <Link href="/dashboard/publish-news">
              <MdPublishedWithChanges className="text-2xl" />
              publish news
            </Link>
          </li>

          <li>
            <Link href="/dashboard/add-ai-category">
              <BiCategoryAlt className="text-2xl" />
              add tools category
            </Link>
          </li>
          <li>
            <Link href="/dashboard/add-news-category">
              <MdEditNote className="text-2xl" />
              add news category
            </Link>
          </li>
        </ul>
      </div>

      <div className={toggle ? "hidden" : "lg:flex hidden basis-1/8 border "}>
      <ul className="menu p-2 ">
          <li>
            <Link href="/dashboard">
              <CgProfile className="text-2xl" />
             
            </Link>
          </li>
          <li>
            <Link href="/dashboard/submit-tool">
              <LiaToolsSolid className="text-2xl" />
             
            </Link>
          </li>

          <li>
            <Link href="/dashboard/my-ai-tool">
              <LiaToolboxSolid className="text-2xl" />
             
            </Link>
          </li>

          <li>
            <Link href="/favorites">
              <BiBookmarkHeart className="text-2xl" />
            
            </Link>
          </li>
          <li>
            <Link href="/dashboard/manage-tools">
              <SiRetool className="text-xl" />
          
            </Link>
          </li>
          <li>
            <Link href="/dashboard/manage-users">
              <MdManageAccounts className="text-2xl" />
            
            </Link>
          </li>
          <li>
            <Link href="/dashboard/publish-news">
              <MdPublishedWithChanges className="text-2xl" />
             
            </Link>
          </li>

          <li>
            <Link href="/dashboard/add-ai-category">
              <BiCategoryAlt className="text-2xl" />
             
            </Link>
          </li>
          <li>
            <Link href="/dashboard/add-news-category">
              <MdEditNote className="text-2xl" />
             
            </Link>
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
        <div className="p-5 min-h-screen">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
