import React from "react";
import Demo from "./pages/Demo";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";
import "./App.css";
const App = () => {
  return (
    <div className="App min-h-[100vh] flex bg-[url(https://ik.imagekit.io/d3kzbpbila/thejashari_vKxVSy7dP)] bg-no-repeat bg-center bg-cover">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/chats" element={<ChatPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
