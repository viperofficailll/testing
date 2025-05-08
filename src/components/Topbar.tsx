import tweetimage from "./images/tweet.jpg";
import { IoMoonOutline } from "react-icons/io5";
import { RiNotification3Line } from "react-icons/ri";
import { LuSettings, LuRectangleHorizontal, LuCircleDashed } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { PiLineVertical } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { IoIosArrowDropdown } from "react-icons/io";

const Topbar = () => {
  return (
    <div className="w-full h-[72px] flex justify-between px-[30px] bg-[#FFFFFF] items-center">
      {/* Left side */}
      <div className="flex gap-[16px] items-center">
        <div className="w-[24px] h-[24px] flex items-center justify-center">
          <TbGridDots />
        </div>
        <div className="flex items-center gap-[8px]">
          <div className="font-inter font-semibold text-[20px] leading-[140%]">
            Test Project
          </div>
          <div className="flex items-center gap-1">
            <IoIosArrowDropdown />
          </div>
        </div>
        <div className="flex items-center border-b w-[343px] h-9 gap-2 px-2">
          <input
            type="text"
            className="flex-1 outline-none text-sm"
            placeholder="Search..."
          />
          <LuRectangleHorizontal />
        </div>
      </div>

      {/* Right side */}
      <div className="flex gap-6 items-center">
        <LuCircleDashed className="w-6 h-6" />
        <RiNotification3Line className="w-6 h-6" />
        <CiMail className="w-5 h-5 border border-[#667085] rounded-sm" />
        <LuSettings className="w-6 h-6 border border-[#667085] rounded-sm" />
        <PiLineVertical className="h-[28px] border-l border-[#344054]" />
        <IoMoonOutline className="w-5 h-5 border border-[#667085] rounded-full" />
        <img
          src={tweetimage}
          alt="profile"
          className="w-[40.5px] h-[40.5px] rounded-full"
        />
        <MdKeyboardArrowDown className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Topbar;
