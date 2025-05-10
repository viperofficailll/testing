import { FaUser, FaChevronDown } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const BranchBar = ({ className = "" }) => {
  return (
    <div
      id="418"
      className={`bg-white h-[60px] flex items-center justify-between px-6 shadow-[0px_5px_15px_0px_#0000000A] rounded-[2px] ${className}`}
    >
      {/* Left side */}
      <div className="flex items-center gap-3">
        <FaUser className="w-6 h-6" />
        <h2 className="font-medium text-base text-[#344054]">Clients</h2>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">
        <div className="flex items-center bg-gray-200 px-2 py-1 rounded gap-2 text-sm cursor-pointer">
          <span>Branch (Kathmandu)</span>
          <FaChevronDown />
        </div>

        <BsThreeDots className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default BranchBar;
