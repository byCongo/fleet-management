import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TripList.css'; 

const TripList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios.get('/api/trips')
      .then(response => {
        setTrips(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the trips!', error);
      });
  }, []);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Destination</th>
            <th>Mileage Before</th>
            <th>Mileage After</th>
            <th>Fuel Consumed</th>
            <th>Driver Allowance</th>
          </tr>
        </thead>
        <tbody>
          {trips.map(trip => (
            <tr key={trip._id}>
              <td>{trip.date}</td>
              <td>{trip.destination}</td>
              <td>{trip.mileageBefore}</td>
              <td>{trip.mileageAfter}</td>
              <td>{trip.fuelConsumed}</td>
              <td>{trip.driverAllowance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TripList;
