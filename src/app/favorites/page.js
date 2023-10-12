"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

const FavoritesPage = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const { data: session } = useSession();
  if (!session) return redirect("/api/auth/signin");

  return (
    <div className=" px-2 mt-6">
      <div>
        <h1 className="text-3xl font-semibold">Your AI Favorites.</h1>
        <p className="pt-2">
          These are the tools and posts you have favourited. You can remove them
          from your favorites by clicking the bookmark icon.
        </p>
      </div>

      <div className="mt-24">
        <div className="tabs flex justify-center">
          <a
            id="tab1"
            className={`${
              activeTab === "tab1"
                ? "tab tab-lg tab-bordered tab-active"
                : "tab tab-lg tab-bordered"
            }`}
            onClick={() => handleTabClick("tab1")}
          >
            AI TOOLS
          </a>
          <a
            id="tab2"
            className={` ${
              activeTab === "tab2"
                ? "tab tab-lg tab-bordered tab-active"
                : "tab tab-lg tab-bordered"
            }`}
            onClick={() => handleTabClick("tab2")}
          >
            AI NEWS
          </a>
          <a
            id="tab3"
            className={` ${
              activeTab === "tab3"
                ? "tab tab-lg tab-bordered tab-active"
                : "tab tab-lg tab-bordered"
            }`}
            onClick={() => handleTabClick("tab3")}
          >
            AI PLUGINS
          </a>
        </div>
        <div className="tabs_content">
          <div
            id="tab1_content"
            style={{ display: activeTab === "tab1" ? "block" : "none" }}
          >
            <h3 className="text-center text-2xl mt-6">
              No ai Tools Favorited Yet.
            </h3>
            <div className="flex justify-center items-center">
              <Image
                loading="lazy"
                width={500}
                height={0}
                src="/assets/favorite.png"
              ></Image>
            </div>
          </div>
          <div
            id="tab2_content"
            style={{ display: activeTab === "tab2" ? "block" : "none" }}
          >
            <h3 className="text-center text-2xl mt-6">
              {" "}
              No News Favourited Yet
            </h3>

            <div className="flex justify-center items-center">
              <Image
                loading="lazy"
                width={500}
                height={0}
                src="/assets/favorite.png"
              ></Image>
            </div>
          </div>
          <div
            id="tab3_content"
            style={{ display: activeTab === "tab3" ? "block" : "none" }}
          >
            <h3 className="text-center text-2xl mt-6">
              {" "}
              No Plugins Favourited Yet
            </h3>
            <div className="flex justify-center items-center">
              <Image
                loading="lazy"
                width={500}
                height={0}
                src="/assets/favorite.png"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
