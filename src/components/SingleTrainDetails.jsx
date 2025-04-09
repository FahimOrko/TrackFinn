import React from "react";
import HeaderText from "./HeaderText";
import ParaText from "./ParaText";
import { getPrevNextStations } from "../utils/helpers";

const SingleTrainDetails = ({ trainData }) => {
  const {
    trainNumber,
    runningCurrently,
    trainType,
    timeTableRows,
    trainLocations,
  } = trainData;

  const { prev, next } = getPrevNextStations(timeTableRows);

  return (
    <div className="h-full w-full flex flex-col items-center overflow-y-auto ">
      <div className="w-full max-w-4xl space-y-6 p-4 mt-6">
        <HeaderText h2="true" className="my-6">
          Train Details
        </HeaderText>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-vrgrayDark border-4 border-vrgreenDark px-4 py-2 rounded-md shadow-sm ">
          <ParaText v2={true}>
            <ParaText v3={true}>Train Number:</ParaText> {trainNumber}
          </ParaText>
          <ParaText v2={true}>
            <ParaText v3={true}>Running Currently:</ParaText>{" "}
            {runningCurrently ? "Yes" : "No"}
          </ParaText>
          <ParaText v2={true}>
            <ParaText v3={true}>Train Type:</ParaText>{" "}
            {trainType?.name || "N/A"}
          </ParaText>
          <ParaText v2={true}>
            <ParaText v3={true}>Category:</ParaText>{" "}
            {trainType?.trainCategory?.name || "N/A"}
          </ParaText>
        </div>

        {trainLocations?.length > 0 && runningCurrently && (
          <div className="flex gap-6 flex-col">
            <HeaderText h2="true" className="my-6 ">
              Latest Info
            </HeaderText>

            {(prev || next) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 justify-between gap-6 bg-vrgrayDark border-4 border-vrgreenDark px-4 py-3 rounded-md">
                <div>
                  <ParaText v2={true}>
                    <ParaText v3={true}>Previous Station:</ParaText>{" "}
                    {prev?.station?.name || "N/A"}
                  </ParaText>
                  <ParaText v2={true}>
                    <ParaText v3={true}>Left at:</ParaText>{" "}
                    {prev
                      ? new Date(prev.scheduledDate).toLocaleString("fi-FI", {
                          timeZone: "Europe/Helsinki",
                          dateStyle: "medium",
                          timeStyle: "short",
                        })
                      : "N/A"}
                  </ParaText>
                </div>
                <div>
                  <ParaText v2={true}>
                    <ParaText v3={true}>Next Station:</ParaText>{" "}
                    {next?.station?.name || "N/A"}
                  </ParaText>
                  <ParaText v2={true}>
                    <ParaText v3={true}>Will arrive at:</ParaText>{" "}
                    {next
                      ? new Date(next.scheduledDate).toLocaleString("fi-FI", {
                          timeZone: "Europe/Helsinki",
                          dateStyle: "medium",
                          timeStyle: "short",
                        })
                      : "N/A"}
                  </ParaText>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-vrgrayDark border-4 border-vrgreenDark px-4 py-2 rounded-md shadow-sm ">
              <ParaText v2={true}>
                <ParaText v3={true}>Speed:</ParaText> {trainLocations[0].speed}{" "}
                km/h
              </ParaText>
              <ParaText v2={true}>
                <ParaText v3={true}>Timestamp:</ParaText>{" "}
                {new Date(trainLocations[0].timestamp).toLocaleString("fi-FI", {
                  timeZone: "Europe/Helsinki",
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </ParaText>
            </div>
          </div>
        )}

        <div>
          <HeaderText h2="true" className="my-6">
            Timetable
          </HeaderText>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            {timeTableRows?.map((row, i) => (
              <div
                key={i}
                className=" bg-vrgrayDark border-4 border-vrgreenDark px-4 py-2 rounded-md shadow-sm  w-full flex flex-col gap-2"
              >
                <ParaText v2={true}>
                  <ParaText v3={true}>Station:</ParaText>{" "}
                  {row.station?.name || "N/A"}
                </ParaText>
                <ParaText v2={true}>
                  <ParaText v3={true}>Station Code:</ParaText>{" "}
                  {row.station?.shortCode || "N/A"}
                </ParaText>
                <ParaText v2={true}>
                  <ParaText v3={true}>Type:</ParaText> {row.type}
                </ParaText>
                {row.differenceInMinutes === 0 ? (
                  <ParaText v2={true}>
                    <ParaText v3={true}>Scheduled:</ParaText>{" "}
                    {new Date(row.scheduledTime).toLocaleString("fi-FI", {
                      timeZone: "Europe/Helsinki",
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </ParaText>
                ) : (
                  <>
                    <ParaText v2={true}>
                      <ParaText v3={true}>Scheduled:</ParaText>{" "}
                      {new Date(row.scheduledTime).toLocaleString("fi-FI", {
                        timeZone: "Europe/Helsinki",
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </ParaText>
                    <ParaText v2={true}>
                      <ParaText v3={true}>Actual:</ParaText>{" "}
                      {new Date(row.actualTime).toLocaleString("fi-FI", {
                        timeZone: "Europe/Helsinki",
                        dateStyle: "medium",
                        timeStyle: "short",
                      }) || "N/A"}
                    </ParaText>
                    <ParaText v2={true}>
                      <ParaText v3={true}>Delay:</ParaText>{" "}
                      {typeof row.differenceInMinutes === "number"
                        ? row.differenceInMinutes < 0
                          ? `Arrival ${Math.abs(
                              row.differenceInMinutes
                            )} min late`
                          : row.differenceInMinutes > 0
                          ? `Arrival ${row.differenceInMinutes} min early`
                          : "On time"
                        : "N/A"}
                    </ParaText>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTrainDetails;
