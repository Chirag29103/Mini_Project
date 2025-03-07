import React, { useState } from "react";
import SideBar from "./SideBar";
import Report from "./Report";
import Transactions from "./Transactions";
import Expenses from "./Expenses";
import Incomes from "./IncomesPage";

function DashBoard() {
    const [activeSection, setActiveSection] = useState('dash');
    
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const renderContent = () => {
        switch(activeSection) {
            case 'dash':
                return <Report />;
            case 'transactions':
                return <Transactions />;
            case 'expense':
                return <Expenses />;
            case 'incomes':
                return <Incomes />;
            default:
                return <Report />;
        }
    };

    return (
        <div className="grid grid-cols-8 box-border min-h-screen gap-6 p-6 bg-gradient-to-br from-slate-800 via-slate-900 to-black">
            <SideBar 
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
            />
            <div className="col-span-6">
                {renderContent()}
            </div>
        </div>
    );
}

export default DashBoard;