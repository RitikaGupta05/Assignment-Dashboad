import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import DashboardContent from "./components/DashboardContent";
import DashboardSidebar from "./components/DashboardSidebar";

const DashboadLayout = (props) => {
   const history = useHistory();
   let location  = useLocation();
   

    return (
        <div className="desh-content">
            <div className="flexible">
                <div className="dash-sidebar">
                    <DashboardSidebar  history={history} />
                </div>
                <div className="dash-data">
                    <DashboardContent status={location.hash} />
                </div>

            </div>

        </div>
    )
};


export default DashboadLayout;