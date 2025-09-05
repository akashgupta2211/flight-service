import React from "react";
import { Plane, Search, ChevronDown } from "lucide-react";

function StaticInput({ icon: Icon, placeholder }) {
  return (
    <div className="relative w-full">
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-600" />
        <input
          type="text"
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
}

export default function FlightSearch() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Find Your Perfect Flight
          </h1>
          <p className="text-gray-600 text-lg">
            Search and book domestic flights across India
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* From Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">From</label>
              <StaticInput icon={Plane} placeholder="Delhi, Mumbai, etc." />
            </div>

            {/* To Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">To</label>
              <StaticInput icon={Plane} placeholder="Delhi, Mumbai, etc." />
            </div>

            {/* Date Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Departure Date
              </label>
              <input
                type="date"
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            {/* Search Button */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-transparent">
                Search
              </label>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 font-medium">
                <Search className="h-5 w-5" />
                Search Flights
              </button>
            </div>
          </div>

          {/* Popular Routes */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Popular Routes
            </h3>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors">
                Delhi → Mumbai
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors">
                Mumbai → Bangalore
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors">
                Delhi → Bangalore
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors">
                Hyderabad → Mumbai
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors">
                Kolkata → Delhi
              </button>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl mb-2">✈️</div>
            <h3 className="font-semibold text-gray-800 mb-2">Best Prices</h3>
            <p className="text-gray-600 text-sm">
              Compare prices from all major airlines and find the best deals.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-semibold text-gray-800 mb-2">Easy Booking</h3>
            <p className="text-gray-600 text-sm">
              Simple and secure booking process with instant confirmation.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl mb-2">🕒</div>
            <h3 className="font-semibold text-gray-800 mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">
              Round-the-clock customer support for all your travel needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
