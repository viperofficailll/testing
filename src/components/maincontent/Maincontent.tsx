import SearchBar from "../SearchBar"
import BranchBar from "./BranchBar"
import Datatable from "./DataTable"

const Maincontent = () => {
  return (
    <>
    <div id="frame508" className="w-[1192px] h-[1000px] top-[80px] left-[248px] gap-[8px] absolute">
    <BranchBar></BranchBar>
    <SearchBar></SearchBar>
    <Datatable></Datatable>
    </div>
   
    </>
  )
}

export default Maincontent