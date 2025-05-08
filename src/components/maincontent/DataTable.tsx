import React, { useState } from 'react';
import type {  KeyboardEvent } from 'react';

import tweetimage from '../images/tweet.jpg'; // Default image for testing

const Datatable: React.FC = () => {
  const [columns, setColumns] = useState<string[]>([
    'Added from', 'Internal Id', 'Phone', 'Client Portal', 'Assignee', 'Followers', 'Status', 'Applications', 'Last Updated'
  ]);

  const [data, setData] = useState<string[][]>([
    [tweetimage, 'Nisha Giri Puri', 'System', 'ID296', '+9779867****', 'Deactivated', 'Justin', 'Allison', 'Completed', '8', '24-09-2023']
  ]);

  const [editingCell, setEditingCell] = useState<{ row: number; col: number } | null>(null);
  const [editValue, setEditValue] = useState('');
  const [editingHeader, setEditingHeader] = useState<number | null>(null);
  const [headerEditValue, setHeaderEditValue] = useState('');
  const [hiddenColumns, setHiddenColumns] = useState<number[]>([]);
  const [menuOpen, setMenuOpen] = useState<number | null>(null);

  const handleHideColumn = (index: number) => {
    setHiddenColumns(prev => [...prev, index]);
    setMenuOpen(null);
  };

  const toggleMenu = (index: number) => {
    setMenuOpen(prev => (prev === index ? null : index));
  };

  const handleRestoreColumn = (index: number) => {
    setHiddenColumns(prev => prev.filter(i => i !== index));
  };

  const handleAddRow = () => {
    const newRow = [tweetimage, '', '', '', '', '', '', '', '', '', ''];
    setData(prev => [...prev, newRow]);
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

  const moveToNextCell = (row: number, col: number, shiftKey: boolean = false) => {
    const visibleColumns = columns.filter((_, idx) => !hiddenColumns.includes(idx));
    const totalCols = visibleColumns.length + 1; // +1 for 'Name' column
    let nextCol = col + (shiftKey ? -1 : 1);
    let nextRow = row;

    if (nextCol >= totalCols + 1) { // +1 to adjust col index offset
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

    if (e.key === 'Enter') {
      saveCellEdit();
    } else if (e.key === 'Tab') {
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
    <div className="p-4">
      {/* Header Actions */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handleAddRow}
          className="bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-blue-800 transition"
        >
          New Client
        </button>
        <div className="flex gap-4 text-gray-700 text-sm">
          <div>Prospects</div>
          <div>Clients</div>
          <div>Archived</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        <input type="text" placeholder="Search Particular" className="px-3 py-2 rounded border border-gray-300 text-sm w-48" />
        <select className="px-3 py-2 rounded border border-gray-300 text-sm bg-white"><option>Filter by Assigned</option></select>
        <select className="px-3 py-2 rounded border border-gray-300 text-sm bg-white"><option>Date</option></select>
        <select className="px-3 py-2 rounded border border-gray-300 text-sm bg-white"><option>Status</option></select>
        <select className="px-3 py-2 rounded border border-gray-300 text-sm bg-white"><option>Filter</option></select>
        <select className="px-3 py-2 rounded border border-gray-300 text-sm bg-white"><option>Sort</option></select>
        <button className="text-blue-600 text-sm hover:underline">Clear</button>

        {hiddenColumns.length > 0 ? (
          <select
            onChange={(e) => {
              const value = e.target.value;
              if (value !== '') {
                handleRestoreColumn(parseInt(value));
              }
            }}
            className="text-green-600 border border-green-600 px-3 py-1 rounded text-sm bg-white"
          >
            <option value="">+ Add Column</option>
            {hiddenColumns.map(index => (
              <option key={index} value={index}>{columns[index]}</option>
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
              <th className="p-3 border-b min-w-[200px] whitespace-nowrap">Name</th>
              {columns.map((col, index) =>
                !hiddenColumns.includes(index) && (
                  <th key={index} className="relative p-3 border-b min-w-[150px] whitespace-nowrap">
                    {editingHeader === index ? (
                      <input
                        value={headerEditValue}
                        onChange={e => setHeaderEditValue(e.target.value)}
                        onBlur={saveHeaderEdit}
                        onKeyDown={e => e.key === 'Enter' && saveHeaderEdit()}
                        autoFocus
                        className="w-full px-2 py-1 text-sm border rounded"
                      />
                    ) : (
                      <div className="flex justify-between items-center">
                        <span
                          onDoubleClick={() => startEditingHeader(index, col)}
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
                    <img src={row[0]} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
                    {editingCell?.row === rowIndex && editingCell?.col === 1 ? (
                      <input
                        value={editValue}
                        onChange={e => setEditValue(e.target.value)}
                        onBlur={saveCellEdit}
                        onKeyDown={handleCellKeyDown}
                        autoFocus
                        className="px-2 py-1 text-sm border rounded"
                      />
                    ) : (
                      <span
                        className="truncate"
                        onDoubleClick={() => startEditingCell(rowIndex, 1, row[1])}
                      >
                        {row[1] || 'Click to edit'}
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
                      onDoubleClick={() => startEditingCell(rowIndex, dataIndex, row[dataIndex])}
                    >
                      {editingCell?.row === rowIndex && editingCell?.col === dataIndex ? (
                        <input
                          value={editValue}
                          onChange={e => setEditValue(e.target.value)}
                          onBlur={saveCellEdit}
                          onKeyDown={handleCellKeyDown}
                          autoFocus
                          className="w-full px-2 py-1 text-sm border rounded"
                        />
                      ) : (
                        <span className="truncate block">{row[dataIndex]}</span>
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
  );
};

export default Datatable;
