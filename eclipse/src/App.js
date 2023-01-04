import "./App.css";
import Topbar from "./components/Topbar";
import Dawn_Profile from "./components/Dawn_Profile";
import Dusk_Profile from "./components/Dusk_Profile";
import Chat from "./components/Chat";
import Profile_Edit from "./components/Profile_Edit";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Dawn_Profile />;
    case "/chats":
      component = <Chat />;
    case "/profile":
      component = <Profile_Edit />;
  }
  return (
    <div className="App">
      <Topbar />
    </div>
  );
}

export default App;
