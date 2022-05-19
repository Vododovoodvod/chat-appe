// images from https://www.publicdomainpictures.net
 import "./styles/CSSreset.css";
import { Route, Routes } from "react-router-dom";
import { Chat } from "./pages/Chat.jsx";
import { Login } from "./pages/Login.jsx";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
