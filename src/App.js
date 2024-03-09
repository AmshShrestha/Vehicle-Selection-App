import "./App.css";
import VehicleSelection from "./components/VehicleSelection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VehicleType from "./components/VehicleType";
import NoVehicle from "./components/NoVehicle";
import ThankYou from "./components/ThankYou";
import Bike from "./components/Bike";
import Car from "./components/Car";
import DisplayBike from "./components/DisplayBike";
import DisplayCar from "./components/DisplayCar";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" Component={VehicleSelection} />
          <Route path="/yes" Component={VehicleType} />
          <Route path="/no" Component={NoVehicle} />
          <Route path="/noo" Component={ThankYou} />
          <Route path="/bike" Component={Bike} />
          <Route path="/car" Component={Car} />
          <Route path ="/bikeDetails" Component = {DisplayBike} />
          <Route path = "/carDetails" Component = {DisplayCar} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
