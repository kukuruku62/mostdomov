import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";

export const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
