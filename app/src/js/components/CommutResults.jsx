import React, { Component } from 'react';

var CommutResults = ({duration, normalizedScore, apiVar3, departureTime, departureGateDelayMinutes, departureRunwayDelayMinutes, arrivalGateDelayMinutes, arrivalRunwayDelayMinutes, departureTerminal, departureGate, arrivalTerminal, arrivalGate, baggage, precheck, WaitTime, LastUpdated}) => {
  return (
    <div>
      <h5 className="page-title">Your results:</h5>
      <h6 className="details">Travel time: </h6>
      <h6>{duration}</h6>
      <h6 className="details">Departure time: </h6>
      <h6>Departure Time: {departureTime}</h6>
      <h6>Departure Terminal: {departureTerminal}</h6>
      <h6>Departure Gate: {departureGate}</h6>
      <h6>Arrival Terminal: {arrivalTerminal}</h6>
      <h6>Arrival Gate: {arrivalGate}</h6>
      <h6>Baggage: {baggage}</h6>
      <h6 className="details">Total Delay time: </h6>
      <h6>{departureGateDelayMinutes + departureRunwayDelayMinutes + arrivalGateDelayMinutes + arrivalRunwayDelayMinutes} minutes</h6>
      <h6 className="details">Total commute time: </h6>
      <h6>{duration + WaitTime} </h6>
      <h6 className="details">TSA PreCheck: </h6>
      <h6>{precheck}</h6>
      <h6 className="details">TSA Wait Time: </h6>
      <h6>{WaitTime}</h6>
      <h8>Last updated: {LastUpdated}</h8>
    </div>
  )
};


export default CommutResults;
