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

import MyRecord from "./pages/MyRecord/MyRecord";

import DecoProfile from "./pages/DecoProfile/DecoProfile";
import Diagnosis from "./pages/Diagnosis/Diagnosis";
import MyCoin from "./pages/MyCoin/MyCoin";
import Join from "./pages/Join/Join";
import JoinProcess from "./pages/Join/JoinProcess";
import Login from "./pages/Login/Login";
import ChattingRoom from "./pages/Collect/ChattingRoom/ChattingRoom";
import RoomNameChange from "./pages/Collect/ChattingRoom/SideMenu/RoomNameChange";
import RoomInviteFriend from "./pages/Collect/ChattingRoom/SideMenu/RoomInviteFriend";
import PastChallenge from "./pages/Collect/ChattingRoom/SideMenu/PastChallenge";
import MakeRoom from "./pages/Collect/ChattingRoom/MakeRoom";

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
          path: "/alarm",
          element: <Alarm />,
        },
        {
          path: "/level",
          element: <Level />,
        },
        {
          path: "/mycoin",
          element: <MyCoin />,
        },
        {
          path: "/collect",
          element: <Collect />,
        },
        {
          path: "/makeroom",
          element: <MakeRoom />,
        },
        {
          path: "/chatroom/:chatroomId",
          children: [
            {
              index: true,
              element: <ChattingRoom />,
            },
            {
              path: "/chatroom/:chatroomId/roomnamechange",
              element: <RoomNameChange />,
            },
            {
              path: "/chatroom/:chatroomId/roominvitefriend",
              element: <RoomInviteFriend />,
            },
            {
              path: "/chatroom/:chatroomId/pastchallenge",
              element: <PastChallenge />,
            },
          ],
        },
        {
          path: "/mypage",
          element: <MyPage />,
        },
        {
          path: "/myrecord",
          element: <MyRecord />,
        },
        {
          path: "/setting",
          element: <Setting />,
        },
        {
          path: "/decoprofile",
          element: <DecoProfile />,
        },
        {
          path: "/diagnosis",
          element: <Diagnosis />,
        },
      ],
    },
    {
      path: "/join",
      children: [
        {
          index: true,
          element: <Join />,
        },
        {
          path: "/join/joinprocess",
          element: <JoinProcess />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
