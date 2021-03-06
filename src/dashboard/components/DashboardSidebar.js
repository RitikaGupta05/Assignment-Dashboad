import React, { useState } from "react";

const remove = (e) => {
  e.currentTarget.parentNode.parentNode.removeChild(e.currentTarget.parentNode);
};


const AddedElement = (props) => {
  const handleClick = (id) => {
    props.history.push(`/dashboard#${id}`);
  }
  
  return (

    <li key={props.value} onClick={() => handleClick(props.value)} > Vehical {props.value}
      <span className="svgIcon float-end" onClick={(e) => props.remove(e)}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M9 0.53125C4.18359 0.53125 0.28125 4.43359 0.28125 9.25C0.28125 14.0664 4.18359 17.9688 9 17.9688C13.8164 17.9688 17.7188 14.0664 17.7188 9.25C17.7188 4.43359 13.8164 0.53125 9 0.53125ZM13.2539 11.5703C13.4297 11.7109 13.4297 11.9922 13.2539 12.168L11.8828 13.5391C11.707 13.7148 11.4258 13.7148 11.2852 13.5391L9 11.2188L6.67969 13.5391C6.53906 13.7148 6.25781 13.7148 6.08203 13.5391L4.71094 12.1328C4.53516 11.9922 4.53516 11.7109 4.71094 11.5352L7.03125 9.25L4.71094 6.96484C4.53516 6.82422 4.53516 6.54297 4.71094 6.36719L6.11719 4.99609C6.25781 4.82031 6.53906 4.82031 6.71484 4.99609L9 7.28125L11.2852 4.99609C11.4258 4.82031 11.707 4.82031 11.8828 4.99609L13.2539 6.36719C13.4297 6.54297 13.4297 6.82422 13.2539 6.96484L10.9688 9.25L13.2539 11.5703Z" fill="#424242" />
        </svg>
      </span>
    </li>

  )
};

const AdminSideNav = (props) => {
  const [count, setCount] = useState(1);


  return (
    <nav className="accordion arrows">
      <h3> Vehical Viewer </h3>
      <button onClick={() => {count < 4 ? setCount(count + 1) : alert("Only four record in dataset.Can't add more")}}> + Add vehical</button>
      <ul>
        {[...Array(count)].map((data, i) => <AddedElement value={i + 1} remove={remove} history={props.history} />)}
      </ul>
    </nav>
  );
};

export default AdminSideNav;
