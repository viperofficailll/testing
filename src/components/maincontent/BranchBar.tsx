import React, { useState } from 'react';

const BranchBar = () => {
  const [selectedBranch, setSelectedBranch] = useState('Kathmandu');

  const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBranch(e.target.value);
  };

  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="text-lg font-semibold"> Client</div>

      <select
        value={selectedBranch}
        onChange={handleBranchChange}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm"
      >
        <option value="Kathmandu">Kathmandu</option>
        <option value="Pokhara">Pokhara</option>
        <option value="Biratnagar">Biratnagar</option>
        <option value="Chitwan">Chitwan</option>
      </select>
    </div>
  );
};

export default BranchBar;
