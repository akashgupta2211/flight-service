import client from "./client";

export const getFlights = async () => {
  try {
    const response = await client.get("/flights");
    return response.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  }
};

export const searchFlights = async ({ from, to, date }) => {
  const trips = `${from}-${to}`;
  const response = await client.get("/flights", {
    params: {
      trips,
      tripDate: date,
    },
  });

  return response.data;
};
