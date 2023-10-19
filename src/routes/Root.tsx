import { Outlet } from "react-router-dom";
import LabelBottomNavigation from "../components/LabelBottomNavigation";

const Root = () => {
  return (
    <>
      <div id="navbar">
        <LabelBottomNavigation />
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
