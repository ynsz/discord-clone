import "./App.scss";
import Chat from "./components/chat/Chat";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./components/login/Login";
import { useAppSelecter } from "./app/hocks";
import { useEffect } from "react";

function App() {
  const user = useAppSelecter((state) => state.user);
  // const user = null;
  console.log(user);

  useEffect(() => {}, []);

  return (
    <div className="App">
      {user ? (
        <>
          {/* Sidebar */}
          <Sidebar />

          {/* chat */}
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
