import "./App.css";
import Topbar from "./components/Topbar";
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
  }
  return (
    <div className="App">
      <Topbar />
      {component}
    </div>
  );
}

export default App;
