import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
  return (
    <>
      <div
        id="frame428"
        className="bg-purple-700 w-[1192px] h-[72px] items-center gap-[auto] px-[24px] flex relative"
      >
        <div
          id="frame426 "
          className="bg-red-500 absolute left-[24] top-[20] min-w-[653px] w-auto min-h-[32px] h-auto gap-[20px] justify-start "
        >
          <div
            id="frame419"
            className="w-[220px] h-[32px] justify-start gap-[6px] px-[8px] py-[6px] flex"
          >
            <div
              id="search-lg"
              className="absolute left-[8px] top-[6px] w-[20px] h-[20px]"
            >
              <RiSearchLine className="h-full w-full"></RiSearchLine>
            </div>
            <input
              type="text"
              placeholder="Search Particular"
              className="relative left-[34px] top-[7.5px] w-[98px] h-[17px] text-[12px] items-center outline-none"
            />
          </div>
        </div>
        <div
          id="frame425"
          className="bg-yellow-700 left-[821px] top-[26px] min-w-[347px] w-auto min-h-[20px] h-auto  flex absolute"
        >
          <div
            id="frame424"
            className="min-w-[275px] w-auto bg-pink-500 min-h-[20px] h-auto justify-start flex"
          >
            <div
              id="frame422"
              className="bg-white top-[1px] min-w-[53px] w-auto min-h-[18px] justify-start gap-[6px]"
            ></div>
            <div
              id="vector10"
              className=" w-0.5 h-[20px] bg-black absolute left-[73px] top-0   items-center"
            ></div>
            <div
              id="frame420"
              className="bg-blue-500  absolute  left-[93px] min-w-[51px] w-auto min-h-[20px] h-auto justify-start gap-[6px] "
            ></div>
            <div
              id="vector11"
              className=" w-0.5 h-[20px] bg-black absolute left-[164px] top-0   items-center"
            ></div>
            <div
              id="frame423"
              className="bg-red-600 position absolute left-[184px] top-[1px] min-w-[91px] w-auto min-h-[18px] justify-start gap-[6px]"
            ></div>
          </div>
          <div
            id="text"
            className="bg-green-400 min-w-[36px] w-auto min-h-[20px] h-auto absolute left-[311px] "
          >
            {" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
