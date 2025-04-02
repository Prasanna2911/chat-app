import axios from "axios";
import React, { useEffect, useState } from "react";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/chat");
        console.log("Fetched Chats:", data);
        setChats(data);
      } catch {
        console.error("Error fetching chats:", error);
      }
    };
    fetchChats();
  }, []);
  return (
    <div>
      <h1>Chat Page</h1>
    </div>
  );
};

export default ChatPage;
