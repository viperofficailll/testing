import { RiSearchLine } from "react-icons/ri";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineCalendarToday } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { LiaSortSolid } from "react-icons/lia";

const SearchBar = () => {
  return (
    <div
      id="frame428"
      className="bg-[#FFFFFF] px-6 py-4 flex justify-between items-center w-full"
    >
      {/* Left section */}
      <div className="flex gap-5 items-center">
        {/* Search box */}
        <div className="flex items-center bg-[#D0D5DD] px-2 py-1 rounded cursor-pointer w-[220px]">
          <RiSearchLine className="w-5 h-5 text-[#667085]" />
          <input
            type="text"
            placeholder="Search Particular"
            className="ml-2 text-sm bg-transparent border-none outline-none w-full"
          />
        </div>

        {/* Filter button */}
        <button className="flex items-center justify-between bg-[#D0D5DD] px-2 py-1 rounded w-[169px] cursor-pointer">
          <div className="flex items-center gap-1 text-[#667085] text-sm">
            <CiFilter className="w-4 h-4" />
            <span>Filter by assigned</span>
          </div>
          <IoIosArrowDown className="w-5 h-5 text-[#667085]" />
        </button>

        {/* Date button */}
        <button className="flex items-center justify-between bg-[#D0D5DD] px-2 py-1 rounded w-[97px] cursor-pointer">
          <div className="flex items-center gap-1 text-[#667085] text-sm">
            <MdOutlineCalendarToday className="w-4 h-4" />
            <span>Date</span>
          </div>
          <IoIosArrowDown className="w-5 h-5 text-[#667085]" />
        </button>

        {/* Status button */}
        <button className="flex items-center justify-between bg-[#D0D5DD] px-2 py-1 rounded w-[107px] cursor-pointer">
          <div className="flex items-center gap-1 text-[#667085] text-sm">
            <IoMdCheckmark className="w-4 h-4" />
            <span>Status</span>
          </div>
          <IoIosArrowDown className="w-5 h-5 text-[#667085]" />
        </button>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-9">
        <div className="flex items-center gap-5 text-[#667085] text-sm">
          <div className="flex items-center gap-1 cursor-pointer">
            <CiFilter className="w-4 h-4" />
            <span>Filter</span>
          </div>
          <div className="w-px h-5 bg-[#667085]" />
          <div className="flex items-center gap-1 cursor-pointer">
            <LiaSortSolid className="w-5 h-5" />
            <span>Sort</span>
          </div>
          <div className="w-px h-5 bg-[#667085]" />
          <div className="flex items-center gap-1 cursor-pointer">
            <CiFilter className="w-4 h-4" />
            <span>Saved Filter</span>
          </div>
        </div>
        <button className="text-[#4786E7] text-sm cursor-pointer">Clear</button>
      </div>
    </div>
  );
};

export default SearchBar;
