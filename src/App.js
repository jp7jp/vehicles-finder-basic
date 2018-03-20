import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllVehicles } from './actions';
import './App.css';

class App extends Component {

  // state = {
  //   vehicles: [
  //     {
  //       _id: 1,
  //       model: { name: 'Hyundai HB20' }
  //     },
  //     {
  //       _id: 2,
  //       model: { name: 'Honda HR-V' }
  //     },
  //     {
  //       _id: 3,
  //       model: { name: 'Fiat Punto' }
  //     }
  //   ]
  // }

  componentWillMount() {
    this.props.getAllVehicles();
  }

  render() {
    return (
      <div>
        <h1>Vehicles Finder</h1>
        <ul>
          {this.props.vehicles.map(vehicle => <li key={vehicle._id}>{vehicle.model.name}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vehicles: state.vehicles.all
  }
}

export default connect(mapStateToProps, { getAllVehicles })(App);
