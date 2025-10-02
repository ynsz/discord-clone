import "./App.scss";
import Chat from "./components/chat/Chat";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./components/login/Login";
import { useAppDispatch, useAppSelecter } from "./app/hocks";
import { useEffect } from "react";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
import { ErrorBoundary } from "react-error-boundary";
import { fallbackRender } from "./utils/ErrorFallBack";

function App() {
  const user = useAppSelecter((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
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
          <ErrorBoundary fallbackRender={fallbackRender}>
            <Sidebar />
          </ErrorBoundary>
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
