import React, { useState } from "react";
import { IoLink, IoCartOutline } from "react-icons/io5";
import { CgScreenWide } from "react-icons/cg";
import { MdOutlineFilterAlt, MdMobileFriendly } from "react-icons/md";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const tabs = [
    {
      id: 1,
      tabTitle: "Direct connections",
      title: "Direct connections between farmers and buyers",
      content:
        "The platform allows farmers to list their produce and connect directly with buyers, reducing the need for middlemen and ensuring that food dollars stay within the local economy.",
      backgroundColor: "bg-blue-500",
      className: "tabs",
      icon: () => {
        return <IoLink />;
      },
    },

    {
      id: 2,
      tabTitle: "Wide selection",
      title: "Wide selection of fresh, locally grown produce",
      content:
        "The platform offers a wide selection of fresh, locally grown produce, so that buyers can find what they need in one place.",
      backgroundColor: "bg-red-600",
      className: "tabs",
      icon: () => {
        return <CgScreenWide />;
      },
    },
    {
      id: 3,
      tabTitle: "Simple and efficient",
      title: "Simple and efficient ordering process",
      content:
        "Buyers can place orders directly with farmers, and the platform handles payment processing, ensuring that farmers are paid promptly and securely.",
      backgroundColor: "bg-green-600",
      className: "tabs ",
      icon: () => {
        return <IoCartOutline />;
      },
    },
    {
      id: 4,
      tabTitle: "Search filters",
      title: "Search filters",
      content:
        "Buyers can use search filters such as product type, location, and price range to quickly find the produce they need.",
      backgroundColor: "bg-violet-600",
      className: "tabs ",
      icon: () => {
        return <MdOutlineFilterAlt />;
      },
    },
    {
      id: 5,
      tabTitle: "User-friendly",
      title: "User-friendly interface",
      content:
        " The platform has a user-friendly interface that makes it easy for farmers and buyers to use.",
      backgroundColor: "bg-orange-600",
      className: "tabs ",
      icon: () => {
        return <MdMobileFriendly />;
      },
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="max-w-6xl mx-auto bg-[#ededed] rounded-xl py-10 px-16 pt-1 mt-20 h-48 shadow-lg">
      <div className="md:flex">
        <div className="flex md:flex-col gap-5 justify-center -translate-y-[20%]">
          {tabs.map((tab, i) => (
            <button
              className={`${tab.className} ${tab.backgroundColor} ${
                currentTab == tab.id ? "-translate-y-7" : ""
              }`}
              key={i}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={handleTabClick}
            >
              0{i + 1}&nbsp;&nbsp;
              {tab.tabTitle}
            </button>
          ))}
        </div>
        <div className="content">
          {tabs.map((tab, i) => (
            <div key={i}>
              {currentTab === `${tab.id}` && (
                <div className="flex gap-5">
                  <div
                    className={`mt-3 p-3 ${tab.backgroundColor} rounded-full h-10 w-10`}
                  >
                    {tab.icon()}
                  </div>
                  <div>
                    <p className="font-semibold text-xl my-2">{tab.title}</p>
                    <p className="leading-loose tracking-wide">{tab.content}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
