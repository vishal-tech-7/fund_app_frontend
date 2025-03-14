import React from 'react';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  DollarSign,
  Banknote,
  FolderOpen,
  BarChart2,
  CheckSquare,
  ShieldAlert,
  PiggyBank,
  CreditCard,
  UserCog,
  Settings as SettingsIcon,
} from 'lucide-react';


const SidebarItem = ({ icon, label, active = false, isCollapsed }) => (
  <div
    className={`flex items-center space-x-3 px-2 py-2 rounded-md cursor-pointer transition-colors ${
      active ? 'bg-gray-100 text-blue-600' : 'hover:bg-gray-100'
    }`}
  >
    <span className="text-lg">{icon}</span>
    {!isCollapsed && (
      <span className="text-sm whitespace-nowrap overflow-hidden truncate">
        {label}
      </span>
    )}
  </div>
);

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div
      className={`transition-all duration-300 bg-gray-100 border-r border-gray-200 p-4 flex flex-col min-h-screen ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      
      <button
        onClick={toggleSidebar}
        className="mb-6 p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
      >
        {isCollapsed ? '>' : '<'}
      </button>

      
      <div className="flex items-center space-x-2 mb-6">
        <div className="h-6 w-6 rounded-full bg-gray-800"></div>
        {!isCollapsed && (
          <div className="font-medium whitespace-nowrap overflow-hidden truncate">
            Contra Venture Fund I
          </div>
        )}
      </div>

      
      <div className="flex-1 overflow-y-auto space-y-1">
        <SidebarItem
          icon={<LayoutDashboard className="w-5 h-5" />}
          label="Dashboard"
          active
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon={<Briefcase className="w-5 h-5" />}
          label="Portfolio"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon={<Users className="w-5 h-5" />}
          label="Investors"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon={<DollarSign className="w-5 h-5" />}
          label="Accounting"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon={<Banknote className="w-5 h-5" />}
          label="Capital Calls"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon={<FolderOpen className="w-5 h-5" />}
          label="Data Room"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon={<BarChart2 className="w-5 h-5" />}
          label="Reports"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon={<CheckSquare className="w-5 h-5" />}
          label="Tasks"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon={<ShieldAlert className="w-5 h-5" />}
          label="Audit Log"
          isCollapsed={isCollapsed}
        />
      </div>

      
      <div className="pt-4 border-t border-gray-200 space-y-1">
        <SidebarItem
          icon={<PiggyBank className="w-5 h-5" />}
          label="Capital Extension Program"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon={<CreditCard className="w-5 h-5" />}
          label="Line of Credit"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon={<UserCog className="w-5 h-5" />}
          label="User Management"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon={<SettingsIcon className="w-5 h-5" />}
          label="Settings"
          isCollapsed={isCollapsed}
        />
      </div>
    </div>
  );
};

export default Sidebar;
