import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import FundCard from '../FundCard/FundCard';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

    
    const LegendItem = ({ color, label }) => (
        <div className="flex items-center space-x-2 text-xs sm:text-sm lg:text-base">
            <div className={`h-3 w-3 rounded-full ${color}`}></div>
            <div className="whitespace-nowrap">{label}</div>
        </div>
    );

    
    const CompanyLegendItem = ({ color, label }) => (
        <div className="flex items-center space-x-2 text-xs sm:text-sm lg:text-base">
            <div className={`h-3 w-3 rounded-full ${color}`}></div>
            <div className="whitespace-nowrap">{label}</div>
        </div>
    );

    return (
        <div className="flex w-full min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar isCollapsed={!isSidebarVisible} toggleSidebar={toggleSidebar} />
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col transition-all duration-300">
                <Topbar />
                <div className="flex-1 p-4 sm:p-6 lg:p-8">
                    {/* Custom Tabs */}
                    <div className="mb-8">
                        <div className="flex bg-white rounded-md shadow-sm overflow-hidden">
                            <button
                                onClick={() => setActiveTab('overview')}
                                className={`flex-1 px-4 py-2 text-sm font-medium border-r ${activeTab === 'overview'
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                OVERVIEW
                            </button>
                            <button
                                onClick={() => setActiveTab('performance')}
                                className={`flex-1 px-4 py-2 text-sm font-medium ${activeTab === 'performance'
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                FUND PERFORMANCE
                            </button>
                        </div>
                    </div>

                    {activeTab === 'overview' && (
                        <>
                           
                            <FundCard />

                            
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mt-8">
                                {/* Active Companies */}
                                <Card className="flex flex-col">
                                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                                        <CardTitle className="text-base font-medium text-gray-700">
                                            ACTIVE COMPANIES
                                        </CardTitle>
                                        <div className="flex items-center text-sm text-gray-500">
                                            This Week <ChevronDown className="h-4 w-4 ml-1" />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex flex-col">
                                        <div className="text-sm text-gray-500 mb-2">Capital Invested</div>
                                        <div className="text-2xl font-medium text-teal-600 mb-6">
                                            $1,681,662.63
                                        </div>
                                        <div className="relative flex justify-center flex-1 min-h-28">
                                            {/* Tri-color donut chart */}
                                            <svg className="h-28 w-28 md:h-36 md:w-36" viewBox="0 0 36 36">
                                                <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#004d71" strokeWidth="3" strokeDasharray="30 100" strokeDashoffset="25"></circle>
                                                <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#3aacb8" strokeWidth="3" strokeDasharray="35 100" strokeDashoffset="55"></circle>
                                                <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#70d1cd" strokeWidth="3" strokeDasharray="35 100" strokeDashoffset="90"></circle>
                                                <circle cx="18" cy="18" r="13.5" fill="white"></circle>
                                            </svg>
                                        </div>
                                        <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-4">
                                            <LegendItem color="bg-blue-900" label="Content 1" />
                                            <LegendItem color="bg-teal-600" label="Content 2" />
                                            <LegendItem color="bg-teal-400" label="Content 3" />
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Active Portfolio */}
                                <Card className="flex flex-col">
                                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                                        <CardTitle className="text-base font-medium text-gray-700">
                                            ACTIVE PORTFOLIO
                                        </CardTitle>
                                        <div className="flex items-center text-sm text-gray-500">
                                            ALL <ChevronDown className="h-4 w-4 ml-1" />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex flex-col">
                                        <div className="text-sm text-gray-500 mb-2">Current Value</div>
                                        <div className="text-2xl font-medium text-teal-600 mb-6">
                                            $5,245,662.63
                                        </div>
                                        <div className="relative flex justify-center flex-1 min-h-28">
                                            
                                            <svg className="h-28 w-28 md:h-36 md:w-36" viewBox="0 0 36 36">
                                                <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#004d71" strokeWidth="3" strokeDasharray="30 100" strokeDashoffset="25"></circle>
                                                <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#3aacb8" strokeWidth="3" strokeDasharray="35 100" strokeDashoffset="55"></circle>
                                                <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#70d1cd" strokeWidth="3" strokeDasharray="35 100" strokeDashoffset="90"></circle>
                                                <circle cx="18" cy="18" r="13.5" fill="white"></circle>
                                            </svg>
                                        </div>
                                        <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-4">
                                            <LegendItem color="bg-blue-900" label="Content 1" />
                                            <LegendItem color="bg-teal-600" label="Content 2" />
                                            <LegendItem color="bg-teal-400" label="Content 3" />
                                        </div>
                                    </CardContent>
                                </Card>

                                
                                <Card className="flex flex-col">
                                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                                        <CardTitle className="text-base font-medium text-gray-700">
                                            REALIZED COMPANIES
                                        </CardTitle>
                                        <div className="flex items-center text-sm text-gray-500">
                                            This Week <ChevronDown className="h-4 w-4 ml-1" />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex flex-col">
                                        <div className="text-sm text-gray-500 mb-2">Capital Invested</div>
                                        <div className="text-2xl font-medium text-teal-600 mb-6">
                                            $1,681,662.63
                                        </div>
                                        
                                        <div className="flex flex-col items-center flex-1">
                                            
                                            <div className="relative flex justify-center mb-4">
                                                <svg className="h-28 w-28 md:h-36 md:w-36" viewBox="0 0 36 36">
                                                    <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#004d71" strokeWidth="3" strokeDasharray="30 100" strokeDashoffset="25"></circle>
                                                    <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#3aacb8" strokeWidth="3" strokeDasharray="35 100" strokeDashoffset="55"></circle>
                                                    <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#70d1cd" strokeWidth="3" strokeDasharray="35 100" strokeDashoffset="90"></circle>
                                                    <circle cx="18" cy="18" r="13.5" fill="white"></circle>
                                                </svg>
                                            </div>
                                            {/* Legend Items */}
                                            <div className="grid grid-cols-2 gap-2 w-full">
                                                <CompanyLegendItem color="bg-red-500" label="MoreDuck" />
                                                <CompanyLegendItem color="bg-red-500" label="BeginCloud" />
                                                <CompanyLegendItem color="bg-red-500" label="Modelab AI" />
                                                <CompanyLegendItem color="bg-red-500" label="Lgtning AI" />
                                                <CompanyLegendItem color="bg-red-500" label="ArcI Data" />
                                                <CompanyLegendItem color="bg-red-500" label="Dagstore Inc" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Realized Portfolio */}
                                <Card className="flex flex-col">
                                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                                        <CardTitle className="text-base font-medium text-gray-700">
                                            REALIZED PORTFOLIO
                                        </CardTitle>
                                        <div className="flex items-center text-sm text-gray-500">
                                            This Week <ChevronDown className="h-4 w-4 ml-1" />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex flex-col">
                                        <div className="text-sm text-gray-500 mb-2">Capital Invested</div>
                                        <div className="text-2xl font-medium text-teal-600 mb-6">
                                            $27,119,245
                                        </div>
                                        <div className="relative flex justify-center flex-1 min-h-28 mb-4">
                                            {/* Tri-color donut chart */}
                                            <svg className="h-28 w-28 md:h-36 md:w-36" viewBox="0 0 36 36">
                                                <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#004d71" strokeWidth="3" strokeDasharray="30 100" strokeDashoffset="25"></circle>
                                                <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#3aacb8" strokeWidth="3" strokeDasharray="35 100" strokeDashoffset="55"></circle>
                                                <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#70d1cd" strokeWidth="3" strokeDasharray="35 100" strokeDashoffset="90"></circle>
                                                <circle cx="18" cy="18" r="13.5" fill="white"></circle>
                                            </svg>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 w-full">
                                            <CompanyLegendItem color="bg-teal-600" label="MoreDuck" />
                                            <CompanyLegendItem color="bg-teal-600" label="BeginCloud" />
                                            <CompanyLegendItem color="bg-teal-600" label="Modelab AI" />
                                            <CompanyLegendItem color="bg-teal-600" label="Lgtning AI" />
                                            <CompanyLegendItem color="bg-teal-600" label="ArcI Data" />
                                            <CompanyLegendItem color="bg-teal-600" label="Dagstore Inc" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </>
                    )}

                    {activeTab === 'performance' && (
                        <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                            <h2 className="text-xl font-semibold mb-4">Fund Performance</h2>
                            <p>Performance metrics and charts would go here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;