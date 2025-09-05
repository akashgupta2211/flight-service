import { useQuery } from "@tanstack/react-query";
import { getFlights, searchFlights } from "../../api/flightApi";

export function useFlights() {
  return useQuery({
    queryKey: ["flights"],
    queryFn: getFlights,
  });
}

export function useSearchFlights(searchParams) {
  return useQuery({
    queryKey: ["flights", searchParams],
    queryFn: () => searchFlights(searchParams),
    enabled: !!searchParams,
  });
}
