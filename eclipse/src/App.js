import "./App.css";
import Topbar from "./components/Topbar";
import DawnProfile from "./components/Dawn_Profile";
import DuskProfile from "./components/Dusk_Profile";
import Chat from "./components/Chat";
import Home from "./components/Home"

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home/>;
      break;
    case "/chats":
      component = <Chat />;
      break;
    case "/profile":
      component = <DawnProfile />;
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
