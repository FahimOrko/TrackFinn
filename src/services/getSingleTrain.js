import { useQuery } from "@tanstack/react-query";
import { GraphQLClient, gql } from "graphql-request";
import { convertToISOFormat } from "../utils/helpers";

// Setup GraphQL client
const graphqlEndpoint = "https://rata.digitraffic.fi/api/v2/graphql/graphql";
const client = new GraphQLClient(graphqlEndpoint, {
  headers: {
    "Content-Type": "application/json",
    "Accept-Encoding": "gzip",
  },
});

// Define GraphQL query with variables
const query = gql`
  query GetTrainData($departureDate: Date!, $trainNumber: Int!) {
    trainsByDepartureDate(
      departureDate: $departureDate
      where: { trainNumber: { equals: $trainNumber } }
    ) {
      trainNumber
      runningCurrently
      trainType {
        name
        trainCategory {
          name
        }
      }
      timeTableRows(
        where: { trainStopping: { equals: true } }
        orderBy: { scheduledTime: ASCENDING }
      ) {
        station {
          name
          shortCode
          location
        }
        scheduledTime
        actualTime
        differenceInMinutes
        type
      }
      trainLocations(take: 1, orderBy: { timestamp: DESCENDING }) {
        speed
        timestamp
        location
      }
    }
  }
`;

// Fetch train data with async handling
const fetchSingleTrain = async ({ queryKey }) => {
  const [_key, date, train] = queryKey;
  const isoDate = convertToISOFormat(date);

  const variables = {
    departureDate: isoDate,
    trainNumber: parseInt(train),
  };

  try {
    const response = await client.request(query, variables);
    return response.trainsByDepartureDate[0]; // Ensure you're accessing the correct train
  } catch (error) {
    throw new Error("Error fetching train data: " + error.message); // Handle error properly
  }
};

// Custom hook
const useTrainData = (date, train) => {
  return useQuery({
    queryKey: ["singleTrain", date, train],
    queryFn: fetchSingleTrain,
  });
};

export default useTrainData;
