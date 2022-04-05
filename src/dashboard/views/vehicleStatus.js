import React from 'react';
import data from "../data/statusData.json";

const Vihiclestatus = (props) => {

	return (
		<div className="status">
			<table>
				<tbody>
					{props.vehicleSt && data[props.vehicleSt.replace("#","")].map((item, ind) => (
						<tr key={ind} >
							<td data-column="" width="160">{item.name}</td>
							<td data-column="" width="450">{item.duration}</td>
							<td data-column="" width="200"> <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.7812 7.75C13.7812 4.03125 10.7188 0.96875 7 0.96875C3.25391 0.96875 0.21875 4.03125 0.21875 7.75C0.21875 11.4961 3.25391 14.5312 7 14.5312C10.7188 14.5312 13.7812 11.4961 13.7812 7.75ZM6.20703 11.3594C6.04297 11.5234 5.74219 11.5234 5.57812 11.3594L2.73438 8.51562C2.57031 8.35156 2.57031 8.05078 2.73438 7.88672L3.36328 7.28516C3.52734 7.09375 3.80078 7.09375 3.96484 7.28516L5.90625 9.19922L10.0078 5.09766C10.1719 4.90625 10.4453 4.90625 10.6094 5.09766L11.2383 5.69922C11.4023 5.86328 11.4023 6.16406 11.2383 6.32812L6.20703 11.3594Z" fill="#66BB6A" />
							</svg> {" "} {item.maxSpeed}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
};


export default Vihiclestatus;