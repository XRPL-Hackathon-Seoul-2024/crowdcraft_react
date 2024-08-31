import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainPage } from "@/pages/main";
import { ExplorePage } from "@/pages/explore";
import { TeamPage } from "@/pages/team";
import { BlockChainPage } from "@/pages/blockchain";
import { TeamFormPage } from "@/pages/form/team";
import { ProjectFormPage } from "@/pages/form/project";
import { PojectDetailPage } from "@/pages/explore/detail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useAddressStore } from "./store";
import sdk from "@crossmarkio/sdk";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/explore",
    element: <ExplorePage />,
  },
  {
    path: "/team",
    element: <TeamPage />,
  },
  {
    path: "/blockchain",
    element: <BlockChainPage />,
  },
  {
    path: "/form/team",
    element: <TeamFormPage />,
  },
  {
    path: "/form/project",
    element: <ProjectFormPage />,
  },
  {
    path: "/project/:slug",
    element: <PojectDetailPage />,
  },
]);

function App() {
  const { setAddress } = useAddressStore() as any;

  useEffect(() => {
    // TEMP: initialize address
    const isConnected = sdk.sync.isConnected();

    if (!isConnected) setAddress("");
  }, [setAddress]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-center" autoClose={5000} theme="dark" />
    </>
  );
}

export default App;
