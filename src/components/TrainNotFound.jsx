import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import HeaderText from "./HeaderText";
import ParaText from "./ParaText";
import BackButton from "./BackButton";

function TrainNotFound() {
  const navigate = useNavigate();

  return (
    <section className="h-full w-full bg-vrgrayMid">
      <main className="w-full h-fit mt-20 flex flex-col justify-center items-center text-center gap-8 px-8">
        <HeaderText>Train Not Found 🚫</HeaderText>
        <ParaText>
          We couldn’t find tracking data for the requested train. It may be
          delayed, inactive, or the ID is incorrect.
        </ParaText>
        <div onClick={() => navigate("/trains")}>
          <BackButton>&larr; Go back to Track Train</BackButton>
        </div>
      </main>
    </section>
  );
}

export default TrainNotFound;
