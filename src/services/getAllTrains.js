import { useQuery } from "@tanstack/react-query"; // Updated import for TanStack Query v5
import { GraphQLClient } from "graphql-request";

const graphqlEndpoint = "https://rata.digitraffic.fi/api/v2/graphql/graphql";

// Create the GraphQL client
const client = new GraphQLClient(graphqlEndpoint, {
  headers: {
    "Content-Type": "application/json",
    "Accept-Encoding": "gzip",
  },
});

// Define the GraphQL query
const query = `
  query {
    currentlyRunningTrains(
      where: {
        trainNumber: { lessThan: 999 }
        operator: { shortCode: { equals: "vr" } }
        trainType: {
          trainCategory: {
            name: { equals: "Long-distance" }
          }
        }
      }
    ) {
      trainNumber
      departureDate
      trainType {
        name
        trainCategory {
          name
        }
      }
      trainLocations(
        where: { speed: { greaterThan: 30 } }
        orderBy: { timestamp: DESCENDING }
        take: 1
      ) {
        speed
        timestamp
        location
      }
    }
  }
`;

// Fetch the train data
const fetchTrainData = async () => {
  try {
    const response = await client.request(query);
    return response.currentlyRunningTrains; // Ensure we're returning the correct data
  } catch (error) {
    throw new Error("Error fetching train data: " + error.message); // Handle error if needed
  }
};

const useTrainData = () => {
  return useQuery({
    queryKey: ["currentlyRunningTrains"],
    queryFn: fetchTrainData,
    // Optional: Handle errors and loading states if needed
    onError: (error) => {
      console.error("Error fetching train data:", error);
    },
    // Optional: Refetch interval or caching options
    refetchOnWindowFocus: false, // For example, disable refetch on window focus
  });
};

export default useTrainData;
