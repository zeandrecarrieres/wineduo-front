import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import WineRegister from "./pages/WineRegister";
import WineList from "./pages/WineList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/wine_register" component={WineRegister} />
          <Route path="/wine_list" component={ WineList } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
