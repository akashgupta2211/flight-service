// src/components/SearchResults.jsx
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useSearchFlights } from "../hooks/flightHook/useFlights";
import FlightList from "./flight/FlightList";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function SearchResults() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // URL se parameters extract karo
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");

  // Search parameters object banao
  const searchParamsObj = from && to && date ? { from, to, date } : null;

  // API call karo
  const { data, isLoading, error } = useSearchFlights(searchParamsObj);

  const handleBackToSearch = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="outline"
            onClick={handleBackToSearch}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Search
          </Button>

          {searchParamsObj && (
            <div className="text-lg font-semibold text-gray-700">
              {from} → {to} | {new Date(date).toLocaleDateString("en-IN")}
            </div>
          )}
        </div>

        {/* Results */}
        <div className="bg-white rounded-xl p-6">
          {/* Loading state */}
          {isLoading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-blue-600 text-lg">Searching flights...</p>
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="text-center py-12">
              <p className="text-red-500 text-lg">Error: {error.message}</p>
              <Button onClick={() => window.location.reload()} className="mt-4">
                Try Again
              </Button>
            </div>
          )}

          {/* Success state */}
          {data && (
            <div>
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Found {data.data?.length || 0} flights
                </h2>
              </div>
              <FlightList flights={data.data || []} />
            </div>
          )}

          {/* No search params */}
          {!searchParamsObj && (
            <div className="text-center py-12">
              <p className="text-gray-500">No search parameters found</p>
              <Button onClick={handleBackToSearch} className="mt-4">
                Go to Search
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
