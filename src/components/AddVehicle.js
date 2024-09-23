import React, { useState } from 'react';
import axios from 'axios';
import './AddVehicle.css'; 

const AddVehicle = () => {
  const [vehicle, setVehicle] = useState({
    model: '',
    registrationNumber: '',
    insuranceStatus: '',
    inspectionStatus: ''
  });

  const handleChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/vehicles', vehicle)
      .then(response => {
        alert('Vehicle added successfully!');
        setVehicle({
          model: '',
          registrationNumber: '',
          insuranceStatus: '',
          inspectionStatus: ''
        });
      })
      .catch(error => {
        console.error('There was an error adding the vehicle!', error);
      });
  };

  return (
    <div className="add-vehicle">
      <h2>Add New Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Model</label>
          <input
            type="text"
            name="model"
            className="form-control"
            value={vehicle.model}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Registration Number</label>
          <input
            type="text"
            name="registrationNumber"
            className="form-control"
            value={vehicle.registrationNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Insurance Status</label>
          <input
            type="text"
            name="insuranceStatus"
            className="form-control"
            value={vehicle.insuranceStatus}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Inspection Status</label>
          <input
            type="text"
            name="inspectionStatus"
            className="form-control"
            value={vehicle.inspectionStatus}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Vehicle</button>
      </form>
    </div>
  );
};

export default AddVehicle;
