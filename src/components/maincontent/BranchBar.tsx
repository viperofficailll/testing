import { FaUser } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";

const BranchBar = () => {
  return (
    <>
      <div
        id="418"
        className="bg-[#FFFFFF] h-[60px] w-[1192px] flex rounded-[2px] justify-between px-[24px]  shadow-[0px_5px_15px_0px_#0000000A] items-center relative"
      >
        <div
          id="frame4182"
          className=" min-w-[90px] w-auto min-h-[24px] h-auto gap-[12px] flex justify-start"
        >
          <div id="icon" className=" w-[24px] h-[24px] ">
            <FaUser className="w-full h-full"></FaUser>
          </div>
          <h2
            className="min-w-[54px] w-auto  min-h-[22px] h-auto  font-medium text-base leading-[1.4] tracking-normal text-[#344054
] "
          >
            Clients{" "}
          </h2>

          <div
            id="34078"
            className=" w-[618px]   h-auto min-h-[32px] justify-end absolute left-[550px] top-[14px] gap-[24px]"
          >
            <div
              id="frame-423"
              className=" absolute left-[412px] top-0 min-w-[158px] w-auto min-h-[32px] h-auto items-center gap-[8px] px-[8px] py-[6px] rounded-[4px]"
            >
              <div
                id="frame422 "
                className="absolute  left-[8px] top-[7.5px] justify-start gap-[6px] text-[12px]"
              >
                Branch(kathmandu)
              </div>
              <div
                id="haere"
                className="absolute left-[130px] top-[6px] w-[20px] h-[20px]"
              >
                <FaChevronDown className="w-full h-full"></FaChevronDown>
              </div>
            </div>
            <div
              id="frame417"
              className=" absolute left-[594px] top-[4px]  min-w-[24px]  w-auto min-h-[24px] h-auto justify-start gap-[28px]"
            >
              <BsThreeDots className="w-full h-full"></BsThreeDots>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BranchBar;
