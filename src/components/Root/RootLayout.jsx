import { Outlet } from "react-router-dom";
import Header from "../HelperComponents/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
