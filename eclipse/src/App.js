import "./App.css";
import Topbar from "./components/Topbar";
import DawnProfile from "./components/Dawn_Profile";
import DuskProfile from "./components/Dusk_Profile";
import Chat from "./components/Chat";
import ProfileEdit from "./components/Profile_Edit";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <DawnProfile />;
      break;
    case "/chats":
      component = <Chat />;
      break;
    case "/profile":
      component = <ProfileEdit />;
      break;
  }
  return (
    <div className="App">
      <Topbar />
      {component}
    </div>
  );
}

export default App;
