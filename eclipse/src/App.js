import "./App.css";
import Topbar from "./components/Topbar";

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
