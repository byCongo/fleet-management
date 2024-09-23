import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get('/api/vehicles') // Assuming your back-end has this API endpoint
      .then(response => {
        setVehicles(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the vehicles!', error);
      });
  }, []);

  return (
    <div>
      <h2>Vehicle List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Model</th>
            <th>Registration Number</th>
            <th>Insurance Status</th>
            <th>Inspection Status</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map(vehicle => (
            <tr key={vehicle._id}>
              <td>{vehicle.model}</td>
              <td>{vehicle.registrationNumber}</td>
              <td>{vehicle.insuranceStatus}</td>
              <td>{vehicle.inspectionStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleList;
