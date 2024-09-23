import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import VehicleList from './components/VehicleList';
import AddVehicle from './components/AddVehicle';
import TripList from './components/TripList';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<VehicleList />} />
        <Route path="/add-vehicle" element={<AddVehicle />} />
        <Route path="/trips" element={<TripList />} />
      </Routes>
    </Router>
  );
}

export default App;
