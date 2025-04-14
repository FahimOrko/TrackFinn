import React from "react";
import Button from "./Button";
import useTrainData from "../services/getSingleTrain";
import Spinner from "./Spinner";
import SingleTrainDetails from "./SingleTrainDetails";
import TrainNotFound from "./TrainNotFound";
import { useNavigate } from "react-router-dom";

const SingleTrainInfo = ({ trainNum, date, setSearchParams }) => {
  const { data, isLoading, isError } = useTrainData(date, parseInt(trainNum));

  const trainData = data;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  if (isLoading)
    return (
      <section className="h-full w-full flex items-center justify-center">
        <Spinner />
      </section>
    );
  if (isError)
    return (
      <section className="h-full w-full flex items-center justify-center">
        <TrainNotFound />
      </section>
    );

  if (!isLoading && !isError && trainData)
    return (
      <section className="flex flex-col gap-4 h-full w-full">
        <Button onClick={handleClick}>Go Back</Button>
        <SingleTrainDetails trainData={trainData} />
      </section>
    );
};

export default SingleTrainInfo;
