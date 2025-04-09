import { useNavigate, useRouteError } from "react-router-dom";
import BackButton from "./BackButton";
import Navbar from "./Navbar";
import HeaderText from "./HeaderText";
import ParaText from "./ParaText";

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <section className="h-[100dvh] w-full bg-vrgrayMid">
      <Navbar />
      <main className="w-full h-fit mt-20 flex flex-col justify-center items-center text-center  gap-8 px-8">
        <HeaderText>Something went wrong 😢</HeaderText>
        <ParaText>{error.data || error.message}</ParaText>
        <div onClick={() => navigate("/")}>
          <BackButton>&larr; Go back to Home Page</BackButton>
        </div>
      </main>
    </section>
  );
}

export default NotFound;
