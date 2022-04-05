import React from "react";
import Chart from "../views/chart";
import RecentTrip from "../views/recentTrip";
import VehicleStatus from "../views/vehicleStatus";


const DashboardContent = (props) => {
	return (
		<div className="panel-content">
			<div className="row">
				<div className="col-lg-4">
					<h3 className="recent-head">Vehicle Status</h3>
					<VehicleStatus  vehicleSt={props.status} />

				</div>
				<div className="col-lg-8">
					<h3 className="recent-head">Statistics</h3>
					<Chart />
				</div>
			</div>
			<div className="col-lg-7 col-lg-12">
				<RecentTrip />
			</div>

		</div>
	);
};
export default DashboardContent;
