import "./App.css";
import Home from "./Pages/Home";
import RightSide from "./components/RightSide/RightSide";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
    return (
        <div className="App">
            <div className="AppGlass">
              <Sidebar/>
              <Home/>
              <RightSide/>
            </div>
        </div>
    );
}

export default App;
