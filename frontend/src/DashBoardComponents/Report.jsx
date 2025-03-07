import React from "react";

function Report() {
  return (
    <div className="col-span-7 bg-slate-800 rounded-lg overflow-hidden flex flex-col h-screen text-white p-6">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-gradient-to-r from-orange-400 to-red-500 p-4 z-10 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-bold">All Transactions</h2>
      </div>

      {/* Scrollable Content */}
      <div className="overflow-y-auto flex-1">
        <div className="max-w-5xl mx-auto space-y-4">
          {/* Chart Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex mb-2">
              <div className="flex items-center mr-4">
                <div className="w-4 h-4 bg-emerald-500 mr-1 rounded-sm"></div>
                <span className="text-sm text-slate-800">Income</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-rose-500 mr-1 rounded-sm"></div>
                <span className="text-sm text-slate-800">Expenses</span>
              </div>
            </div>
            
            <div className="h-48 w-full border-gray-300 border-b border-l relative">
              {/* Chart grid lines */}
              <div className="absolute w-full h-px bg-gray-300 top-0"></div>
              <div className="absolute w-full h-px bg-gray-300 top-1/4"></div>
              <div className="absolute w-full h-px bg-gray-300 top-2/4"></div>
              <div className="absolute w-full h-px bg-gray-300 top-3/4"></div>
              <div className="absolute w-full h-px bg-gray-300 bottom-0"></div>
              
              <div className="absolute h-full w-px bg-gray-300 left-1/4"></div>
              <div className="absolute h-full w-px bg-gray-300 left-2/4"></div>
              <div className="absolute h-full w-px bg-gray-300 left-3/4"></div>
              
              {/* Simplified chart line for income */}
              <div className="absolute left-0 right-0 h-full">
                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                  <path d="M0,180 L100,50 L250,150 L400,70" fill="none" stroke="#10b981" strokeWidth="2" />
                  <circle cx="0" cy="180" r="4" fill="#10b981" />
                  <circle cx="100" cy="50" r="4" fill="#10b981" />
                  <circle cx="250" cy="150" r="4" fill="#10b981" />
                  <circle cx="400" cy="70" r="4" fill="#10b981" />
                </svg>
              </div>
              
              {/* Simplified chart line for expenses */}
              <div className="absolute left-0 right-0 h-full">
                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                  <path d="M0,190 L100,110 L250,165 L400,170" fill="none" stroke="#f43f5e" strokeWidth="2" />
                  <circle cx="0" cy="190" r="4" fill="#f43f5e" />
                  <circle cx="100" cy="110" r="4" fill="#f43f5e" />
                  <circle cx="250" cy="165" r="4" fill="#f43f5e" />
                  <circle cx="400" cy="170" r="4" fill="#f43f5e" />
                </svg>
              </div>
              
              {/* X-axis labels */}
              <div className="absolute bottom-0 left-0 transform translate-x-0 translate-y-6 text-xs text-slate-600">25/02/2023</div>
              <div className="absolute bottom-0 left-1/4 transform translate-x-0 translate-y-6 text-xs text-slate-600">21/02/2023</div>
              <div className="absolute bottom-0 left-2/4 transform translate-x-0 translate-y-6 text-xs text-slate-600">18/01/2023</div>
              <div className="absolute bottom-0 left-3/4 transform translate-x-0 translate-y-6 text-xs text-slate-600">26/01/2023</div>
              
              {/* Y-axis labels */}
              <div className="absolute top-0 left-0 transform -translate-x-8 text-xs text-slate-600">8,000</div>
              <div className="absolute top-1/4 left-0 transform -translate-x-8 text-xs text-slate-600">6,000</div>
              <div className="absolute top-2/4 left-0 transform -translate-x-8 text-xs text-slate-600">4,000</div>
              <div className="absolute top-3/4 left-0 transform -translate-x-8 text-xs text-slate-600">2,000</div>
              <div className="absolute bottom-0 left-0 transform -translate-x-8 text-xs text-slate-600">0</div>
            </div>
          </div>

          {/* Financial Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Total Income */}
            <div className="bg-slate-700 p-6 rounded-lg shadow-lg hover:bg-slate-600 transition-colors duration-200">
              <h3 className="text-xl font-semibold mb-4">Total Income</h3>
              <p className="text-4xl text-emerald-400">$ 16,500</p>
            </div>
            
            {/* Total Expenses */}
            <div className="bg-slate-700 p-6 rounded-lg shadow-lg hover:bg-slate-600 transition-colors duration-200">
              <h3 className="text-xl font-semibold mb-4">Total Expenses</h3>
              <p className="text-4xl text-rose-400">$ 3,920</p>
            </div>
          </div>

          {/* Total Balance */}
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg max-w-md mx-auto hover:bg-slate-600 transition-colors duration-200">
            <h3 className="text-xl font-semibold mb-4 text-center">Total Balance</h3>
            <p className="text-5xl text-emerald-400 text-center">$ 12,580</p>
          </div>

          {/* Recent History */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold mb-4">Recent History</h3>
            <div className="space-y-3">
              <div className="bg-slate-700 p-4 rounded-lg hover:bg-slate-600 transition-colors duration-200">
                <p className="text-rose-400">Dentist Appointment</p>
                <p className="text-rose-400">-$120</p>
              </div>
              
              <div className="bg-slate-700 p-4 rounded-lg hover:bg-slate-600 transition-colors duration-200">
                <p className="text-rose-400">Travelling</p>
                <p className="text-rose-400">-$3,000</p>
              </div>
              
              <div className="bg-slate-700 p-4 rounded-lg hover:bg-slate-600 transition-colors duration-200">
                <p className="text-emerald-400">From Freelance</p>
                <p className="text-emerald-400">+$1,300</p>
              </div>
            </div>
          </div>

          {/* Ranges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Salary Range */}
            <div className="bg-slate-700 p-6 rounded-lg shadow-lg hover:bg-slate-600 transition-colors duration-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm">Min</span>
                <span className="text-2xl font-semibold">Salary</span>
                <span className="text-sm">Max</span>
              </div>
              
              <div className="bg-slate-600 rounded-lg p-4 flex justify-between items-center">
                <p className="text-white">$1,200</p>
                <p className="text-white">$8,000</p>
              </div>
            </div>

            {/* Expense Range */}
            <div className="bg-slate-700 p-6 rounded-lg shadow-lg hover:bg-slate-600 transition-colors duration-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm">Min</span>
                <span className="text-2xl font-semibold">Expense</span>
                <span className="text-sm">Max</span>
              </div>
              
              <div className="bg-slate-600 rounded-lg p-4 flex justify-between items-center">
                <p className="text-white">$120</p>
                <p className="text-white">$3,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 bg-slate-700 p-2 rounded-lg">
        <div className="flex justify-end items-center text-slate-300">
          <span>Activate Windows</span>
          <span className="block ml-1 text-sm">Go to Settings to activate Windows</span>
          <div className="w-6 h-6 ml-2 bg-slate-600 rounded-full flex items-center justify-center">
            <span className="text-white">&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;