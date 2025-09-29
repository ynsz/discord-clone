import "./App.scss";
import Chat from "./components/chat/Chat";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./components/login/Login";
import { useAppDispatch, useAppSelecter } from "./app/hocks";
import { useEffect } from "react";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

function App() {
  const user = useAppSelecter((state) => state.user);
  // const user = null;
  // console.log(user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser);
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

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
