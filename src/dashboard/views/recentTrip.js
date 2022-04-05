import React from 'react';
import data from "../data/recentData.json";

const RecentTrip = () => {

    return (
        <div className="recent-box"> 
                <div className="col-lg-6">
                    <h3 className="recent-head">Recent Trips</h3>
                </div> 
                <div className="table-box">
            <table className="table">
                <thead>
                    <tr>
                        <th>Start Time</th>
                        <th>Duration</th>
                        <th>Max Speed</th>
                        <th>Average Speed</th>
                        <th>Ending Voltage</th>
                        <th>Distance</th>
                        <th>Driver Score</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, ind) => (
                        <tr key={ind}>
                            <td>{item.startTime}</td>
                            <td>{item.duration}</td>
                            <td>{item.maxSpeed}</td>
                            <td>{item.averageSpeed}</td>
                            <td>{item.endingVoltage}</td>
                            <td>{item.distance}</td>
                            <td>{item.driverScore}</td>
                        </tr>
                    ))}
                </tbody>
            </table></div>
        </div>
    )
};


export default RecentTrip;