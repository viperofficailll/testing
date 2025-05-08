/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`${
        isCollapsed ? 'w-20' : 'w-64'
      } h-screen bg-white shadow-md flex flex-col p-4 transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        {!isCollapsed && <h1 className="font-bold text-lg">CRM</h1>}
        <button
          className="text-gray-400 hover:text-gray-600"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? '➡️' : '⬅️'}
        </button>
      </div>

      {/* Search */}
      {!isCollapsed && (
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 text-sm focus:outline-none"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>
      )}

      {/* Menu */}
      <nav className="flex flex-col gap-2">
        <MenuItem icon="📊" label="Dashboard" active={true} isCollapsed={isCollapsed} />
        <MenuItem icon="🏢" label="Office Check-in" active={false} isCollapsed={isCollapsed} />
        <MenuItem icon="📋" label="Enquiries" active={false} isCollapsed={isCollapsed} />
        <MenuItem icon="👥" label="Clients" active={false} isCollapsed={isCollapsed} />
        <MenuItem icon="🛠️" label="Services" active={false} isCollapsed={isCollapsed} />
        <MenuItem icon="📝" label="Quotation" active={false} isCollapsed={isCollapsed} />
        <MenuItem icon="✅" label="Tasks" active={false} isCollapsed={isCollapsed} />
      </nav>
    </div>
  );
};
// @ts-expect-error
const MenuItem = ({ icon, label, active, isCollapsed }) => (
  <div
    className={`flex items-center ${
      isCollapsed ? 'justify-center' : 'justify-between'
    } px-3 py-2 rounded-lg cursor-pointer ${
      active ? 'bg-purple-100 text-purple-600' : 'hover:bg-gray-100'
    }`}
  >
    <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''}`}>
      <span className="text-lg">{icon}</span>
      {!isCollapsed && <span className="text-sm font-medium">{label}</span>}
    </div>
    {!isCollapsed && <span className="text-gray-400">⋯</span>}
  </div>
);

export default Sidebar;
