import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import DashboardContent from "./components/DashboardContent";
import DashboardSidebar from "./components/DashboardSidebar";

const DashboadLayout = (props) => {
    console.log(props,"indexxxx");
   const history = useHistory();
   const [status, setStatus] = useState("");

   useEffect(() => {
    //    console.log(props.location.state,"=props.location");
    //    if(props.location.state.stId){
    //     setStatus(props.location.state.stId);
    //    }
   
   },[])
  

    return (
        <div className="desh-content">
            <div className="flexible">
                <div className="dash-sidebar">
                    <DashboardSidebar  history={history} />
                </div>
                <div className="dash-data">
                    <DashboardContent status={status} />
                </div>

            </div>

        </div>
    )
};


export default DashboadLayout;