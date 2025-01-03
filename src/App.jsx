import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Collect from "./pages/Collect/Collect";
import MyPage from "./pages/MyPage/MyPage";
import StartConsumption from "./pages/StartConsumption/StartConsumption";
import InputConsumption from "./pages/InputConsumption/InputConsumption";
import Callendar from "./pages/Callendar/Callendar";
import Level from "./pages/Level/Level";
import Setting from "./pages/Setting/Setting";
import Alarm from "./pages/Alarm/Alarm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/startconsumption",
          element: <StartConsumption />,
        },
        {
          path: "/inputconsumption",
          element: <InputConsumption />,
        },
        {
          path: "/callendar",
          element: <Callendar />,
        },
        {
          path: "/level",
          element: <Level />,
        },
        {
          path: "/alarm",
          element: <Alarm />,
        },
        {
          path: "/collect",
          element: <Collect />,
        },
        {
          path: "/mypage",
          element: <MyPage />,
        },
        {
          path: "/setting",
          element: <Setting />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
