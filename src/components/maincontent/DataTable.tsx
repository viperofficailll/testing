import React, { useState } from "react";
import type { KeyboardEvent } from "react";

import tweetimage from "../images/tweet.jpg"; // Default image for testing

const Datatable: React.FC = () => {
  const [columns, setColumns] = useState<string[]>([
    "Added from",
    "Internal Id",
    "Phone",
    "Client Portal",
    "Assignee",
    "Followers",
    "Status",
    "Applications",
    "Last Updated",
  ]);

  const [data, setData] = useState<string[][]>([
    [
      tweetimage,
      "Nisha Giri Puri",
      "System",
      "ID296",
      "+9779867****",
      "Deactivated",
      "Justin",
      "Allison",
      "Completed",
      "8",
      "24-09-2023",
    ],
  ]);

  const [editingCell, setEditingCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [editValue, setEditValue] = useState("");
  const [editingHeader, setEditingHeader] = useState<number | null>(null);
  const [headerEditValue, setHeaderEditValue] = useState("");
  const [hiddenColumns, setHiddenColumns] = useState<number[]>([]);
  const [menuOpen, setMenuOpen] = useState<number | null>(null);

  const handleHideColumn = (index: number) => {
    setHiddenColumns((prev) => [...prev, index]);
    setMenuOpen(null);
  };

  const toggleMenu = (index: number) => {
    setMenuOpen((prev) => (prev === index ? null : index));
  };

  const handleRestoreColumn = (index: number) => {
    setHiddenColumns((prev) => prev.filter((i) => i !== index));
  };

  const handleAddRow = () => {
    const newRow = [tweetimage, "", "", "", "", "", "", "", "", "", ""];
    setData((prev) => [...prev, newRow]);
  };

  const startEditingCell = (row: number, col: number, value: string) => {
    setEditingCell({ row, col });
    setEditValue(value);
  };

  const saveCellEdit = () => {
    if (editingCell) {
      const updated = [...data];
      updated[editingCell.row][editingCell.col] = editValue;
      setData(updated);
      setEditingCell(null);
    }
  };

  const moveToNextCell = (
    row: number,
    col: number,
    shiftKey: boolean = false
  ) => {
    const visibleColumns = columns.filter(
      (_, idx) => !hiddenColumns.includes(idx)
    );
    const totalCols = visibleColumns.length + 1; // +1 for 'Name' column
    let nextCol = col + (shiftKey ? -1 : 1);
    let nextRow = row;

    if (nextCol >= totalCols + 1) {
      // +1 to adjust col index offset
      nextCol = 1;
      nextRow++;
    }
    if (nextCol < 1) {
      nextCol = totalCols;
      nextRow--;
    }

    if (nextRow >= data.length) nextRow = 0;
    if (nextRow < 0) nextRow = data.length - 1;

    const flatCols = [1, ...visibleColumns.map((_, i) => i + 2)]; // column indices to match data
    const targetCol = flatCols[nextCol - 1]; // map visible col index to data index

    startEditingCell(nextRow, targetCol, data[nextRow][targetCol]);
  };

  const handleCellKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!editingCell) return;

    if (e.key === "Enter") {
      saveCellEdit();
    } else if (e.key === "Tab") {
      e.preventDefault();
      saveCellEdit();
      moveToNextCell(editingCell.row, editingCell.col, e.shiftKey);
    }
  };

  const startEditingHeader = (index: number, value: string) => {
    setEditingHeader(index);
    setHeaderEditValue(value);
  };

  const saveHeaderEdit = () => {
    if (editingHeader !== null) {
      const updated = [...columns];
      updated[editingHeader] = headerEditValue;
      setColumns(updated);
      setEditingHeader(null);
    }
  };

  return (
    <>
      <div
        id="frame455"
        className="position relative left-[24px]  w-[1168px] min-h-[124px] h-auto items-center py-[12px] bg-yellow-300 flex"
      >
        <div
          id="frame450"
          className="bg-[#7474C9] absolute top-[46px] min-w-[113px] w-auto min-h-[32px] h-auto justify-start gap-[6px] px-[12px] py-[6px] rounded-[4px] flex"
        >
          <button
            onClick={handleAddRow}
            className="absolute left-[12px] top-[7.5px] min-w-[63px] min-h-[17px] h-auto text-[12px]"
          >
            {" "}
            New Client
          </button>
          <div
            id="cheverondown"
            className="absolute left-[81px] top-[6px]  bg-white w-[20px] h-[20px]"
          ></div>
        </div>
        <div
          id="34079"
          className="bg-pink-400  absolute left-[451px] top-[12px] w-[100px] h-[100px]"
        ></div>
        <div
          id="frame454"
          className="absolute left-[889px] top-[49.5px] items-center gap-[6px] w-[279px] h-[25px] bg-blue-500 flex justify-between
    "
        >
          <div
            id="451"
            className="absolute  left-[0px] top-[0px] w-[103px] h-[25px] text-[12px] gap-[10px] py-[4px] px-[12px]"
          >
            prospects(18)
          </div>
          <div
            id="452"
            className="absolute left-[103px]  top-[0px] w-[85px] h-[25px] gap-[10px] px[12px] py-[4px] items-center  text-[12px]"
          >
            {" "}
            clients(10)
          </div>
          <div
            id="453"
            className="absolute left-[188px]  top-[0px] w-[85px] h-[25px] gap-[10px] px[12px] py-[4px] items-center  text-[12px]"
          > Archived(0)</div>
        </div>
      </div>

      <div className="p-4">
        {/* Header Actions */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleAddRow}
            className="bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-blue-800 transition"
          >
            New Client
          </button>


          {hiddenColumns.length > 0 ? (
            <select
              onChange={(e) => {
                const value = e.target.value;
                if (value !== "") {
                  handleRestoreColumn(parseInt(value));
                }
              }}
              className="text-green-600 border border-green-600 px-3 py-1 rounded text-sm bg-white"
            >
              <option value="">+ Add Column</option>
              {hiddenColumns.map((index) => (
                <option key={index} value={index}>
                  {columns[index]}
                </option>
              ))}
            </select>
          ) : (
            <button
              disabled
              className="text-gray-400 border border-gray-300 px-3 py-1 rounded text-sm cursor-not-allowed"
            >
              No Hidden Columns
            </button>
          )}
        </div>

        {/* Table */}
        <div className="overflow-auto border rounded-lg max-h-96">
          <table className="min-w-[1000px] table-fixed border-collapse w-max">
            <thead className="bg-gray-50 text-left text-sm">
              <tr>
                <th className="p-3 border-b min-w-[200px] whitespace-nowrap">
                  Name
                </th>
                {columns.map(
                  (col, index) =>
                    !hiddenColumns.includes(index) && (
                      <th
                        key={index}
                        className="relative p-3 border-b min-w-[150px] whitespace-nowrap"
                      >
                        {editingHeader === index ? (
                          <input
                            value={headerEditValue}
                            onChange={(e) => setHeaderEditValue(e.target.value)}
                            onBlur={saveHeaderEdit}
                            onKeyDown={(e) =>
                              e.key === "Enter" && saveHeaderEdit()
                            }
                            autoFocus
                            className="w-full px-2 py-1 text-sm border rounded"
                          />
                        ) : (
                          <div className="flex justify-between items-center">
                            <span
                              onDoubleClick={() =>
                                startEditingHeader(index, col)
                              }
                              className="truncate"
                              title={col}
                            >
                              {col}
                            </span>
                            <button
                              onClick={() => toggleMenu(index)}
                              className="text-lg px-1 leading-none"
                            >
                              ⋮
                            </button>
                            {menuOpen === index && (
                              <div className="absolute top-8 right-0 bg-white border shadow text-sm z-10 whitespace-nowrap rounded">
                                <div
                                  onClick={() => handleHideColumn(index)}
                                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                  Hide Column
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </th>
                    )
                )}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="bg-white">
                  <td className="p-3 border-b text-sm min-w-[200px] whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <img
                        src={row[0]}
                        alt="avatar"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      {editingCell?.row === rowIndex &&
                      editingCell?.col === 1 ? (
                        <input
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          onBlur={saveCellEdit}
                          onKeyDown={handleCellKeyDown}
                          autoFocus
                          className="px-2 py-1 text-sm border rounded"
                        />
                      ) : (
                        <span
                          className="truncate"
                          onDoubleClick={() =>
                            startEditingCell(rowIndex, 1, row[1])
                          }
                        >
                          {row[1] || "Click to edit"}
                        </span>
                      )}
                    </div>
                  </td>
                  {columns.map((_, colIndex) => {
                    const dataIndex = colIndex + 2;
                    if (hiddenColumns.includes(colIndex)) return null;
                    return (
                      <td
                        key={colIndex}
                        className="p-3 border-b text-sm min-w-[150px] whitespace-nowrap cursor-pointer"
                        onDoubleClick={() =>
                          startEditingCell(rowIndex, dataIndex, row[dataIndex])
                        }
                      >
                        {editingCell?.row === rowIndex &&
                        editingCell?.col === dataIndex ? (
                          <input
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            onBlur={saveCellEdit}
                            onKeyDown={handleCellKeyDown}
                            autoFocus
                            className="w-full px-2 py-1 text-sm border rounded"
                          />
                        ) : (
                          <span className="truncate block">
                            {row[dataIndex]}
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Datatable;
