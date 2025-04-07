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
  const response = await client.request(query);
  return response.currentlyRunningTrains; // Access the train data properly
};

const useTrainData = () => {
  return useQuery({
    queryKey: ["currentlyRunningTrains"],
    queryFn: fetchTrainData,
  });
};

// export const dummyData = [
//   {
//     trainNumber: 9,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "S",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 138,
//         timestamp: "2025-04-07T16:48:12.000Z",
//         location: [29.673237, 61.709719],
//       },
//     ],
//   },
//   {
//     trainNumber: 11,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 81,
//         timestamp: "2025-04-07T16:47:20.000Z",
//         location: [26.688287, 60.864418],
//       },
//     ],
//   },
//   {
//     trainNumber: 12,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 34,
//         timestamp: "2025-04-07T16:48:13.000Z",
//         location: [29.378756, 61.424682],
//       },
//     ],
//   },
//   {
//     trainNumber: 25,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 77,
//         timestamp: "2025-04-07T16:48:13.000Z",
//         location: [25.217982, 66.171644],
//       },
//     ],
//   },
//   {
//     trainNumber: 27,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 158,
//         timestamp: "2025-04-07T16:48:14.000Z",
//         location: [25.227238, 64.733792],
//       },
//     ],
//   },
//   {
//     trainNumber: 28,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "S",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 80,
//         timestamp: "2025-04-07T16:48:15.000Z",
//         location: [23.108936, 63.823058],
//       },
//     ],
//   },
//   {
//     trainNumber: 29,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 147,
//         timestamp: "2025-04-07T16:48:15.000Z",
//         location: [23.761339, 61.257721],
//       },
//     ],
//   },
//   {
//     trainNumber: 34,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 77,
//         timestamp: "2025-04-07T16:48:15.000Z",
//         location: [23.680594, 61.510428],
//       },
//     ],
//   },
//   {
//     trainNumber: 37,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 70,
//         timestamp: "2025-04-07T16:48:13.000Z",
//         location: [25.491094, 64.975824],
//       },
//     ],
//   },
//   {
//     trainNumber: 49,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 158,
//         timestamp: "2025-04-07T16:48:12.000Z",
//         location: [23.027237, 62.200675],
//       },
//     ],
//   },
//   {
//     trainNumber: 51,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 154,
//         timestamp: "2025-04-07T16:48:13.000Z",
//         location: [22.68558, 63.516122],
//       },
//     ],
//   },
//   {
//     trainNumber: 54,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 101,
//         timestamp: "2025-04-07T16:48:12.000Z",
//         location: [24.781643, 60.746728],
//       },
//     ],
//   },
//   {
//     trainNumber: 56,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "S",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 134,
//         timestamp: "2025-04-07T16:48:11.000Z",
//         location: [22.955705, 62.449151],
//       },
//     ],
//   },
//   {
//     trainNumber: 59,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "S",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 110,
//         timestamp: "2025-04-07T16:48:12.000Z",
//         location: [23.017741, 62.956537],
//       },
//     ],
//   },
//   {
//     trainNumber: 67,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 80,
//         timestamp: "2025-04-07T16:48:14.000Z",
//         location: [27.213877, 63.662956],
//       },
//     ],
//   },
//   {
//     trainNumber: 69,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "S",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 136,
//         timestamp: "2025-04-07T16:48:11.000Z",
//         location: [27.183991, 62.429564],
//       },
//     ],
//   },
//   {
//     trainNumber: 70,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 105,
//         timestamp: "2025-04-07T16:48:11.000Z",
//         location: [26.678815, 60.878132],
//       },
//     ],
//   },
//   {
//     trainNumber: 72,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "S",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 32,
//         timestamp: "2025-04-07T16:47:04.000Z",
//         location: [25.659023, 60.976459],
//       },
//     ],
//   },
//   {
//     trainNumber: 73,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 169,
//         timestamp: "2025-04-07T16:48:11.000Z",
//         location: [25.137946, 60.473202],
//       },
//     ],
//   },
//   {
//     trainNumber: 88,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "S",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 32,
//         timestamp: "2025-04-07T16:48:13.000Z",
//         location: [23.790323, 61.491438],
//       },
//     ],
//   },
//   {
//     trainNumber: 89,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "S",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 124,
//         timestamp: "2025-04-07T16:48:11.000Z",
//         location: [23.744082, 61.434642],
//       },
//     ],
//   },
//   {
//     trainNumber: 111,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 47,
//         timestamp: "2025-04-07T15:42:10.000Z",
//         location: [26.695794, 60.864965],
//       },
//     ],
//   },
//   {
//     trainNumber: 146,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "S",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 54,
//         timestamp: "2025-04-07T16:48:11.000Z",
//         location: [24.936906, 60.21402],
//       },
//     ],
//   },
//   {
//     trainNumber: 147,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 31,
//         timestamp: "2025-04-07T16:46:55.000Z",
//         location: [25.754229, 62.241107],
//       },
//     ],
//   },
//   {
//     trainNumber: 148,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 103,
//         timestamp: "2025-04-07T16:47:56.000Z",
//         location: [25.523978, 62.025737],
//       },
//     ],
//   },
//   {
//     trainNumber: 149,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 62,
//         timestamp: "2025-04-07T16:48:15.000Z",
//         location: [24.789699, 60.726185],
//       },
//     ],
//   },
//   {
//     trainNumber: 265,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "PYO",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 32,
//         timestamp: "2025-04-07T16:40:40.000Z",
//         location: [24.934427, 60.210101],
//       },
//     ],
//   },
//   {
//     trainNumber: 266,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "PYO",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 131,
//         timestamp: "2025-04-07T16:48:15.000Z",
//         location: [25.248386, 65.553797],
//       },
//     ],
//   },
//   {
//     trainNumber: 274,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "PYO",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 99,
//         timestamp: "2025-04-07T16:48:10.000Z",
//         location: [26.238173, 66.525542],
//       },
//     ],
//   },
//   {
//     trainNumber: 276,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "PYO",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 70,
//         timestamp: "2025-04-07T16:48:11.000Z",
//         location: [23.831693, 67.316325],
//       },
//     ],
//   },
//   {
//     trainNumber: 428,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "HDM",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 110,
//         timestamp: "2025-04-07T16:48:11.000Z",
//         location: [23.884147, 61.483023],
//       },
//     ],
//   },
//   {
//     trainNumber: 447,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "S",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 109,
//         timestamp: "2025-04-07T16:48:13.000Z",
//         location: [22.336119, 62.964494],
//       },
//     ],
//   },
//   {
//     trainNumber: 496,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "H",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 120,
//         timestamp: "2025-04-07T16:48:10.000Z",
//         location: [25.281164, 63.799547],
//       },
//     ],
//   },
//   {
//     trainNumber: 710,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 135,
//         timestamp: "2025-04-07T16:48:15.000Z",
//         location: [27.618521, 64.414406],
//       },
//     ],
//   },
//   {
//     trainNumber: 749,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "HDM",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: null,
//   },
//   {
//     trainNumber: 763,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "HDM",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 34,
//         timestamp: "2025-04-07T16:48:11.000Z",
//         location: [29.445896, 63.45417],
//       },
//     ],
//   },
//   {
//     trainNumber: 927,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 37,
//         timestamp: "2025-04-07T16:48:11.000Z",
//         location: [23.773941, 61.48991],
//       },
//     ],
//   },
//   {
//     trainNumber: 928,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 100,
//         timestamp: "2025-04-07T16:48:11.000Z",
//         location: [22.30608, 60.501327],
//       },
//     ],
//   },
//   {
//     trainNumber: 963,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 33,
//         timestamp: "2025-04-07T16:47:19.000Z",
//         location: [22.232394, 60.438184],
//       },
//     ],
//   },
//   {
//     trainNumber: 965,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 119,
//         timestamp: "2025-04-07T16:48:13.000Z",
//         location: [23.371237, 60.143147],
//       },
//     ],
//   },
//   {
//     trainNumber: 968,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 119,
//         timestamp: "2025-04-07T16:48:14.000Z",
//         location: [24.019012, 60.088842],
//       },
//     ],
//   },
//   {
//     trainNumber: 974,
//     departureDate: "2025-04-07",
//     trainType: {
//       name: "IC",
//       trainCategory: {
//         name: "Long-distance",
//       },
//     },
//     trainLocations: [
//       {
//         speed: 135,
//         timestamp: "2025-04-07T16:48:12.000Z",
//         location: [22.514488, 60.423031],
//       },
//     ],
//   },
// ];

export default useTrainData;
