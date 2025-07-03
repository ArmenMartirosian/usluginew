import { Outlet } from "react-router-dom";

import TopSideBar2 from "@/components/shared/TopSideBar2.tsx";
//import TopMenuBar2 from "@/components/shared/TopMenuBar2.tsx";
//import Bottombar from "@/components/shared/Bottombar";
//import LeftSidebar from "@/components/shared/LeftSidebar";

const RootLayout = () => {
  return (
    <div className="w-full ">
      <TopSideBar2 />
      {/*//*/}

      {/*<LeftSidebar />*/}

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      {/*<Bottombar />*/}
    </div>
  );
};

export default RootLayout;
