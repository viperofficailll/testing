import { FaUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";

const BranchBar = () => {

  return (
    
    <div className="w-[1192px] h-[60px] flex justify-between rounded-[2px] px-[24px] bg-[#FFFFFF] shadow-[0px_5px_15px_0px_#0000000A]">
      {/* Left section */}
      <div className="flex w-[90px] h-[24px] gap-[12px] items-center">
        <div className="w-[24px] h-[24px] flex items-center justify-center">
          <FaUser />
        </div>
        <div className="w-[54px] h-[22px] bg-[#344054] font-medium text-[16px] leading-[140%] font-['Inter'] text-white flex items-center justify-center rounded-[4px]">
          Clients
        </div>
      </div>

      {/* Right section */}
      <div className="flex w-[618px] h-[32px] gap-[24px] items-center">
        {/* Branch selector */}
        <div className="flex w-[158px] h-[32px] gap-[8px] rounded-[4px] px-[8px] py-[6px] border border-[#D0D5DD] items-center justify-between">
          <div className="flex w-[114px] h-[17px] gap-[6px] items-center">
            <div className="w-[114px] h-[17px] bg-[#667085] font-normal text-[12px] leading-[140%] font-['Inter'] text-white flex items-center">
              Branch(Kathmandu)
            </div>
          </div>
          <div className="relative w-[20px] h-[20px] flex items-center justify-center">
            <div className="absolute w-[10px] h-[5px] top-[7.5px] left-[5px] border-[1.5px] border-[#667085] flex items-center justify-center">
              <FaChevronDown />
            </div>
          </div>
        </div>

        {/* Add button */}
        <div className="flex w-[117px] h-[40px] gap-[6px] rounded-[4px] px-[12px] py-[8px] items-center bg-gray-100 cursor-pointer">
          <div className="relative w-[20px] h-[20px] flex items-center justify-center">
            <div className="absolute w-[11.67px] h-[11.67px] top-[4.17px] left-[4.17px] border-[1.25px] border-[#FFFFFF] flex items-center justify-center">
              <FaPlus />
            </div>
          </div>
          <span>Add</span>
        </div>
      </div>
    </div>




  );
};

export default BranchBar;
