import React from "react";
import Demo from "./pages/Demo";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={Homepage}></Route>
      <Route path="/chats" element={ChatPage}></Route>
    </Routes>
  );
};

export default App;
