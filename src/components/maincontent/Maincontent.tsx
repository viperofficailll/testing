import SearchBar from "../SearchBar"
import BranchBar from "./BranchBar"
import Datatable from "./DataTable"

const Maincontent = () => {
  return (
    <>
      <div
        id="frame508"
        className="w-[1192px] h-[1000px]  left-[248px] gap-[8px] justify-start bg-white absolute "
      >
        <div className=" absolute top-[-120px]">
          
          <BranchBar></BranchBar>
          <SearchBar></SearchBar>
          <Datatable></Datatable>
        </div>
      </div>
    </>
  );
}

export default Maincontent