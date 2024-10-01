// import React from 'react'

import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import DropdownMenu from "./Industries/DropdownMenu";
import {
  industries,
  service1,
  service2,
  service3,
  serviceMiddle,
  whoWeAre,
} from "./data";
import WorkCard from "./work/WorkCard";
import DropdownFooter from "./NavFooter";
import { FaBullseye } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { FiChevronDown, FiTrendingUp, FiUserCheck } from "react-icons/fi";
import ServiceMid from "./service/ServiceMid";
import ServiceRight from "./service/ServiceRight";
import NavFooter from "./NavFooter";
import Logo from "../../assets/svg/logo.svg";
import DropdownMenuList from "./Industries/DropdownMenuList";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNav, setShowNav] = useState(0);
  const [showServiceLeft, setShowServiceLeft] = useState(0);
  const [showServiceMid, setShowServiceMid] = useState(0);

  return (
    <header className="fixed border top-0 right-0 left-0 bg-white z-10 ">
      <nav className=" px-[15px] lg:px-[40px] 2xl:px-[186px] flex items-center justify-between lg:gap-10 h-[65px] text-lg">
        <div>
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        {/* nav and dropdown menu for desktop*/}
        <div className="hidden lg:flex items-center justify-between h-full w-full">
          <ul className="flex h-full text-gray-500">
            <li className="group  hover:border-b-4 hover:border-customRed px-6 pt-5">
              <a
                href="#"
                className="flex items-center gap-2 group-hover:text-customRed"
              >
                Services
                <span>
                  <FiChevronDown />
                </span>
              </a>
              <div className="absolute hidden group-hover:block w-full left-0 mt-[17px] border-t bg-[#FBF9F9]   ">
                <div className="flex lg:px-[59px] 2xl:px-[186px]">
                  <div className=" min-w-[245px] py-8 ">
                    <h1 className="text-sm text-[rgba(0, 0, 0, 0.5);]">
                      SERVICES
                    </h1>
                    <ul className="mt-3 mr-7 text-[15px] leading-[1.43]">
                      <li
                        onMouseEnter={() => {
                          setShowServiceLeft(0);
                          setShowServiceMid(0);
                        }}
                        className={`pl-[20px] pt-4 pb-[14px] mb-[14px] rounded-[10px] transition-all duration-500  ${
                          showServiceLeft === 0
                            ? "bg-white shadow-lg text-customRed"
                            : ""
                        }`}
                      >
                        <span className="flex items-center gap-2 ">
                          <FaBullseye size={20} /> Build & Secure
                        </span>
                      </li>
                      <li
                        onMouseEnter={() => {
                          setShowServiceLeft(1);
                          setShowServiceMid(0);
                        }}
                        className={`pl-[20px] pt-4 pb-[14px] mb-[14px] rounded-[10px] transition-all duration-500  ${
                          showServiceLeft === 1
                            ? "bg-white shadow-lg text-customRed"
                            : ""
                        }`}
                      >
                        <span className="flex items-center gap-2 ">
                          <FiUserCheck size={20} /> Top 1% Talent
                        </span>
                      </li>
                      <li
                        onMouseEnter={() => {
                          setShowServiceLeft(2);
                          setShowServiceMid(0);
                        }}
                        className={`pl-[20px] pt-4 pb-[14px] mb-[14px] rounded-[10px] transition-all duration-500  ${
                          showServiceLeft === 2
                            ? "bg-white shadow-lg text-customRed"
                            : ""
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <FiTrendingUp size={20} /> Industry Compliances
                        </span>
                      </li>
                    </ul>
                  </div>

                  {serviceMiddle &&
                    serviceMiddle.map(
                      (items, index) =>
                        showServiceLeft === index && (
                          <ServiceMid
                            key={index}
                            id={index}
                            items={items}
                            showServiceMid={showServiceMid}
                            setShowServiceMid={setShowServiceMid}
                          />
                        )
                    )}

                  {service1 &&
                    showServiceLeft === 0 &&
                    service1.map(
                      (item, index) =>
                        showServiceMid === index && (
                          <ServiceRight key={index} items={item} />
                        )
                    )}
                  {service2 &&
                    showServiceLeft === 1 &&
                    service2.map(
                      (item, index) =>
                        showServiceMid === index && (
                          <ServiceRight key={index} items={item} />
                        )
                    )}
                  {service3 &&
                    showServiceLeft === 2 &&
                    service3.map(
                      (item, index) =>
                        showServiceMid === index && (
                          <ServiceRight key={index} items={item} />
                        )
                    )}
                </div>
                <NavFooter />
              </div>
            </li>
            <li className="group  hover:border-b-4 hover:border-customRed px-6 pt-5">
              <a
                href="#"
                className="flex items-center gap-2 group-hover:text-customRed"
              >
                Industries
                <span>
                  <FiChevronDown />
                </span>
              </a>
              <DropdownMenu data={industries} name="INDUSTRIES" />
            </li>
            <li className="group  hover:border-b-4 hover:border-customRed px-6 pt-5">
              <a
                href="#"
                className="flex items-center gap-2 group-hover:text-customRed"
              >
                Work
                <span>
                  <FiChevronDown />
                </span>
              </a>
              <div className="absolute hidden group-hover:block w-full left-0 mt-[17px] border-t bg-white ">
                <div className="lg:px-[59px] 2xl:px-[186px] py-6 flex gap-8">
                  <WorkCard
                    image="https://www.sparxitsolutions.com/sites/images/header-casestudy.jpg"
                    label="Case Study"
                    description="Real-world success stories demonstrating our impact."
                  />
                  <WorkCard
                    image="https://www.sparxitsolutions.com/sites/images/header-portfolio.jpg"
                    label="Portfolio"
                    description="Explore our diverse projects and proven expertise."
                  />
                </div>
                <DropdownFooter />
              </div>
            </li>
            <li className="group  hover:border-b-4 hover:border-customRed px-6 pt-5  hover:text-customRed">
              <a href="#" className="flex items-center gap-2">
                Insights
              </a>
            </li>
            <li className="group  hover:border-b-4 hover:border-customRed px-6 pt-5">
              <a
                href="#"
                className="flex items-center gap-2 group-hover:text-customRed"
              >
                Who We Are
                <span>
                  <FiChevronDown />
                </span>
              </a>
              <DropdownMenu data={whoWeAre} name="WHO WE ARE" />
            </li>
          </ul>
          <div>
            <button className="text-white bg-customRed px-[18px] py-[4px] border-[1px] border-customRed transition-all duration-[400ms] hover:text-customRed hover:bg-white  hover:border-black ">
              Contact
            </button>
          </div>
        </div>
        {/* dropdown menu for less than 1200px  */}
        <div className="lg:hidden">
          {showMenu ? (
            <MdOutlineClose
              onClick={() => {
                setShowMenu(!showMenu);
                setShowNav(0);
              }}
              size={40}
              className=" cursor-pointer transition-all duration-200"
            />
          ) : (
            <IoMdMenu
              onClick={() => setShowMenu(!showMenu)}
              size={40}
              className=" cursor-pointer transition-all duration-200"
            />
          )}
        </div>
      </nav>
      {showMenu && (
        <div className="lg:hidden absolute bg-white w-full h-screen overflow-scroll left-0 right-0 pb-[35px]">
          <ul>
            <li className=" font-semibold text-[#667085] border-b">
              <a
                href="#"
                onClick={() => {
                  setShowNav(1);
                }}
                className={`flex justify-between items-center text-[18px] cursor-pointer p-5 ${
                  showNav === 1 ? "bg-customRed text-white" : ""
                }`}
              >
                Services
                <span>
                  <FiChevronDown
                    size={25}
                    className={`${
                      showNav === 1
                        ? "rotate-180 transition-all duration-500"
                        : ""
                    }`}
                  />
                </span>
              </a>
              {showNav === 1 && (
                <ul>
                  <li className="border-b border-[#E6C5C8]">
                    <a
                      href="#"
                      className="bg-[#fad6d9] flex justify-between items-center text-[15px] font-normal cursor-pointer p-4"
                    >
                      Build & Secure{" "}
                      <span>
                        <FiChevronDown size={25} />
                      </span>
                    </a>
                  </li>
                  <li className="border-b border-[#E6C5C8]">
                    <a
                      href="#"
                      className="bg-[#fad6d9] flex justify-between items-center text-[15px] font-normal cursor-pointer p-4"
                    >
                      Top 1% Talent
                      <span>
                        <FiChevronDown size={25} />
                      </span>
                    </a>
                  </li>
                  <li className="border-b border-[#E6C5C8]">
                    <a
                      href="#"
                      className="bg-[#fad6d9] flex justify-between items-center text-[15px] font-normal cursor-pointer p-4"
                    >
                      Industry Compliance
                      <span>
                        <FiChevronDown size={25} />
                      </span>
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="font-semibold text-[#667085] border-b">
              <a
                href="#"
                onClick={() => {
                  setShowNav(2);
                }}
                className={`flex justify-between items-center text-[18px] cursor-pointer p-5 ${
                  showNav === 2 ? "bg-customRed text-white" : ""
                }`}
              >
                Industries
                <span>
                  <FiChevronDown
                    size={25}
                    className={`${
                      showNav === 2
                        ? "rotate-180 transition-all duration-500"
                        : ""
                    }`}
                  />
                </span>
              </a>
              {showNav === 2 && (
                <ul className="grid grid-cols-2 gap-3 px-[5px]">
                  {industries &&
                    industries.map((item, index) => (
                      <DropdownMenuList key={index} item={item} />
                    ))}
                </ul>
              )}
            </li>
            <li className="font-semibold text-[#667085] border-b">
              <a
                href="#"
                onClick={() => {
                  setShowNav(3);
                }}
                className={`flex justify-between items-center text-[18px] cursor-pointer p-5 ${
                  showNav === 3 ? "bg-customRed text-white" : ""
                }`}
              >
                Work
                <span>
                  <FiChevronDown
                    size={25}
                    className={`${
                      showNav === 3
                        ? "rotate-180 transition-all duration-500"
                        : ""
                    }`}
                  />
                </span>
              </a>
              {showNav === 3 && (
                <div className="flex gap-4">
                  <WorkCard
                    image="https://www.sparxitsolutions.com/sites/images/header-casestudy.jpg"
                    label="Case Study"
                    description="Real-world success stories demonstrating our impact."
                  />
                  <WorkCard
                    image="https://www.sparxitsolutions.com/sites/images/header-portfolio.jpg"
                    label="Portfolio"
                    description="Explore our diverse projects and proven expertise."
                  />
                </div>
              )}
            </li>
            <li className="p-5 font-semibold text-[#667085] border-b">
              <a href="#" className="text-[18px]">
                Insights
              </a>
            </li>
            <li className=" font-semibold text-[#667085] border-b">
              <a
                href="#"
                onClick={() => {
                  setShowNav(5);
                }}
                className={`flex justify-between items-center text-[18px] cursor-pointer p-5 ${
                  showNav === 5 ? "bg-customRed text-white" : ""
                }`}
              >
                Who We Are
                <span>
                  <FiChevronDown
                    size={25}
                    className={`${
                      showNav === 5
                        ? "rotate-180 transition-all duration-500"
                        : ""
                    }`}
                  />
                </span>
              </a>
              {showNav === 5 && (
                <ul className="grid grid-cols-2 gap-3 px-[5px]">
                  {whoWeAre &&
                    whoWeAre.map((item, index) => (
                      <DropdownMenuList key={index} item={item} />
                    ))}
                </ul>
              )}
            </li>
          </ul>
          <div>
            <button className="text-white bg-customRed py-[20px]  border-[1px] border-customRed transition-all duration-[400ms] hover:text-customRed hover:bg-white  hover:border-black block mx-auto w-[90%] mt-4 mb-[50px] font-medium text-[18px]">
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
